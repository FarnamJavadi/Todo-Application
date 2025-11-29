import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  title: string
  description?: string
  dueDate?: string
  completed: boolean
  createdAt: string
}

export type FilterStatus = 'all' | 'completed' | 'pending'
export type SortOption = 'none' | 'dueDate' | 'createdAt'

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'createdAt'>>) => {
      const newTodo: Todo = {
        title: action.payload.title,
        description: action.payload.description,
        dueDate: action.payload.dueDate,
        completed: action.payload.completed,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
      }
      state.todos.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload
      const todo = state.todos.find(function(t) {
        return t.id === todoId
      })
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload
      state.todos = state.todos.filter(function(t) {
        return t.id !== todoId
      })
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const updatedTodo = action.payload
      const index = state.todos.findIndex(function(t) {
        return t.id === updatedTodo.id
      })
      if (index !== -1) {
        state.todos[index] = updatedTodo
      }
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo, setTodos } = todoSlice.actions
export default todoSlice.reducer

