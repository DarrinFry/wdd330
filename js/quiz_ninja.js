// // //popup alert when page is loaded/refreshed ~~Chapter 1
// // alert('Welcome to Quiz Ninja!');

// // //Question and popup prompt ~~Chapter 2
// // // const question = "What is Superman's real name?";
// // // const answer = prompt(question);
// // // alert (`You answered ${answer}`);

// // //Create an array for the questions. ~~Chapter 3
// // const quiz = [
// //     ["What is Superman's real name?","Clark Kent"],
// //     ["What is Wonder Woman's real name?","Diana Prince"],
// //     ["What is Batman's real name?","Bruce Wayne"]
// // ];
// // //score variable
// // let score = 0;
// // //loop through the questions and store the answers
// // for (const [question, answer] of quiz) {
// //     const response = prompt(question);
// //     if (response === answer) {
// //         alert('Correct!');
// //         score++;
// //     } else {
// //         alert(`Wrong! The correct answer was ${answer}`);
// //     }
// // }
// // //report the players score
// // alert(`Game over. You scored ${score} point${score !== 1 ? 's' : ''}`);

// // const quiz = [
// //     ["What is Superman's real name?","Clark Kent"],
// //     ["What is Wonder Woman's real name?","Diana Prince"],
// //     ["What is Batman's real name?","Bruce Wayne"]
// // ];


// // function start(quiz){
// //     let score = 0;

// //     // main game loop
// //     for(const [question,answer] of quiz){
// //         const response = ask(question);
// //         check(response,answer);
// //     }
// //     // end of main game loop

// //     gameOver();

// //     // function declarations
// //     function ask(question){
// //         return prompt(question);
// //     }

// //     function check(response,answer){
// //         if(response === answer){
// //         alert('Correct!');
// //         score++;
// //         } else {
// //         alert(`Wrong! The correct answer was ${answer}`);
// //         }
// //     }

// //     function gameOver(){
// //         alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
// //     }
// // }
// // start(quiz);

// const quiz = [
//     { name: "Superman",realName: "Clark Kent" },
//     { name: "Wonder Woman",realName: "Diana Prince" },
//     { name: "Batman",realName: "Bruce Wayne" },
// ];

// // View Object
// const view = {
//     start: document.getElementById('start'),
//     score: document.querySelector('#score strong'),
//     question: document.getElementById('question'),
//     result: document.getElementById('result'),
//     info: document.getElementById('info'),
//     response: document.querySelector('#response'),

//     render(target,content,attributes) {
//         for(const key in attributes) {
//             target.setAttribute(key, attributes[key]);
//         }
//         target.innerHTML = content;
//     },
//     show(element){
//         element.style.display = 'block';
//     },
//     hide(element){
//         element.style.display = 'none';
//     },
//     setup(){
//         this.show(this.question);
//         this.show(this.response);
//         this.show(this.result);
//         this.hide(this.start);
//         this.render(this.score,game.score);
//         this.render(this.result,'');
//         this.render(this.info,'');
//         this.resetForm();
//     },
//     resetForm(){
//         this.response.answer.value = '';
//         this.response.answer.focus();
//     },
//     teardown(){
//         this.hide(this.question);
//         this.hide(this.response);
//         this.show(this.start);
//     }
    
// };

// const game = {
//     // start(quiz){
//     //     this.questions = [...quiz];
//     //     this.score = 0;
//     //     this.ask();
//     //     main game loop
//     //     for(const question of this.questions){
//     //     this.question = question;
//     //     }
//     //     // end of main game loop
//     //     this.gameOver();
//     //     view.hide(view.start);
//     // },
//     // ask(){
//     //     const question = `What is ${this.question.name}'s real name?`;
//     //     const response =  prompt(question);
//     //     this.check(response);
//     // },
//     // check(response){
//     //     const answer = this.question.realName;
//     //     if(response === answer){
//     //     alert('Correct!');
//     //     this.score++;
//     //     } else {
//     //     alert(`Wrong! The correct answer was ${answer}`);
//     //     }
//     // },
//     // gameOver(){
//     //     alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
//     // }
//     start(quiz){
//         this.score = 0;
//         this.questions = [...quiz];
//         view.setup();
//         this.ask();
//     },
//     ask(name){
//         if(this.questions.length > 0) {
//             this.question = this.questions.pop();
//             const question = `What is ${this.question.name}'s real name?`;
//             view.render(view.question,question);
//         }
//         else {
//             this.gameOver();
//         }
//     },
//     // check(response){
//     //     const answer = this.question.realName;
//     //     if(response === answer){
//     //     view.render(view.result,'Correct!',{'class':'correct'});
//     //     alert('Correct!');
//     //     this.score++;
//     //     view.render(view.score,this.score);
//     //     } else {
//     //     view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
//     //     alert(`Wrong! The correct answer was ${answer}`);
//     //     }
//     // },
//     check(event){
//         event.preventDefault();
//         const response = view.response.answer.value;
//         const answer = this.question.realName;
//         if(response === answer){
//             view.render(view.result,'Correct!',{'class':'correct'});
//             this.score++;
//             view.render(view.score,this.score);
//         } else {
//             view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
//         }
//         view.resetForm();
//         this.ask();
//     },
//     gameOver(){
//         view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
//         view.teardown();
//     }
// }

// view.start.addEventListener('click', () => game.start(quiz), false);
// //game.start(quiz);
// view.response.addEventListener('submit', (event) => game.check(event), false);
// view.hide(view.response);
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
  ];

// Utility functions
function random(a,b=1) {
// if only 1 argument is provided, we need to swap the values of a and b
if (b === 1) {
[a,b] = [b,a];
}
return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
for (let i = array.length; i; i--) {
let j = random(i)-1;
[array[i - 1], array[j]] = [array[j], array[i - 1]];
}
}

// View Object
const view = {
score: document.querySelector('#score strong'),
question: document.querySelector('#question'),
result: document.querySelector('#result'),
info: document.querySelector('#info'),
start: document.querySelector('#start'),
response: document.querySelector('#response'),
timer: document.querySelector('#timer strong'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
},
show(element){
element.style.display = 'block';
},
hide(element){
element.style.display = 'none';
},
setup(){
this.show(this.question);
this.show(this.response);
this.show(this.result);
this.hide(this.start);
this.render(this.score,game.score);
this.render(this.result,'');
this.render(this.info,'');
},
teardown(){
this.hide(this.question);
this.hide(this.response);
this.show(this.start);
},
buttons(array){
return array.map(value => `<button>${value}</button>`).join('');
}
};

const game = {
start(quiz){
console.log('start() invoked');
this.score = 0;
this.questions = [...quiz];
view.setup();
this.secondsRemaining = 20;
this.timer = setInterval( this.countdown , 1000 );
this.ask();
},
countdown() {
game.secondsRemaining--;
view.render(view.timer,game.secondsRemaining);
if(game.secondsRemaining <= 0) {
game.gameOver();
}
},
ask(name){
console.log('ask() invoked');
if(this.questions.length > 2) {
shuffle(this.questions);
this.question = this.questions.pop();
const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
shuffle(options);
const question = `What is ${this.question.name}'s real name?`;
view.render(view.question,question);
view.render(view.response,view.buttons(options));
}
else {
this.gameOver();
}
},
check(event){
console.log('check(event) invoked');
const response = event.target.textContent;
const answer = this.question.realName;
if(response === answer){
view.render(view.result,'Correct!',{'class':'correct'});
this.score++;
view.render(view.score,this.score);
} else {
view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
}
this.ask();
},
gameOver(){
console.log('gameOver() invoked');
view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
view.teardown();
clearInterval(this.timer);
}
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);