// GET CART FROM LOCAL STORAGE.

let data = localStorage.getItem('cart');
let returnedCart = JSON.parse(data);

let CART = [...returnedCart];

// -------------------------------------------------------------------------
// ----------------------CREATES ITEMS IN CART------------------------------
// -------------------------------------------------------------------------
let containerProducts = document.querySelector('.container__products');
let totalOutput = document.querySelector('.total__output')

function showItems() {

    containerProducts.innerHTML = "";

    CART.map((e, i) => {

        let article = document.createElement('article');
        article.classList.add('product');
        containerProducts.appendChild(article);

        let img = document.createElement('img');
        img.classList.add('product__img');
        img.src = e.img;
        img.alt = e.alt;
        article.appendChild(img);

        let textContainer = document.createElement('div');
        textContainer.classList.add('product__text')
        article.appendChild(textContainer);

        let product = document.createElement('h3');
        product.classList.add('product__name');
        product.innerHTML = e.product;
        textContainer.appendChild(product);

        let description = document.createElement('p');
        description.classList.add('product__description');
        description.innerHTML = e.description;
        textContainer.appendChild(description);

        let price = document.createElement('p');
        price.classList.add('product__price');
        price.innerHTML = 'à ' + e.price + '€';
        textContainer.appendChild(price);

        let quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity')
        textContainer.appendChild(quantityContainer);

        let remove = document.createElement('button');
        remove.classList.add('quantity__btn')
        remove.innerHTML = '-';
        quantityContainer.appendChild(remove);

        let quantity = document.createElement('p');
        quantity.innerHTML = e.quantity;
        quantity.classList.add('quantity__output');
        quantityContainer.appendChild(quantity);

        let add = document.createElement('button');
        add.classList.add('quantity__btn')
        add.innerHTML = '+';
        quantityContainer.appendChild(add);

        let deleteContainer = document.createElement('div');
        deleteContainer.classList.add('container__right');
        article.appendChild(deleteContainer);

        let deleteItem = document.createElement('button');
        deleteItem.classList.add('product__delete-btn');
        // deleteItem.innerHTML = '+';
        deleteItem.id = e.id;
        deleteContainer.appendChild(deleteItem);

        let icon = document.createElement('i');
        icon.classList.add('fas', 'fa-times', 'delete-icon');
        deleteItem.appendChild(icon);

        let totalAmountProduct = document.createElement('p');
        totalAmountProduct.classList.add('product__total')
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

    let deleteBtn = document.getElementsByClassName('product__delete-btn');

    for (let btn of deleteBtn) {
        btn.addEventListener('click', deleteItem);
    };

    updatePrice();
    updateLocalStorage();
};

showItems();

// -------------------------------------------------------------------------
// ----------------------UPDATES TOTAL PRICE--------------------------------
// -------------------------------------------------------------------------


function updatePrice() {

    let totalPrice = 0;

    if (CART.length > 0) {
        for (let i = 0; i < CART.length; i++) {
            totalPrice += CART[i].price * CART[i].quantity;
            totalOutput.innerHTML = 'Total: ' + totalPrice + '€';
        };
    } else {
        totalOutput.innerHTML = 'Total: 0€';
    };
}

// -------------------------------------------------------------------------
// ----------------------UPDATES LOCAL STORAGE------------------------------
// -------------------------------------------------------------------------

function updateLocalStorage() {

    let cartString = JSON.stringify(CART);
    localStorage.setItem('cart', cartString);
}

// -------------------------------------------------------------------------
// ----------------------DELETE ITEM IN CART--------------------------------
// -------------------------------------------------------------------------

function deleteItem(e) {

    let found = CART.find( product => { 
        product.id === e.target.id;
        return product;
    } );

    CART.splice(found, 1);
    console.log(CART)

    showItems();
    updateLocalStorage();
    
    // for (let i = 0; i < CART.length; i++) {
        
    //     if (e.target.id === CART[i].id) {

    //         CART.splice(i, 1);

    //         updateLocalStorage();
    //         showItems();
    //     };
    // };
};

