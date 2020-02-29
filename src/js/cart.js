// Resources
//https://stackoverflow.com/questions/18735188/queryselectorall-not-working
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://stackoverflow.com/questions/55329308/shopping-cart-total-price-and-quantity

window.onload = function () {
    let cancelItemButton = document.querySelectorAll(".cancelItem");
    for (let i = 0; i < cancelItemButton.length; i++) {
        let button = cancelItemButton[i]
        button.addEventListener('click', cancelItem)
    }
    let plusQuantityButton = document.querySelectorAll(".plus-btn");
    for (let i = 0; i < plusQuantityButton.length; i++) {
        let button2 = plusQuantityButton[i]
        button2.addEventListener('click', plusButtonClicked)
    }
    let minusQuantityButton = document.querySelectorAll(".minus-btn");
    for (let i = 0; i < minusQuantityButton.length; i++) {
        let button3 = minusQuantityButton[i]
        button3.addEventListener('click', minusButtonClicked)
    }
    let quantityInputs = document.querySelectorAll('.quanityAmount');
        for (let i = 0; i < quantityInputs.length; i++) {
            let input = quantityInputs[i]
            input.addEventListener('change', quantityChanged);
        }
}
function plusButtonClicked(event){
     let plusButton = event.target.parentElement.parentElement;
     let input = plusButton.querySelector('.quanityAmount');
    input.value++;
    updateCartTotal();
}

function minusButtonClicked(){
    let minusButton = event.target.parentElement.parentElement;
     let input = minusButton.querySelector('.quanityAmount');
     if(input.value > 1){
        input.value--;
    } 
    updateCartTotal();
}
function cancelItem(event){
    //this it the li (list item. product are in a list)
    // console.log(event.target.parentElement.parentElement.parentElement);
    event.target.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}
function quantityChanged() {
    console.log(event.target.value, 'this is value');
    if (isNaN(event.target.value) ||event.target.value<= 0) {
        event.target.value = 1;
    }
    updateCartTotal()
}

function updateCartTotal(){
    let cartRows = document.querySelectorAll('li');

    let total = 0
    let perUnitPrice = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.querySelector('.itemPrice');
        let quantityElement = cartRow.querySelector('.quanityAmount');

        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        let unitTotalPrice = price * quantity;
        unitTotalPrice = Math.round(unitTotalPrice * 100) / 100;
        cartRow.querySelector('.itemPriceWithQuant').innerText = '$' + unitTotalPrice;
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.querySelector('.cart-total').innerText = '$' + total;
}


      
