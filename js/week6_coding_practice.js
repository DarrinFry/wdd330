//Cache within a function stores its  outputs. 
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

square(3);
square(-11);
//returns  the cached values.
square.cache;

//This is an IIFE (Immediately INvoked Function Expression)
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();

//self-contained code blocks
(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());

(function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());


// const form = document.forms['input'];
// let number = parseInt(document.getElementById("age").value);
// form.addEventListener ('submit', collatz, false);


// function collatz(n, sequence=[n]) {
//     if (n === 1){
//         return `Sequence took ${sequence.length} steps. It was ${sequence}`;
//     }

//     if (n%2 === 0) {
//         n = n/2;
//     } else { 
//         n = 3*n + 1;
//     }

//     return collatz(n,[...sequence,n]);
// }

// collatz(number);



(function(){

    const dice = {
        sides: 6,
            roll() {
                return Math.floor(this.sides * Math.random()) + 1;
            }
    }
        
    console.log('Before the roll');
        
    const roll = new Promise( (resolve,reject) => {
        const n = dice.roll();
        if(n > 1){
            setTimeout(()=>{resolve(n)},n*200);
        } else {
            setTimeout(()=>reject(n),n*200);
        }
    });
        
    roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
    
    console.log('After the roll');    

})();


// const request = new Request('https://example.com/data', {
//     method: 'GET',
//     mode: 'cors',
//     redirect: 'follow',
//     cache: 'no-cache'
// });

// const url = 'https:example.com/data';
// const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

// const request = (url,{
//     headers: headers
// })

// fetch(request)
// .then( function(response) {
//     if(response.ok) {
//         return response;
//     }
//     throw Error(response.statusText);
// })
// .then( response => // do something with response )
// .catch( error => console.log('There was an error!') )

// const form = document.forms['todo'];
// form.addEventListener('submit', addTask, false);

// function addTask(event) {
//     event.preventDefault();
//     const number = form.task.value;
//     const task = {
//         userId: 1,
//         title: form.task.value,
//         completed: false
//     }
//     const data = JSON.stringify(task);
//     const url = 'https://jsonplaceholder.typicode.com/todos';

//     const headers = new Headers({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     });
//     const request = new Request(url,
//     {
//         method: 'POST',
//         header: headers,
//         body: data
//     }
//     )

//     fetch(request)
//     .then( response => response.json() )
//     .then( task => console.log(`Task saved with an id of ${task.id}`) )
//     .catch( error => console.log('There was an error:', error))

// }

const form = document.forms['todo'];

form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        mode: 'cors',
        header: headers,
        body: JSON.stringify(task)
    }
    )

    fetch(request)
    .then( response => response.json() )
    .then( data => console.log(`${data.title} saved with an id of ${data.id}`) )
    .catch( error => console.log('There was an error:', error))

}