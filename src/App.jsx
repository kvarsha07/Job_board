import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './Components/Jobs'
import Login from './Components/Login'
import './App.css';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Jobs/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Router>

  );
}

export default App;
