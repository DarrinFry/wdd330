// //popup alert when page is loaded/refreshed ~~Chapter 1
// alert('Welcome to Quiz Ninja!');

// //Question and popup prompt ~~Chapter 2
// // const question = "What is Superman's real name?";
// // const answer = prompt(question);
// // alert (`You answered ${answer}`);

// //Create an array for the questions. ~~Chapter 3
// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];
// //score variable
// let score = 0;
// //loop through the questions and store the answers
// for (const [question, answer] of quiz) {
//     const response = prompt(question);
//     if (response === answer) {
//         alert('Correct!');
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }
// //report the players score
// alert(`Game over. You scored ${score} point${score !== 1 ? 's' : ''}`);

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
    let score = 0;

    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);