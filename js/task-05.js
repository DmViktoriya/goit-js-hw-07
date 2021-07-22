const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    if (inputRef.value.trim !== '') {
        textRef.textContent = inputRef.value;
    } else {
        textRef.textContent = 'незнакомец';
    };
});
