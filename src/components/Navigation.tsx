'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const StyledNavBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}))

const StyledButton = styled(Button)<{ active?: boolean }>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : 'inherit',
  backgroundColor: active ? theme.palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

export default function Navigation() {
  const pathname = usePathname()
  
  const isHomeActive = pathname === '/'
  const isTodosActive = pathname === '/todos'
  const isAboutActive = pathname === '/about'

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          Todo App
        </Typography>
        <StyledNavBox>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton active={isHomeActive}>Home</StyledButton>
          </Link>
          <Link href="/todos" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton active={isTodosActive}>Todos</StyledButton>
          </Link>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton active={isAboutActive}>About</StyledButton>
          </Link>
        </StyledNavBox>
      </StyledToolbar>
    </StyledAppBar>
  )
}

