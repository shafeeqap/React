import React from "react";
import Input from "./ui/input";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ListTask = ({
  todoList,
  setTodoList,
  editTask,
  isCompleted,
  handleEdit,
  setIsCompleted,
}) => {
  console.log(editTask, "editTask");

  const handleTaskComplete = (e, id) => {
    if (editTask?.id === id) return;

    if (e.target.checked) {
      setIsCompleted((prev) => [...prev, id]);
    } else {
      setIsCompleted((prev) =>
        prev.filter((completedId) => completedId !== id)
      );
    }
  };

  const handleDelete = (id) => {
    if (editTask || isCompleted.includes(id)) return;

    const isConfirmed = confirm("Are you sure you want to delete?");
    if (!isConfirmed) return;

    const newList = todoList.filter((item) => item.id !== id);

    localStorage.setItem("todoList", JSON.stringify(newList));
    setTodoList(newList);
  };

  return (
    <div className="bg-white max-w-lg w-full overflow-hidden rounded">
      {todoList.map((item) => (
        <div key={item.id} className="felx py-3 px-5 border border-gray-300">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <Input
                type="checkbox"
                disabled={editTask?.id === item.id}
                checked={isCompleted.includes(item.id)}
                onChange={(e) => handleTaskComplete(e, item.id)}
                className="bg-white"
              />
              <p
                className={`capitalize text-gray-700 ${
                  isCompleted.includes(item.id) ? "line-through" : ""
                }`}
              >
                {item.text}
              </p>
              {isCompleted.includes(item.id) && (
                <span className="text-sm italic text-gray-400">Completed</span>
              )}
            </div>
            <div className="flex gap-5">
              <MdDeleteForever
                onClick={() => handleDelete(item.id)}
                size={20}
                color="red"
                title="Delete"
                className="cursor-pointer"
              />
              <CiEdit
                onClick={() => handleEdit(item)}
                size={20}
                title="Edit"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTask;
