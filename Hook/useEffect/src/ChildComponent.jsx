import React, {useState, useEffect} from "react";

function ChildComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);



    useEffect(() =>{
        window.addEventListener("resize", handleResize);
        console.log("EVENT LITENER ADDED");


        // Cleanup Function
        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LITENER REMOVED");

        }   

    },[]);

    function handleResize (){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window width: {width}px</p>
        <p>Window Height: {height}px </p>
        </>
    );

}

export default ChildComponent