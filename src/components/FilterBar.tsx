'use client'

import React from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useFilter } from '@/components/Providers'
import { FilterStatus, SortOption } from '@/store/todoSlice'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap',
}))

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  },
}))

export default function FilterBar() {
  const filterContext = useFilter()
  const filterStatus = filterContext.filterStatus
  const sortOption = filterContext.sortOption
  const setFilterStatus = filterContext.setFilterStatus
  const setSortOption = filterContext.setSortOption

  const handleFilterChange = function(event: SelectChangeEvent<FilterStatus>) {
    const newValue = event.target.value as FilterStatus
    setFilterStatus(newValue)
  }

  const handleSortChange = function(event: SelectChangeEvent<SortOption>) {
    const newValue = event.target.value as SortOption
    setSortOption(newValue)
  }

  return (
    <StyledBox>
      <StyledFormControl>
        <InputLabel>Filter by Status</InputLabel>
        <Select
          value={filterStatus}
          label="Filter by Status"
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Sort by</InputLabel>
        <Select
          value={sortOption}
          label="Sort by"
          onChange={handleSortChange}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="dueDate">Due Date</MenuItem>
          <MenuItem value="createdAt">Created Date</MenuItem>
        </Select>
      </StyledFormControl>
    </StyledBox>
  )
}

