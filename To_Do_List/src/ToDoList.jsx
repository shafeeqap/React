import React, {useState} from "react"
import { toast } from 'react-toastify';


function ToDoList(){

    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (event) =>{
        setNewTask(event.target.value);
    };


    const addTask = () =>{
        if(newTask.trim() !==""){
            if(!tasks.includes(newTask)){
                if(editIndex !==null){
                    const updatedTasks = [...tasks];
                    updatedTasks[editIndex] = newTask;
                    setTask(updatedTasks);
                    setEditIndex(null)
                    toast.success('Task edit successfully')
                }else{
                    setTask([...tasks, newTask]);
                    toast.success('Task added successfully')
                }
            }else{
                toast.warn("Task already exists. Please enter a different task.");
            }
            setNewTask("")
        }else{
            toast.error('Please enter a vlid task!')
        }
    };

    const editTask = (index) =>{
        setNewTask(tasks[index]);
        setEditIndex(index);
    }

    const deleteTask = (index) =>{
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTask(updatedTask)
        toast.error('Your task is deleted from the list.')
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
            <input className="task-input" type="text" onChange={handleInputChange} placeholder="Enter a task..." value={newTask}></input>
            <button className="add-button" onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
        </div>
    
        <ol>
            {tasks.map((task, index) =>
                <li key={index} >
                    <span className="task-text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>🗑️</button>
                    <button className="moveUp" onClick={() => moveUp(index)}>⬆️</button>
                    <button className="moveDown" onClick={() => moveDown(index)}>⬇️</button>
                    <button className="edit-button" onClick={() =>editTask(index)}>✏️</button>
                </li>
            )}
        </ol>
        
        </div>
    </div>);

}

export default ToDoList
