import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Root'
import Third from './Third'
const Second = () => {
  return (
<Provider store={store}>
  <Third></Third>
</Provider>

  )
}

export default Second