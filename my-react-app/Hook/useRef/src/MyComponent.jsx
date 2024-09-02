
/*
    useRef is a hook that allows you to create a mutable reference that persists across renders. 
    It's commonly used for accessing and manipulating DOM elements directly, as well as for storing any 
    mutable value that you want to persist without causing a re-render when it changes.
*/


import React, {useState, useEffect, useRef} from "react";



function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    // console.log(inputRef);

    useEffect(() =>{
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        // ref.current++
        // console.log(ref.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "green";
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "green"
        inputRef3.current.style.backgroundColor = ""

    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "green"

    }

    return (
        <div>
            <button onClick={handleClick1} >Click me 1 </button><br />
            <input ref={inputRef1} /><br />

            <button onClick={handleClick2} >Click me 2 </button><br />
            <input ref={inputRef2} /><br />

            <button onClick={handleClick3} >Click me 3 </button><br />
            <input ref={inputRef3} />
        </div>
    );
}

export default MyComponent