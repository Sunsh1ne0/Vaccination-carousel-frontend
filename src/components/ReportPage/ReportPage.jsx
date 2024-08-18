import React from 'react';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import ReportBox from '../ReportBox/ReportBox';


export const ReportPage = () => {
    let [value, setValue] = useState(dayjs());


    return <div className="boxContent">
        <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DateCalendar value={value} onChange={(newValue) => {if (dayjs(newValue).format('YYYY-MM-DD') !== dayjs(value).format('YYYY-MM-DD')) 
                {
                    setValue(newValue);
                    console.log('Selected date:', dayjs(newValue).format('YYYY-MM-DD'));
                }
                }} />
        </LocalizationProvider>
        <ReportBox reportDate={value}/>
    </div>;
}