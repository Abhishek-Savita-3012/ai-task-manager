function TaskFilters({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  priorityFilter,
  onPriorityChange,
}) {
  return (
    <section className="task-filters">
      <div className="filter-group">
        <label htmlFor="search">Search</label>

        <input
          id="search"
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="status-filter">Status</label>

        <select
          id="status-filter"
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="priority-filter">Priority</label>

        <select
          id="priority-filter"
          value={priorityFilter}
          onChange={(event) => onPriorityChange(event.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </section>
  );
}

export default TaskFilters;