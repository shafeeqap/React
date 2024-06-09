import React, { useState } from "react";
import { toast } from 'react-toastify';

function ToDoList() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            if (editIndex !== null) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex].text = newTask;
                setTask(updatedTasks);
                setEditIndex(null);
                toast.success('Task edited successfully');
            } else {
                if (!tasks.some(task => task.text === newTask)) {
                    setTask([...tasks, { text: newTask, completed: false }]);
                    toast.success('Task added successfully');
                } else {
                    toast.warn("Task already exists. Please enter a different task.");
                }
            }
            setNewTask("");
        } else {
            toast.error('Please enter a valid task!');
        }
    };

    const editTask = (index) => {
        setNewTask(tasks[index].text);
        setEditIndex(index);
    };

    const deleteTask = (index) => {
        if (editIndex === null) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTask(updatedTasks);
            toast.error('Your task is deleted from the list.');
        } else if (editIndex === index) {
            toast.error('You cannot delete the task you are currently editing.');
        } else {
            toast.error('Cannot delete task while editing another task.');
        }
    };

    const moveUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    };

    const moveDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    };

    const handleCompleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTask(updatedTasks);
    };

    return (
        <div className="to-do-list">
            <h1>Todo List</h1>

            <div className="content">
                <div style={{ alignItems: "center" }}>
                    <input
                        className="task-input"
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Enter a task..."
                        value={newTask}
                    />
                    <button className="add-button" onClick={addTask}>
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>

                <ol>
                    {tasks.map((task, index) => (
                        <li key={index} className={task.completed ? "completed" : ""}>
                            <input type="checkbox" onChange={() => handleCompleteTask(index)} checked={task.completed}/>
                            <span className="task-text">{task.text}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)} disabled={task.completed}>🗑️</button>
                            <button className="moveUp" onClick={() => moveUp(index)} disabled={task.completed}>⬆️</button>
                            <button className="moveDown" onClick={() => moveDown(index)} disabled={task.completed}>⬇️</button>
                            <button className="edit-button" onClick={() => editTask(index)} disabled={task.completed}>✏️</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
