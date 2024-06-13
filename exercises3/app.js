const itemList = document.querySelector('#itemList');
const input = document.querySelector('#newItemInput');
const addButton = document.querySelector('#addItemButton');
const removeButton = document.querySelector('#removeLastButton');

addButton.addEventListener('click', function() {
    let newItem = input.value;

    if(newItem !== '') {
        let addItem = document.createElement('li');
        addItem.textContent = newItem;

        itemList.appendChild(addItem);
        input.value='';
    }
});

removeButton.addEventListener('click', function() {
    if(itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
})