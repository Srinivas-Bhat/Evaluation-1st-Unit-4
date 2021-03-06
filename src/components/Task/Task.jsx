import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({todoArr, settodoArr, count, setcount, el, handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair

  const deleteIt = () => {
    handleDelete();
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" className="input"/>
      <div data-cy="task-text" className="text">
        {el.text}
      </div>
        
      {/* Counter here */}
      <Counter count={count} setcount={setcount} />
     
      <button data-cy="task-remove-button" onClick={() => deleteIt}>dlt</button>
    </li>
  );
};

export default Task;
