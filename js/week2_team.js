
/* TASK 1
Create a new html file. Add the code necessary to make it a valid document
 Add a text input and a button. Put an empty div with an ID below those.
 Add a script tag, write a function that will read the contents of the input, and write them to the div.
Call the function when the button is pressed.
*/

//declare function
function task1() {
    let input = document.getElementById("task1Input").value;
    let output = document.getElementById("task1Output").innerHTML = input;
    
}

/*TASK 2
Modify your HTML file:
 Write a new function that expects a number as an argument. It should take that number and sum all the numbers up to the number provided. (ie n=5…so it would do 1+2+3+4+5 = 15) It should return that value.
 When the button is pressed it should read the number from the input. Make sure it is a valid number, call the summing function you just wrote, and output the result to the div.
*/

function task2() {
    let input = parseInt(document.getElementById("task2Input").value);
    let output = document.getElementById("task2Output");
    let sumTotal = sum(input);
    output.innerHTML = sumTotal;
}

function sum(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;           
    }
    return total;
}

/*TASK 3
 Create an adding machine
Add an additional input to your HTML file.
Add a + button.
 Write a function that will take the numbers from each input, add them together, and output the result to a div
*/

function task3Addition() {
    let input1 = parseFloat(document.getElementById("task3FirstInput").value);
    let input2 = parseFloat(document.getElementById("task3SecondInput").value);
    let output = document.getElementById("task3Output");
    let total = input1 + input2;
    output.innerHTML = total;

}

/*STRETCH
Part of your reading this week is about Javascript Functions. In Javascript there are several ways to define a function: with a function declaration, a function expression, or an arrow function. Add some more features (subtract, multiply, etc) to your calculator. Make sure to use each of the three methods at least once in your function definitions. Discuss with your team the differences and if there is one you prefer.
*/
function getInputs(number) {
    let input = parseFloat(document.getElementById(number).value);
    return input;
}
function sendOutput(total){
    let output = document.getElementById("task4Output");
    output.innerHTML = total;
}
function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mult(num1, num2){
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function task4(operation){
    let num1 = getInputs('task4FirstInput');
    let num2 = getInputs('task4SecondInput');

    let total = operation(num1, num2);
    sendOutput(total);
}