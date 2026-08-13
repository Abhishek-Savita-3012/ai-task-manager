function TaskCard({ task }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <span className={`priority priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <div className="task-card-footer">
        <span className="status">{task.status}</span>
        <span className="due-date">Due: {task.dueDate}</span>
      </div>
    </article>
  );
}

export default TaskCard;