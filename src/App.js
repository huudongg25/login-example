import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BaseAxios from './api/axiosClient';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import RequiredAuth from './RequireAuth';

function App() {
  const [data, setData] = useState([])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequiredAuth />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
