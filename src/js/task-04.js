const [decrement, span, increment] = document.querySelector('#counter').children;

let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    span.textContent = counterValue;
});

increment.addEventListener('click', () => {
    counterValue += 1;
    span.textContent = counterValue;
});










// const counterValue = {
//     value: 0;
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.decrement');
// const incrementBtn = document.querySelector('.increment');
// const valueEl = document.querySelector('.value');

