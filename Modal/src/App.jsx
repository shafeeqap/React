import React, {useState} from 'react'
import Modal from './Components/Modal'

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <button onClick={() =>setShow(true)}>Show Model</button>
      <Modal onClose={() =>setShow(false)} show={show}/>
    </>
  )
}

export default App