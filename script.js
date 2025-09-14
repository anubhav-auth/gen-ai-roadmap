let display = document.getElementById('result');
let currentInput = '';
let operator = '';
let previousInput = '';
let waitingForNewInput = false;

// Initialize display
updateDisplay();

// Append number or operator to display
function appendToDisplay(value) {
    if (waitingForNewInput) {
        if (isOperator(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            waitingForNewInput = false;
            updateDisplay();
            return;
        } else {
            currentInput = '';
            waitingForNewInput = false;
        }
    }

    if (isOperator(value)) {
        if (currentInput === '' && previousInput === '') {
            return; // Don't allow operator as first input
        }
        
        if (currentInput === '' && previousInput !== '') {
            operator = value; // Change operator
            updateDisplay();
            return;
        }

        if (operator && previousInput !== '' && currentInput !== '') {
            calculateResult();
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            waitingForNewInput = false;
        } else {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    } else {
        // Handle decimal point
        if (value === '.') {
            if (currentInput.includes('.')) {
                return; // Don't allow multiple decimal points
            }
            if (currentInput === '') {
                currentInput = '0.';
            } else {
                currentInput += value;
            }
        } else {
            // Handle numbers
            if (currentInput === '0' && value !== '.') {
                currentInput = value; // Replace leading zero
            } else {
                currentInput += value;
            }
        }
    }
    
    updateDisplay();
}

// Check if value is an operator
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

// Update the display
function updateDisplay() {
    if (currentInput !== '') {
        display.value = currentInput;
    } else if (previousInput !== '' && operator !== '') {
        display.value = previousInput + ' ' + getOperatorSymbol(operator);
    } else if (previousInput !== '') {
        display.value = previousInput;
    } else {
        display.value = '0';
    }
}

// Get display symbol for operator
function getOperatorSymbol(op) {
    switch(op) {
        case '*': return '×';
        case '/': return '÷';
        default: return op;
    }
}

// Calculate the result
function calculateResult() {
    if (previousInput === '' || currentInput === '' || operator === '') {
        return;
    }

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) {
        clearDisplay();
        return;
    }

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Error: Division by zero!');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    // Round result to avoid floating point precision issues
    result = Math.round(result * 100000000) / 100000000;
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    waitingForNewInput = true;
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    waitingForNewInput = false;
    updateDisplay();
}

// Delete last character
function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === '') {
            currentInput = '';
        }
    } else if (operator !== '') {
        operator = '';
        currentInput = previousInput;
        previousInput = '';
    }
    updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Prevent default behavior for calculator keys
    if ('0123456789+-*/.='.includes(key) || key === 'Enter' || key === 'Escape' || key === 'Backspace') {
        event.preventDefault();
    }
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === '=' || key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// Add visual feedback for button presses
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});