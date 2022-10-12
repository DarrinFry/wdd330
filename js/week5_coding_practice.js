const form = document.forms['input'];
form.addEventListener ('submit', amIOldEnough, false);

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


