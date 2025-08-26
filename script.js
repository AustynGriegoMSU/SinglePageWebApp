function performCalculations() {
    var inputElement = document.getElementById('enteredBill');
    var value = inputElement.value;

    document.getElementById("tip22").innerHTML = value * 1.22;
    document.getElementById("tip20").innerHTML = value * 1.20;
    document.getElementById("tip18").innerHTML = value * 1.18;
}
