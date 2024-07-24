import React, {useState} from "react";


function MyCompontent(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(prevCount => prevCount + 1)
    }
    const reset = () =>{
        setCount(prevCount => prevCount  = 0)
    }
    const decrement = () =>{
        setCount(prevCount => prevCount - 1)
    }

    return(<div className="button-container">
        <p className="text">You clicked {count} times</p>
        <button className="button" onClick={increment}>+</button>
        <button className="button" onClick={reset}>#</button>
        <button className="button" onClick={decrement}>-</button>
    </div>);

}

export default MyCompontent