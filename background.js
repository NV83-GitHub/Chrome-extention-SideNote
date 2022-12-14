// La seule tache du Background est de transmettre le click event au content.js 

chrome.action.onClicked.addListener( async () => {
    const [tab] = await chrome.tabs.query({active: true,currentWindow: true})
    const response = await chrome.tabs.sendMessage(tab.id,{event: "extensionBtnClicked"})

    console.log(response)
})