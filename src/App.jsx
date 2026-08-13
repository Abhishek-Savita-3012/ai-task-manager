import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import "./App.css";

const sampleTasks = [
  {
    id: 1,
    title: "Complete React dashboard",
    description: "Build the initial dashboard UI for the AI Task Manager.",
    priority: "High",
    status: "In Progress",
    dueDate: "2026-08-15",
  },
  {
    id: 2,
    title: "Review project architecture",
    description: "Check the component structure and keep the application simple.",
    priority: "Medium",
    status: "Pending",
    dueDate: "2026-08-16",
  },
  {
    id: 3,
    title: "Prepare project README",
    description: "Document the project setup and basic usage instructions.",
    priority: "Low",
    status: "Completed",
    dueDate: "2026-08-12",
  },
];

function App() {
  const [tasks, setTasks] = useState(sampleTasks);

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      status: "Pending",
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return (
    <div className="app">
      <Header />

      <main className="container">
        <Dashboard
          totalTasks={tasks.length}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
          inProgressTasks={inProgressTasks}
        />

        <section className="task-section">
          <div className="section-header">
            <div>
              <h2>Tasks</h2>
              <p>Manage and track your tasks.</p>
            </div>
          </div>

          <TaskForm onAddTask={addTask} />

          <TaskFilters />

          <TaskList
            tasks={tasks}
            onUpdateStatus={updateTaskStatus}
          />
        </section>
      </main>
    </div>
  );
}

export default App;