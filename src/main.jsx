import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './home/home.jsx';
import Moviedisplay from './main/moviedisplay.jsx';
import Seemore from './home/seemore.jsx';
import Teaser from './main/teaser.jsx';
import News from './News/news.jsx';
import Upcoming from './upcoming/upcoming.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/search' element= {<Moviedisplay/>}/>
      <Route path='/seemore' element= {<Seemore/>}/>
      <Route path='/teaser' element={<Teaser/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/upcoming' element={<Upcoming/>}/>
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
