
const capacity = 5;
let buffer = [];
let nextToken = 1;
let studentsServed = 0;

function generateToken() {
    if (buffer.length >= capacity) {
        alert("Buffer is full! Please serve a token first.");
        return;
    }

    buffer.push(nextToken);
    nextToken++;

    updateDisplay();
    logActivity("Producer generated a token.");
}

function serveToken() {
    if (buffer.length === 0) {
        alert("No tokens available! Generate a token first.");
        return;
    }

    const token = buffer.shift();
    studentsServed++;

    updateDisplay();
    logActivity("Consumer served Token " + token + ".");
}

function updateDisplay() {
    document.getElementById("queue").textContent =
        buffer.length > 0 ? buffer.join(", ") : "No tokens waiting";

    document.getElementById("tokenCount").textContent =
        buffer.length + " / " + capacity;

    document.getElementById("emptySlots").textContent =
        capacity - buffer.length;

    document.getElementById("fullSlots").textContent =
        buffer.length;

    document.getElementById("studentsServed").textContent =
        studentsServed;
}

function logActivity(message) {
    const log = document.getElementById("activityLog");
    const item = document.createElement("li");

    item.textContent = message;
    log.prepend(item);
}

function resetSystem() {
    buffer = [];
    nextToken = 1;
    studentsServed = 0;

    document.getElementById("activityLog").innerHTML = "";
    updateDisplay();
    logActivity("System reset.");
}

updateDisplay();
