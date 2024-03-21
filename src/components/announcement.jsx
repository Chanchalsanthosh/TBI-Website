import React,{ useEffect, useState } from 'react'
import {firestore} from 'src/firebase';
import {getDocs,collection} from '@firebase/firestore';
const announcement = () => {
  let [Anns,setAnns]=useState([]);
  const filteredAnns=Anns.filter(Ann=>Ann.id>Anns.length-3);
  useEffect(() => {
        const fetchData = async () => {
            const ref = collection(firestore, 'Announcements');
            try {
                const querySnapshot = await getDocs(ref);
                const newData = querySnapshot.docs.map(doc => doc.data()
                );
                const sortedData = newData.sort((a, b) => b.id - a.id);
                setAnns(sortedData);
                console.log(anns);
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchData();
    }, []); // empty dependency array - run the effect only once on component mount, if necessary hooks will be added late
  
  return (
    <div className='announcement'>
     
    <div className='box1'>
      Announcements
    </div>
     <div className='box2'> 
       <p>
         {filteredAnns.map((ann, index) => (
                <div className='preview Blog' key={index}>
                    <p><h1>{ann.Title}</h1></p>
                </div>
            ))}
       </p>
     </div>
    </div> 
  )
}

export default announcement
