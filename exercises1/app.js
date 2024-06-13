const para = document.querySelector('#myParagraph');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    para.innerText = 'Hello World!';
})