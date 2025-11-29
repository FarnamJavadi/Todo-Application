'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAppSelector } from '@/store/store'
import { useFilter } from '@/components/Providers'
import TodoItem from './TodoItem'
import moment from 'moment'
import { Todo } from '@/store/todoSlice'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const StyledEmptyBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
}))

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos)
  const filterContext = useFilter()
  const filterStatus = filterContext.filterStatus
  const sortOption = filterContext.sortOption

  let filteredTodos = todos

  if (filterStatus === 'completed') {
    filteredTodos = filteredTodos.filter(function(todo: Todo) {
      return todo.completed === true
    })
  } else if (filterStatus === 'pending') {
    filteredTodos = filteredTodos.filter(function(todo: Todo) {
      return todo.completed === false
    })
  }

  if (sortOption === 'dueDate') {
    const todosCopy = [...filteredTodos]
    filteredTodos = todosCopy.sort(function(a, b) {
      if (!a.dueDate && !b.dueDate) {
        return 0
      }
      if (!a.dueDate) {
        return 1
      }
      if (!b.dueDate) {
        return -1
      }
      return moment(a.dueDate).diff(moment(b.dueDate))
    })
  } else if (sortOption === 'createdAt') {
    const todosCopy = [...filteredTodos]
    filteredTodos = todosCopy.sort(function(a, b) {
      return moment(b.createdAt).diff(moment(a.createdAt))
    })
  }

  if (filteredTodos.length === 0) {
    return (
      <StyledEmptyBox>
        <Typography variant="h6">No todos found</Typography>
        <Typography variant="body2">
          {todos.length === 0
            ? 'Add your first todo to get started!'
            : 'Try adjusting your filters.'}
        </Typography>
      </StyledEmptyBox>
    )
  }

  return (
    <StyledBox>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </StyledBox>
  )
}

