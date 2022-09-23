import React from 'react'
import {useRouter} from 'next/router';
const Indexes = () => {
    const quer=useRouter()
    const mainurl=quer.query.Indexed

  return (
    <div>{mainurl}</div>
  )
}

export default Indexes