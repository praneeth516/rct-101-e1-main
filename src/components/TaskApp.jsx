import React, { useState } from "react";

import styles from "./taskApp.module.css";
import taskdata from "./../data/tasks.json";
import {TaskHeader} from "./TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [data, setdata] = useState(taskdata);

  const addTask = (value) =>{
    setdata((prev) => [...prev, value]);
  }
  const removeTask = (id) =>{
    setdata((prev) => prev.filter(t => t.id !== id));
  }
  const updateTask = (value) =>{
    const data1 = data;
    const ind = data1.findIndex(t => t.id === value.id);
    data1[ind].done = value.done;
    setdata([...data1]);
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader data={data}/>
      <AddTask addTask={addTask} data={data}/>
      <Tasks data={data} removeTask={removeTask} updateTask={updateTask} />
    </div>
  );
};

export default TaskApp;
