import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
} from "react-router-dom";

import HomePage from './pages/homepage'
import { Navigate } from "react-router-dom";
import SiteMap from './pages/components/sitemap';


function App() {
 


  return (
     
     
      <Routes>
      <Route
          exact
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          exact
          path="/:page_id"
          element={
            <HomePage />
          }
        />
        
        <Route
          exact
          path="/sitemaps.xml"
          element={
            <SiteMap />
          }
        />
         

      </Routes>
   
  )

}

export default App