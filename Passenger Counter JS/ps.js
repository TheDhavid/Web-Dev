let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
}


let saveEl = document.getElementById("save-el")

function save() {
    let countDashSep = count + " - "
    saveEl.textContent += countDashSep
    // my own form of count reset. not using instructor's code
    count = countEl.innerText - countEl.innerText
    countEl.innerText = count
}


