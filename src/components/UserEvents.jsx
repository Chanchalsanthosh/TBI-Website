import React, { useState, useEffect } from 'react';
import { firestore } from "./firebase";
import { getDocs, collection } from '@firebase/firestore';
import Slider from "react-slick";
import Slider2 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';




function UserEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
 
  //const timestamp = eventData.Date.toDate();


  useEffect(() => {
    const fetchData = async () => {
      const ref = collection(firestore, 'Events');
      const currentDate = new Date();
      try {
        const querySnapshot = await getDocs(ref);
        const upEvents = [];
        const pasEvents = [];
        querySnapshot.forEach((doc) => {
          const eventData = doc.data();
          const timestamp = eventData.Date.toDate();
          if (timestamp < currentDate) {
            pasEvents.push({ ...eventData, id: doc.id });
          } else {
            upEvents.push({ ...eventData, id: doc.id });
          }
        });
        setPastEvents(pasEvents);
        setUpcomingEvents(upEvents);
       setSelectedEvent(upEvents[0]||pasEvents[0]);
        //setSelectedEvent1(pasEvents[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay:true,
    speed:2000,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  

  /*const handleClick = (id) => {
    (upcomingEvents.map((eve)=>{
      if(eve.id== id){
      setSelectedEvent(doc);
      }
    })
  };*/
  const handleClick = (id) => {
    upcomingEvents.map((eve) => {
      if (eve.id === id) {
        setSelectedEvent(eve);
      }
    });
  };
  const handleClick2= (id) => {
    pastEvents.map((eve) => {
      if (eve.id === id) {
        setSelectedEvent(eve);
      }
    });
  };
  

  return (

    <>
    <div id="event1">
      <div className='whole_event'>
      <div className='ExtendedEventsUpcoming'>
        <h1>UPCOMING EVENTS</h1>
        <div className="slider-container2">
      <Slider {...settings}>
        {upcomingEvents.map((eve) => (
          <div className='ViewEvent' key={eve.id} onClick={() => handleClick(eve.id)} >
            <div className='ViewEvent3'>
            <div className='side'>
           {eve.imglink && <img src={eve.imglink} alt="Event" />}
           </div>
           <div className='rights'>
           <h1>Event Name: {eve.Name}</h1>
        <div className='under'>
          <FontAwesomeIcon icon={faLocationDot} className='venue' /><h5>Venue:</h5> <p>{eve.Venue}</p>
          </div>
        <div className='underS'><FontAwesomeIcon icon={faCalendarDays} className='dt' /><h5>Date & Time:</h5><p>{eve.Date.toDate().toLocaleString()}</p></div> 
        
           </div>
            
          </div>
          </div>
        ))}
        </Slider>
        </div>
      </div>

      <div className='ExtendedEventsUpcoming'>
        <h1>PAST EVENTS</h1>
        <div className="slider-container2">
      <Slider2 {...settings}>
        {pastEvents.map((eve) => (
          <div className='ViewEvent' key={eve.id} onClick={() => handleClick2(eve.id)} >
            <div className='ViewEvent3'>
            <div className='side'>
            {eve.imglink && <img src={eve.imglink} alt="Event"/>}
            </div>

            <div className='rights'>
           <h1>Event Name: {eve.Name}</h1>
        <div className='under'>
          <FontAwesomeIcon icon={faLocationDot} className='venue' /><h5>Venue:</h5> <p>{eve.Venue}</p>
          </div>
        <div className='underS'><FontAwesomeIcon icon={faCalendarDays} className='dt' /><h5>Date & Time:</h5><p>{eve.Date.toDate().toLocaleString()}</p></div> 
        
          </div>
            
          </div>
          </div>
        ))}
         </Slider2>
        </div>
      </div>
      <div>
       </div> 
       </div>
       
       <div className='event-Left'>
       <div className="event-detailsupcoming">
        {selectedEvent && (
          
            
            <div className='DetailsTitle'>
            <div className='side'>
              {selectedEvent.imglink && <img src={selectedEvent.imglink} alt="Event" />}
              </div>
              <h1>Event Name: {selectedEvent.Name}</h1>
              <div className='undertop'>
              <div className='under'>
          <FontAwesomeIcon icon={faLocationDot} className='venue' /><h5>Venue:</h5> <p>{selectedEvent.Venue}</p>
          </div>
        <div className='underS'><FontAwesomeIcon icon={faCalendarDays} className='dt' /><h5>Date & Time:</h5><p>{selectedEvent.Date.toDate().toLocaleString()}</p></div> 
        </div>
              
              <p>Description: {selectedEvent.desc}</p>
              {selectedEvent.Reglink&&<h3><a href={selectedEvent.Reglink}>Click here to register</a></h3>}
            </div>
          
        )}
      </div>

      
      </div>

       </div>
       
    
    </>
  );
}
export default UserEvents; 

