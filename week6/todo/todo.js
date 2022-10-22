import numTasksLeft from "./taskCounter.js";

(function(){

  let list = document.querySelector('#list'),
      form = document.querySelector('#inputForm'),
      item = document.querySelector('#item');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li class="active" >' + item.value + '</li>';
    // list.innerHTML += `<li class="active" ><label><input type="checkbox"> ${item.value}</label><button>X</button></li>`
    store();
    item.value = "";
    numTasksLeft();
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      // t.parentNode.removeChild(t);
      numTasksLeft();
      t.remove();
      t.document.getElementsByClassName("active").className = "completed";
    } else {
      t.classList.add('checked');
      t.classList.add('completed');
      t.classList.remove('active');
      numTasksLeft();
    }
    store();
    numTasksLeft();
  },false)
   
  function store() {
    window.localStorage.myitems = list.innerHTML;
    numTasksLeft();
  }
    
  function getValues() {
    let counter = 0;
    const tasksLeft = document.querySelector("#numTasksLeft");
    let liveTasks = localStorage.length;
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      console.log("empty");
      for (let i = 0; i < liveTasks.length; i++) {
        if (liveTasks[i].completed === false) {
          counter++;
        }
      }
      if (counter !== 1) {
        tasksLeft.innerHTML = `${counter} Tasks Left`;
      } else {
        tasksLeft.innerHTML = `${counter} Task Left`;
      }
      numTasksLeft();
    }
    else {
      list.innerHTML = storedValues;
      if (liveTasks) {
        for (let i = 0; i < liveTasks.length; i++) {
          if (liveTasks[i].completed === false) {
            counter++;
          }
        }
        if (counter !== 1) {
          tasksLeft.innerHTML = `${counter} Tasks Left`;
        } else {
          tasksLeft.innerHTML = `${counter} Task Left`;
        }
      }
      numTasksLeft();
    }
    numTasksLeft();
  }

  getValues();
  numTasksLeft();
  })();

const clearButton = document.getElementById("clearButton");  
clearButton.addEventListener("click", clearStorage, false);
function clearStorage() {
  localStorage.clear();
  location.reload();
}

  document.addEventListener("onclick", numTasksLeft,false);

   
const completedButton = document.getElementById("completedButton");
const activeButton = document.getElementById("activeButton");
const showAll = document.getElementById("showAll");
const elems = document.getElementsByClassName("completed");
const elems2 = document.getElementsByClassName("active");

completedButton.addEventListener("click", completed, false);
activeButton.addEventListener("click", active, false);
showAll.addEventListener("click", show, false);

function completed(event) {
  event.preventDefault();

  for (var i=0;i<elems2.length;i+=1){
    elems2[i].style.display = 'none';

  }
  for (var j=0;j<elems.length;j+=1){
    if (elems[j].style.display == 'none') {
      elems[j].style.display = 'block';
    }
    }

numTasksLeft();

console.log("completedButton Clicked");
}
function active(event) {
    event.preventDefault();

for (var k=0;k<elems.length;k+=1){
    elems[k].style.display = 'none';
    }

    for (var l=0;l<elems2.length;l+=1){
      if (elems2[l].style.display == 'none') {
        elems2[l].style.display = 'block';
      }
      }
      numTasksLeft();
console.log("activeButton Clicked");
}

function show(event) {
    event.preventDefault();

for (var i=0;i<elems.length;i+=1){
    elems[i].style.display = 'block';
    }
for (var j=0;j<elems2.length;j+=1){
elems2[j].style.display = 'block';
}
numTasksLeft();
console.log("showAll Clicked");
}
