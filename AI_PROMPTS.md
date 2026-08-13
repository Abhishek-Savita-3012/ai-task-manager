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

---

## AI Assistance

AI was used as a development assistant rather than as an automatic code generator. The generated suggestions were reviewed and adapted during implementation.

Future prompts used during development will be added to this file as the application progresses.

---

## Prompt 1 — AI Response Summary

The AI recommended a lightweight component-based React architecture using React's built-in `useState` and `useEffect` instead of a separate state-management library.

The proposed architecture uses `App.jsx` as the main container for shared task state and separates the interface into reusable components such as `Dashboard`, `StatCard`, `TaskForm`, `TaskFilters`, `TaskList`, and `TaskCard`.

The AI also recommended using localStorage with `useEffect` for task persistence.

---

### Human Review and Decision

After reviewing the AI-generated architecture, I decided to simplify and clarify the component responsibilities.

The final structure separates `TaskFilters` from `Dashboard`. `Dashboard` is responsible only for displaying task statistics, while `TaskFilters` handles search, status filtering, and priority filtering.

I also decided not to introduce unnecessary folders such as `hooks`, `context`, `services`, or `reducers` because the application's current complexity does not require them.