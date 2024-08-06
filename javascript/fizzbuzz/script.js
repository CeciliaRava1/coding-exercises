/* Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
For numbers which are multiples of both three and five print FizzBuzz.

Computational Thinking:
1. Decomposing the problem into smaller parts.
    a. Take a user's input number
    b. Create a function 'printFizzBuz'
        b1. Iterate from 1 to user's input number
        b2. Print "FizzBuzz" for multiples of three and five
        b3. Print "Fizz" for multiples of three
        b4. Print "Buzz" for multiples of five
    c. Call the function
2. Pattern recognition.
    a. Compare user's input number to know if it multiple of three, five, or both
3. Abstraction: Eliminating the irrelevant and identifying variables that generate patterns.
    a. There's nothing irrelevant
4. Developing the algorithm. */

function printFizzBuzz(USER_INPUT_NUMBER){
    for (let i = 1; i <=USER_INPUT_NUMBER; i++){
        if( i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        } else if(i%3 === 0){
            console.log("Fizz");
        } else if(i%5 === 0 ){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
 
const USER_INPUT_NUMBER = prompt("Please enter a number");
result = printFizzBuzz(USER_INPUT_NUMBER);