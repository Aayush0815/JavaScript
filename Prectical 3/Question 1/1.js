function add(x, y) 
    {
        return x + y;
    }
function subtract(x, y) 
    {
        return x - y;
    }
function multiply(x, y) 
    {
        return x * y;
    }
function divide(x, y) 
    {
        if (y === 0) 
            {
                return "Error!";
            } 
        else 
            {
                return x / y;
            }
}

function calculator() 
{
    const choice = prompt("Enter choice (+, -, *, /): ");
    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));

    let result;

    switch (choice) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid input";
            break;
    }

    console.log("Result:", result);
}

calculator();