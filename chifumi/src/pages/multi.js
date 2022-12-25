//const axios = require('axios').default;
import axios from "axios";
import player from "./home"

async function getmatches(){
 try {
  let res = await axios.get("http://fauques.freeboxos.fr:3000/matches");
  console.log(res.data);
  return res;
 }
catch(error){
  console.log(error.res);
  return error.res}
}

async function postmatches(){
  try {
    let res = await axios.post("http://fauques.freeboxos.fr:3000/matches");
    console.log(res.data);
    return res;
   }
  catch(error){
    console.log(error.res);
    return error.res}
}
getmatches();

function Multi(){
    return (
     <div>
       <p>{player}</p>
       <button>join </button>
       <div>
        
       </div>
     </div>
      );
    }


export default Multi;