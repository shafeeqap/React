import React, {useState, useEffect} from "react";


function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(() =>{
            setTime(new Date())
        },1000);

        return ()=> clearInterval(interval);

    },[]);

function formatTime(){
    let hours = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const meridiam = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12

    return `${padZero(hours)}:${padZero(minute)}:${padZero(second)}:${padZero(meridiam)}`;
}
// pading '0'
function padZero(number){
    return (number < 10 ? "0" : "") + number
}


    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>

            </div>
        </div>
    );

}

export default DigitalClock