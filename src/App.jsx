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
import { Navigate } from "react-router-dom";


function App() {
 


  return (
    <Router>
      <Routes>
      <Route
          exact
          path="/"
          element={
            <HomePage page_id={"lecabinet"} />
          }
        />
        <Route
          exact
          path="/lecabinet"
          element={
            <HomePage page_id={"lecabinet"} />
          }
        />
        <Route
          exact
          path="/domainesdecompetences"
          element={
            <HomePage page_id={"domainesdecompetences"} />
          }
        />
        <Route
          exact
          path="/honoraire"
          element={
            <HomePage page_id={"honoraire"} />
          }
        />
         <Route
          exact
          path="/contact"
          element={
            <HomePage page_id={"contact"} />
          }
        />
         <Route
          exact
          path="/mention"
          element={
            <HomePage page_id={"mention"} />
          }
        />
        <Route
          exact
          path="/information"
          element={
            <HomePage page_id={"information"} />
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" replace={true} />}
        />

      </Routes>
    </Router>
  )

}

export default App