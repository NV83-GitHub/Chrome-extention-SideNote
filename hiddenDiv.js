// 1. immediatly on load , create a div id="sidenote" with a class of hidden
// 2. Add it to the dom on the right side 
// 3. On click , toggle on and of the hidden class

const btn = document.getElementById("test-btn")
const body = document.querySelector("body")
const newDiv = document.createElement("div")

btn.addEventListener("click", () => toggleHidden(newDiv, "isHidden"))
addDiv()

function addDiv() {
    newDiv.classList.add("isHidden", "sideNote")
    newDiv.innerText = "lol"
    body.append(newDiv)
}

function toggleHidden(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

