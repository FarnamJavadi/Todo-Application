'use client'

import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect } from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
}))

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error(props: ErrorProps) {
  useEffect(() => {
    console.error(props.error)
  }, [props.error])

  const errorMessage = props.error ? props.error.message : 'An unexpected error occurred'

  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom>
        Something went wrong!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {errorMessage}
      </Typography>
      <Button variant="contained" color="primary" onClick={props.reset}>
        Try again
      </Button>
    </StyledBox>
  )
}

