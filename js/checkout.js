// GET CART FROM LOCAL STORAGE.

let data = localStorage.getItem('cart');
let returnedCart = JSON.parse(data);

let CART = [...returnedCart];

// SHOW PRODUCTS IN CART.

let containerProducts = document.querySelector('.container__products');
let totalOutput = document.querySelector('.total__output')

function showItems() {

    containerProducts.innerHTML = "";

    CART.map((e, i) => {

        let article = document.createElement('article');
        article.classList.add('checkout-item');
        containerProducts.appendChild(article);

        let img = document.createElement('img');
        img.classList.add('checkout-item__img');
        img.src = e.img;
        img.alt = e.alt;
        article.appendChild(img);

        let textContainer = document.createElement('div');
        textContainer.classList.add('text-container')
        article.appendChild(textContainer);

        let product = document.createElement('h3');
        product.classList.add('checkout-item__product');
        product.innerHTML = e.product;
        textContainer.appendChild(product);

        let description = document.createElement('p');
        description.classList.add('checkout-item__description');
        description.innerHTML = e.description;
        textContainer.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('checkout-item__price');
        price.innerHTML = 'à ' + e.price + '€';
        textContainer.appendChild(price);

        let quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity__container')
        textContainer.appendChild(quantityContainer);

        let remove = document.createElement('button');
        remove.classList.add('quantity__btn')
        remove.innerHTML = '-';
        quantityContainer.appendChild(remove);

        let quantity = document.createElement('p');
        quantity.innerHTML = e.quantity;
        quantity.classList.add('item__quantity');
        quantityContainer.appendChild(quantity);

        let add = document.createElement('button');
        add.classList.add('quantity__btn')
        add.innerHTML = '+';
        quantityContainer.appendChild(add);

        let deleteContainer = document.createElement('div');
        deleteContainer.classList.add('container__right');
        article.appendChild(deleteContainer);

        let deleteItem = document.createElement('button');
        deleteItem.classList.add('delete-btn');
        // deleteItem.innerHTML = '+';
        deleteItem.id = e.id;
        deleteContainer.appendChild(deleteItem);

        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times');
        deleteItem.appendChild(icon);

        let totalAmountProduct = document.createElement('p');
        totalAmountProduct.classList.add('item__total')
        totalAmountProduct.innerHTML = 'Total: ' + e.price * e.quantity + '€';
        deleteContainer.appendChild(totalAmountProduct);


        add.addEventListener('click', () => {
            e.quantity += 1;

            showItems();
        });

        remove.addEventListener('click', () => {
            e.quantity -= 1;

            if (e.quantity === 0 || e.quantity < 0) {
                CART.splice(i, 1)
            }

            showItems();
        });
    });

    // GIVES ALL THE BUTTONS EVENT-LISTENENERS. NEEDS TO BE INSIDE THE FUNCTION showItems BECAUSE EVERY TIME AN ITEM IS DELETED THE CODE FOR THIS IS DELETED AND THEN RECREATED. IF THIS STUFF IS OUTSIDE THE LOOP ONLY THE FIRST ROUND OF BUTTONS WILL HAVE EVENT-LISTENERS.
    let deleteBtn = document.getElementsByClassName('delete-btn');

    for (let btn of deleteBtn) {
        btn.addEventListener('click', deleteItem);
    };

    updatePrice();
    updateLocalStorage();
};

// --------------------------------------------------------------

showItems();

function updatePrice() {
    // SHOWS TOTAL PRICE IN CART
    let totalPrice = 0;

    if (CART.length > 0) {
        for (let i = 0; i < CART.length; i++) {
            totalPrice += CART[i].price * CART[i].quantity;
            totalOutput.innerHTML = totalPrice + '€';
        };
    } else {
        totalOutput.innerHTML = ''
    };
}


function updateLocalStorage() {
    // PUSH TO LOCAL STORAGE
    let cartString = JSON.stringify(CART);
    localStorage.setItem('cart', cartString);
}

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

