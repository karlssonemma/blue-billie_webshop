// GET CART FROM LOCAL STORAGE.

let data = localStorage.getItem('cart');
let returnedCart = JSON.parse(data);

let CART = [...returnedCart];

// SHOW PRODUCTS IN CART.
showItems();


function showItems() {

    let containerProducts = document.querySelector('.container__products');
    let totalOutput = document.querySelector('.total__output')
    containerProducts.innerHTML = "";

    for (let i = 0; i < CART.length; i++) {

        let article = document.createElement('article');
        article.classList.add('checkout-item');
        containerProducts.appendChild(article);

        let img = document.createElement('img');
        img.classList.add('checkout-item__img');
        img.src = CART[i].img;
        img.alt = CART[i].alt;
        article.appendChild(img);

        let textContainer = document.createElement('div');
        textContainer.classList.add('text-container')
        article.appendChild(textContainer);

        let product = document.createElement('h3');
        product.classList.add('checkout-item__product');
        product.innerHTML = CART[i].product;
        textContainer.appendChild(product);

        //FIXA
        let description = document.createElement('p');
        description.classList.add('checkout-item__description');
        description.innerHTML = CART[i].description;
        textContainer.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('checkout-item__price');
        price.innerHTML = CART[i].price + '€';
        article.appendChild(price);

        let deleteItem = document.createElement('button');
        deleteItem.classList.add('delete-btn');
        deleteItem.innerHTML = '+';
        deleteItem.id = CART[i].id;
        article.appendChild(deleteItem);
        };

    // GIVES ALL THE BUTTONS EVENT-LISTENENERS. NEEDS TO BE INSIDE THE FUNCTION showItems BECAUSE EVERY TIME AN ITEM IS DELETED THE CODE FOR THIS IS DELETED AND THEN RECREATED. IF THIS STUFF IS OUTSIDE THE LOOP ONLY THE FIRST ROUND OF BUTTONS WILL HAVE EVENT-LISTENERS.
    let deleteBtn = document.getElementsByClassName('delete-btn');

    for (let btn of deleteBtn) {
        btn.addEventListener('click', deleteItem);
    };

    // SHOWS TOTAL PRICE
    let totalPrice = 0;

    if (CART.length > 0) {

        for (let i = 0; i < CART.length; i++) {
            totalPrice += CART[i].price;
        };
    };

    totalOutput.innerHTML = totalPrice + '€';
};

// DELETE FUNCTION
function deleteItem(e) {
    
    for (let i = 0; i < CART.length; i++) {
        
        if (e.target.id === CART[i].id) {

            CART.splice(i, 1);

            let cartString = JSON.stringify(CART);
            localStorage.setItem('cart', cartString);

            showItems();
        };
    };
};

