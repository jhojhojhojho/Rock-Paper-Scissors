

// window.addEventListener('DOMContentLoaded', () => {

// const rock = document.getElementById('rock-button')
// const paper = document.getElementById('paper-button')
// const scissors = document.getElementById('scissors-button')

let choices = {Rock: "Scissors", Paper: "Rock" , Scissors: "Paper"}

const outcomes = function (player, computer) {
    if(randomOutcome(choice) === player){
        //add event listeners for the clicks
        return "it's a tie"
    }
    if(computer === choices[player]){
        return "Player wins"
    }
    return "Computer wins"
}

// rock.addEventListener('click', () => {
//     outcomes()
// })
// console.log(outcomes(choices.Rock, choices.Rock)) //tie
// console.log(outcomes(choices.Paper, choices.Scissors)) //computer
// console.log(outcomes( choices.Rock, choices.Scissors)) //player

// let choices = {Rock: "Scissors", Paper: "Rock" , Scissors: "Paper"}

const randomOutcome = function (choices){
    const computerChoice = Math.floor(Math.random() * Math.floor(3));

    if(computerChoice === 0) return choices.Scissors
    if(computerChoice === 1) return choices.Rock
    if(computerChoice === 2) return choices.Paper
}
// console.log(randomOutcome(choices))



// })
