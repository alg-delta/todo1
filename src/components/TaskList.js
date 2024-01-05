import React from "react";

export default function TaskList(props) {
  return (
    <ul className="list">
      {props.list.map((item) => (
        <li key={item.id} className="task">
          <p
            onClick={() => props.completeTask(item.id)}
            className={item.isComplete ? "complete" : "notcomplete"}
          >
            {item.text}
          </p>
          <button
            className="btn"
            type="button"
            onClick={() => props.deleteTask(item.id)}
          >
            видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
