/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const formEl = document.getElementById("input-section");
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

function getConversionText(baseValue, conversionRate, units) {
    return `${baseValue} ${units[0]} = ${(baseValue * conversionRate).toFixed(3)} ${units[1]} |
    ${baseValue} ${units[1]} = ${ (baseValue / conversionRate).toFixed(3)} ${units[0]}`
}

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const baseValue = inputEl.value
    
    if(baseValue.length >= 1) {
        lengthEl.textContent = getConversionText(baseValue, meterToFeet, ["meters", "feet"]);
        volumeEl.textContent = getConversionText(baseValue, literToGallon, ["liters", "gallons"]);
        massEl.textContent = getConversionText(baseValue, kiloToPound, ["kilos", "pounds"]);
    }
})

formEl.addEventListener("reset", function() {
    lengthEl.textContent = ""; 
    volumeEl.textContent = "";
    massEl.textContent = "";
})