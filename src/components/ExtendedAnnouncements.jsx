import React,{ useEffect, useState } from 'react'
import {firestore} from './firebase';
import {getDocs,collection} from '@firebase/firestore';
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
    }, []); // empty dependency array - run the effect only once on component mount, if necessary hooks will be added late
  
  return (
    <div className='ExtendedAnnouncements'>
     
    <h1>ANNOUNCEMENTS</h1>
     
     {Anns.map((ann, index) => (
                <div className='ViewAnnouncement' key={index}>
                    <h1>{ann.id}:{ann.Title}</h1>
                    <p>{ann.body}</p>


                </div>
            ))}
     
    </div> 
  )
}

export default ExtendedAnnouncements;