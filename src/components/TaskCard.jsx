function TaskCard({ task, onUpdateStatus, onDeleteTask }) {
  const handleStatusChange = (event) => {
    onUpdateStatus(task.id, event.target.value);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

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
        <select
          value={task.status}
          onChange={handleStatusChange}
          aria-label={`Status for ${task.title}`}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <span className="due-date">Due: {task.dueDate}</span>

        <button
          type="button"
          className="delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskCard;