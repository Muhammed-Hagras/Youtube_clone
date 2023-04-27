import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

export default function Sidebar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack 
    direction="row"
    sx={{
        overflow: "auto",
        height: {sx: "auto", md: "95%"},
        flexDirection: {md: "column"}
    }}>
        {categories.map(cat => (
            <button 
            onClick={()=>setSelectedCategory(cat.name)}
            className='category-btn'
            style={{
                background: cat.name === selectedCategory && "#FC1503",
                color: "white"
            }}
            key = {cat.name}
            >
                <span style={{color: cat.name === selectedCategory ? "white" : 
            "red", marginRight : "15px"}}>{cat.icon}</span>
                <span style={{opacity: cat.name === selectedCategory ? "1" :"0.8" }}>{cat.name}</span>

            </button> 
        ))}
    </Stack>
    
  )
}
