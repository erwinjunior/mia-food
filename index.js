import products from './products.js';

// render products

const productList = document.querySelector('.product__list');

const productsHtml = products.map(
    (product) => `<div class="product__item">
            <div class="product__image">
                <img src="${product.image}" />
            </div>
            <h4 class="product__name">${product.name}</h4>
        </div>`
);

productList.innerHTML = productsHtml.join('');

// handle header display fixed

const HALF_HEADER_HEIGHT = 40;
const HEADER__FIXED_CLASS = 'header__fixed';

const header = document.getElementById('header');
document.addEventListener('scroll', () => {
    if (window.pageYOffset >= HALF_HEADER_HEIGHT) header.classList.add(HEADER__FIXED_CLASS);
    else header.classList.remove(HEADER__FIXED_CLASS);
});
