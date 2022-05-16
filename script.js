// Bring basic elements to use
const displayScore = document.querySelector("#score")
const moves = document.querySelector("#moves")
const restart = document.querySelector("#restart")
const stack = document.querySelector("#stack")
// const scroll = document.querySelector("#scroll")

let score = localStorage.getItem("score")
let move = 0


// Create stocks inside stock div
for (i=0; i<3; i++) {
    const items = document.createElement("div")
    items.setAttribute("value", i)
    items.setAttribute("class", "stacks")
    stack.appendChild(items)
}
const stacks = document.querySelectorAll(".stacks")


// Move active disk to other stack
stacks.forEach(stack => {
    stack.addEventListener("click", stackClicked)
})

function stackClicked(event) {
    const clickedStack = event.target
    const activeStack = document.querySelector(".activeStack")
    if ((clickedStack !== activeStack) && (clickedStack.classList.contains("disks") === false)) {
        const activeDisk = activeStack.childNodes[0]
        if ((clickedStack.childNodes.length === 0) || (activeDisk.id < clickedStack.childNodes[0].id)){
            clickedStack.prepend(activeDisk)
            activeStack.classList.remove("activeStack")
            activeDisk.classList.remove("activeDisk")
            move++
            updateBoard()
            winning()
        }}
}


// Create select to choose number of disks
// const select = document.createElement("select")
// scroll.appendChild(select)

// for (i=3; i<10; i++) {
//     const option = document.createElement("option")
//     option.setAttribute("value", i)
//     option.innerText = `${i} Disks`
//     select.appendChild(option)
// }


// Set disks' number the user choose
let input = 3
    for (i=0; i<input; i++) {
        const items = document.createElement("div")
        const wi = ((i + 1) * 13.5) + "%"
        items.setAttribute("id", i)
        items.setAttribute("class", "disks")
        items.style.width = wi
        stacks[0].appendChild(items)
}


// Activate disks when the user choose 
const disks = document.querySelectorAll(".disks")
let minimum = Math.pow(2, input) - 1

disks.forEach(disk => {
    disk.addEventListener("click", diskClicked)
})

function diskClicked(event) {
    const clickedDisk = event.target
    const parent = clickedDisk.parentNode
    const active = document.querySelectorAll(".activeStack")
    if ((clickedDisk === parent.firstChild) && (active.length === 0)) {
        clickedDisk.classList.add("activeDisk")
        clickedDisk.parentNode.classList.add("activeStack")
    } else {
        clickedDisk.classList.remove("activeDisk")
        clickedDisk.parentNode.classList.remove("activeStack")
    }
}


// Check winning
function winning() {
    if ((stack.childNodes[1].childNodes.length === input || 
        stack.childNodes[2].childNodes.length === input)) {
        alert("You Win!")
        reset()
        let newScore = parseInt(score) +100
        localStorage.setItem("score", newScore)
        updateBoard()
    }
}


// Update board 
function updateBoard() {
    displayScore.innerHTML = `<h3>Score: ${localStorage.getItem("score")}</h3>`
    moves.innerHTML = `<h3>Your Moves: ${move} | Minimum Moves: ${minimum}</h3>`
}
updateBoard()


// Set restart button 
function reset() {
    disks.forEach(disk => {
        stack.childNodes[0].appendChild(disk)
    })
    move = 0
    updateBoard()
}
restart.addEventListener("click", reset)
