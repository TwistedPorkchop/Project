import Single from "./single.js";
import Multi from "./multi.js";

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

    // Declare a function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // You would typically make an HTTP request to a server to register the user
        // here, but for the purpose of this example we will just log the values to
        // the console
        console.log(`Username: ${username}, Password: ${password}`);

        // Set formSubmitted to true
        setFormSubmitted(true);
    };

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
        }
        <Outlet />



      </>
    );
}



export default Home;