function generateRandomNumber() {
    const minValue = parseInt(document.getElementById("minValue").value);
    const maxValue = parseInt(document.getElementById("maxValue").value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Будь ласка, введіть коректні числа");
        return;
    }

    const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById("result").innerText = result;
}