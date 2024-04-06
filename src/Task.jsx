export function Task(props) {
  return (
    <div
      className="task"
      style={{
        backgroundColor: props.completed
          ? "green"
          : props.failed
          ? "red"
          : "white",
      }}
    >
      <h1>{props.taskName}</h1>

      <button onClick={() => props.completeTask(props.id)}>complete</button>
      <button onClick={() => props.deleteTask(props.id)}>delete</button>
      <button onClick={() => props.failTask(props.id)}>fail</button>
    </div>
  );
}
