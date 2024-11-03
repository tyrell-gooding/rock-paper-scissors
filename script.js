// create a variable to keep track of the score
var playersScore = 0;
var computerScore = 0;
// create an array of game options
let moves = ['rock', 'paper', 'scissors']
// create a funtion for the players move
function getPlayersMove() { 
    let playersMove = document.getElementById('user-input').value
 return playersMove
}
//  create a function for the computers move
function getComputersMove() {
// create the index for the function in order to do the math for randomizing
let randomIndex = Math.floor(Math.random() * moves.length)
let computersMove = moves[randomIndex]
return computersMove
}
// create a funtion for the game results 
function resultWinner(playersMove, computersMove) {
//    create if else statements to decide the games outcome
    if (playersMove === computersMove ) {
        alert(`IT'S A TIE! computers move: ${computersMove}`)}
    else if (playersMove == 'rock' && computersMove == 'scissors') {
        alert(`YOU WIN computers move: ${computersMove}`)
    playersScore++}
    else if (playersMove == 'paper' && computersMove == 'rock') {
        alert(`YOU WIN computers move: ${computersMove}`)
        playersScore++}
    else if (playersMove == 'scissors' && computersMove == 'paper') {
        alert(`YOU WIN computers move: ${computersMove}`)
        playersScore++}
    else {alert(`YOU LOSE computers move: ${computersMove}`)
        computerScore++
    }
    // get element ids to keep track of the score 
    document.getElementById('playersScore').innerHTML = playersScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}
//  create a function that will allow the player to click a play button to run the game
function playGame() {
    let playersMove = getPlayersMove().toLowerCase()
    let computersMove = getComputersMove().toLowerCase()

    if (!moves.includes(playersMove)) { // Check if the player's move is valid
        alert("Invalid move! Please enter Rock, Paper, or Scissor.");
        return; 
    }
    resultWinner(playersMove, computersMove)
// callback funtion 
}
//  create a reset button that will allow the player to reset the game
function reset() {
    playersScore = 0;
    computerScore = 0;
// you need to reset the score and have it display 0's so get the element by id
    document.getElementById('playersScore').innerHTML = playersScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}

