import React, {useState} from "react";
import styles from "./addTask.module.css";
import "../../data/tasks.json";



const AddTask = ({todoArr, settodoArr}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [Value, setValue] = React.useState("");
  // const [todoArr, settodoArr] = useState([]);

  const handleChange = (Value) => {
    let data = {
      id:Date.now(),
      text:Value,
      done:false,
      count:1,
    }
    settodoArr([...todoArr, data]);
  }


  return (
   
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" Value={Value} type="text" onChange={(e) => {setValue(e.target.value)}}/>
      <button data-cy="add-task-button" onClick={() => handleChange(Value)}>Add</button>
      
    </div>
   
  
  );
};

export default AddTask;

// {todoArr.map((el) => {
//   <Tasks key={el.id} id={el.id} text={el.text} done={el.done} count={el.count} />
// })}