const input = document.querySelector('input');
const addButton = document.querySelector('#addButton');
const itemList = document.querySelector('#itemList');

addButton.addEventListener('click', function() {
    let newItem = input.value.trim(); // fungsi trims() adalah untuk menghapus whitespace (spasi putih) dari awal hingga akhir string.

    if (newItem !== "") {
        const addItem = document.createElement('li');
        addItem.textContent = newItem;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => {
            itemList.removeChild(addItem);
        });

        itemList.append(addItem);
        addItem.appendChild(deleteButton);

        input.value = '';
        input.focus();
    }
});