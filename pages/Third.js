import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Inc=()=>{
  return {type:"Inc",val:3}
}

export const Dec=()=>{
  return {type:"Dec",val:3}
}

const Third = () => {
const o=useSelector((state)=>state.Mainred)
const act=useDispatch()
const I=()=>{
act(Inc())
}

const D=()=>{
act(Dec())
}

  return (
    <div>
      {o}
<br></br>
      <button onClick={I}>Increment</button>
      <br></br>
      <button onClick={D}>Decrement</button>
    </div>
  )
}

export default Third