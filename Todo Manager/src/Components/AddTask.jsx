import React, { useState } from "react";
import Input from "./ui/input";
import Button from "./ui/Button";
import ListTask from "./ListTask";

const AddTask = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList") || "[]");
    return storedTodos;
  });
  const [editTask, setEditTask] = useState(null);
  const [isCompleted, setIsCompleted] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      return alert("Please enter your task!");
    }

    if (editTask) {
      const updatedList = todoList.map((item) =>
        item.id === editTask.id ? { ...item, text: inputText } : item
      );

      localStorage.setItem("todoList", JSON.stringify(updatedList));
      setTodoList(updatedList);

      setEditTask(null);
      setInputText("");

      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      date: new Date(),
    };

    const updatedList = [...todoList, newTodo];
    localStorage.setItem("todoList", JSON.stringify(updatedList));
    setTodoList(updatedList);

    setInputText("");
  };

  const handleEdit = (task) => {
    if (isCompleted.includes(task.id)) return;

    setEditTask(task);
    setInputText(task.text);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="max-w-lg w-full px-5">
        <form onSubmit={handleAddTodo} className="max-w-lg w-full mb-5">
          <div className="flex justify-between items-center w-full">
            <Input
              className="w-60 sm:w-96"
              placeholder="Add your task..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button type="submit" btnName="Add" className="bg-gray-800" />
          </div>
        </form>
        <ListTask
          todoList={todoList}
          setTodoList={setTodoList}
          editTask={editTask}
          handleEdit={handleEdit}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
        />
      </div>
    </div>
  );
};

export default AddTask;
