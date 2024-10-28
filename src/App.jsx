import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import RouterComponent from './routes/RouterComponent';

function App() {
  return (
    <Router>
    <div className='main'>
      <RouterComponent />
    </div>
  </Router>
  )
}

export default App
