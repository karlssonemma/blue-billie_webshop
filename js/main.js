// let headNav = document.querySelector('.header-toggle');
// let sideMenu = document.querySelector('.menu');


// function showMenu() {
//     sideMenu.style.left = 0 + 'px';
// }

// function hideMenu() {
//     sideMenu.style.left = - 400 + 'px'
// }
// sideMenu.addEventListener('mouseout', hideMenu);
// sideMenu.addEventListener('mouseover', showMenu);
// headNav.addEventListener('mouseout', hideMenu);
// headNav.addEventListener('mouseover', showMenu);

// let menu = document.querySelector('.menu');
// let menuToggler = document.querySelector('.menu-span');

// function showMenu() {
//     menu.style.top = 280 + 'px';
// }

// menu.addEventListener('mouseover', showMenu);
// menuToggler.addEventListener('mouseover', showMenu);


// function hideMenu() {
//     menu.style.top = -100 + 'px';
// }

// menu.addEventListener('mouseout', hideMenu);

let menu = document.querySelector('.menu');

let isTrue = true;

function showMenu1() {
    
    if (isTrue === true) {
        menuBtn.innerHTML = 'X';
        menu.style.top = 0;
    } else {
        menuBtn.innerHTML = 'MENU';
        menu.style.top = -200 + 'px';
    };

    isTrue = !isTrue;
};

let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', showMenu1);

// KOLLEKTIONER

// NECKLACES

const NECKLACES = [
    {
        product: 'Collect Chain Silver',
        price: 98 + '€',
        img: ['./img/necklaces/collect_chain_silver/collect-chain-silver.jpg']
    },
    {
        product: 'Gourmet Necklace Silver',
        price: 399 + '€',
        img: './img/necklaces/gourmet_necklace_silver/gourmet-necklace-silver.jpg'
    },
    {
        product: 'Lightening Silver',
        price: 94 + '€',
        img: './img/necklaces/lightening_silver/lightening-chain.jpg'
    },
    {
        product: 'Snake Chain Silver',
        price: 99 + '€',
        img: './img/necklaces/snake_chain_silver/snake-chain.jpg' 
    },
    {
        product: 'Thick Rope Silver',
        price: 98 + '€',
        img: './img/necklaces/thick_rope_silver/thick-ropechain-silver.jpg'
    }
]

// EARRINGS

const EARRINGS = [
    {
        product: 'Chain Collection Earring',
        price: 150 + '€',
        img: './img/earrings/chain_collection_earrings/chain-hoop-earrings-silver3.jpg'
    },
    {
        product: 'Mini Sun Hoops',
        price: 98 + '€',
        img: './img/earrings/mini_sun_hoops/mini-sun-hoop2.jpg'
    },
    {
        product: 'Shell Earring',
        price: 65 + '€',
        img: './img/earrings/shell_earring/seashell-earring-silver.jpg'
    },
    {
        product: 'Small Hoops Silver',
        price: 105 + '€',
        img: './img/earrings/small_hoops_silver/small-hoops-shiny-silver.jpg'
    },
    {
        product: 'Sapphire Earring',
        price: 350 + '€',
        img: './img/earrings/sapphire_earring/sapphire-earring.jpg'
    },
    {
        product: 'Twisted Diamond Hoop',
        price: 335 + '€',
        img: './img/earrings/twisted_diamond_hoop/diamond-hoop.jpg'
    }
]


let gridNecklaces = document.querySelector('.grid-necklaces');

NECKLACES.forEach(e => {
    gridNecklaces.innerHTML += `
    <article class="grid-item">
    <img src="${e.img}" class="grid-item__img">
    <p class="grid-item__product">${e.product}</p>
    <p class="grid-item__price">${e.price}</p>
    </article>
    `
});

let gridEarrings = document.querySelector('.grid-earrings');

EARRINGS.forEach(e => {
    gridEarrings.innerHTML += `
    <article class="grid-item">
    <img src="${e.img}" class="grid-item__img">
    <p class="grid-item__product">${e.product}</p>
    <p class="grid-item__price">${e.price}</p>
    </article>
    `
});


// let gridItem = document.getElementsByClassName('grid-item');
// console.log(gridItem);

// function gridItemHover(e) {
//     let gridImg = document.getElementsByClassName('grid-item__img');
//     gridImg.src = NECKLACES[e].img
// }

i = 0;
function hover(e) {


if ( i < EARRINGS.img.length ){
    e.src = EARRINGS[e].img[i];
} else {
    i = 0;
}

i++;

}

let gridImg = document.querySelector('.grid-item__img');
gridImg.addEventListener('mouseover', hover)