let counter = 0; // Initialises counter to start at 0.

// Counter value variable
let counterDisplay = document.getElementById('counter');

// All 3 buttons individually. (Add, Reset, Subtract)
const add = document.getElementById('add-btn');
const reset = document.getElementById('reset-btn');
const sub = document.getElementById('subtract-btn');

add.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
}); 

reset.addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = counter;
});

sub.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
});


