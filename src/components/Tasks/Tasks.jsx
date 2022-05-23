import React, { useState } from "react";
import Counter from "../Counter/Counter";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todoArr, settodoArr}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [count, setcount] = useState(1);

  const handleDelete = () => {
   let updated=  todoArr.filter((el) => (
      el.id!==el.id
    ))
    settodoArr(updated);
  }


  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {todoArr.map((el) => (
          
            <Task el={el} todoArr={todoArr} settodoArr={settodoArr} count={count} setcount={setcount} handleDelete={handleDelete} />
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
