// let user = {
//     name: 'Darrin',
//     age: 37
// }

//function expression
// user.sayHi = function() {
//     alert("Hello, " + `${user.name}`);
// };

//pre-declared function
// function sayHi() {
//     alert("Hello, " + `${user.name}`);
// };

//Object Literal
let user = {
    name: 'Darrin',
    age: 37,
    sayHi() {
        alert("Hello, " + this.name);
    }
};

// user.sayHi = sayHi;

user.sayHi();