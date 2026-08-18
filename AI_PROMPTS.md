# AI Prompts Used During Development

This file documents the prompts used during the development of the **AI Task Manager** React application, where AI was used as a development assistant for planning, implementation, debugging, and code improvement.

---

## Prompt 1 — Application Planning

### Prompt

> Create a plan for a React task management dashboard called **"AI Task Manager"**.
>
> The application should be built using **React and Vite with JavaScript**.
>
> ### Core Features
>
> - Dashboard showing task statistics
> - Create a new task
> - Display tasks in a list
> - Update task status
> - Delete tasks
> - Search tasks
> - Filter tasks by status and priority
> - Store tasks in browser localStorage
> - Responsive design
>
> Before writing code, propose:
>
> 1. Component structure
> 2. Folder structure
> 3. State management approach
> 4. Data structure for a task
> 5. Implementation order
>
> Keep the architecture simple and suitable for a beginner/intermediate React developer.

---

## Prompt 1 — Purpose

The purpose of this prompt was to ask AI to help plan the application's architecture before writing implementation code.

The response was used as a starting point for deciding:

- React component structure
- Project folder organization
- State management approach
- Task data structure
- Development sequence

The proposed structure was reviewed before implementation, and changes were made where necessary.

## AI Assistance

AI was used as a development assistant rather than as an automatic code generator. The generated suggestions were reviewed and adapted during implementation.

Future prompts used during development will be added to this file as the application progresses.


## Prompt 1 — AI Response Summary

The AI recommended a lightweight component-based React architecture using React's built-in `useState` and `useEffect` instead of a separate state-management library.

The proposed architecture uses `App.jsx` as the main container for shared task state and separates the interface into reusable components such as `Dashboard`, `StatCard`, `TaskForm`, `TaskFilters`, `TaskList`, and `TaskCard`.

The AI also recommended using localStorage with `useEffect` for task persistence.

### Human Review and Decision

After reviewing the AI-generated architecture, I decided to simplify and clarify the component responsibilities.

The final structure separates `TaskFilters` from `Dashboard`. `Dashboard` is responsible only for displaying task statistics, while `TaskFilters` handles search, status filtering, and priority filtering.

I also decided not to introduce unnecessary folders such as `hooks`, `context`, `services`, or `reducers` because the application's current complexity does not require them.

---

## Prompt 2 — Basic React Application Structure

> Create the basic UI structure for the "AI Task Manager" based on the reviewed architecture.
> 
> Use React, Vite, JavaScript, and plain CSS.
> 
> Create these reusable components:
> 
> - Header
> - Dashboard
> - StatCard
> - TaskForm
> - TaskFilters
> - TaskList
> - TaskCard
> 
> Requirements:
> 
> - Keep App.jsx responsible for shared application state.
> - Use functional React components.
> - Use JSX.
> - Use sample task data for now.
> - Do not implement localStorage yet.
> - Do not implement search/filter functionality yet.
> - Do not implement task creation, deletion, or status updates yet.
> - Do not install additional libraries.
> - Use plain CSS.
> - Make the initial layout responsive.
> - Keep components small and readable.
> - Do not create unnecessary folders or abstractions.
> 
> First explain which files will be created or modified. Then implement the basic UI.
> 
> Do not modify package.json unless absolutely necessary.

---

## Prompt 2 — Human Review and Manual Improvement

After implementing the AI-generated UI, I tested the application in the browser.

The main component structure and functionality of the static UI worked as expected. However, the original Vite `index.css` contained default styles that conflicted with the application's custom styling. This caused some headings to appear with very low contrast and affected the overall layout.

### Manual Improvement

I replaced the default Vite `index.css` styles with a minimal global stylesheet appropriate for the AI Task Manager.

I removed unnecessary Vite demo styles such as `color-scheme`, the default dark background, and the `#root` padding/text alignment.

The application was then retested in the browser to confirm that the UI displayed correctly.

---

# Prompt 3 — Implement Task Creation

> Continue developing the existing "AI Task Manager" React application.
> 
> The application was previously built with React, Vite, JavaScript, and plain CSS.
> 
> The current application already contains these reusable components:
> 
> - Header
> - Dashboard
> - StatCard
> - TaskForm
> - TaskFilters
> - TaskList
> - TaskCard
> 
> The current UI displays sample tasks, but the task creation form is currently static.
> 
> ## Goal
> 
> Make the "Add New Task" form functional.
> 
> When the user fills out the form and clicks "Add Task":
> 
> 1. A new task should be created.
> 2. The new task should be added to the existing tasks state in `App.jsx`.
> 3. The new task should immediately appear in the task list.
> 4. Dashboard statistics should automatically update.
> 5. The form should reset after successful submission.
> 
> ## Requirements
> 
> ### State Management
> 
> Keep the main `tasks` state in `App.jsx`.
> 
> Change the existing state from:
> 
> ```jsx
> const [tasks] = useState(sampleTasks);

---

## Prompt 3 — Human Review and Testing

The AI-generated implementation was reviewed before being added to the project.

### Accepted Changes

The implementation correctly:

- Moved task state ownership to `App.jsx`.
- Added the `setTasks` state updater.
- Created an `addTask()` function in `App.jsx`.
- Passed `addTask` to `TaskForm` through props.
- Converted `TaskForm` into a controlled React form.
- Added basic title validation.
- Created new tasks with a `Pending` status.
- Reset the form after successful submission.
- Automatically updated dashboard statistics from the tasks state.
- Kept the existing component structure and CSS unchanged.

### Testing

The task creation feature was tested manually in the browser.

Tested successfully:

- Creating a new task.
- Entering a task title and description.
- Selecting Low, Medium, and High priority.
- Selecting a due date.
- New tasks appearing immediately in the task list.
- Dashboard task counts updating automatically.
- New tasks receiving `Pending` status.
- Form resetting after successful submission.
- Preventing submission when the task title is empty.

No additional packages or libraries were required.

### Human Decision

The AI-generated implementation was kept largely unchanged because it matched the requested architecture and passed the manual functionality tests.

The implementation was intentionally kept limited to task creation. Search, filtering, status updates, deletion, and localStorage will be implemented in later development steps.

---

# Prompt 4 — Implement Task Status Updates

> Continue developing the existing "AI Task Manager" React application.
> 
> The application currently has working task creation.
> 
> The existing components are:
> 
> - Header
> - Dashboard
> - StatCard
> - TaskForm
> - TaskFilters
> - TaskList
> - TaskCard
> 
> The current task structure is:
> 
> {
>   id: unique-id,
>   title: "...",
>   description: "...",
>   priority: "Low | Medium | High",
>   status: "Pending | In Progress | Completed",
>   dueDate: "YYYY-MM-DD"
> }
> 
> ## Goal
> 
> Allow users to update the status of an existing task.
> 
> The user should be able to change a task's status directly from its task card.
> 
> Available statuses:
> 
> - Pending
> - In Progress
> - Completed
> 
> ## Requirements
> 
> ### State Management
> 
> Keep the main `tasks` state in `App.jsx`.
> 
> Create an `updateTaskStatus` function in `App.jsx`.
> 
> The function should receive:
> 
> - `taskId`
> - `newStatus`
> 
> It should update only the matching task while keeping all other task properties unchanged.
> 
> Use the existing `setTasks` state updater.
> 
> The data flow should be:
> 
> TaskCard
>     ↓
> onUpdateStatus(taskId, newStatus)
>     ↓
> App.jsx
>     ↓
> updateTaskStatus()
>     ↓
> setTasks()
>     ↓
> tasks state updates
>     ↓
> TaskList re-renders
>     ↓
> Dashboard statistics recalculate
> 
> ### TaskCard
> 
> Update `TaskCard.jsx` so that the user can select a different status.
> 
> Add a status `<select>` control to the task card.
> 
> The select should:
> 
> - Display the task's current status.
> - Include Pending, In Progress, and Completed options.
> - Call the status update callback when the selection changes.
> 
> Use controlled input behavior:
> 
> ```jsx
> value={task.status}

---

## Prompt 4 — Human Review and Testing

The AI-generated implementation was reviewed before being added to the project.

### Accepted Changes

The implementation correctly:

- Added `updateTaskStatus()` to `App.jsx`.
- Used immutable state updates with `map()`.
- Kept the main task state in `App.jsx`.
- Passed the status update callback from `App.jsx` to `TaskList`.
- Passed the callback from `TaskList` to `TaskCard`.
- Added a controlled status dropdown to each task card.
- Preserved the existing task properties when changing status.
- Automatically recalculated dashboard statistics from the updated task state.
- Kept the existing task creation functionality working.

### Testing

The status update functionality was tested manually in the browser.

Tested successfully:

- Changing a task from Pending to Completed.
- Changing a task from Completed to In Progress.
- Dashboard counts updating after a status change.
- Task title remaining unchanged.
- Task description remaining unchanged.
- Task priority remaining unchanged.
- Task due date remaining unchanged.
- Creating a new task after implementing status updates.
- New tasks still receiving Pending status.

Refreshing the browser resets the application to the sample tasks because localStorage has not been implemented yet. This is intentional.

### Human Decision

The AI-generated implementation was kept unchanged because it followed the requested architecture, used immutable state updates, and passed the manual tests.

No additional libraries or functionality were introduced.

--- 

# Prompt 5 — Implement Task Deletion

> Continue developing the existing "AI Task Manager" React application.
> 
> The application currently has:
> 
> - Working task creation
> - Working task status updates
> - Dashboard statistics
> - Static search and filter controls
> 
> The existing components are:
> 
> - Header
> - Dashboard
> - StatCard
> - TaskForm
> - TaskFilters
> - TaskList
> - TaskCard
> 
> The current task structure is:
> 
> {
>   id: unique-id,
>   title: "...",
>   description: "...",
>   status: "Pending | In Progress | Completed",
>   priority: "Low | Medium | High",
>   dueDate: "YYYY-MM-DD"
> }
> 
> ## Goal
> 
> Allow users to delete an existing task.
> 
> The user should be able to delete a task directly from its task card.
> 
> ## Requirements
> 
> ### State Management
> 
> Keep the main `tasks` state in `App.jsx`.
> 
> Create a `deleteTask` function in `App.jsx`.
> 
> The function should receive:
> 
> ```text
> taskId

---

## Prompt 5 — Human Review and Testing

The AI-generated implementation was reviewed before being added to the project.

### Accepted Changes

The implementation correctly:

- Added `deleteTask()` to `App.jsx`.
- Used `filter()` for an immutable task deletion.
- Passed the delete callback from `App.jsx` to `TaskList`.
- Passed the delete callback from `TaskList` to `TaskCard`.
- Added a Delete button to each task card.
- Kept the existing status update functionality working.
- Kept the existing task creation functionality working.
- Automatically recalculated dashboard statistics after deletion.
- Added simple styling for the Delete button.

### Testing

The task deletion functionality was tested manually in the browser.

Tested successfully:

- Deleting an existing task.
- The deleted task disappearing from the task list.
- Total task count decreasing after deletion.
- The corresponding status count decreasing after deletion.
- Other tasks remaining unchanged.
- Creating a new task after implementing deletion.
- Updating task status after implementing deletion.
- Existing task information remaining intact.

Refreshing the browser restores the sample tasks because localStorage has not been implemented yet. This is intentional.

### Human Decision

The AI-generated implementation was kept unchanged because it followed the requested architecture, used immutable state updates, and passed the manual functionality tests.

No additional libraries or unrelated functionality were introduced.

---

# Prompt 6 — Implement Task Search

> Continue developing the existing "AI Task Manager" React application.
>
> The application currently has:
> 
> - Working task creation
> - Working task status updates
> - Working task deletion
> - Dashboard statistics
> - A static search input
> 
> The existing components are:
> 
> - Header
> - Dashboard
> - StatCard
> - TaskForm
> - TaskFilters
> - TaskList
> - TaskCard
> 
> The current task structure is:
> 
> {
>   id: unique-id,
>   title: "...",
>   description: "...",
>   status: "Pending | In Progress | Completed",
>   priority: "Low | Medium | High",
>   dueDate: "YYYY-MM-DD"
> }
> 
> ## Goal
> 
> Make the existing search input functional.
> 
> Users should be able to search tasks by:
> 
> - Task title
> - Task description
> 
> Search results should update as the user types.
> 
> ## Requirements
> 
> ### State Management
> 
> Keep the search state in `App.jsx`.
> 
> Add:
> 
> ```jsx
> const [searchTerm, setSearchTerm] = useState("");

---

## Prompt 6 — Human Review and Testing

The AI-generated implementation was reviewed before being added to the project.

### Accepted Changes

The implementation correctly:

- Added `searchTerm` state in `App.jsx`.
- Made the existing search input a controlled React input.
- Passed the search value and change handler through props.
- Created `filteredTasks` from the original `tasks` state.
- Used `filter()` for task searching.
- Implemented case-insensitive searching.
- Supported partial text matches.
- Searched both task titles and descriptions.
- Kept the original `tasks` array as the source of truth.
- Kept dashboard statistics based on all tasks rather than filtered results.
- Preserved task creation, status updates, and deletion functionality.
- Kept the existing component structure and styling.

### Testing

The search functionality was tested manually in the browser.

Tested successfully:

- Searching by task title.
- Searching by task description.
- Case-insensitive searches.
- Partial text searches.
- Clearing the search and displaying all tasks.
- Searching for text with no matching tasks.
- Dashboard statistics remaining based on the total task collection.
- Creating a task while search functionality is enabled.
- Updating task status while search functionality is enabled.
- Deleting a task while search functionality is enabled.

### Human Decision

The AI-generated implementation was accepted because it followed the requested architecture and passed the manual functionality tests.

The implementation was intentionally limited to search functionality. Status filtering, priority filtering, localStorage, and other features were not introduced at this stage.

No additional libraries were required.

---

# Prompt 7 — Implement Status and Priority Filters

> Continue developing the existing "AI Task Manager" React application.
> 
> The application currently has:
> 
> - Working task creation
> - Working task status updates
> - Working task deletion
> - Working task search
> - Dashboard statistics
> - Static Status and Priority filter dropdowns
> 
> The existing components are:
> 
> - Header
> - Dashboard
> - StatCard
> - TaskForm
> - TaskFilters
> - TaskList
> - TaskCard
> 
> The current task structure is:
> 
> {
>   id: unique-id,
>   title: "...",
>   description: "...",
>   status: "Pending | In Progress | Completed",
>   priority: "Low | Medium | High",
>   dueDate: "YYYY-MM-DD"
> }
> 
> ## Goal
> 
> Make the existing Status and Priority dropdowns functional.
> 
> Search, Status, and Priority filters must work together.
> 
> For example:
> 
> Search = "project"
> Status = "Pending"
> Priority = "High"
> 
> The displayed task must satisfy ALL three conditions.
> 
> ## Requirements
> 
> ### State Management
> 
> Keep filter state in `App.jsx`.
> 
> Add:
> 
> ```jsx
> const [statusFilter, setStatusFilter] = useState("All");
> const [priorityFilter, setPriorityFilter] = useState("All");

---

## Prompt 7 — Human Review and Testing

The AI-generated implementation was reviewed before being added to the project.

### Accepted Changes

The implementation correctly:

- Added `statusFilter` state in `App.jsx`.
- Added `priorityFilter` state in `App.jsx`.
- Converted the Status dropdown into a controlled input.
- Converted the Priority dropdown into a controlled input.
- Preserved the existing search functionality.
- Combined Search, Status, and Priority using AND logic.
- Allowed each dropdown to use `All` to disable that filter.
- Kept the original `tasks` array as the single source of truth.
- Used `filteredTasks` as derived data rather than storing it in state.
- Kept Dashboard statistics based on the complete `tasks` array.
- Preserved task creation, status updates, and deletion.
- Did not introduce any new packages or unnecessary architecture.

### Filtering Logic

The displayed tasks are calculated using:

- Search match
- Status match
- Priority match

A task is displayed only when all active conditions are satisfied.

Conceptually:

    Search match
          AND
    Status match
          AND
    Priority match

If Status or Priority is set to `All`, that filter does not restrict the results.

### Testing

The filtering functionality was manually tested in the browser.

Tested successfully:

- Search filtering.
- Status filtering.
- Priority filtering.
- Search + Status filtering.
- Search + Priority filtering.
- Status + Priority filtering.
- Search + Status + Priority filtering.
- Resetting filters to `All`.
- Creating a task while filters are active.
- Updating task status while filters are active.
- Deleting tasks while filters are active.
- Dashboard statistics remaining based on all tasks rather than filtered tasks.

### Human Decision

The AI-generated implementation was accepted because it followed the requested architecture and passed the manual functionality tests.

The implementation was intentionally limited to Search, Status, and Priority filtering. LocalStorage, backend functionality, authentication, sorting, pagination, and other unrelated features were not introduced.

No additional libraries were required.

---

