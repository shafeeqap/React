import React, {useState} from "react";


function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banan"]);



    const handleAddFood = ()=>{
        const newFoods = document.getElementById("foodInput").value.trim();
        if(newFoods !== ""){
            setFoods(foods => [...foods, newFoods]);
            document.getElementById("foodInput").value = "";

            
        }
    }

    const handleRemoveFood = (index)=>{
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
        <div>
            <h1>List of foods</h1>

            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add food</button>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={()=> handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default MyComponent