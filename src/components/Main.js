import React, { useState } from "react";
import { nanoid } from "nanoid";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import { useEffect } from "react";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });
  const addTask = (task) => {
    console.log("задача прийнята", task);
    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: false,
    };
    setList((list) => [...list, newTask]);
  };
  const deleteTask = (id) => {
    const newList = list.filter((task) => task.id !== id);
    setList([...newList]);
  };

  const completeTask = (id) => {
    const newList = list.map((task) => {
      if (id === task.id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList([...newList]);
  };

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <h3 className="title">список задач</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
