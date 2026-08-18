import TaskCard from "./TaskCard";

function TaskList({ tasks, onUpdateStatus, onDeleteTask }) {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateStatus={onUpdateStatus}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  );
}

export default TaskList;