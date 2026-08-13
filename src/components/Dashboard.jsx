import StatCard from "./StatCard";

function Dashboard({
  totalTasks,
  completedTasks,
  pendingTasks,
  inProgressTasks,
}) {
  return (
    <section className="dashboard">
      <div className="section-header">
        <div>
          <h2>Dashboard</h2>
          <p>Overview of your current tasks.</p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard label="Total Tasks" value={totalTasks} />
        <StatCard label="Completed" value={completedTasks} />
        <StatCard label="In Progress" value={inProgressTasks} />
        <StatCard label="Pending" value={pendingTasks} />
      </div>
    </section>
  );
}

export default Dashboard;