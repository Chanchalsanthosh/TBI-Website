import React, { useState, useEffect } from 'react';
import { firestore } from "./firebase";
import { getDocs, collection } from '@firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const SearchEvent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchEvents, setsearchEvents] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const ref = collection(firestore, 'Events');
      
      try {
        const querySnapshot = await getDocs(ref);
        
        const Events = [];
        querySnapshot.forEach((doc) => {
          const eventData = doc.data();
          
          
            Events.push({ ...eventData, id: doc.id });
          
           ;
          
        });
        setsearchEvents(Events);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search Events" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            searchEvents
              .filter((val) => {
                if(searchTerm === ""){
                  return ;
                }else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.imglink} alt="Event" />
                      <h3>{val.Name}</h3>
                      <div className='under'>
          <FontAwesomeIcon icon={faLocationDot} className='venue' /><h5>Venue:</h5> <p>{val.Venue}</p>
          </div>
        <div className='underS'><FontAwesomeIcon icon={faCalendarDays} className='dt' /><h5>Date & Time:</h5><p>{val.Date.toDate().toLocaleString()}</p></div> 
        <p>Description: {val.desc}</p>
                      <h4>{val.genre}</h4>
                      
                      
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  );
};

export default SearchEvent;