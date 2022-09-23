import React, { useState } from 'react'
import o from '../styles/custom.module.css'
import Button from '@mui/material/Button';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Data from './Data';

export const getStaticProps=async()=>{
  const getobject=await axios.get("http://localhost:7896/data")
  const o=getobject.data

  return {props:{o}}

}


const First = ({o}) => {
  
  
  const [temparray,setarray]=useState(o)
  
  const [value, setValue] = React.useState(dayjs('0000-00-00T00:00:00'));
  console.log(temparray);



  const submit=(e)=>{
e.preventDefault()
}


  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(value);
  };
  
  return (
<div>

    <div className='Inputcontent ne'  >
<Box
      component="form"
      sx={{ml:50      }}
      noValidate
      autoComplete="off"
    >

     <form onSubmit={submit}>
     <TextField id="standard-basic" label="TASK NAME" variant="standard"  sx={{mr:5}} />
      <TextField id="standard-basic" label="ASSIGNED BY" variant="standard" sx={{mr:5}} />
      


     

     <button type='submit'>sss</button>
    
    

        
     </form>

    
    </Box>
        
 <Data ></Data>
 

    </div>
    </div> )
}

export default First