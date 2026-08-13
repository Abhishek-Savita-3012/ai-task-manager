import TaskCard from "./TaskCard";

function TaskList({ tasks, onUpdateStatus }) {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </section>
  );
}

export default TaskList;