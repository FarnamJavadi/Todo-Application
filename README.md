# Todo Application

A Todo Application built with Next.js.

## Features

- ✅ Add new todos with title, description, and optional due date
- ✅ View a list of all todos
- ✅ Mark todos as complete or pending
- ✅ Delete todos
- ✅ Filter todos by status (All/Completed/Pending)
- ✅ Sort todos by due date or creation date
- ✅ Local data persistence using LocalStorage
- ✅ Real-time notifications using React Toastify
- ✅ Beautiful UI built with Material UI
- ✅ Error boundary for graceful error handling
- ✅ Performance optimizations

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Local State**: React Context API
- **Form Management**: React Hook Form + Yup
- **HTTP Client**: Axios
- **UI Library**: Material UI (styled API)
- **Date Handling**: Moment.js
- **Notifications**: React Toastify
- **Data Persistence**: LocalStorage

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (package manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Todo Application"
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── todos/
│   ├── about/
│   └── api/
├── components/
│   ├── Providers.tsx
│   ├── Navigation.tsx
│   ├── TodoForm.tsx
│   ├── TodoList.tsx
│   ├── TodoItem.tsx
│   └── FilterBar.tsx
└── store/
    ├── store.ts
    └── todoSlice.ts
```

## Usage

### Adding a Todo

1. Navigate to the `/todos` page
2. Fill in the title (required)
3. Optionally add a description and due date
4. Click "Add Todo"

### Managing Todos

- **Complete/Pending**: Click the checkbox next to a todo
- **Delete**: Click the delete icon
- **Filter**: Use the filter dropdown to show All/Completed/Pending todos
- **Sort**: Use the sort dropdown to sort by due date or creation date

## Performance Optimizations

The application includes various performance optimizations for smooth operation.

## Data Persistence

All todos are automatically saved to LocalStorage and restored when the page reloads. The Redux store is synchronized with LocalStorage using a custom middleware.

## Error Handling

The application includes an Error Boundary component that catches React rendering errors and displays a user-friendly error message.

## Building for Production

```bash
pnpm build
pnpm start
```


