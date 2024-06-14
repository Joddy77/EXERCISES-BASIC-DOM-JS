document.addEventListener('DOMContentLoaded', () => {

    const colorCode = document.querySelector('#colorCode');
    const changeColor = document.querySelector('#changeColor');

    changeColor.addEventListener('click', () => {
        const colorInput = colorCode.value.trim();

        if(isValidColor(colorInput)) {
            document.body.style.background = colorInput;
        } else {
            alert('Masukkan kode warna yang valid');
        }
    });

    function isValidColor(color) {
        // Memeriksa apakah kode warna valid dengan regex
        const colorPattern = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
        return colorPattern.test(color);
    }
});