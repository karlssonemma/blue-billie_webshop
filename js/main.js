import {NECKLACES, EARRINGS, BRACELETS} from './collections.js';

let COLLECTION = [...NECKLACES, ...EARRINGS, ...BRACELETS];
console.log(COLLECTION);


// --------------------------------SHOW MENU FUNCTION

// let menu = document.querySelector('.menu');
// let menuBtn = document.querySelector('.menu-btn');
// let menuBtnImg = document.querySelector('.menu-btn__arrow');

// let isTrue = true;

// function showMenu() {
    
//     if (isTrue === true) {
//         menu.style.top = 0;
//         menuBtnImg.style.transform = 'rotate(-270deg)';

//     } else {
//         menu.style.top = -250 + 'px';
//         menuBtnImg.style.transform = 'rotate(270deg)';
//     };

//     isTrue = !isTrue;
// };

// // EVENT-LISTENERS MENU

// menuBtn.addEventListener('click', showMenu);

// let menuLink = document.getElementsByClassName('menu__link');

// for (let link of menuLink) {
//     link.addEventListener('click', showMenu);
// }

// ----------------------------------CREATES PRODUCTS IN GRID

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-links');
let navLinks = document.querySelectorAll('.nav-links li')
let logo = document.querySelector('.h-logo');

function navSlide() {


    nav.classList.toggle('nav-active');

    burger.classList.toggle('toggle');

}

for (let link of navLinks) {
    link.addEventListener('click', navSlide)
};
burger.addEventListener('click', navSlide)


let gridNecklaces = document.querySelector('.grid-necklaces');
// let gridEarrings = document.querySelector('.grid-earrings');
// let gridBracelets = document.querySelector('.grid-bracelets');


for (let i = 0; i < COLLECTION.length; i++) {

    let article = document.createElement('article');
    article.classList.add('grid-item');
    gridNecklaces.appendChild(article);

    let img = document.createElement('img');
    img.classList.add('grid-item__img');
    img.src = COLLECTION[i].img;
    img.alt = COLLECTION[i].alt;
    article.appendChild(img);

    let container = document.createElement('div');
    container.classList.add('item-container');
    article.appendChild(container);

    let product = document.createElement('h3');
    product.classList.add('grid-item__product');
    product.innerHTML = COLLECTION[i].product + ' / ' + COLLECTION[i].price + '€ / ';
    container.appendChild(product);

    let addItem = document.createElement('button');
    addItem.innerHTML = 'ADD TO CART';
    addItem.classList.add('grid-item__btn');
    addItem.id = COLLECTION[i].id;
    container.appendChild(addItem);
};


// for (let i = 0; i < EARRINGS.length; i++) {

//     let article = document.createElement('article');
//     article.classList.add('grid-item');
//     gridEarrings.appendChild(article);

//     let img = document.createElement('img');
//     img.classList.add('grid-item__img');
//     img.src = EARRINGS[i].img;
//     img.alt = EARRINGS[i].alt;
//     article.appendChild(img);

//     let container = document.createElement('div');
//     container.classList.add('item-container');
//     article.appendChild(container);

//     let product = document.createElement('h3');
//     product.classList.add('grid-item__product');
//     product.innerHTML = EARRINGS[i].product + ' / ' + EARRINGS[i].price + '€ / ';
//     container.appendChild(product);

//     let addItem = document.createElement('button');
//     addItem.innerHTML = 'ADD TO CART';
//     addItem.classList.add('grid-item__btn');
//     addItem.id = EARRINGS[i].id;
//     container.appendChild(addItem);
// };

// for (let i = 0; i < BRACELETS.length; i++) {

//     let article = document.createElement('article');
//     article.classList.add('grid-item');
//     gridBracelets.appendChild(article);

//     let img = document.createElement('img');
//     img.classList.add('grid-item__img');
//     img.src = BRACELETS[i].img;
//     img.alt = BRACELETS[i].alt;
//     article.appendChild(img);

//     let container = document.createElement('div');
//     container.classList.add('item-container');
//     article.appendChild(container);

//     let product = document.createElement('h3');
//     product.classList.add('grid-item__product');
//     product.innerHTML = BRACELETS[i].product + ' / ' + BRACELETS[i].price + '€ / ';
//     container.appendChild(product);

//     let addItem = document.createElement('button');
//     addItem.innerHTML = 'ADD TO CART';
//     addItem.classList.add('grid-item__btn');
//     addItem.id = BRACELETS[i].id;
//     container.appendChild(addItem);
// };

// EVENT-LISTENERS FOR addToArray
let addToCartBtns = document.getElementsByClassName('grid-item__btn');

for (let btn of addToCartBtns) {
    btn.addEventListener('click', addToArray);
};

// -------------------------------------HAS TO BE OVER CART
let numberOfItems = document.querySelector('.cart-btn__number');
let totalOutput = document.querySelector('.cart__tot-price-output');


// --------------------------------------CART

let cartContainer = document.querySelector('.cart__container-products');


let CART = [];

let data = localStorage.getItem('cart');
let returnedCart = JSON.parse(data);


if (data) {
    CART = [...returnedCart];
};

// HAS TO BE RUN IN BEGINNING TO DISPLAY ITEMS IN CART UPON SIDE REFRESH.
addToCart();


// -------------------------------------SEARCH-FUNCTION

let searchInput = document.querySelector('.search__input');
let searchBtn = document.querySelector('.search__submit');
let gridNew = document.querySelector('.grid-new');



function filterArray() {

    let inputValue = searchInput.value;
    let input = inputValue.toLowerCase();

    const NEW_ARRAY = [];

    for (let i = 0; i < COLLECTION.length; i++) {

        let name = COLLECTION[i].product;
        let string = name.toLowerCase();

        if (string.includes(input)) {
            NEW_ARRAY.push(COLLECTION[i]);
        };
    };

    // for (let i = 0; i < EARRINGS.length; i++) {

    //     let name = EARRINGS[i].product;
    //     let string = name.toLowerCase();

    //     if (string.includes(input)) {
    //         NEW_ARRAY.push(EARRINGS[i]);
    //     };
    // };

    // for (let i = 0; i < BRACELETS.length; i++) {

    //     let name = BRACELETS[i].product;
    //     let string = name.toLowerCase();

    //     if (string.includes(input)) {
    //         NEW_ARRAY.push(BRACELETS[i]);
    //     };
    // };

    gridNew.innerHTML = "";
    gridNew.style.display = 'grid';
    gridNecklaces.style.display = 'none';
    // gridBracelets.style.display = 'none';
    // gridEarrings.style.display = 'none';

    for (let i = 0; i < NEW_ARRAY.length; i++) {

        let article = document.createElement('article');
        article.classList.add('grid-item');
        gridNew.appendChild(article);
    
        let img = document.createElement('img');
        img.classList.add('grid-item__img');
        img.src = NEW_ARRAY[i].img;
        img.alt = NEW_ARRAY[i].alt;
        article.appendChild(img);
    
        let container = document.createElement('div');
        container.classList.add('item-container');
        article.appendChild(container);
    
        let product = document.createElement('h3');
        product.classList.add('grid-item__product');
        product.innerHTML = NEW_ARRAY[i].product + ' / ' + NEW_ARRAY[i].price + '€ / ';
        container.appendChild(product);
    
        let addItem = document.createElement('button');
        addItem.innerHTML = 'ADD TO CART';
        addItem.classList.add('grid-item__btn');
        addItem.id = NEW_ARRAY[i].id;
        container.appendChild(addItem);
    };

    // CREATES BTNS FOR ITEMS IN NEW CART.
    let btns = document.getElementsByClassName('grid-item__btn');

    for (let btn of btns) {
        btn.addEventListener('click', addToArray);
    };

    if (input == "") {
        gridNecklaces.style.display = 'grid';
        // gridEarrings.style.display = 'grid';
        // gridBracelets.style.display = 'grid';
        gridNew.style.display = 'none';
    };

    scrollItems();
};

searchBtn.addEventListener('click', filterArray);
document.addEventListener('keypress', filterArray);


// -----------------------------------------ADD TO CART-ARRAY
function addToArray(e) {

    for (let i = 0; i < COLLECTION.length; i++) {

        if (COLLECTION[i].id === e.target.id) {
            CART.push(COLLECTION[i]);
        }; 
    };

    // for (let i = 0; i < NECKLACES.length; i++) {
        
    //     if (NECKLACES[i].id === e.target.id) {
    //         CART.push(NECKLACES[i]);
    //     }; 
    // };

    // for (let i = 0; i < EARRINGS.length; i++) {
        
    //     if (EARRINGS[i].id === e.target.id) {
    //         CART.push(EARRINGS[i]);
    //     };  
    // };

    addToCart();
    showCart();
};


// -----------------------------------------SHOW/HIDE CART FUNCTIONS

let sideCart = document.querySelector('.cart');
let closeBtn = document.querySelector('.cart__close');
let showBtn = document.querySelector('.cart-btn__btn');
let overlay = document.querySelector('.overlay');
let containerTotal = document.querySelector('.cart__container-total');

function showCart() {

    // DISPLAYS TOTAL-CONTAINER IN CART.
    if (CART.length > 0) {
        containerTotal.style.display = 'flex';
    };

    sideCart.style.right = 0 + 'px';
    overlay.style.display = 'block';
};

function hideCart() {
    sideCart.style.right = -100 + 'vw';
    overlay.style.display = 'none';
};

overlay.addEventListener('click', hideCart);
showBtn.addEventListener('click', showCart);
closeBtn.addEventListener('click', hideCart);



// ---------------------------------------ADD TO CART CONTAINER

function addToCart() {

    // PUSH TO LOCAL STORAGE
    let cartString = JSON.stringify(CART);
    localStorage.setItem('cart', cartString);

    cartContainer.innerHTML = "";
    
    if (CART.length > 0) {
        document.querySelector('.cart__header').innerHTML = 'CART';
    };

    CART.forEach( e => {

        let cartArticle = document.createElement('article');
        cartArticle.classList.add('cart__article')
        cartContainer.appendChild(cartArticle);
    
        let cartImg = document.createElement('img');
        cartImg.classList.add('cart__img');
        cartImg.src = e.img;
        cartImg.alt = e.alt;
        cartArticle.appendChild(cartImg);

        let cartTextContainer = document.createElement('div');
        cartTextContainer.classList.add('cart__text-container');
        cartArticle.appendChild(cartTextContainer);
    
        let cartProduct = document.createElement('h4');
        cartProduct.classList.add('cart__product');
        cartProduct.innerHTML = e.product;
        cartTextContainer.appendChild(cartProduct);
    
        let cartPrice = document.createElement('p');
        cartPrice.classList.add('cart__price');
        cartPrice.innerHTML = e.price + '€';
        cartTextContainer.appendChild(cartPrice);
    });

    // SHOWS HOW MANY PRODUCTS THERE IS IN THE CART - IN HEAD.
    numberOfItems.innerHTML = CART.length;

    // SHOWS TOTAL PRICE IN CART
    let totalPrice = 0;

    for (let i = 0; i < CART.length; i++) {
        totalPrice += CART[i].price;
        totalOutput.innerHTML = totalPrice + '€';
    };
};



//------------------------------SHOW PRODUCTS ON SCROLL
function scrollItems() {
    let items = document.querySelectorAll('.grid-item');
    
    for (let item of items) {
        let itemPosition = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 2.5;
        

        if (itemPosition < screenPosition) {
            item.classList.add('grid-item--visible');
        }
    }
}

scrollItems();
window.addEventListener('scroll', scrollItems);


export {CART};