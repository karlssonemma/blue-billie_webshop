// GET CART FROM LOCAL STORAGE.

let data = localStorage.getItem('cart');
let returnedCart = JSON.parse(data);

let CART = [...returnedCart];


showItems();

// SHOW PRODUCTS IN CART.


function showItems() {

    let containerProducts = document.querySelector('.container__products');
    containerProducts.innerHTML = "";

    for (let i = 0; i < CART.length; i++) {

        let article = document.createElement('article');
        article.classList.add('checkout-item');
        containerProducts.appendChild(article);

        let img = document.createElement('img');
        img.classList.add('checkout-item__img');
        img.src = CART[i].img;
        article.appendChild(img);

        let textContainer = document.createElement('div');
        textContainer.classList.add('text-container')
        article.appendChild(textContainer);

        let product = document.createElement('p');
        product.classList.add('checkout-item__product');
        product.innerHTML = CART[i].product;
        textContainer.appendChild(product);

        let price = document.createElement('p');
        price.classList.add('checkout-item__price');
        price.innerHTML = CART[i].price + '€';
        article.appendChild(price);

        let deleteItem = document.createElement('button');
        deleteItem.innerHTML = 'X';
        deleteItem.classList.add('delete-btn');
        deleteItem.id = CART[i].id;
        article.appendChild(deleteItem);

        };

    // GIVES ALL THE BUTTONS EVENT-LISTENENERS. NEEDS TO BE INSIDE THE FUNCTION showItems BECAUSE EVERY TIME AN ITEM IS DELETED THE CODE FOR THIS IS DELETED AND THEN RECREATED. IF THIS STUFF IS OUTSIDE THE LOOP ONLY THE FIRST ROUND OF BUTTONS WILL HAVE EVENT-LISTENERS.
    let deleteBtn = document.getElementsByClassName('delete-btn');

    for (let btn of deleteBtn) {
        btn.addEventListener('click', deleteItem);
        console.log(btn);
    };
};

function deleteItem(e) {
    
    for (let i = 0; i < CART.length; i++) {
        
        if (e.target.id === CART[i].id) {

            let itemIndex = CART.indexOf(CART[i]);
            console.log(itemIndex);

            CART.splice(itemIndex, 1);

            console.log(CART);

            showItems();

            let cartString = JSON.stringify(CART);
            localStorage.setItem('cart', cartString);

            // let removeIndex = CART.map( item => {
            //     return item.id;
            // }).indexOf[itemId];

            // CART.splice(removeIndex, 1);
            // console.log(CART);

            // // UPDATES THE PRODUCTS SHOWN AND IN LOCAL STORAGE.
            // showItems();

            // let cartString = JSON.stringify(CART);
            // localStorage.setItem('cart', cartString);
        };
    };
};

