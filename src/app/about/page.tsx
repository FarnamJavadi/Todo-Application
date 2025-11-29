'use client'

import { Box, Typography, Container, Card, CardContent } from '@mui/material'
import { styled } from '@mui/material/styles'
import Navigation from '@/components/Navigation'

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}))

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
}))

const StyledTitle = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}))

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <StyledContainer maxWidth="md">
        <StyledCard>
          <CardContent>
            <StyledTitle variant="h4" component="h1">
              About Todo Application
            </StyledTitle>
            <Typography variant="body1" paragraph>
              This Todo Application is a task management system built with Next.js.
            </Typography>
            <Typography variant="body1" paragraph>
              It helps you organize your tasks and stay productive.
            </Typography>
          </CardContent>
        </StyledCard>

        <StyledCard>
          <CardContent>
            <StyledTitle variant="h5" component="h2">
              Features
            </StyledTitle>
            <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
              <li>Add, edit, and delete todos</li>
              <li>Mark tasks as complete or pending</li>
              <li>Set due dates for tasks</li>
              <li>Filter and sort todos</li>
              <li>Local data persistence</li>
              <li>Real-time notifications</li>
            </Typography>
          </CardContent>
        </StyledCard>

        <StyledCard>
          <CardContent>
            <StyledTitle variant="h5" component="h2">
              Technologies Used
            </StyledTitle>
            <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
              <li>Next.js 14 (App Router)</li>
              <li>React 18</li>
              <li>Redux Toolkit</li>
              <li>React Hook Form + Yup</li>
              <li>Material UI</li>
              <li>Moment.js</li>
              <li>React Toastify</li>
              <li>TypeScript</li>
            </Typography>
          </CardContent>
        </StyledCard>

        <StyledCard>
          <CardContent>
            <StyledTitle variant="h5" component="h2">
              Developer Information
            </StyledTitle>
            <Typography variant="body1" paragraph>
              This application helps you manage your daily tasks and todos.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Version 1.0.0
            </Typography>
          </CardContent>
        </StyledCard>
      </StyledContainer>
    </>
  )
}

