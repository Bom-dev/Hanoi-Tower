// Bring basic elements to use
const displayScore = document.querySelector("#score")
const moves = document.querySelector("#moves")
const restart = document.querySelector("#restart")
const stack = document.querySelector("#stack")

let score = 0
let move = 0


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
        activeStack.classList.remove("activeStack")
        activeDisk.classList.remove("activeDisk")
        move++
        updateBoard()
    }

}

let input = 6

// Activate disks when the user choose 
for (i=0; i<input; i++) {
    const items = document.createElement("div")
    const wi = ((i + 1) * 13.5) + "%"
    items.setAttribute("id", i)
    items.setAttribute("class", "disks")
    items.style.width = wi
    stacks[0].appendChild(items)
}
const disks = document.querySelectorAll(".disks")
let minimum = Math.pow(2, disks.length) - 1

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
    disks.forEach(disk => {
        stack.childNodes[0].appendChild(disk)
    })
    move = 0
    updateBoard()
})
