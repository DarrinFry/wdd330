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

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

for(const key in superman) {
    console.log(key + ": " + superman[key]);
};


for(const key in superman) {
    if(superman.hasOwnProperty(key)){
        console.log(key + ": " + superman[key]);
    }
};

for(const key of Object.keys(superman)) {
    console.log(key);
};

const jla = {
    superman: { realName: 'Clark Kent' },
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' },
};
jla.wonderWoman.realName;
jla['flash']['realName'];
jla.aquaman['realName'];

function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
};
greet({ greeting: `What's up dude`, age: 10, name: `Bart` });

function greet({greeting='Hello',name,age=18}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
};
greet({ name: 'Lisa', age: 8 });

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
};

const myMaths = {

    square(x) {
        return x * x;
    },
    mean(array,callback) {
        if (callback) {
        array.map( callback );
        } 
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
};
// Math.PI // The ratio of the circumference and diameter of a circle
// //<< 3.141592653589793

// Math.SQRT2 // The square root of 2
// //<< 1.4142135623730951

// Math.SQRT1_2 // The reciprocal of the square root of 2
// //<< 0.7071067811865476

// Math.E // Euler's constant
// //<< 2.718281828459045

// Math.LN2 // The natural logarithm of 2
// //<< 0.6931471805599453

// Math.LN10 // The natural logarithm of 10
// //<< 2.302585092994046

// Math.LOG2E // Log base 2 of Euler's constant
// //<< 1.4426950408889634

// Math.LOG10E // Log base 10 of Euler's constant
// //<< 0.4342944819032518