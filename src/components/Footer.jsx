import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {useRef} from 'react';
import {firestore} from './firebase';
import {addDoc,collection} from "@firebase/firestore"

function Footer() {
    const nameRef=useRef();
    const mailRef=useRef();
    const ref= collection(firestore,"Subscribers");
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let data={
            name:nameRef.current.value,
            email:mailRef.current.value,
        }
        try{
            addDoc(ref,data);

        }
        catch(e){
            console.log(e);

        }
        alert("Subscription added successfully");
    };
  return (
    <div id="footer">
      <div className="left">
        <h1>Contact Us</h1>
        <FontAwesomeIcon icon={faPhone} className='phone'/> <p className='num'>98763547236</p>
        <FontAwesomeIcon icon={faEnvelope} className='email'/><p className='em'>tbi@gectcr.ac.in</p>
        <h3>follow us</h3>
        <a href='https://www.linkedin.com/school/gectcr/?originalSubdomain=in' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className='link'/>
        </a>
        <a href='https://www.facebook.com/gectthrissur/' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className='fb'/>
        </a>
        <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fgectcr' target="_blank" rel="noopener noreferrer">
        <img src='./img2.jpg' alt="" className='image'></img>
        </a>
        <img src='./logo.jpg' alt="" className='image1'></img>
      </div>

      <div className='right'>
      <div className='l'>
      <img src='./img1.jpg' alt=""className='image2' ></img>
      </div>
      <div className='r'>
        <div className='news'>
          <h2>Subscribe To Our</h2>
          <p className='ptag'>Newsletter!</p>
          <p className='ptag1'>Be the first to get exclusive updates of TBI and it's activities </p>
          <input type="text" placeholder="Enter your email address" className="my-input" ref={mailRef}/>
          <input type="text" placeholder="Enter your name" className="my-input2"ref={nameRef} />
          <button className='btn' type='submit' onClick={handleSubmit}>Subscribe Now</button>
        </div>
        
        <ul>
                <li>
                    Sitemap
                </li>
                
                <li>
                    Terms of Use
                </li>

                <li>
                    Privacy Policy
                </li>
            </ul>


      </div>

      </div>
</div>
  )
}
export default Footer;
