import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
function App() {
  
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
