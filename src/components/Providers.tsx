'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createContext, useContext, useState, ReactNode } from 'react'
import { FilterStatus, SortOption } from '@/store/todoSlice'

interface FilterContextType {
  filterStatus: FilterStatus
  sortOption: SortOption
  setFilterStatus: (status: FilterStatus) => void
  setSortOption: (option: SortOption) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

const FilterProvider = function(props: { children: ReactNode }) {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')
  const [sortOption, setSortOption] = useState<SortOption>('none')

  const contextValue = {
    filterStatus: filterStatus,
    sortOption: sortOption,
    setFilterStatus: setFilterStatus,
    setSortOption: setSortOption,
  }

  return (
    <FilterContext.Provider value={contextValue}>
      {props.children}
    </FilterContext.Provider>
  )
}

export const useFilter = function() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}

const theme = createTheme()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <FilterProvider>
          {children}
        </FilterProvider>
      </Provider>
    </ThemeProvider>
  )
}

