import React, { useEffect, useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (props) => {
  // sample values to be replaced
  // let totalTask = props.data.length;
  // let unCompleted = props.data.filter(ele => ele.done===true).length;
  const [totalTask, settotalTask] = useState(0);
  const [unCompletedTask, setunCompletedTask]=useState(0);
  // NOTE: do not delete `data-cy` key value pair
  useEffect(() =>{
    settotalTask(props.data.length);
    setunCompletedTask(props.data.filter(ele => ele.done===true).length);
  },[props.data])

  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      you have&nbsp;
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      &nbsp;of&nbsp;
      <b data-cy="header-total-task">{totalTask}</b>
      &nbsp;tasks remaining
    </div>
  );
};

export default TaskHeader;
