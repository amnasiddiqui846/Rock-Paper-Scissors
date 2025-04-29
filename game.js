
let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    lose: 0,
    tie: 0,
}
updateScore()
function ResetScore(){
    score.win = 0
    score.lose = 0
    score.tie = 0
    localStorage.removeItem('score')  
     updateScore()
        
}
function playGame(playerMove) {
    let computerMove = pickComputerMove()
    let result = ''
    if (playerMove == "Rock") {
        if (computerMove == "Rock") {
            result = "tie"
        }
        else if (computerMove == 'Paper') {
            result = "lose"
        }
        else {
            result = "win"
        }
    }
    else if (playerMove == "Paper") {
        if (computerMove == "Rock") {
            result = "win"
        }
        else if (computerMove == "Paper") {
            result = "tie"
        }
        else {
            result = "lose"
        }
    }
    else {
        if (computerMove == "Rock") {
            result = "lose"
        }
        else if (computerMove == "Paper") {
            result = "win"
        }
        else {
            result = "tie"
        }
    }

    if (result == "win") {
        score.win += 1
    }
    else if (result == 'lose') {
        score.lose += 1
    }
    else {
        score.tie += 1
    }
    localStorage.setItem('score', JSON.stringify(score))
  
    document.getElementById('computerMove').innerHTML = `Player Move: ${playerMove} , Computer Move: ${computerMove}`
    document.getElementById('result').innerHTML = `Result: ${result}`
    updateScore()


    return result
}

function updateScore(){
 document.getElementById('score').innerHTML = `Wins : ${score.win} Loses : ${score.lose} Ties : ${score.tie}`
}


function pickComputerMove() {
    let randomNumber = Math.random()
    let ComputerMove = ''
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        ComputerMove = 'Rock'
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        ComputerMove = 'Paper'
    }
    else {
        ComputerMove = 'Scissor'
    }
    return ComputerMove
}


