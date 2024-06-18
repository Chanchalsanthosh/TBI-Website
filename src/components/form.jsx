
import React,{useState} from 'react';
import "../styles/form.scss";
import {useRef} from 'react';
import {firestore} from "./firebase";
import {addDoc,collection} from "@firebase/firestore";
import { storage } from './storageConfig';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
    const [url, setUrl] = useState('');
    const [imageUpload, setImageUpload] = useState(null);

    const uploadImage = () => {
        if (!imageUpload) {
            alert('Please select a file.');
            return;
        }

        const uniqueFilename = uuidv4() + '-' + imageUpload.name;
        const imageRef = storageRef(storage, `IncubationProposals/${uniqueFilename}`);

        uploadBytes(imageRef, imageUpload)
            .then(() => {
                alert('Image uploaded successfully');
                getDownloadURL(imageRef)
                    .then((downloadUrl) => {
                        setUrl(downloadUrl); // Set URL here
                    })
                    .catch((error) => {
                        console.error('Error getting download URL:', error);
                    });
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
                alert('Error uploading image. Please try again.');
            })
            .finally(() => {
                setImageUpload(null); // Reset the state after upload
            });
            console.log(url);
    };

    const nameRef=useRef();
    const mailRef=useRef();
    const phoneRef=useRef();
    const descRef=useRef();
    const ref=collection(firestore,"Incubatees");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        let data={
            name:nameRef.current.value,
            email:mailRef.current.value,
            phone_number: phoneRef.current.value,
            abstract:descRef.current.value,
            filelink:url,
        }
        try{
            addDoc(ref,data);

        }
        catch(e){
            console.log(e);
            alert("Application Submission failed");

        }
        alert("Application Submitted");
    };
  return (
    <form>
    <div id="form">
        <div className='form-control'>
            <div className='lefts'>
            <h4>Name</h4>
            <input type="text"  className="my-input" ref={nameRef}/>
            <h4>Email</h4>
            <input type="text"  className="my-input" ref={mailRef} />
            <h4>Phone Number</h4>
            <input type="text"  className="my-input" ref={phoneRef} />
            </div>
            <div className='desc'>
             <h4>Abstract</h4>
              <textarea className='text'cols='30' row='20' placeholder='Describe your idea in less than 100 words' ref={descRef}></textarea>
              <div className='btnclass'>
              <button onClick={handleSubmit}>SUBMIT</button>
              </div>
              </div>
              
              </div>
              
    </div>
    </form>
  )
}

export default Form;
