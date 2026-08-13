function TaskForm() {
  return (
    <section className="task-form">
      <h3>Add New Task</h3>

      <form>
        <div className="form-group">
          <label htmlFor="task-title">Task Title</label>
          <input
            id="task-title"
            type="text"
            placeholder="Enter task title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Description</label>
          <textarea
            id="task-description"
            placeholder="Enter task description"
            rows="3"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="task-priority">Priority</label>
            <select id="task-priority" defaultValue="Medium">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="task-due-date">Due Date</label>
            <input id="task-due-date" type="date" />
          </div>
        </div>

        <button type="button" className="primary-button">
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;