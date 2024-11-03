var playersScore = 0;
var computerScore = 0;

function getPlayersMove() { 
    let playersMove = document.getElementById('players-move').value
 return playersMove
}

function getComputersMove() {
let moves = ['rock', 'paper', 'scissors']
let randomIndex = Math.floor(Math.random() * moves.length)
let computersMove = moves[randomIndex]
return computersMove
}

function resultWinner(playersMove, computersMove) {
    if (playersMove === computersMove ) {
        alert('its a tie')}
    else if (playersMove == 'rock' && computersMove == 'scissors') {
        alert('YOU WIN')
    playersScore++}
    else if (playersMove == 'paper' && computersMove == 'rock') {
        alert('YOU WIN')
        playersScore++}
    else if (playersMove == 'scissors' && computersMove == 'paper') {
        alert('YOU WIN')
        playersScore++}
    else {alert('YOU LOSE')
        computerScore++
    }
    document.getElementById('playersScore').innerHTML = playersScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}

function playGame() {
resultWinner(getPlayersMove(), getComputersMove())
// callback funtion 
}

function reset() {
    playersScore = 0;
    computerScore = 0;

    document.getElementById('playersScore').innerHTML = playersScore;
    document.getElementById('computerScore').innerHTML = computerScore;
}

