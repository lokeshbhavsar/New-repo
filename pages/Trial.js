import React from 'react'
import {useRouter} from 'next/router';
const Trial = () => {
    const o =useRouter()

  return (
    <div>{o.query.name}</div>
  )
}

export default Trial