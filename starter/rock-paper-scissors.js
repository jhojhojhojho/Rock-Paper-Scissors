let choices = {Rock: "Scissors", Paper: "Rock" , Scissors: "Paper"}
let wins = 0;
let ties = 0;
let losses = 0;

window.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock-button')
    const paper = document.getElementById('paper-button')
    const scissors = document.getElementById('scissors-button')
    const playerImg = document.getElementById("player-image")
    const winSpan = document.getElementById('wins')
    const tieSpan = document.getElementById('ties')
    const lossSpan = document.getElementById('losses')
    const resetButton = document.querySelector(".game-controls")

    rock.addEventListener('click', () => {
        //returns a choices.Rock, which is a string of "scissors"
        let compChoice = computerChoice()
        //player image
        playerImg.src = "images/rock.png"
        //determine image
        determineCompImg(compChoice)
        //determine win, losses
        outcomes(choices.Rock, compChoice)
        //update win, tie, loss on page
        winSpan.innerHTML = wins
        tieSpan.innerHTML = ties
        lossSpan.innerHTML = losses
    })

    paper.addEventListener('click', () => {
        let compChoice = computerChoice()
        playerImg.src = "images/paper.png"
        //we just copied the the relative path
        determineCompImg(compChoice)
        outcomes(choices.Paper, compChoice)
        winSpan.innerHTML = wins
        tieSpan.innerHTML = ties
        lossSpan.innerHTML = losses
    })

    scissors.addEventListener('click', () => {
        let compChoice = computerChoice()
        playerImg.src = "images/scissors.png"
        determineCompImg(compChoice)
        outcomes(choices.Scissors, compChoice)
        winSpan.innerHTML = wins
        tieSpan.innerHTML = ties
        lossSpan.innerHTML = losses
    })

    resetButton.addEventListener('click', () => {
        //we reset first
        wins = 0;
        ties = 0;
        losses = 0;
        //then we update the HTML to 0
        winSpan.innerHTML = wins
        tieSpan.innerHTML = ties
        lossSpan.innerHTML = losses
    })
})


const outcomes = function (player, computer) {
    if (computer === player){
        ties++
    } else if (computer === choices[player]){
        wins++
    } else losses++
    console.log(wins, ties, losses)
}


const determineCompImg = function (compChoice) {
    //when player clicks on rock button, we want to:
    /*
    change img.src of the player DONE
    change img.src of the computer
        we want to know the computer move. is it rock, paper, or scissor.
        what do we have so far? computerChoice() => "ROCK", "PAPER" OR "SCISSOR"
            let choices = {Rock: "Scissors", Paper: "Rock" , Scissors: "Paper"}
            When the string === "Scissors", computer move = Rock
            When the string === "Rock", computer move = Paper
            When the string === "Paper", computer move = Scissors
        then we change the src of img DEPENDING ON THE CHOICE.
    */
    const computerImg = document.getElementById('computer-image')
    if(compChoice === "Scissors") {
        computerImg.src = "images/rock.png"
    }
    if(compChoice === "Rock") {
        computerImg.src = "images/paper.png"
    }
    if(compChoice === "Paper") {
        computerImg.src = "images/scissors.png"
    }
}


const computerChoice = function (){
//we don't need to pass choices obj because it's global
    const computerChoice = Math.floor(Math.random() * Math.floor(3));

    if(computerChoice === 0) return choices.Scissors
    if(computerChoice === 1) return choices.Rock
    if(computerChoice === 2) return choices.Paper
}
// console.log(computerChoice())
//  we don't need to pass choices obj because it's global

// console.log(outcomes(choices.Rock, choices.Rock)) //tie
// console.log(outcomes(choices.Paper, choices.Scissors)) //computer
// console.log(outcomes( choices.Rock, choices.Scissors)) //player
