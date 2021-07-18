const counterValue = {
    value: 0;
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');
const valueEl = document.querySelector('.value');

