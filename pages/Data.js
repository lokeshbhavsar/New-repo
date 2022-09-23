import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
const Data = (props) => {

 const Delete=async()=>{
  console.log(props.id);
  const newid=props.id
  await axios.delete(`http://localhost:8895/data/${newid}`)
   props.calldelete(props.ind)
 }

  return (
    <div className="show">
    
    <div className='mc'>
    <p>{props.nam}</p>
    <p>{props.activity}</p>
    <p>{props.DT}</p>
    <p>{props.id}</p>
    <p>{props.ind}</p>

    <IconButton aria-label="delete" size="large" onClick={Delete}>
        <DeleteIcon  />
      </IconButton>

    </div>

   
</div>
  )
}

export default Data