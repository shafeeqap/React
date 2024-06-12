import React, { useEffect, useState } from 'react'

export default function MyComponent() {

    const [count, setCount] = useState(0)
    const [ incrementCount, setincrementCount] = useState(false)
    const [ decrementCount, setDecrementCunt ] =useState(false)


    const handleIncrement =()=>{
        setCount(prevCount => prevCount + 1)
        setincrementCount(true)
        setDecrementCunt(()=> setCount(0))

    }

    const handleDecrement = ()=>{
        setCount(prevCount => prevCount - 1)
        setincrementCount(()=> setCount(0))
        setDecrementCunt(true)
    }

    useEffect(()=>{
        let interval;
        if(incrementCount){
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000);
        }


        return ()=>{
            clearInterval(interval)
        }
    }, [incrementCount])

    useEffect(()=>{
        let interval;
        if(decrementCount){
           interval = setInterval(() => {
                setCount(prevCount => prevCount - 1)
            }, 1000);
        }

        return ()=>{
            clearInterval(interval)
        }
    },[decrementCount])


  return (
    <div style={{textAlign:'center', marginTop:'100px'} }>

        <button onClick={handleIncrement}>Increment</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
