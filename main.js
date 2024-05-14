/*
Set up two different variables with different values.
• Call a function with these variables as arguments and output the result using console.log.
• Create a second call to the function with two more numbers as arguments.*/
function addNumbers(num1, num2) {
    return num1 + num2;
}
let firstNumber = 5;
let secondNumber = 3;
console.log("The sum of the first two numbers is:", addNumbers(firstNumber, secondNumber));
let thirdNumber = 7;
let fourthNumber = 2;
// Create a second call to the function with the new numbers as arguments
console.log("The sum of the second two numbers is:", addNumbers(thirdNumber, fourthNumber));
export {};
