const browserNote = document.createElement("div")

createBrowserNote()

function createBrowserNote(){
    browserNote.classList.add("isHidden", "sideNote")
    browserNote.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum officiis commodi. Ad tempore dolorum nulla? Voluptatem, aut! Ullam debitis natus quo ipsa fugit hic beatae culpa quisquam et nihil"
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

