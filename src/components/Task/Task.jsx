import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [task, settask] = useState(props.data);

  const changehandler =(event)=>{
    settask((prev) => ({...prev, [event.target.name]: event.target.checked}))
    props.updateTask({...task,[event.target.name]: event.target.checked })
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={task.done} name="done" onChange={changehandler}/>
      <div data-cy="task-text">{task.done ? <del>{task.text}</del>: task.text}</div>
      <Counter count={props.data.count} />
      <button data-cy="task-remove-button" onClick={() => props.removetask(task.id)}>X</button>
    </li>
  );
};

export default Task;
