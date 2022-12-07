import Single from "./single.js";
import Multi from "./multi.js";

import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Link
  } from "react-router-dom";

function Home(){
    return(
        <>
        <nav>
            <div className="App">
                <div className="buttons">
                    <Link to="/single"><button className="rounded-button">Single-Player</button></Link>
                    <Link to="/multi"><button className="rounded-button">Multiplayer</button></Link>
                </div>
            </div>
        </nav>
      <Outlet />
      </>
    );
}

export default Home;