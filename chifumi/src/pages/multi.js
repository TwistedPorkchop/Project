//const axios = require('axios').default;
import axios from "axios";
import player from "./home"
import { JWTtoken } from "../App";


async function getmatches(){
 try {
 
  let res = await axios.get("http://fauques.freeboxos.fr:3000/matches", {
    headers: {'Authorization': `Bearer ${JWTtoken}`
  }
  })

  console.log(res.data);
  return res;
 }
catch(error){

  return error.res}
}

getmatches();

function Multi(){
    return (
     <div>
       <p>{player}</p>
       <button onClick={() => console.log(JWTtoken)}>join </button>
       <div>

       </div>
     </div>
      );
    }


export default Multi;