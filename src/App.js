import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Feed, Navbar } from './Components';

function App() {
  return (
   <BrowserRouter>
   <Box sx={{backgroundColor: "#000"}}>
   <Navbar/>
   <Routes>
    <Route path='/' exact element={<Feed/>}></Route>
   </Routes>
   </Box>
   </BrowserRouter>
  );
}

export default App;
