import './App.css';
import Home from './pages/home.js';
import Single from './pages/single';
import Multi from './pages/multi';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
/*
http://fauques.freeboxos.fr:3000/
*/
export default App;
