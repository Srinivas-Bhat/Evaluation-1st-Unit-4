import React from "react";
import styles from "./counter.module.css";

const Counter = ({count, setcount}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => setcount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" 
      onClick={() => {
        if(count>1){
          setcount(count-1);
          }}}>-</button>
    </div>
  );
};

export default Counter;
