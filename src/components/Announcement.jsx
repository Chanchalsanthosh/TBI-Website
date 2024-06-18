import React,{ useEffect, useState } from 'react'
import {firestore} from "./firebase"
import {getDocs,collection} from '@firebase/firestore';
import { Link } from "react-router-dom";
function Announcement(){
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
                console.log(Anns);
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchData();
    }, []); // empty dependency array - run the effect only once on component mount, if necessary hooks will be added late
  
  return (
    <div className='news-container'>
     
    <div className='title'>
    <Link to ={"/announce"}> Announcements </Link>
    </div>
    <ul>
     {filteredAnns.map((ann, index) => (
                <li>
                    {ann.Title}
                    {ann.body}
                </li>
            ))}
    </ul>
    </div> 
  )
}

export default Announcement;