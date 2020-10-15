import {CART} from './main.js';


let conatinerProducts = document.querySelector('.container__products');

for (let i = 0; i < CART.length; i++) {

    let article = document.createElement('article');
    article.classList.add('checkout-item');
    conatinerProducts.appendChild(article);

    let img = document.createElement('img');
    img.classList.add('checkout-item__img');
    img.src = CART[i].img;
    article.appendChild(img);

    let product = document.createElement('p');
    product.classList.add('checkout-item__product');
    product.innerHTML = CART[i].product;
    article.appendChild(product);

    let price = document.createElement('p');
    price.classList.add('checkout-item__price');
    price.innerHTML = CART[i].price + '€';
    article.appendChild(price);

    let deleteItem = document.createElement('button');
    deleteItem.innerHTML = 'X';
    deleteItem.classList.add('checkout-item__btn');
    deleteItem.id = CART[i].id;
    article.appendChild(deleteItem);
    
}