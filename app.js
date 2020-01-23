const keyCode = document.getElementById("keyedIn");
const keyEventPlaceholder = document.getElementById("keyEventPlaceholder");
const whichEventPlaceholder = document.getElementById("whichEventPlaceholder");
const codeEventPlaceholder = document.getElementById("codeEventPlaceholder");

keyCode.addEventListener("keydown", () => {
    keyCode.value = "";
    eventKey = event.key;
    keyEventPlaceholder.textContent = eventKey;
    whichCode = event.code;
    whichEventPlaceholder.textContent = whichCode;
    key = event.keyCode;
    codeEventPlaceholder.textContent = key;
});
