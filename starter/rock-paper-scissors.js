window.addEventListener('DOMContentLoaded', () => {

const rock = document.getElementById('rock-button')
const paper = document.getElementById('paper-button')
const scissors = document.getElementById('scissors-button')

// let choices = {Rock: "Scissors", Paper: "Rock" , Scissors: "Paper"}

const outcomes = function (player, computer) {
    if(computer === player){
        //add event listeners for the clicks
        return "it's a tie"
    }
    if(computer === choices[player]){
        return "Player wins"
    }
    return "Computer wins"
}

rock.addEventListener('click', () => {
    outcomes()
})






console.log(outcomes(choices.Rock, choices.Rock)) //tie
// console.log(outcomes(choices.Paper, choices.Scissors)) //computer
// console.log(outcomes( choices.Rock, choices.Scissors)) //player

const randomOutcome = function (computer){

}

})
