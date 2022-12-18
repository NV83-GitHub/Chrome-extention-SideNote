const browserNote = document.createElement("div")

createBrowserNote()

function createBrowserNote(){
    browserNote.classList.add("isHidden", "sideNote", "resizable")
    browserNote.innerHTML = `<form>
                                <input type="text" id="noteTitle" name="Title" placeholder="Title"><br>
                                
                                <textarea id="noteArea" name="Note" placeholder="Note something here">`
    document.body.append(browserNote)
}

// Event received from background when user click extension icon
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if (request.event ==="extensionBtnClicked")
        sendResponse({content_js_response : "Ok je fais le necessaire"})

        toggleHidden(browserNote, "isHidden")
    }
)

function toggleHidden(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

