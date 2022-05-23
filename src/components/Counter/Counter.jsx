import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  // sample value to be replaced
  const [count, setcount] = useState(props.count);
  // NOTE: do not delete `data-cy` key value pair
  const changehandler = (type) =>{
    if( type === "inc"){
      setcount((prev) => prev+1);
    }
    else
    {
      if(count !== 1){
        setcount((prev) => prev-1);
      }
    }
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => changehandler("inc")}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={() => changehandler("dec")} >-</button>
    </div>
  );
};

export default Counter;
