import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import private_messaging from './private_messaging.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App/>}></Route>
      <Route path = "/messages" element = {<private_messaging/>}></Route>
      
    </Routes>
  </BrowserRouter>
)
