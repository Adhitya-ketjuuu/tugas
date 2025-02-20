function calculate() {
    // Get values from the form
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;

    // Perform calculation based on selected operation
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero!';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    // Display result
    document.getElementById('result').innerText = 'Result: ' + result;
}
function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;

    try {
        // Evaluate the expression entered in the display
        let result = eval(expression);
        
        // If the result is Infinity or NaN, handle the error
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '';
}
