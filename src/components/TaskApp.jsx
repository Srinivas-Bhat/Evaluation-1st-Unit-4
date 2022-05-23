import React, {useState} from "react";
import AddTask from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [todoArr, settodoArr] = useState([]);

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
     <AddTask todoArr={todoArr} settodoArr={settodoArr} />
      <Tasks todoArr={todoArr} settodoArr={settodoArr}/>
    </div>
  );
};

export default TaskApp;
