import { configureStore, Middleware } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import todoReducer from './todoSlice'

const STORAGE_KEY = 'todo-app-state'

const localStorageMiddleware: Middleware = function(store) {
  return function(next) {
    return function(action) {
      const result = next(action)
      const state = store.getState()
      
      if (typeof window !== 'undefined') {
        try {
          const todosToSave = state.todos.todos
          const todosString = JSON.stringify(todosToSave)
          localStorage.setItem(STORAGE_KEY, todosString)
        } catch (error) {
          console.error('Error saving to localStorage:', error)
        }
      }
      
      return result
    }
  }
}

const loadStateFromLocalStorage = function() {
  if (typeof window === 'undefined') {
    return undefined
  }
  
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY)
    if (serializedState === null) {
      return undefined
    }
    const todos = JSON.parse(serializedState)
    const result = {
      todos: {
        todos: todos,
      },
    }
    return result
  } catch (error) {
    console.error('Error loading from localStorage:', error)
    return undefined
  }
}

function getInitialState() {
  try {
    return loadStateFromLocalStorage()
  } catch (error) {
    console.error('Error loading initial state:', error)
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: function(getDefaultMiddleware) {
    const defaultMiddleware = getDefaultMiddleware()
    const allMiddleware = defaultMiddleware.concat(localStorageMiddleware)
    return allMiddleware
  },
  preloadedState: getInitialState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = function() {
  return useDispatch<AppDispatch>()
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

