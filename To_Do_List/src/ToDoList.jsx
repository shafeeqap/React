import React, {useState} from "react"



function ToDoList(){

    const [tasks, setTask] = useState(["Breakfast", "Take a shower", "Go to office"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) =>{
        setNewTask(event.target.value);
    };


    const addTask = () =>{
        if(newTask.trim() !==""){
            setTask(tasks => [...tasks, newTask]);
            setNewTask("")
        }
        
    };

    const deleteTask = (index) =>{
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTask(updatedTask)
    };

    const moveUp = (index) =>{
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]]
            setTask(updatedTask)
        }
    };

    const moveDown = (index) =>{
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]]
            setTask(updatedTask)
        }
    };


    return(
    <div className="to-do-list">
        <h1>Todo List</h1>

        <div className="content">

        <div style={{alignItems:"center"}}>
            <input type="text" onChange={handleInputChange} placeholder="Enter a task..." value={newTask}></input>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
    
        <ol>
            {tasks.map((task, index) =>
                <li key={index} >
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>🗑️</button>
                    <button className="moveUp" onClick={() => moveUp(index)}>⬆️</button>
                    <button className="moveDown" onClick={() => moveDown(index)}>⬇️</button>
                </li>
            )}
        </ol>
        
        </div>
    </div>);

}

export default ToDoList
