import React from "react";
import { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("поле не має бути порожнім");
    }

    if (task.length < 5) {
      alert("не менше 5 букв");
      return;
    }
    // console.log(task);
    props.addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="напишіть задачу"
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit" className="btn">
        додати
      </button>
    </form>
  );
}
