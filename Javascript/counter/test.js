let counter = 0;
const updateCounter = () => counterElement.innerHTML = counter;

let counterElement = document.getElementById("counter");
const decreaseButtonElement = document.getElementById("decrease");
const resetButtonElement = document.getElementById("reset");
const increaseButtonElement = document.getElementById("increase");

const decreaseCounterHandler = () => {
  counter--;
  updateCounter();
};
const resetCounterHandler = () => {
  counter = 0;
  updateCounter();
};
const increaseCounterHandler = () => {
  counter++;
  updateCounter();
};

decreaseButtonElement.addEventListener("click", decreaseCounterHandler);
resetButtonElement.addEventListener("click", resetCounterHandler)
increaseButtonElement.addEventListener("click", increaseCounterHandler);

