// localStorage Bolum Sonu Egzersizi

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
let counterDOM = document.querySelector('#counter');
let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');
let resetDOM =document.querySelector('#reset');

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);
resetDOM.addEventListener("click", clickEvent);

function clickEvent() {
  if (this.id === "increase") {
    counter++;
  } else if (this.id === "decrease") {
    counter--;
  } else {
    counter = 0;
  }

  localStorage.setItem('counter', counter);
  counterDOM.innerHTML = counter;
};