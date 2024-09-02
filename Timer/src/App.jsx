import React from 'react'
import { useState, useEffect } from 'react';


const App = () => {
  const [timer, setTimer] = useState(0);
  const expireTime = 300000; // valid for 5 minutes
  
  useEffect(() =>{
    const interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000)

    setTimeout(() =>{
      clearInterval(interval)
    }, 6000)

    return () => clearInterval(interval);

  }, [])


  return (
    <div>{timer}</div>
  )
}

export default App