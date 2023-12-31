import React from 'react';
import './App.css'
import Layout from './components/layout/Layout';
import Resume from './resume/Resume';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 function App() {
  return (
    
   
    <Router>
      {/* <Layout/> */}
    <Routes>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/" element={<Layout />}/>
    </Routes>
  </Router>
  )
}

export default App
