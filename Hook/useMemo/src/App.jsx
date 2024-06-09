import React, { useMemo, useState } from 'react'

export default function App() {

  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const handleCountOne = ()=>{
    setCountOne(countOne + 1)
  }
  const handleCountTwo = ()=>{
    setCountTwo(countTwo + 1)
  }
  const isEven = useMemo(()=>{
    let i = 0;
    while(i < 2000000000){
      i++
    }
    return countOne % 2 === 0;
  },[countOne])

  
  return (
    <div className='container'>
      <button onClick={handleCountOne}>Count One: {countOne}</button><br />
      <span>{isEven ? "EVEN" : "ODD"}</span><br />
      <button onClick={handleCountTwo}>Count Two: {countTwo}</button>
    </div>
  )
}
