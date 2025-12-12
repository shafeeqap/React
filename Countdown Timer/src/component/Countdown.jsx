import React, { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [pause, setPause] = useState(false);

  const [totalSeconds, setTotalSeconds] = useState(0);
  const intervalRef = useRef(null);

  console.log(totalSeconds);

  const startHandler = () => {
    if (intervalRef.current) return;

    // Convert to total seconds once
    if (totalSeconds === 0) {
      if (isNaN(hours) || hours < 0 || hours > 24) {
        return alert("Hours must be between 0 and 24");
      }

      if (isNaN(minutes) || minutes < 0 || minutes > 59) {
        return alert("Minutes must be between 0 and 59");
      }

      if (isNaN(seconds) || seconds < 0 || seconds > 59) {
        return alert("Seconds must be between 0 and 59");
      }

      const total =
        Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
      setTotalSeconds(total);
    }

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          // Stop when everything reaches 0
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setPause(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setPause(true);
  };

  const pauseHandler = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setPause(false);
  };

  const resetHandler = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    setPause(false);
    setHours("");
    setMinutes("");
    setSeconds("");
    setTotalSeconds(0);
  };

  // Convert total seconds → HH:MM:SS
  useEffect(() => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    setHours(h);
    setMinutes(m);
    setSeconds(s);
  }, [totalSeconds]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      {/* Display */}
      <div className="text-center text-3xl font-semibold mb-5">
        {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")} :{" "}
        {String(seconds).padStart(2, "0")}
      </div>

      <div className="container">
        {/* Header */}
        <div className="py-2 bg-gray-200">
          <h2 className="text-2xl font-semibold">Countdown Timer</h2>
        </div>

        {/* Display timer & input field*/}
        <div className="flex flex-col justify-between sm:px-5 py-3">
          <div className="flex justify-between py-5">
            <div className="text-start">
              <label htmlFor="">Hours</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="HH"
                className="w-14 sm:w-20 block bg-gray-100 p-1.5"
              />
            </div>
            <div className="text-start">
              <label htmlFor="">Minutes</label>
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="MM"
                className="w-14 sm:w-20 block bg-gray-100 p-1.5"
              />
            </div>
            <div className="text-start">
              <label htmlFor="">Seconds</label>
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                placeholder="SS"
                className="w-14 sm:w-20 block bg-gray-100 p-1.5"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-2 text-white">
            <button
              type="button"
              onClick={pause ? pauseHandler : startHandler}
              className="bg-green-600 w-1/2 py-1 cursor-pointer hover:bg-green-700"
            >
              {pause ? "Pause" : "Start"}
            </button>
            <button
              type="button"
              onClick={resetHandler}
              className="bg-red-600 w-1/2 py-1 cursor-pointer hover:bg-red-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
