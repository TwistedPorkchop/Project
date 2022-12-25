import '../App.css';

window.addEventListener('load', () => {
    var color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const elements = document.querySelectorAll('.Arcade');
    elements.forEach((element) => {
      element.style.backgroundColor = color;
      color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
  });
  


   

   let statePlayable = ["rock", "paper", "scissors"];

    //set var for each players points

   var player1Points = 0;
   var player2Points = 0;

    //set in array all possibilities of victory for player 1

   let winCondition = [
   [statePlayable[1], statePlayable[0]],
   [statePlayable[2], statePlayable[1]],
   [statePlayable[0], statePlayable[2]]
    ];

    function checkWin(playP1, playP2) {

      //set in array th plays of p1 and p2
    
      let round = [playP1, playP2];
    
      //get all element by the id / there is a cleaner method
    
      let resultText = document.getElementById("result");
    
      let player1Text = document.getElementById("player1");
    
      let player2Text = document.getElementById("player2");
    
      //apply text to show moves of two player
    
      document.getElementById("play").textContent = playP1 + " - " + playP2;
    
     
    
      //check if the 2 state are the same. if it is, its a draw
    
      if (playP1 === playP2) {
    
        resultText.textContent = "Result : Draw";
    
      } 
      
  //else we check for each posibilities of win condition if player 1 won

  else if (

    JSON.stringify(round) === JSON.stringify(winCondition[0]) 

  ||JSON.stringify(round) === JSON.stringify(winCondition[1]) ||

    JSON.stringify(round) === JSON.stringify(winCondition[2])

  ) {

    player1Points += 1;

    resultText.textContent = "Result : Player 1 Win";

    player1Text.textContent = "Player 1 : " + player1Points;

  // else no one if was ok, thats mean player 2 win

  } else {

    player2Points += 1;

    resultText.textContent = "Result : Bot Win";

    player2Text.textContent = "Bot : " + player2Points;

  }

}
function play(state){
  let bot = statePlayable [Math.floor(Math.random()*statePlayable.length)];
  checkWin(state, bot);
}
function Single() {
   // handle the button click event
  //const handleClick = (event) => {
    
  //  };
    
    return (
      <div className="GameZone">
        <div>
          <button className="Arcade" onClick={() => play(statePlayable["0"])}>Rock</button>
          <button className="Arcade" onClick={() => play(statePlayable["1"])}>Paper</button>
          <button className="Arcade" onClick={() => play(statePlayable["2"])}>Scissors</button>
        </div>
        
      <h1 id="play"> </h1>

        <div>
         <h2 id="result">Result : </h2>
         <h2 id="player1"> player : {player1Points}</h2>
         <h2 id="player2"> Bot : {player2Points}</h2>
        </div>

      </div>
      
    );
  }
export default Single;