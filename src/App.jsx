import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
