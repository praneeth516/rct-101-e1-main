import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      {props.data.length ? (<ul data-cy="tasks" className={styles.tasks}>
        {props.data.map(task => <Task key={task.id} data={task} removetask={props.removeTask} updateTask={props.updateTask} />)}
      </ul>) :
      (<div data-cy="tasks-empty" className={styles.empty}>
        <h1>Empty List</h1>
        <p>Add a new task above</p>
      </div>)}
    </>
  );
};

export default Tasks;