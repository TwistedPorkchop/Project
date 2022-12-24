import Single from "./single.js";
import Multi from "./multi.js";
import { Login, Register } from "../App.js";

import React, { useState } from 'react';

import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Link
  } from "react-router-dom";

function Home(){
// Declare state variables for the form values and form submission status
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [formSubmitted, setFormSubmitted] = useState(false);
const [registered, setRegistered] = useState(false);

// Declare a function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();

    {registered ? (
        Login(username, password)
    ) :
    Register(username, password);}

    // Set formSubmitted to true
    setFormSubmitted(true);
};
//To explain the code below.
//We check weather or not the form has been submited before we give users access to the main website
//This is handled using a terniary dependant on the state of formSubmitted
//Next the label is used to togle between register and login
return(
    <>
    {formSubmitted ? (
        <nav>
            <div className="App">
                <div className="buttons">
                    <Link to="/single"><button className="rounded-button">Single-Player</button></Link>
                    <Link to="/multi"><button className="rounded-button">Multiplayer</button></Link>
                </div>
            </div>
        </nav>
    ) :
    <div>
    <form className="arcade-form" onSubmit={handleSubmit}>
    <label className="arcade-label">
    Username:
        <input className="arcade-input" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
    </label>
    <br />
    <label className="arcade-label">
    Password:
        <input className="arcade-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
    </label>
    <br />
        <button className="arcade-button" type="submit">Submit</button>
    </form>

    <label class="switch">
        <input type="checkbox"/>
        <span class="slider round"></span>
    </label>
    </div>

    }
    <Outlet />
    </>
);
}



export default Home;