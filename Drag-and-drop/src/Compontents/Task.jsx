import { useDraggable } from "@dnd-kit/core";
import React from "react";

const Task = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    taskId: task.id,
    data: { column: task.status },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition: !transform ? "transform 0.2s ease" : undefined,
  };

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      className="cursor-grab rounded-lg bg-slate-400 p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <h4 className="font-medium text-neutral-950">{task.title}</h4>
      <p className="mt-2 text-sm text-neutral-800">{task.description}</p>
    </div>
  );
};

export default Task;
