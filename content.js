const browserNote = document.createElement("div")

createBrowserNote()

function createBrowserNote(){
    browserNote.classList.add("isHidden", "sideNote", "resizable")
    browserNote.innerHTML = `<form>
                                <input type="text" id="noteTitle" name="Title" placeholder="Title"><br>
                                
                                <textarea id="noteArea" name="Note" placeholder="Note something here"></textarea>
                                <button id="saveBtn">Save</button>`
    document.body.append(browserNote)
}

// Event msg received from background when user click extension icon
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.event ==="extensionBtnClicked")
        sendResponse({content_js_response : "Ok je fais le necessaire"})

        toggle(browserNote, "isHidden")
    }
)

// Utility Functions 

// Multi purpose Toggle function
function toggle(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

// Storage Logic

let titleContent = document.getElementById("noteTitle")
let noteContent = document.getElementById("noteArea")
const saveBtn = document.getElementById("saveBtn")

saveBtn.addEventListener("click", () => {
    let key = titleContent.value 
    let valeur = noteContent.value

    chrome.storage.local.set({[key]: valeur}) // To use a variable as a key [] are needed, it's called computed property
})


// Features to add:
// ----------------
// Alert when user quit or refresh and content not saved
// Menu to open older notes
// when page with a note matched , show that note

