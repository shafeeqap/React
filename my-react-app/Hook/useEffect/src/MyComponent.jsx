// useEffect(function, [dependencies])

// useEffect(() => {})    Runs after every re-render
// useEffect(() => {}, [])    Runs only on mount
// useEffect(() => {}, [value])    Runs on mount + when value changes



import React, {useState, useEffect} from "react";


function MyComponent(){

    const [count, setCount] = useState(10);
    const [color, setColor] =useState("green")

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`;
    },[count])

    const addCount = ()=>{
        setCount(count => count + 1)
    };

    const SubtractCount = ()=>{
        setCount(count => count - 1)
    }

    const changeColor = ()=>{
        setColor(color => color === "green" ? 'red' : 'green')
    }




    return(<div>
        <p style={{color:color}}>{count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={SubtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
    </div>);
}

export default MyComponent