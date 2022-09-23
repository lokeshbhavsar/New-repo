import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios"
import Button from '@mui/material/Button';
import Data from "./Data";

{
  /* all imports above-function below*/
}


export const getStaticProps=async()=>{
    const GetObject=await axios.get("http://localhost:8895/data")
    const getdata=GetObject.data

    return {props:{getdata}}
}


const Task = ({getdata}) => {
  {/*js codes */ }
  const[array,setarray]=useState({getdata})
  const[naam,setnaam]=useState("")
  const[activity,setactivity]=useState("")
  const[date,setdate]=useState("")
  const[time,settime]=useState("")
  const[flag,setflag]=useState(0)
  
  

  const Postobject=async(object)=>{
    await axios.post("http://localhost:8895/data",object)
  }


  const Submitted = (e) => {
    e.preventDefault();


   const newobject={id:(array.getdata.length)+1,ActivityName :activity,DateTime:date+" "+time,Naam:naam}

   Postobject(newobject)
   array.getdata.push(newobject)
   setflag(flag+1)
  };




  useEffect(()=>{
console.log(array.getdata);
  },[flag])


  const donedelete=(ind)=>{
    
    console.log('delete called',ind);
    array.getdata.splice(ind,1)
    setflag(flag+1)
  }

  {
    /*DOM BELOW */
  }
  return (
    <div>
      {/*Main_top */}
      <div className="Top_wallpaper">
        <div className="Input_Conatiner">
        

          <form onSubmit={Submitted}>
          <TextField id="standard-basic" label="NAME" variant="standard"sx={{margin:2,borderRadius:1,backgroundColor:"yellow"}} onChange={(e)=>{setnaam(e.target.value)}} />
          <TextField id="standard-basic" label="ACTIVITY NAME" variant="standard"sx={{margin:2,borderRadius:1,backgroundColor:"yellow"}} onChange={(e)=>{setactivity(e.target.value)}} />
         <input type='date' className="date_time_set" onChange={(e)=>{setdate(e.target.value)}}></input>
         <input type='time' className="date_time_set" onChange={(e)=>{settime(e.target.value)}}></input>
          <br></br>
            
            <Button type="submit" variant="contained" color="success" className="Submit_Button">
       ADD
      </Button>
          </form>
          
        </div>

       {
        array.getdata.map((ele,i,ar)=>{
            return <Data  key={i} ind={i}  calldelete={donedelete} id={ele.id} nam={ele.Naam} activity={ele.ActivityName} DT={ele.DateTime}></Data>
        })
       }

        
        


        
      </div>
      
    </div>
  );
};

export default Task;
