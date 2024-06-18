import React,{ useEffect, useState } from 'react'
import {firestore} from './firebase';
import {getDocs,collection} from '@firebase/firestore';
import '../styles/extendedannouncements.scss'
function ExtendedAnnouncements(){
  let [Anns,setAnns]=useState([]);
  useEffect(() => {
        const fetchData = async () => {
            const ref = collection(firestore, 'Announcements');
            try {
                const querySnapshot = await getDocs(ref);
                const newData = querySnapshot.docs.map(doc => doc.data()
                );
                const sortedData = newData.sort((a, b) => b.id - a.id);
                setAnns(sortedData);
                console.log(Anns);
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchData();
    }, [Anns]); // empty dependency array - run the effect only once on component mount, if necessary hooks will be added late
  
  return (
    <div id='ExtendedAnnouncements'><h1>ANNOUNCEMENTS</h1>
    {Anns.map((ann, index) => (
        <div className='ViewAnnouncement' key={index}>
            <div className='anns'>
                <img className='img' src='announce.avif' alt='image'></img> <h1 className='title'> {ann.Title}</h1>
                <p className='body'>{ann.body}</p>
                <div className='link'>{ann.filelink && <p><a href={ann.filelink}>{ann.Title}</a></p>}</div>
                </div>
            </div>
            )
        )
    }
     
    </div> 
  )
}

export default ExtendedAnnouncements;