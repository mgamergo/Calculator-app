let userInput = document.getElementById('inputElement');

function allClear() {
    userInput.value = '';
}

function clearOne() {
    let input = userInput.value;
    input = input.slice(0,-1);
    userInput.value = input;
}

function enterValue(arg) {
    userInput.value += arg
}

function claculate() {
    let answer = eval(userInput.value);
    userInput.value = answer;
}