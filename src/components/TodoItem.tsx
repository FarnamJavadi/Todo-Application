'use client'

import React from 'react'
import { Card, CardContent, Typography, Checkbox, IconButton, Box, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import { Todo } from '@/store/todoSlice'
import { useAppDispatch } from '@/store/store'
import { toggleTodo, deleteTodo } from '@/store/todoSlice'
import { toast } from 'react-toastify'
import moment from 'moment'
import axios from 'axios'

const StyledCard = styled(Card)<{ completed?: boolean }>(({ theme, completed }) => ({
  marginBottom: theme.spacing(2),
  opacity: completed ? 0.7 : 1,
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}))

const StyledContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}))

const StyledTitle = styled(Typography)<{ completed?: boolean }>(({ completed }) => ({
  textDecoration: completed ? 'line-through' : 'none',
  fontWeight: 600,
}))

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
}))

const StyledDateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}))

interface TodoItemProps {
  todo: Todo
}

function TodoItem(props: TodoItemProps) {
  const dispatch = useAppDispatch()
  const todo = props.todo

  const handleToggle = async () => {
    try {
      const newCompleted = !todo.completed
      await axios.patch(`/api/todos/${todo.id}`, { completed: newCompleted })
      dispatch(toggleTodo(todo.id))
      if (todo.completed) {
        toast.success('Todo marked as pending!')
      } else {
        toast.success('Todo marked as completed!')
      }
    } catch (error) {
      toast.error('Failed to update todo')
      console.error('Error updating todo:', error)
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/todos/${todo.id}`)
      dispatch(deleteTodo(todo.id))
      toast.success('Todo deleted successfully!')
    } catch (error) {
      toast.error('Failed to delete todo')
      console.error('Error deleting todo:', error)
    }
  }

  let isOverdue = false
  if (todo.dueDate && !todo.completed) {
    const today = moment()
    const dueDate = moment(todo.dueDate)
    if (dueDate.isBefore(today, 'day')) {
      isOverdue = true
    }
  }

  return (
    <StyledCard completed={todo.completed}>
      <StyledCardContent>
        <Checkbox
          checked={todo.completed}
          onChange={handleToggle}
          color="primary"
        />
        <StyledContentBox>
          <StyledTitle variant="h6" completed={todo.completed}>
            {todo.title}
          </StyledTitle>
          {todo.description && (
            <StyledDescription variant="body2">
              {todo.description}
            </StyledDescription>
          )}
          <StyledDateBox>
            {todo.dueDate && (
              <Chip
                label={`Due: ${moment(todo.dueDate).format('MMM DD, YYYY')}`}
                size="small"
                color={isOverdue ? 'error' : 'default'}
                variant="outlined"
              />
            )}
            {todo.completed && (
              <Chip
                label="Completed"
                size="small"
                color="success"
                variant="outlined"
              />
            )}
          </StyledDateBox>
        </StyledContentBox>
        <IconButton
          onClick={handleDelete}
          color="error"
          aria-label="delete todo"
        >
          <DeleteIcon />
        </IconButton>
      </StyledCardContent>
    </StyledCard>
  )
}

export default TodoItem

