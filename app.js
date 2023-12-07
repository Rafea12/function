 6.1
 // Step 1: Create a function that takes two parameters, adds them together, and returns the result.
 function addNumbers(number1, number2) {
     return number1 + number2;
 }

 // Step 2: Set up two different variables with two different values.
 let value1 = 5;
 let value2 = 10;

 // Step 3: Use your function on the two variables and output the result using console.log.
 let result1 = addNumbers(value1, value2);
 console.log(`Result 1: ${result1}`);

 // Step 4: Create a second call to the function using two more numbers as arguments.
 let value3 = 8;
 let value4 = 3;

 let result2 = addNumbers(value3, value4);
 console.log(`Result 2: ${result2}`);
 6.2
 // Step 1: Create an array of descriptive words.
 const descriptiveWords = ["awesome", "creative", "friendly", "intelligent", "talented", "amazing"];

 // Step 2: Create a function that contains a prompt asking the user for a name.
 function describeName() {
     // Prompt the user for a name
     const userName = prompt("Please enter a name:");

     // Step 3: Select a random value from the array using Math.random.
     const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
     const randomDescriptor = descriptiveWords[randomIndex];

     // Step 4: Output into the console the prompt value and the randomly selected array value.
     console.log(`The name "${userName}" is ${randomDescriptor}!`);
 }

 // Step 5: Invoke the function.
 describeName();
 6.3
 // Step 1: Set up two variables containing number values.
 let number1 = 10;
 let number2 = 5;

 // Step 2: Set up a variable to hold an operator, either + or -.
 let operator = '+';

 // Step 3: Create a function that retrieves the two values and the operator string value within its parameters.
 function calculate(operation, operand1, operand2) {
     // Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly.
     if (operation === '+' || !operation) {
         return operand1 + operand2;
     } else if (operation === '-') {
         return operand1 - operand2;
     } else {
         return "Invalid operator";
     }
 }

 // Step 4: Within console.log(), call the function using your variables and output the response to the console.
 console.log(`Result 1: ${calculate(operator, number1, number2)}`);

 // Step 5: Update the operator value to be the other operator type—either plus or minus—and call the function again with the new updated arguments.
 operator = '-';
 console.log(`Result 2: ${calculate(operator, number1, number2)}`);
 6.4
 // Step 1: Set up an empty array to store the values that will be calculated within the loop.
 let resultsArray = [];

 // Step 2: Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration.
 for (let i = 0; i < 10; i++) {
     // For the first value, multiply the value of the loop count by 5.
     let value1 = i * 5;
     // For the second value, multiply the value of the loop counter by itself.
     let value2 = i * i;

     // Step 3: Create a function that returns the value of the two parameters passed into the function when it is called.
     // Add the values together, returning the result.
     function calculateSum(param1, param2) {
         return param1 + param2;
     }

     // Step 4: Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a response variable.
     let response = calculateSum(value1, value2);

     // Step 5: Still within the loop, push the result values into the array as it iterates through the loop.
     resultsArray.push(response);
 }

 // Step 6: After the loop is complete, output the value of the array into the console.
 console.log("Array:", resultsArray);

 // Step 7: You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console.
 6.5
 // Step 1: Create a variable 'value' with let and assign a string value of 1000 to it.
 let value = 1000;

 // Step 2: Create an IIFE function and within this function scope assign a new value to a variable of the same name.
 (function() {
     let value = "IIFE Step 2";
     console.log("Step 2 - Local Value:", value);
 })();

 // Step 3: Create an IIFE expression, assigning it to a new 'result' variable, and assign a new value to a variable of the same name within this scope.
 let result = (function() {
     let value = "IIFE Step 3";
     return value;
 })();

 // Invoke the function and print the result variable along with the variable name used.
 console.log("Step 3 - Result Variable:", result);

 // Step 4: Create an anonymous function that has a parameter. Add logic that will assign a passed-in value to the same variable name as the other steps.
 (function(parameterValue) {
     let value = `IIFE Step 4 - ${parameterValue}`;
     console.log(value);
 })("Custom Value");
 6.6
 // Step 1 and 2: Create a recursive function to calculate the factorial.
 function calculateFactorial(number) {
     if (number === 0) {
         return 1;
     } else {
         return number * calculateFactorial(number - 1);
     }
 }

 // Step 3: Invoke the function, providing an argument of whatever number you want to find the factorial of.
 let resuult4 = calculateFactorial(5);

 // Output the result of the calculation to the console.
 console.log(`Factorial of 5: ${result}`);

 // Optionally, print the current value of the argument in the function as it gets invoked.
 function logFactorialSteps(number) {
     if (number === 0) {
         console.log(`Reached 0`);
         return 1;
     } else {
         console.log(`Current Value: ${number}`);
         return number * logFactorialSteps(number - 1);
     }
 }

 logFactorialSteps(5);

 // Step 4: Change and update the number to see how it affects the results.
 let updatedResult = calculateFactorial(3);
 console.log(`Factorial of 3: ${updatedResult}`);
 6.7
 // Step 1: Set the start variable at a value of 10, which will be used as the starting value for the loop.
 let start = 10;

 // Step 2: Create a function that takes one argument, which is the countdown value.
 function countdown(value) {
     // Step 3: Within the function, output the current value of the countdown into the console.
     console.log(`Countdown: ${value}`);

     // Step 4: Add a condition to check if the value is less than 1; if it is, then return the function.
     if (value < 1) {
         return;
     }

     // Step 5: Add a condition to check if the value of the countdown is not less than 1, then continue to loop by calling the function within itself.
     // Step 6: Make sure you add a decrement operator on the countdown so the preceding condition eventually will be true to end the loop.
     countdown(value - 1);
 }

 // Step 7 to 9: Update and create a second countdown using a condition if the value is greater than 0.
 // If it is, decrease the value of the countdown by 1.
 // Use return to return the function, which then invokes it again and again until the condition is no longer true.
 function countdownWithCondition(value) {
     console.log(`Countdown with Condition: ${value}`);

     if (value > 0) {
         // Step 8: Use return to return the function, which then invokes it again and again until the condition is no longer true.
         return countdownWithCondition(value - 1);
     }
 }

 // Step 9: Invoke the countdown functions with the starting value.
 countdown(start);
 countdownWithCondition(start);
 6.8
 // Step 1: Set a variable 'name' and assign a function to it.
 let nameFunctionExpression = function(argument) {
     // Create a function expression with one parameter that outputs a provided argument to the console.
     console.log(argument);
 };

 // Step 2: Pass an argument into the function.
 nameFunctionExpression("Hello from Function Expression!");

 // Step 3: Create the same function as a normal function declaration.
 function nameFunctionDeclaration(argument) {
     console.log(argument);
 }

 // Pass an argument into the function declaration.
 nameFunctionDeclaration("Hello from Function Declaration!");