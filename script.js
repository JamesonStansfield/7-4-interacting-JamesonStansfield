/**
 * This file will get loaded by index.html
 */

let clicks = 0;
let clickButton = document.getElementById("clickButton");
let output = document.getElementById("clickMSG");
clickButton.addEventListener('click', doit())
    

function doit() {
    clicks++
    output.textContent = clicks;
}