'use client'

import Link from 'next/link'
import { Box, Typography, Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
}))

export default function NotFound() {
  return (
    <StyledBox>
      <StyledContainer maxWidth="sm">
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The page you are looking for does not exist.
        </Typography>
        <Link href="/">
          <Button variant="contained" color="primary">
            Go Home
          </Button>
        </Link>
      </StyledContainer>
    </StyledBox>
  )
}

