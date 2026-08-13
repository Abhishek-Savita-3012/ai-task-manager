import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    onAddTask({
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
      dueDate: formData.dueDate,
    });

    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
    });
  };

  return (
    <section className="task-form">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task-title">Task Title</label>
          <input
            id="task-title"
            name="title"
            type="text"
            placeholder="Enter task title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Description</label>
          <textarea
            id="task-description"
            name="description"
            placeholder="Enter task description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="task-priority">Priority</label>
            <select
              id="task-priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="task-due-date">Due Date</label>
            <input
              id="task-due-date"
              name="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="primary-button">
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;