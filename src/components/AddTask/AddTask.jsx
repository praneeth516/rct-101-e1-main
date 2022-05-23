import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setvalue]= useState("");
  const valuechangehandler = (event) =>{
    setvalue(event.target.value)
  }
  const submitHandler = () =>{
    if(value.length >0 && props.data.filter(ele => ele.text===value).length <= 0 ){
      const data = {
        id: Math.floor(Math.random()*100),
        text: value,
        done: false,
        count: 1
      }
      props.addTask(data);
      setvalue("");
    }
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." value={value} onChange={valuechangehandler} />
      <button data-cy="add-task-button" onClick={submitHandler}>+</button>
    </div>
  );
};

export default AddTask;
