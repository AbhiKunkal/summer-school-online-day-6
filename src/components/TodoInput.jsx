import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
