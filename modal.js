const openModal = document.createElement("button")
openModal.innerText = "About the game"
openModal.setAttribute("id", "openModal")
openModal.setAttribute("class", "modal-buttons")
modalHere.appendChild(openModal)

const modal = document.createElement("div")
modal.setAttribute("id", "modal")
modalHere.appendChild(modal)

const modalTextbox = document.createElement("div")
modalTextbox.setAttribute("id", "modal-textbox")
modal.appendChild(modalTextbox)

const modalH1 = document.createElement("h1")
modalH1.innerText = "What is Tower of Hanoi?"
modalTextbox.appendChild(modalH1)

const paragraph = document.createElement("p")
paragraph.innerHTML = "Tower of Hanoi is a mathematical puzzle where the objective is to move a stack of discs from one rod to another. <br />There are three rules:<li>Only one disk can be moved at a time</li><li>Every move involves taking the top disk from one of the stacks and placing it on top of another stack</li><li>No disk can be put on top of a smaller disk</li>"
modalTextbox.appendChild(paragraph)

const modalFooter = document.createElement("div")
modalFooter.setAttribute("id", "modal-footer")
modalTextbox.appendChild(modalFooter)

const close = document.createElement("button")
close.setAttribute("class", "modal-buttons")
close.setAttribute("id", "close")
close.innerText = "Close"
modalFooter.appendChild(close)

const opening = () => {
  modal.style.display = 'block';
}
const closing = () => {
  modal.style.display = 'none'
}

openModal.addEventListener('click', opening)
close.addEventListener('click', closing)