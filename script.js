// Bring basic elements to use
const displayScore = document.querySelector("#score")
const moves = document.querySelector("#moves")
const restart = document.querySelector("#restart")
const stack = document.querySelector("#stack")

let score = 0
let move = 0
let minimum = 15


// Move active disk to other stack
for (i=0; i<3; i++) {
    const items = document.createElement("div")
    items.setAttribute("value", i)
    items.setAttribute("class", "stacks")
    stack.appendChild(items)
}
const stacks = document.querySelectorAll(".stacks")

stacks.forEach(stack => {
    stack.addEventListener("click", stackClicked)
})

function stackClicked(event) {
    const clickedStack = event.target
    const activeStack = document.querySelector(".activeStack")
    if (clickedStack !== activeStack) {
        const activeDisk = activeStack.childNodes[0]
        clickedStack.prepend(activeDisk)
        clickedStack.classList.remove("activeStack")
        activeDisk.classList.remove("activeDisk")
    }

}



// Activate disks when the user choose 
for (i=0; i<6; i++) {
    const items = document.createElement("div")
    items.setAttribute("id", i)
    items.setAttribute("class", "disks")
    items.style.width = "100%"
    stacks[0].appendChild(items)
}
const disks = document.querySelectorAll(".disks")

disks.forEach(disk => {
    disk.addEventListener("click", diskClicked)
})

function diskClicked(event) {
    const clickedDisk = event.target
    if (clickedDisk === clickedDisk.parentNode.firstChild) {
        clickedDisk.classList.add("activeDisk")
        clickedDisk.parentNode.classList.add("activeStack")
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
