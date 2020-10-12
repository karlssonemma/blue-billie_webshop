import {NECKLACES, EARRINGS, BRACELETS} from './collections.js';


// MENU ------------------

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let menuBtnImg = document.querySelector('.menu-btn__arrow');


let isTrue = true;

// SHOW MENU FUNCTION ----------------

function showMenu() {
    
    if (isTrue === true) {
        menu.style.top = 0;
        menuBtnImg.style.transform = 'rotate(-270deg)';

    } else {
        menu.style.top = -210 + 'px';
        menuBtnImg.style.transform = 'rotate(270deg)';
    };

    isTrue = !isTrue;
};

menuBtn.addEventListener('click', showMenu);

// CART ------------------
let cartContainer = document.querySelector('.cart__container-products');
let CART = [];


// ELEMENT -------------------

let gridNecklaces = document.querySelector('.grid-necklaces');
let gridEarrings = document.querySelector('.grid-earrings');
let gridBracelets = document.querySelector('.grid-bracelets');

// NECKLACES

for (let i = 0; i < NECKLACES.length; i++) {

    let article = document.createElement('article');
    article.classList.add('grid-item');
    gridNecklaces.appendChild(article);

    let img = document.createElement('img');
    img.classList.add('grid-item__img');
    img.src = NECKLACES[i].img;
    article.appendChild(img);

    let product = document.createElement('p');
    product.classList.add('grid-item__product');
    product.innerHTML = NECKLACES[i].product;
    article.appendChild(product);

    let price = document.createElement('p');
    price.classList.add('grid-item__price');
    price.innerHTML = NECKLACES[i].price + '€';
    article.appendChild(price);

    let addItem = document.createElement('button');
    addItem.innerHTML = 'ADD TO CART';
    addItem.classList.add('grid-item__btn');
    addItem.id = NECKLACES[i].id;
    article.appendChild(addItem);
};

// EARRINGS

for (let i = 0; i < EARRINGS.length; i++) {

    let article = document.createElement('article');
    article.classList.add('grid-item');
    gridEarrings.appendChild(article);

    let img = document.createElement('img');
    img.classList.add('grid-item__img');
    img.src = EARRINGS[i].img;
    article.appendChild(img);

    let product = document.createElement('p');
    product.classList.add('grid-item__product');
    product.innerHTML = EARRINGS[i].product;
    article.appendChild(product);

    let price = document.createElement('p');
    price.classList.add('grid-item__price');
    price.innerHTML = EARRINGS[i].price + '€';
    article.appendChild(price);

    let addItem = document.createElement('button');
    addItem.innerHTML = 'ADD TO CART';
    addItem.classList.add('grid-item__btn');
    addItem.id = EARRINGS[i].id;
    article.appendChild(addItem);
};

// BRACELETS

for (let i = 0; i < BRACELETS.length; i++) {

    let article = document.createElement('article');
    article.classList.add('grid-item');
    gridBracelets.appendChild(article);

    let img = document.createElement('img');
    img.classList.add('grid-item__img');
    img.src = BRACELETS[i].img;
    article.appendChild(img);

    let product = document.createElement('p');
    product.classList.add('grid-item__product');
    product.innerHTML = BRACELETS[i].product;
    article.appendChild(product);

    let price = document.createElement('p');
    price.classList.add('grid-item__price');
    price.innerHTML = BRACELETS[i].price + '€';
    article.appendChild(price);

    let addItem = document.createElement('button');
    addItem.innerHTML = 'ADD TO CART';
    addItem.classList.add('grid-item__btn');
    addItem.id = BRACELETS[i].id;
    article.appendChild(addItem);
};

let numberOfItems = document.querySelector('.cart-btn__number');
let totalOutput = document.querySelector('.cart__tot-price-output');


// ADD TO CART-ARRAY ------------- 
function addItem(e) {
    for (let i = 0; i < BRACELETS.length; i++) {

        if (BRACELETS[i].id === e.target.id) {
            CART.push(BRACELETS[i]);
        }; 
    };

    for (let i = 0; i < NECKLACES.length; i++) {
        
        if (NECKLACES[i].id === e.target.id) {
            CART.push(NECKLACES[i]);
        }; 
    };

    for (let i = 0; i < EARRINGS.length; i++) {
        
        if (EARRINGS[i].id === e.target.id) {
            CART.push(EARRINGS[i]);
        };  
    };

    showItem();
    showCart();

    // SHOWS HOW MANY PRODUCTS THERE IS IN THE CART - IN HEAD.
    numberOfItems.innerHTML = CART.length;

    // SHOWS TOTAL PRICE IN SIDECART
    let totalPrice = 0;

    for (let i = 0; i < CART.length; i++) {
        totalPrice += CART[i].price;
        totalOutput.innerHTML = totalPrice + '€';
    }
};



// SHOW/HIDE CART FUNCTIONS -----------------
let sideCart = document.querySelector('.cart');
let closeBtn = document.querySelector('.cart__close');
let showBtn = document.querySelector('.cart-btn__btn');
let overlay = document.querySelector('.overlay');

function showCart() {
    sideCart.style.right = 0 + 'px';
    overlay.style.display = 'block';
};

function hideCart() {
    sideCart.style.right = -410 + 'px';
    overlay.style.display = 'none';
};

overlay.addEventListener('click', hideCart);
showBtn.addEventListener('click', showCart);
closeBtn.addEventListener('click', hideCart);



// ADD TO CART CONTAINER ------------------
function showItem() {

    if (CART.length > 1) {
        cartContainer.innerHTML = "";
    } else if (CART.length > 0) {
        document.querySelector('.cart__header').innerHTML = 'CART';
    };

    CART.forEach( e => {

        let cartArticle = document.createElement('article');
        cartArticle.classList.add('cart__article')
        cartContainer.appendChild(cartArticle);
    
        let cartImg = document.createElement('img');
        cartImg.classList.add('cart__img');
        cartImg.src = e.img;
        cartArticle.appendChild(cartImg);

        let cartTextContainer = document.createElement('div');
        cartTextContainer.classList.add('cart__text-container');
        cartArticle.appendChild(cartTextContainer);
    
        let cartProduct = document.createElement('p');
        cartProduct.classList.add('cart__product');
        cartProduct.innerHTML = e.product;
        cartTextContainer.appendChild(cartProduct);
    
        let cartPrice = document.createElement('p');
        cartPrice.classList.add('cart__price');
        cartPrice.innerHTML = e.price + '€';
        cartTextContainer.appendChild(cartPrice);
    });
};

// ADD TO CART BTNS
let necklaceBtn0 = document.querySelector('#necklace0');
let necklaceBtn1 = document.querySelector('#necklace1');
let necklaceBtn2 = document.querySelector('#necklace2');
let necklaceBtn3 = document.querySelector('#necklace3');
let necklaceBtn4 = document.querySelector('#necklace4');
let necklaceBtn5 = document.querySelector('#necklace5');

let earringsBtn0 = document.querySelector('#earrings0');
let earringsBtn1 = document.querySelector('#earrings1');
let earringsBtn2 = document.querySelector('#earrings2');
let earringsBtn3 = document.querySelector('#earrings3');
let earringsBtn4 = document.querySelector('#earrings4');
let earringsBtn5 = document.querySelector('#earrings5');

let braceletBtn0 = document.querySelector('#bracelet0');
let braceletBtn1 = document.querySelector('#bracelet1');
let braceletBtn2 = document.querySelector('#bracelet2');
let braceletBtn3 = document.querySelector('#bracelet3');
let braceletBtn4 = document.querySelector('#bracelet4');
let braceletBtn5 = document.querySelector('#bracelet5');


// EVENT LISTENERS FOR ADD TO CART
necklaceBtn0.addEventListener('click', addItem);
necklaceBtn1.addEventListener('click', addItem);
necklaceBtn2.addEventListener('click', addItem);
necklaceBtn3.addEventListener('click', addItem);
necklaceBtn4.addEventListener('click', addItem);
necklaceBtn5.addEventListener('click', addItem);

earringsBtn0.addEventListener('click', addItem);
earringsBtn1.addEventListener('click', addItem);
earringsBtn2.addEventListener('click', addItem);
earringsBtn3.addEventListener('click', addItem);
earringsBtn4.addEventListener('click', addItem);
earringsBtn5.addEventListener('click', addItem);

braceletBtn0.addEventListener('click', addItem);
braceletBtn1.addEventListener('click', addItem);
braceletBtn2.addEventListener('click', addItem);
braceletBtn3.addEventListener('click', addItem);
braceletBtn4.addEventListener('click', addItem);
braceletBtn5.addEventListener('click', addItem);




// BRACELETS.forEach(e => {

    // gridBracelets.innerHTML += `
    // <article class="grid-item">
    // <img src="${e.img}" class="grid-item__img">
    // <p class="grid-item__product">${e.product}</p>
    // <p class="grid-item__price">${e.price}</p>
    // <button class="grid-item__btn">ADD TO CART</button>
    // </article>
    // `;