// Function to check if a number is positive, negative, or zero
function Number(number) 
{
    if (number > 0) 
    {
        return "The number is positive.";
    } else if (number < 0) 
    {
        return "The number is negative.";
    } else 
    {
        return "The number is zero.";
    }
}


let Check = prompt("Enter a number:");
let result = Number(Check);
console.log(result);