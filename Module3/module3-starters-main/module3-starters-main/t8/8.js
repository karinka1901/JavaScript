const button = document.querySelector('button');
const p = document.querySelector('#result');
const input = document.querySelector('input');
const option = document.querySelector('option');


input.addEventListener('oninput', onInput);
button.addEventListener('click', options);

function onInput(){
    a = input.value;
    document.p.innerHTML=a;
}


function options() {
    if (option.value === 'add'){
        let result = a + b;
        p.innerHTML = result;
    }
    if (option.value === 'sub'){
        let result = a - b;
        p.innerHTML = result;
    }
    if (option.value === 'multi'){
        let result = a * b;
        p.innerHTML = result;
    }
    if (option.value === 'div'){
        let result = a / b;
        p.innerHTML = result;
    } 
}