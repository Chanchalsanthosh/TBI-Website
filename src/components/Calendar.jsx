import React, { useState, useEffect } from 'react';
import { StaticDatePicker, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { firestore } from './firebase';
import { getDocs, collection, query } from '@firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Badge from '@mui/material/Badge';
import dayjs from 'dayjs';
import CheckIcon from '@mui/icons-material/Check';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [highlightedDays, setHighlightedDays] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(firestore, "Events"));
        const querySnapshot = await getDocs(q);

        const dates = [];
        querySnapshot.forEach((doc) => {
          const eventData = doc.data();
          const timestamp = eventData.Date.toDate();
          dates.push(dayjs(timestamp).format('YYYY-MM-DD'));
        });

        setHighlightedDays(dates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const handleDateChange = async (date) => {
    setSelectedDate(date);

    try {
      const q = query(collection(firestore, "Events"));
      const querySnapshot = await getDocs(q);

      const events = [];
      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        const timestamp = eventData.Date.toDate();

        const eventDateString = dayjs(timestamp).format('YYYY-MM-DD');
        const selectedDateString = date.format('YYYY-MM-DD');

        if (eventDateString === selectedDateString) {
          events.push(eventData);
        }
      });

      setSelectedEvent(events);
    } catch (error) {
      console.error(error);
    }
  };

  const renderDay = (day, _value, DayComponentProps) => {
    const formattedDay = day.format('YYYY-MM-DD');
    const isSelected = highlightedDays.includes(formattedDay);
    console.log(`Rendering day: ${formattedDay}, isSelected: ${isSelected}`);
    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={isSelected ? <CheckIcon color="primary" /> : undefined}
      >
        <PickersDay {...DayComponentProps} day={day} />
      </Badge>
    );
  };

  return (
    <>
      <div id="cal_event">
        <div className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              orientation="portrait"
              value={selectedDate}
              onChange={handleDateChange}
              renderDay={renderDay}
            />
          </LocalizationProvider>
        </div>
        <div className='event-list'>
          {selectedEvent.length === 0 ? (
            <div className='noevents'><p>No events</p></div>
          ) : (
            selectedEvent.map((event, index) => (
              <div className='ViewEvent' key={index}>
                {event.imglink && <img src={event.imglink} alt="Event" />}
                <h1>Event Name: {event.Name}</h1>
                <div className='under'>
                  <FontAwesomeIcon icon={faLocationDot} className='venue' /><h5>Venue:</h5> <p>{event.Venue}</p>
                </div>
                <div className='underS'>
                  <FontAwesomeIcon icon={faCalendarDays} className='dt' /><h5>Date & Time:</h5>
                  <p>{event.Date.toDate().toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Calendar;
