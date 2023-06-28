import { categories, products } from './data.js';

// render categories

const categoryList = document.querySelector('.product__list');

const categoriesHtml = categories.map(
    (category) => `<div class="product__item">
            <div class="product__image">
                <img src="${category.image}" />
            </div>
            <h4 class="product__name">${category.name}</h4>
        </div>`
);

categoryList.innerHTML = categoriesHtml.join('');

// handle header display fixed

const HALF_HEADER_HEIGHT = 40;
const HEADER__FIXED_CLASS = 'header__fixed';

const header = document.getElementById('header');
document.addEventListener('scroll', () => {
    if (window.pageYOffset >= HALF_HEADER_HEIGHT) header.classList.add(HEADER__FIXED_CLASS);
    else header.classList.remove(HEADER__FIXED_CLASS);
});

// render products
const productList = document.querySelector('tbody');
const productsHtml = products.map(
    (product) =>
        `<tr>
            <td class="product__img">
                <div>
                    <img
                        src="${product.image}"
                        alt=""
                    />
                </div>
            </td>
            <td class="product__info">
                <strong class="product__detail-name">
                    ${product.name}
                </strong>
                ${product.info.map(
                    (item) => `<div>
                <input type="checkbox" />
                     <span class="product__">${item.cost} - ${item.unit}</span>
            </div>`
                )}
                
            </td>
        </tr>`
);

productList.innerHTML = productsHtml.join('');
