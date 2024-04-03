import React, { useState, useEffect } from 'react';
import { firestore } from "./firebase";
import { getDocs, collection } from '@firebase/firestore';

function UserEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

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
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='ExtendedEventsUpcoming'>
        <h1>UPCOMING EVENTS</h1>
        {upcomingEvents.map((eve) => (
          <div className='ViewEvent' key={eve.id}>
            <h1>{eve.Name}</h1>
            <p>{eve.Venue}</p>
            <p>{eve.Date.toDate().toLocaleDateString()}</p>
            {eve.imglink && <img src={eve.imglink} alt="Event" />}
          </div>
        ))}
      </div>
      <div className='ExtendedEventsUpcoming'>
        <h1>PAST EVENTS</h1>
        {pastEvents.map((eve) => (
          <div className='ViewEvent' key={eve.id}>
            <h1>{eve.Name}</h1>
            <p>{eve.Venue}</p>
            <p>{eve.Date.toDate().toLocaleDateString()}</p>
            {eve.imglink && <img src={eve.imglink} alt="Event"/>}
          </div>
        ))}
      </div>
    </>
  );
}

export default UserEvents;
