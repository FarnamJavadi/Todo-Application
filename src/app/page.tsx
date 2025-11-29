'use client'

import Link from 'next/link'
import { Box, Typography, Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import Navigation from '@/components/Navigation'

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 64px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#808080',
  padding: theme.spacing(4),
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  color: '#ffffff',
}))

const StyledTitle = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 700,
}))

const StyledDescription = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  marginBottom: theme.spacing(4),
  opacity: 0.9,
}))

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  textTransform: 'none',
}))

export default function Home() {
  return (
    <>
      <Navigation />
      <StyledBox>
        <StyledContainer maxWidth="md">
          <StyledTitle variant="h1" component="h1">
            Welcome to Todo Application
          </StyledTitle>
          <StyledDescription variant="h5" component="p">
            Organize your tasks efficiently with our modern todo management system.
            Stay productive and never miss a deadline.
          </StyledDescription>
          <Box>
            <Link href="/todos">
              <StyledButton variant="contained" color="primary" size="large">
                Get Started
              </StyledButton>
            </Link>
            <Link href="/about">
              <StyledButton variant="outlined" color="inherit" size="large" sx={{ color: 'white', borderColor: 'white' }}>
                Learn More
              </StyledButton>
            </Link>
          </Box>
        </StyledContainer>
      </StyledBox>
    </>
  )
}

