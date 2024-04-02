import React, { useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Timestamp } from 'firebase/firestore';
import { firestore } from './firebase';
import { getDocs, collection, query, where } from '@firebase/firestore';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState([]);

  const handleDateChange = async (date) => {
    // Log the selected date (optional)
    console.log("Selected Date:", date);

    // Set the selected date in state
    setSelectedDate(date);

    try {
      // Construct the Firestore query to find events on or before the selected date
      const q = query(collection(firestore, "Events"));
      const querySnapshot = await getDocs(q);

      // Iterate over the query snapshot to find matching events
      const events = [];
      querySnapshot.forEach((doc) => {
        const eventData = doc.data(); // Retrieve data from the document snapshot
        const timestamp = eventData.Date.toDate();
        
        // Extract year, month, and day components from the timestamp
        const eventYear = timestamp.getFullYear();
        const eventMonth = timestamp.getMonth();
        const eventDay = timestamp.getDate();
        
        // Check if the event date matches the selected date components
        if (eventYear === date.$y && eventMonth === (date.$M) && eventDay === date.$D) {
          events.push(eventData); // Push the matching event data to the events array
        }
      });
      
      setSelectedEvent(events); // Update the state with the matching events
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="portrait"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </div>
      <div>
  <h1>Event of the day</h1>
  {selectedEvent.length === 0 ? (
    <p>No events</p>
  ) : (
    selectedEvent.map((event, index) => (
      <div className='ViewEvent' key={index}>
        <h1>{event.Name}</h1>
        <p>{event.Venue}</p>
        <p>{event.Date.toDate().toLocaleString()}</p> {/* Format the date */}
        {event.imglink && <img src={event.imglink} alt="Event" />}
      </div>
    ))
  )}
</div>

    </>
  );
}

export default Calendar;

