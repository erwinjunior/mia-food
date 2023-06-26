import products from './products.js';

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
