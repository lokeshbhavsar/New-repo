
import styles from '../styles/Home.module.css'

import Third from './Third'




export default function Home() {

const submit=(e)=>{
  e.preventDefault()
  console.log('hey');
}

return (
<form onSubmit={submit}>
<button type='submit'>submit</button>
</form>
  )
}
