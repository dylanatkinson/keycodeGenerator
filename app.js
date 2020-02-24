const keyCode = document.getElementById("keyedIn");
const keyEventPlaceholder = document.getElementById("keyEventPlaceholder");
const whichEventPlaceholder = document.getElementById("whichEventPlaceholder");
const codeEventPlaceholder = document.getElementById("codeEventPlaceholder");
const keyedPlaceholder = document.getElementById("keyedPlaceholder");

let keyedHistory = [];

keyCode.addEventListener("keypress", () => {
    // resets the input box once the key has been pressed, showing only one key at a time
    keyCode.value = "";

    // assigns keypresses to variables then displays them separately based on actual value, key code, and key name 
    eventKey = event.key;
    keyEventPlaceholder.textContent = eventKey;
    whichCode = event.code;
    whichEventPlaceholder.textContent = whichCode;
    key = event.keyCode;
    codeEventPlaceholder.textContent = key;

    // stores the history of the keypress into an array, then displays it
    keyedHistory += eventKey;
    keyedPlaceholder.textContent = keyedHistory;
});
