import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calendar = () => {
  return (
    <div id="calendar">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDatePicker orientation="portrait" />
  </LocalizationProvider>
  </div>
  );
}

export default Calendar;
