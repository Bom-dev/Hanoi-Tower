const displayScore = document.querySelector("#score")
const moves = document.querySelector("#moves")
const restart = document.querySelector("#restart")

let score = 0
let move = 0
let minimum = 15

function updateBoard() {
    displayScore.innerHTML = `<h3>Score: ${score}</h3>`
    moves.innerHTML = `<h3>Your Moves: ${move} | Minimum Moves: ${minimum}</h3>`
}

restart.addEventListener("click", () => {
    console.log("Restart button is clicked")
})

updateBoard()