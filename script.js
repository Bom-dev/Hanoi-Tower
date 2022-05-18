// Bring basic elements to use
const displayScore = document.querySelector("#score")
const moves = document.querySelector("#moves")
const restart = document.querySelector("#restart")
const stack = document.querySelector("#stack")
const scroll = document.querySelector("#scroll")

let score = localStorage.getItem("score")
let move = 0
let input


// Set color palette to use
const colors = ["#fe938c", "#e6b89c", "#ead2ac", "#9cafb7", "#4281a4", "#22333b"]


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


// Create selection to choose number of disks
const select = document.createElement("select")
scroll.appendChild(select)
const start = document.createElement("button")
start.innerText = "Start!"
scroll.appendChild(start)

for (i=3; i<7; i++) {
    const option = document.createElement("option")
    option.setAttribute("value", i)
    option.innerText = `${i} Disks`
    select.appendChild(option)
}


// Create disks and set attribute & styles
start.addEventListener("click", setting)

function setting() {
    startTimer()
    stacks[0].innerHTML = ''
    input = select.value
    let newMinimum = Math.pow(2, input) - 1
    minimum = newMinimum
    scroll.classList.add("hidden")
    for (i=0; i<input; i++) {
        items = document.createElement("div")
        const wi = ((i + 1) * 15) + "%"
        items.setAttribute("id", i)
        items.setAttribute("class", "disks")
        items.addEventListener("click", diskClicked)
        items.style.backgroundColor = colors[i]
        items.style.width = wi
        stacks[0].appendChild(items)
} 
}


// Activate disks when the user choose 
const disks = document.querySelectorAll(".disks")
let minimum = Math.pow(2, input) - 1

disks.forEach(disk => {
    disk.addEventListener("click", diskClicked)
})

function diskClicked(event) {
    if (scroll.classList.contains("hidden")) {
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
}}


// Check winning
function winning() {
    input = select.value
    if ((stack.childNodes[1].childNodes.length === parseInt(input) || stack.childNodes[2].childNodes.length === parseInt(input))) {
        alert("You Win!")
        reset()
        // Store time based score 
        let timeValue = parseInt(timer.innerText)
        let timeBonus = (10 - timeValue)
        let newScore = (parseInt(score) + 100 + (10 * timeBonus))
        localStorage.setItem("score", newScore)
        updateBoard()
        clearInterval(timerInterval)
    }
}


// Set timer
const timer = document.getElementById("timer")
let timerInterval;

function startTimer() {
    clearInterval(timerInterval)
    let second = 0, minute = 0, hour = 0
    timerInterval = setInterval(() => {
        timer.innerHTML =
        (hour ? hour + ":" : "") + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)
        second++
        if (second == 60) {
            minute++;
            second = 0;
    }
    if (minute == 60) {
        hour++;
        minute = 0;
    }
}, 1000)}


// Update board 
function updateBoard() {
    displayScore.innerHTML = `<h3>Score: <span>${localStorage.getItem("score")}</span></h3>`
    moves.innerHTML = `<h3>Your Moves: <span>${move}</span> | Minimum Moves: <span>${minimum}</span></h3>`
}
updateBoard()


// Set restart button 
function reset() {
    scroll.classList.remove("hidden")
    stacks[0].innerHTML = ''
    input = select.value
    let newMinimum = Math.pow(2, input) - 1
    minimum = newMinimum
    for (i=0; i<input; i++) {
        items = document.createElement("div")
        const wi = ((i + 1) * 15) + "%"
        items.setAttribute("id", i)
        items.setAttribute("class", "disks")
        items.addEventListener("click", diskClicked)
        items.style.backgroundColor = colors[i]
        items.style.width = wi
        stacks[0].appendChild(items)
    }
    stacks[1].innerHTML = ''
    stacks[2].innerHTML = ''
    stack.childNodes[0].classList.remove("activestack")
    stack.childNodes[0].childNodes[0].classList.remove("activeDisk")
    move = 0
    updateBoard()
    clearInterval(timerInterval)
}
restart.addEventListener("click", reset)
