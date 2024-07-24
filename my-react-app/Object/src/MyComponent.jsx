

// Update Objects in state



import React, {useState} from "react";

function MyComponent(){

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustag"});

    const handleYearChange = (event) =>{
        setCar(car =>({...car, year:event.target.value}))
    }
    const handleMakeChange = (event) =>{
        setCar(car =>({...car, make:event.target.value}))
    }
    const handleModelChage = (event) =>{
        setCar(car =>({...car, model:event.target.value}))
    }

    return(<div>
        <p>Your favorits car is:{car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}></input><br />
        <input type="text" value={car.make} onChange={handleMakeChange}></input><br />
        <input type="text" value={car.model} onChange={handleModelChage}></input><br />
    </div>);
}

export default MyComponent