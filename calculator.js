const display = document.getElementById("display");

function addToDisplay(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    display.value = eval(display.value);
}