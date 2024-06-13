const content = document.querySelector('#content p');
const changeButton = document.querySelector('#changeTextButton');
const addButton = document.querySelector('#addTextButton');
const input = document.querySelector('input');

changeButton.addEventListener('click', function (){
    let newText = input.value;

    if(newText !== '') {
        content.textContent = newText;
    }
    input.value = "";
});

addButton.addEventListener('click', function() {
    let newText = input.value;

    if(newText !== '') {
        content.textContent += " " + newText;
    }
    input.value = "";
});