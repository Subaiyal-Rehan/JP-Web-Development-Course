var input = document.getElementById("displayInput");
function getValue(value) {
    input.value += value;
}
function equals() {
    input.value = eval(input.value)
}
function clearValue() {
    input.value = "";
}