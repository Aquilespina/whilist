const selectButtons = document.querySelectorAll('.select-button');
const selectedProductsList = document.getElementById('selected-products-list');
const confirmButton = document.getElementById('confirm-button');

const selectedProducts = [];

selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        selectedProducts.push(productName);
        updateSelectedProductsList();
    });
});

confirmButton.addEventListener('click', () => {
   
});

function updateSelectedProductsList() {
    selectedProductsList.innerHTML = '';
    selectedProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        selectedProductsList.appendChild(li);
    });
}
