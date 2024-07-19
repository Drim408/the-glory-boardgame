let economicPower = 15;
let militaryPower = 2;

function updateDisplay() {
    document.getElementById('economic-power').innerText = economicPower;
    document.getElementById('military-power').innerText = militaryPower;
}

function changeEconomicPower(amount) {
    economicPower += amount;
    updateDisplay();
}

function changeMilitaryPower(amount) {
    militaryPower += amount;
    updateDisplay();
}

function calculateWage() {
    economicPower += 3;

    if (economicPower >= 30) {
        economicPower += 3;
    } else if (economicPower >= 25) {
        economicPower += 2;
    } else if (economicPower >= 20) {
        economicPower += 1;
    }

    if (militaryPower > 20) {
        economicPower -= 2;
    } else if (militaryPower > 10) {
        economicPower -= 1;
    }

    updateDisplay();
}

function warVictory() {
    militaryPower -= Math.floor(militaryPower / 5);
    updateDisplay();
}

function warDefeat() {
    militaryPower -= Math.round(militaryPower / 4);
    updateDisplay();
}

updateDisplay();

