import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
}

export default TaskList;