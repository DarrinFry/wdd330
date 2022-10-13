const form = document.forms['input'];
form.addEventListener ('submit', amIOldEnough, false);
//form.addEventListener ('submit', squareRoot, false);
form.addEventListener ('submit', imaginarySquareRoot, false);

function amIOldEnough(event){
    event.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    if (age <= 12) {
        alert(age);
        console.log("first alert");
        document.getElementById('resultOutput').innerHTML=`Sorry, ${age} is too young. Go away.`;
        document.getElementById('age').innerHTML = ' ';
    } 
    else if (age <= 18 && age > 12.1) {
        alert(age);
        console.log("second alert");
        document.getElementById('resultOutput').innerHTML=`Your age is ${age}, and you may enter only if you are accompanied by an adult.`;
        document.getElementById('age').innerHTML = ' ';
    }
    else {
        alert(age);
        console.log("third alert");
        document.getElementById('resultOutput').innerHTML=`${age} is just right. Come on in!`;
        document.getElementById('age').innerHTML = ' ';
    }

}

function squareRoot(event) {
    'use strict';
    let number = parseInt(document.getElementById("age").value);
    if (number < 0) {

        document.getElementById('throwError').innerHTML= RangeError(`You can't find the square root of negative numbers`);
        throw new RangeError(`You can't find the square root of negative numbers`);

    } else {

        let returnValue = Math.sqrt(number);
        document.getElementById('throwError').innerHTML= `The square root of  ${number} is ${returnValue}` ;
        return returnValue

    }

}
function imaginarySquareRoot(number) {
    'use strict';
    let inputNumber = parseInt(document.getElementById("age").value);
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        document.getElementById('tryCatch').innerHTML= `The square root of  ${inputNumber} is ${answer}` ;
        //return `+ or - ${answer}`;
    }
}




