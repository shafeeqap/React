import React from "react";
import AddTask from "../Components/AddTask";
import ListTask from "../Components/ListTask";

const Todo = () => {
  return (
    <div className="min-h-screen space-y-5 flex flex-col justify-center items-center bg-slate-300 overflow-hidden">
      <h1 className="uppercase text-3xl font-semibold">To-do list</h1>
      <AddTask />
    </div>
  );
};

export default Todo;
