# AI Task Manager

A responsive task management application built with **React, Vite, JavaScript, and plain CSS**, developed independently with **AI as a development assistant**.

This project was created as part of the **Frontend AI Engineering — Week 3 Foundations Assignment: React App Development with AI**.

The goal of the assignment was to build a React application independently while using AI throughout the development process for planning, implementation, debugging, refinement, and code review.

---

## 📌 Assignment Overview

**Assignment:** React App Development with AI
**Track:** Frontend AI Engineering
**Phase:** Foundations
**Week:** 3
**Estimated Workload:** 6 hours

### Assignment Requirements

The submission should include:

* A completed React application
* Prompts used during development
* A short explanation of how AI assisted throughout implementation
* Examples of manual improvements, corrections, or refactoring performed after reviewing AI-generated code

This repository contains all of these elements.

---

## 🚀 Features

The AI Task Manager currently supports:

* ✅ Create new tasks
* ✅ Update task status
* ✅ Delete tasks
* ✅ Search tasks by title and description
* ✅ Filter tasks by status
* ✅ Filter tasks by priority
* ✅ Combine search, status, and priority filters
* ✅ Dashboard statistics
* ✅ Browser `localStorage` persistence
* ✅ Responsive desktop, tablet, and mobile layouts
* ✅ Controlled React form inputs
* ✅ Reusable functional components
* ✅ Plain CSS styling
* ✅ No external UI or state-management libraries

---

## 🛠️ Tech Stack

| Technology   | Purpose                                   |
| ------------ | ----------------------------------------- |
| React        | UI development and component architecture |
| Vite         | Development environment and build tooling |
| JavaScript   | Application logic                         |
| HTML/JSX     | UI structure                              |
| CSS          | Styling and responsive design             |
| localStorage | Client-side task persistence              |
| Git          | Version control                           |
| GitHub       | Source code hosting                       |
| AI Assistant | Development assistance                    |

No additional npm packages were required for the application functionality.

---

## 📂 Project Structure

```text
ai-task-manager/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Application Architecture

The application follows a simple component-based React architecture.

```text
App.jsx
│
├── Header
│
├── Dashboard
│   └── StatCard
│
└── Task Section
    │
    ├── TaskForm
    │
    ├── TaskFilters
    │
    └── TaskList
        └── TaskCard
```

### State Ownership

The main application state is maintained in `App.jsx`.

```text
App.jsx
│
├── tasks
├── searchTerm
├── statusFilter
└── priorityFilter
```

Child components receive the required data and callbacks through props.

This keeps the application simple while maintaining a clear separation between shared state and presentation.

---

## 📋 Task Data Structure

Each task follows this structure:

```javascript
{
  id: uniqueId,
  title: "...",
  description: "...",
  priority: "Low | Medium | High",
  status: "Pending | In Progress | Completed",
  dueDate: "YYYY-MM-DD"
}
```

---

# 🤖 AI-Assisted Development

AI was used as a **development assistant rather than as a replacement for understanding or reviewing the implementation**.

The application was developed incrementally through structured prompts. Each prompt focused on one specific feature, which helped keep the implementation manageable and allowed the generated code to be reviewed after every step.

The development process followed this progression:

```text
Architecture
    ↓
Basic UI
    ↓
Task Creation
    ↓
Status Updates
    ↓
Task Deletion
    ↓
Search
    ↓
Status & Priority Filters
    ↓
localStorage Persistence
    ↓
Responsive Design
```

---

# 💬 Prompts Used During Development

## Prompt 1 — Architecture / Planning

The initial prompt was used to establish the application architecture and determine the required components and responsibilities before implementation.

The architecture included:

* Header
* Dashboard
* StatCard
* TaskForm
* TaskFilters
* TaskList
* TaskCard

The goal was to keep `App.jsx` responsible for shared application state while keeping UI components small and reusable.

---

## Prompt 2 — Basic React Application Structure

The second prompt asked AI to create the basic UI structure using:

* React
* Vite
* JavaScript
* JSX
* Plain CSS

The initial implementation used sample tasks and intentionally left functionality such as creation, deletion, filtering, and persistence for later prompts.

---

## Prompt 3 — Task Creation

The third prompt implemented task creation.

The main state was changed from:

```javascript
const [tasks] = useState(sampleTasks);
```

to:

```javascript
const [tasks, setTasks] = useState(sampleTasks);
```

An `addTask` function was introduced:

```javascript
const addTask = (taskData) => {
  const newTask = {
    id: Date.now(),
    ...taskData,
    status: "Pending",
  };

  setTasks((currentTasks) => [...currentTasks, newTask]);
};
```

The function was passed to `TaskForm`:

```jsx
<TaskForm onAddTask={addTask} />
```

---

## Prompt 4 — Task Status Updates

The next prompt added status updates directly from each task card.

The implementation introduced:

```javascript
const updateTaskStatus = (taskId, newStatus) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === taskId
        ? { ...task, status: newStatus }
        : task
    )
  );
};
```

A controlled `<select>` was added to `TaskCard`.

Available statuses:

* Pending
* In Progress
* Completed

---

## Prompt 5 — Task Deletion

The deletion feature was implemented using:

```javascript
const deleteTask = (taskId) => {
  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== taskId)
  );
};
```

The deletion callback was passed from `App.jsx` through `TaskList` to `TaskCard`.

A Delete button was then added to each task card.

---

## Prompt 6 — Task Search

The search feature introduced:

```javascript
const [searchTerm, setSearchTerm] = useState("");
```

Tasks can be searched by:

* Title
* Description

The search is case-insensitive and updates as the user types.

---

## Prompt 7 — Status and Priority Filters

Status and priority filtering were then added:

```javascript
const [statusFilter, setStatusFilter] = useState("All");
const [priorityFilter, setPriorityFilter] = useState("All");
```

The filtering logic combines all active conditions:

```javascript
return matchesSearch && matchesStatus && matchesPriority;
```

This means a task must satisfy **all active filters** to be displayed.

For example:

```text
Search   = project
Status   = Pending
Priority = High
```

Only tasks satisfying all three conditions are shown.

---

## Prompt 8 — localStorage Persistence

The application was then updated to persist tasks in the browser.

React's `useEffect` was used:

```javascript
useEffect(() => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(tasks)
  );
}, [tasks]);
```

Tasks are loaded when the application starts:

```javascript
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  return savedTasks
    ? JSON.parse(savedTasks)
    : sampleTasks;
});
```

As a result:

* Created tasks survive refreshes
* Status changes survive refreshes
* Deleted tasks remain deleted after refresh

No backend or database was required.

---

## Prompt 9 — Responsive Design

The final implementation step focused exclusively on responsive styling.

CSS media queries were used for:

* Desktop
* Tablet
* Mobile

The responsive implementation ensures:

* Dashboard cards adapt to screen size
* Form fields stack on smaller screens
* Search and filters stack on mobile
* Task cards remain readable
* Status controls remain usable
* Delete buttons remain accessible
* No horizontal scrolling is required

No CSS framework was introduced.

---

# 🔍 Manual Review, Improvements & Corrections

AI-generated code was reviewed after each implementation step rather than being accepted blindly.

Several decisions were made during the review process to keep the application maintainable and aligned with the assignment requirements.

### 1. Kept shared state in `App.jsx`

The implementation was intentionally kept simple by maintaining the main `tasks` state in `App.jsx`.

This allowed task creation, status updates, deletion, filtering, and dashboard calculations to work from a single source of truth.

---

### 2. Kept Dashboard statistics based on complete task state

The Dashboard uses the complete `tasks` array rather than `filteredTasks`.

For example:

```jsx
<Dashboard
  totalTasks={tasks.length}
  completedTasks={completedTasks}
  pendingTasks={pendingTasks}
  inProgressTasks={inProgressTasks}
/>
```

This prevents search and filters from incorrectly changing the overall task statistics.

---

### 3. Used immutable state updates

Task updates use React's state updater patterns rather than directly mutating the existing array.

For example:

```javascript
setTasks((currentTasks) =>
  currentTasks.map((task) =>
    task.id === taskId
      ? { ...task, status: newStatus }
      : task
  )
);
```

Similarly, deletion uses `filter()`.

This keeps state updates predictable and follows standard React practices.

---

### 4. Kept filtering logic centralized

Search, status, and priority filtering are handled in `App.jsx`.

The UI components are responsible for collecting user input, while `App.jsx` determines which tasks should be displayed.

This avoids duplicating filtering logic across multiple components.

---

### 5. Preserved existing functionality during responsive improvements

The responsive design work was intentionally restricted to CSS.

No React state, task logic, filtering logic, or persistence code was changed during the responsive-design step.

This reduced the risk of introducing functional regressions while improving the UI.

---

### 6. Avoided unnecessary dependencies

The project uses React, Vite, JavaScript, and plain CSS without introducing unnecessary libraries.

This keeps the application lightweight and makes the implementation easier to understand.

---

# 🧠 How AI Assisted Throughout the Project

AI was used at different stages of development:

### Planning

AI helped translate the application idea into a manageable component structure and development sequence.

### Implementation

Individual prompts were used to implement one feature at a time, such as:

* Task creation
* Status updates
* Deletion
* Search
* Filtering
* Persistence
* Responsive styling

### Code Review

Generated code was reviewed to verify that it:

* Followed the requested architecture
* Preserved existing functionality
* Used React state correctly
* Did not introduce unnecessary dependencies
* Matched the assignment requirements

### Debugging & Refinement

When implementation details needed clarification or adjustment, the code was reviewed and refined rather than simply adding more abstractions.

The incremental prompting approach also made it easier to identify which feature was responsible if something stopped working.

---

# ▶️ Getting Started

## Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd ai-task-manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

---

# 🧪 Testing the Application

After starting the application, the following workflow can be used to verify the main functionality.

### Task Creation

1. Enter a task title.
2. Add a description.
3. Select a priority.
4. Select a due date.
5. Click **Add Task**.
6. Confirm the task appears in the task list.

### Status Update

1. Select a different status from a task card.
2. Confirm the task status changes.
3. Check that the Dashboard statistics update.

### Task Deletion

1. Click **Delete** on a task.
2. Confirm that the task disappears.
3. Confirm the Dashboard statistics update.

### Search

Enter a keyword from a task title or description.

The displayed tasks should update immediately.

### Filtering

Use the:

* Status dropdown
* Priority dropdown

to filter the displayed tasks.

Search and both filters can be used simultaneously.

### Persistence

1. Create or modify a task.
2. Refresh the browser.
3. Confirm that the task state remains unchanged.

### Responsive Testing

Test the application at:

* Desktop width
* Tablet width
* Mobile width

Confirm that no horizontal scrolling is required.

---

# 📱 Responsive Design

The application uses CSS media queries to adapt the interface.

### Desktop

```text
Dashboard
┌──────────┬──────────┬──────────┬──────────┐
│  Total   │Completed │In Progress│ Pending │
└──────────┴──────────┴──────────┴──────────┘

Search          Status          Priority
┌───────────┐   ┌──────────┐   ┌──────────┐
│ Search... │   │ All      │   │ All      │
└───────────┘   └──────────┘   └──────────┘
```

### Mobile

```text
Dashboard
┌─────────────────┐
│ Total Tasks     │
└─────────────────┘
┌─────────────────┐
│ Completed       │
└─────────────────┘
┌─────────────────┐
│ In Progress     │
└─────────────────┘
┌─────────────────┐
│ Pending         │
└─────────────────┘

Search
┌─────────────────┐
│ Search...       │
└─────────────────┘

Status
┌─────────────────┐
│ All Statuses    │
└─────────────────┘

Priority
┌─────────────────┐
│ All Priorities  │
└─────────────────┘
```

---

# 🔐 Data Storage

Tasks are stored locally in the browser using:

```text
localStorage
```

Storage key:

```text
ai-task-manager-tasks
```

There is no backend, authentication system, or external database.

Because the data is stored in browser localStorage, clearing browser storage will remove the saved tasks.

---

# 🎯 Learning Outcomes

This project helped demonstrate practical experience with:

* React functional components
* `useState`
* `useEffect`
* Props and callback functions
* Controlled form inputs
* Array methods such as `map()`, `filter()`, and `includes()`
* State lifting
* Component composition
* Conditional filtering
* Browser localStorage
* Responsive CSS
* Git-based development
* AI-assisted software development
* Reviewing and refining AI-generated code

---

# 🚧 Future Improvements

Possible future improvements include:

* Task editing
* Sorting tasks
* Due-date reminders
* Drag-and-drop task management
* Dark mode
* Better form validation
* Task categories/tags
* Backend persistence
* User authentication
* Unit and integration tests
* AI-powered task suggestions

These features are intentionally outside the current assignment scope.

---

# 👨‍💻 Author

**Abhishek Savita**

B.Tech — Computer Science Engineering

This project was developed as part of the **Frontend AI Engineering Foundations** assignment, using AI as a development assistant while manually reviewing and refining the generated implementation.

---

## ⭐ Project Summary

The **AI Task Manager** demonstrates how AI can be integrated into a practical software-development workflow.

Instead of asking AI to generate the entire application in one step, the project was developed incrementally through focused prompts. Each feature was implemented, reviewed, and refined before moving to the next stage.

The final application provides a complete responsive task-management experience while maintaining a simple React architecture and avoiding unnecessary dependencies.
