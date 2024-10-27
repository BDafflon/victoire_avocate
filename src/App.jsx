import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './pages/homepage'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route
            exact 
            path="/:page_id?" 
            element={
              <HomePage />
            } 
        />
      
      </Routes> 
    </Router>
)
 
}

export default App