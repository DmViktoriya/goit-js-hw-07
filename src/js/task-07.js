const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

function changeFontSize((target: { value })) {
        spanRef.style.fontSize = value +"px"
}

//inputRef.oninput = changeFontSize;

