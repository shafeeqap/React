import React, {useState} from "react";


function MyComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = ()=>{
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel}
        
        setCars(cars => [...cars, newCar])
        setCarYear(new Date().getFullYear()); // update year
        setCarMake(""); 
        setCarModel("");

    };
    const handleRemoveCar = (index)=>{
        setCars(cars.filter((_, i)=> i !== index))
    };
    const handleYearChange = (event)=>{
        setCarYear(event.target.value)
    };
    const handleMakeChange = (event)=>{
        setCarMake(event.target.value)
    };
    const handleModelChange =(event)=>{
        setCarModel(event.target.value)
    };


    return(<div>

        <h1>List of Car Objects</h1>

        <ul>
            {cars.map((car, index)=>
            <li key={index} onClick={()=>handleRemoveCar(index)}>
                {car.year} 
                {car.make} 
                {car.model}
                </li>
            )}
        </ul>

        <input type="number" onChange={handleYearChange} value={carYear}/><br/>
        <input type="text" placeholder="Enter car make..." onChange={handleMakeChange} value={carMake}/><br/>
        <input type="text" placeholder="Enter car model..." onChange={handleModelChange} value={carModel}/><br/>
        <button onClick={handleAddCar}>Add Car</button>
    </div>);

}

export default MyComponent