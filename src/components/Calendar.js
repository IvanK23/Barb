import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

const divStyle ={
   maxWidth: "700px",
   margin: "0 auto",
   marginTop: "30px",
   marginBottom: "50px",
}

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  return (
   <div style={divStyle}>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
         <StaticDatePicker
           orientation="landscape"
           openTo="day"
           value={value}
           shouldDisableDate={isWeekend}
           onChange={(newValue) => {
             setValue(newValue);
           }}
           renderInput={(params) => <TextField {...params} />}
         />
       </LocalizationProvider>
       </div>
  );
}