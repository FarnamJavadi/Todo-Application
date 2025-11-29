'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAppDispatch } from '@/store/store'
import { addTodo } from '@/store/todoSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Card, CardContent, TextField, Button, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const StyledButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
}))

const schema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string(),
  dueDate: yup.string(),
})

type FormData = yup.InferType<typeof schema>

export default function TodoForm() {
  const dispatch = useAppDispatch()
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('/api/todos', data)
      
      const newTodo = {
        title: data.title,
        description: data.description || undefined,
        dueDate: data.dueDate || undefined,
        completed: false,
      }
      
      dispatch(addTodo(newTodo))
      toast.success('Todo added successfully!')
      form.reset()
    } catch (error) {
      toast.error('Failed to add todo')
      console.error('Error adding todo:', error)
    }
  }

  return (
    <StyledCard>
      <CardContent>
        <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
          <TextField
            label="Title"
            {...form.register('title')}
            error={form.formState.errors.title ? true : false}
            helperText={form.formState.errors.title ? form.formState.errors.title.message : ''}
            fullWidth
            required
          />
          <TextField
            label="Description"
            {...form.register('description')}
            error={form.formState.errors.description ? true : false}
            helperText={form.formState.errors.description ? form.formState.errors.description.message : ''}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            label="Due Date"
            type="date"
            {...form.register('dueDate')}
            error={form.formState.errors.dueDate ? true : false}
            helperText={form.formState.errors.dueDate ? form.formState.errors.dueDate.message : ''}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <StyledButtonBox>
            <Button type="button" variant="outlined" onClick={() => form.reset()}>
              Clear
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add Todo
            </Button>
          </StyledButtonBox>
        </StyledForm>
      </CardContent>
    </StyledCard>
  )
}

