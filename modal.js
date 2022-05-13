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

const paragraph1 = document.createElement("p")
paragraph1.innerHTML = "Tower of Hanoi is a mathematical puzzle where the objective is to move a stack of discs from one rod to another."
modalTextbox.appendChild(paragraph1)

const paragraph2 = document.createElement("p")
paragraph2.innerHTML = "There are three rules:<ul><li>Only one disk can be moved at a time.</li><li>You can only move the top disc in a stack.</li><li>No disk may be placed on top of a smaller disk.</li></ul>"
modalTextbox.appendChild(paragraph2)

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