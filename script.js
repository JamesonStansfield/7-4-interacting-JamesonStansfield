/**
 * This file will get loaded by index.html
 */

let clicks = 0;
function updateCount() {
    clicks++;
    document.getElementById("clickMSG").textContent = `You clicked the button ${clicks} times.`;
}