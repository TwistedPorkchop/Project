import './App.css';
import Home from './pages/home.js';
import Single from './pages/single';
import Multi from './pages/multi';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const axios = require('axios').default;

export default function App() {
  return (
    <div id="home">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<></>} />
          <Route path="single" element={<Single />} />
          <Route path="multi" element={<Multi />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
  }

export async function Register(usr, psw) {
  const data = {
    username: usr.toString(),
    password: psw.toString(),
  };

  try {
    const response = await axios.post('http://fauques.freeboxos.fr:3000/register', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  //response
  //"_id": "IDUSER",
  //"username":"token",
  //"password":"password"
}

export async function Login(usr, psw) {
  const data = {
    username: usr.toString(),
    password: psw.toString(),
  };

  try {
    const response = await axios.post('http://fauques.freeboxos.fr:3000/login', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  //response
  //"token":"token"
}
  
/*
http://fauques.freeboxos.fr:3000/
*/