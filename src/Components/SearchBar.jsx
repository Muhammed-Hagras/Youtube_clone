import { IconButton, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper component={"form"}
    onSubmit={()=>{}}
    sx={{
        borderRadius: 20,
        border: "1ps solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: {m: 5},
    }}>
        <input 
        placeholder="Search..."
        className='search-bar'
        // value={searchterm}
        onChange={()=>{}}
        />
        <IconButton type="submit" sx={{p:"10px", color:"red"}} arial-label="search">
            <SearchIcon/>
        </IconButton>
            

    </Paper>
  )
}
