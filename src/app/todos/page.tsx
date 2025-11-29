'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import { Box, Typography, Button, Card, CardContent } from '@mui/material'
import { styled } from '@mui/material/styles'
import Navigation from '@/components/Navigation'

import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'
import FilterBar from '@/components/FilterBar'

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
}))

const StyledContent = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}))

const ErrorBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
}))

const ErrorCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  padding: theme.spacing(3),
}))

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false, error: undefined }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error ? this.state.error.message : 'An unexpected error occurred'
      return (
        <ErrorBox>
          <ErrorCard>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Something went wrong
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {errorMessage}
              </Typography>
              <Button variant="contained" color="primary" onClick={this.handleReset}>
                Try Again
              </Button>
            </CardContent>
          </ErrorCard>
        </ErrorBox>
      )
    }
    return this.props.children
  }
}

export default function TodosPage() {
  return (
    <ErrorBoundary>
      <Navigation />
      <StyledContainer>
        <StyledContent>
          <TodoForm />
          <FilterBar />
          <TodoList />
        </StyledContent>
      </StyledContainer>
    </ErrorBoundary>
  )
}

