// Bring basic elements to use
const displayScore = document.querySelector("#score")
const moves = document.querySelector("#moves")
const restart = document.querySelector("#restart")

let score = 0
let move = 0
let minimum = 15


// Activate disks when the user choose 
for (i=0; i<5; i++) {
    const items = document.createElement("div")
    items.setAttribute("id", i)
    items.setAttribute("class", "disks")
    items.style.width = "100%"
    stack1.appendChild(items)
}
const disks = document.querySelectorAll(".disks")

disks.forEach(disk => {
    disk.addEventListener("click", clicked)
})

function clicked(event) {
    const clickedDisk = event.target
    if (clickedDisk === clickedDisk.parentNode.firstChild) {
        clickedDisk.classList.toggle("active")
    }
}


// Update board 
function updateBoard() {
    displayScore.innerHTML = `<h3>Score: ${score}</h3>`
    moves.innerHTML = `<h3>Your Moves: ${move} | Minimum Moves: ${minimum}</h3>`
}
updateBoard()


// Set restart button 
restart.addEventListener("click", () => {
    console.log("Restart button is clicked")
})
