import {NECKLACES, EARRINGS, BRACELETS} from './collections.js';

let COLLECTION = [...NECKLACES, ...EARRINGS, ...BRACELETS];
let FILTERED_ARRAY = [];
let CART = [];

// -------------------------------------------------------------------------
// --------------------SETS CART TO LOCAL-STORAGE---------------------------
// -------------------------------------------------------------------------

let data = localStorage.getItem('cart');
let returnedCart = JSON.parse(data);


if (data) {
    CART = [...returnedCart];
};

// -------------------------------------------------------------------------
// ----------FUNCTION FOR SHOWING MENU IN MOBILE/TABLET MODE----------------
// -------------------------------------------------------------------------

let burger = document.querySelector('.burger');
let nav = document.querySelector('.menu');
let navLinks = document.querySelectorAll('.menu li')
let logo = document.querySelector('.h-logo');

function navSlide() {

    if (window.innerWidth <= 1000) {
        nav.classList.toggle('nav-active');
        logo.classList.toggle('logo-active');
        burger.classList.toggle('toggle');
    }
}
//event-listeners navSlide
burger.addEventListener('click', navSlide);

for (let link of navLinks) {
    link.addEventListener('click', navSlide)
};


// -------------------------------------------------------------------------
// --------------------------SHOW/HIDE CART FUNCTIONS-----------------------
// -------------------------------------------------------------------------

let sideCart = document.querySelector('.cart');
let closeCartBtn = document.querySelector('.cart__close');
let showCartBtn = document.querySelector('.show-cart');
let overlay = document.querySelector('.overlay');

function showCart() {

    if (CART.length <= 0) {

        let added = document.querySelector('.added');
        let rightHead = document.querySelector('.header__right');

        added.innerHTML = 'empty!'
        rightHead.classList.add('added-animation');
        rightHead.addEventListener('animationend', () => {
            rightHead.classList.remove('added-animation');
            added.innerHTML = 'added!'
        });

    } else {

        sideCart.style.display = 'block';
        sideCart.classList.add('display-cart');
        overlay.style.display = 'block';

    };
};

function hideCart() {

    let displayCart = document.querySelector('.display-cart');

    sideCart.classList.remove('display-cart');
    displayCart.addEventListener('ontransitionend', () => {
        sideCart.style.display = 'none'
    })

    overlay.style.display = 'none';
};

overlay.addEventListener('click', hideCart);
showCartBtn.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);


// -------------------------------------------------------------------------
// --------------------------CREATES ITEMS IN GRID--------------------------
// -------------------------------------------------------------------------

let grid = document.querySelector('.grid-main');

function createItems() {

    grid.innerHTML = "";
    let OUTPUT_ARRAY = [];

    if (FILTERED_ARRAY.length > 0) {
        OUTPUT_ARRAY = [...FILTERED_ARRAY];
    } else {
        OUTPUT_ARRAY = [...COLLECTION];
    };

    OUTPUT_ARRAY.map( e => {

        let article = document.createElement('article');
        article.classList.add('grid-item');
        grid.appendChild(article);

        let img = document.createElement('img');
        img.classList.add('grid-item__img');
        img.src = e.img;
        img.alt = e.alt;
        article.appendChild(img);

        let container = document.createElement('div');
        container.classList.add('item-container');
        article.appendChild(container);

        let product = document.createElement('h3');
        product.classList.add('grid-item__product');
        product.innerHTML = e.product + ' / ' + e.price + '€ / ';
        container.appendChild(product);

        let addItem = document.createElement('button');
        addItem.innerHTML = 'ADD TO CART';
        addItem.classList.add('grid-item__btn');
        addItem.id = e.id;
        container.appendChild(addItem);

    } );

    // EVENT-LISTENERS FOR pushToCart
    let createCartBtns = document.getElementsByClassName('grid-item__btn');

    for (let btn of createCartBtns) {
        btn.addEventListener('click', pushToCart);
    };
};

createItems();

// -------------------------------------------------------------------------
// --------------------------SEARCH-FUNCTION--------------------------------
// -------------------------------------------------------------------------

let searchInput = document.querySelector('.search__input');
let searchBtn = document.querySelector('.search__submit');


function filterArray() {

    let inputValue = searchInput.value.toLowerCase();
    console.log(inputValue)

    FILTERED_ARRAY = COLLECTION.filter( item => 
        item.product.toLowerCase().includes(inputValue)
     );

    createItems();
    scrollItems();
};

searchBtn.addEventListener('click', filterArray);
document.addEventListener('keyup', filterArray);


// -------------------------------------------------------------------------
// --------------------------PUSH TO CART-ARRAY-----------------------------
// -------------------------------------------------------------------------

let rightContainer = document.querySelector('.header__right');

function pushToCart(e) {

    const found = CART.find( el => el.id === e.target.id )

    if (found) {
        found.quantity += 1;
    } else {
        let product = COLLECTION.find( el => el.id === e.target.id )
        CART.push(product);
    }

    rightContainer.classList.add('added-animation');

    rightContainer.addEventListener('animationend', () => {
        rightContainer.classList.remove('added-animation');
    });

    createCart();
    // updateLocalStorage();
};


// -------------------------------------------------------------------------
// ------------------------CREATES ITEMS IN CART----------------------------
// -------------------------------------------------------------------------

let cartContainer = document.querySelector('.cart-products');


function createCart() {

    cartContainer.innerHTML = "";

    CART.map( (e, i) => {

        let cartArticle = document.createElement('article');
        cartArticle.classList.add('cart-item')
        cartContainer.appendChild(cartArticle);
    
        let cartImg = document.createElement('img');
        cartImg.classList.add('cart-item__img');
        cartImg.src = e.img;
        cartImg.alt = e.alt;
        cartArticle.appendChild(cartImg);

        let cartTextContainer = document.createElement('div');
        cartTextContainer.classList.add('cart-item__text');
        cartArticle.appendChild(cartTextContainer);
    
        let cartProduct = document.createElement('h4');
        cartProduct.classList.add('cart-item__product');
        cartProduct.innerHTML = e.product;
        cartTextContainer.appendChild(cartProduct);

        let cartPrice = document.createElement('p');
        cartPrice.classList.add('cart-item__price');
        cartPrice.innerHTML = e.price + '€';
        cartTextContainer.appendChild(cartPrice);

        let quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity')
        cartTextContainer.appendChild(quantityContainer);

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



        add.addEventListener('click', () => {
            e.quantity += 1;
            quantity.innerHTML = e.quantity;

            updatePrice();
            updateQuantity();

        })

        remove.addEventListener('click', () => {
            e.quantity -= 1;

            if (e.quantity === 0 || e.quantity < 0) {
                CART.splice(i, 1)

                if (CART.length === 0) {
                    hideCart();
                }

            } else {
                quantity.innerHTML = e.quantity;
            }

            updatePrice();
            updateQuantity();

            createCart();
        })

    });

    updateQuantity();
    updatePrice();
};

createCart();

// -------------------------------------------------------------------------
// ------------------------UPDATES TOTAL PRICE----------------------------
// -------------------------------------------------------------------------

function updatePrice() {

    let totalOutput = document.querySelector('.cart-total__output');
    let totalPrice = 0;

    if (CART) {
        for (let i = 0; i < CART.length; i++) {
            totalPrice += CART[i].price * CART[i].quantity;
            totalOutput.innerHTML = 'Total: ' + totalPrice + '€';
        };
    } else {
        totalOutput.innerHTML = '';
    };
};

// -------------------------------------------------------------------------
// --------------UPDATES NUMBER OF ITEMS IN CART (HEADER)-------------------
// -------------------------------------------------------------------------

function updateQuantity() {

    let numberOfItems = document.querySelector('.show-cart__number');
    let number = 0;

    if (CART.length > 0) {
        for (let i = 0; i < CART.length; i++) {
            number += CART[i].quantity;
            numberOfItems.innerHTML = number;
        };
    } else {
        numberOfItems.innerHTML = 0;
    }

    updateLocalStorage();
}

// -------------------------------------------------------------------------
// ----------------------UPDATES LOCAL STORAGE------------------------------
// -------------------------------------------------------------------------

function updateLocalStorage() {

    let cartString = JSON.stringify(CART);
    localStorage.setItem('cart', cartString);
};

// -------------------------------------------------------------------------
// ------------------SHOWS ITEMS ON SCROLL (ANIMATION)----------------------
// -------------------------------------------------------------------------

function scrollItems() {
    let items = document.querySelectorAll('.grid-item');
    
    for (let item of items) {
        let itemPosition = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 3.8;
        

        if (itemPosition < screenPosition) {
            item.classList.add('grid-item--visible');
        };
    };
};

scrollItems();
window.addEventListener('scroll', scrollItems);


export {CART};