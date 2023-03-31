function generateRandomNumber() {
    const minValue = parseInt(document.getElementById("minValue").value);
    const maxValue = parseInt(document.getElementById("maxValue").value);
    const numberType = document.querySelector('input[name="numberType"]:checked').value;
    const includeBoundaries = document.getElementById("includeBoundaries").checked;

    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Будь ласка, введіть коректні числа");
        return;
    }

    let min = minValue;
    let max = maxValue;

    if (!includeBoundaries) {
        min = minValue + 1;
        max = maxValue - 1;
    }

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (numberType === 'even') {
        result = result % 2 === 0 ? result : result - 1;
        if (result < min) {
            result += 2;
        }
    } else if (numberType === 'odd') {
        result = result % 2 !== 0 ? result : result - 1;
        if (result < min) {
            result += 2;
        }
    }

    document.getElementById("result").innerText = result;
}