import React from 'react'
import Button from '@mui/material/Button';
import {useRouter} from 'next/router';
import Link from 'next/link';
const Test = () => {

  const quer=useRouter()
  return (
    <div>
        
<div className='container-fluid '>
    <div className='row justify-content-center   ' >
      <div className='col-2  align-content-end h-25 bac  bg-body'>
      s  dsas
      
      </div>

      <div className='col-2 '>
        dssa
      </div>

      <div className='col-2 '>

      <Button variant="contained" onClick={()=>{
      quer.push({pathname:"http://localhost:3000/Trial",query:{name:"lokedssh"}},"http://localhost:3000/Trial")

      }}> Outlined</Button>
      </div>

    </div>

</div>


    </div>
  )
}

export default Test