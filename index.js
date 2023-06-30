import { categories, products, sales } from './data.js';

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

// render sales
const saleListWrapper = document.querySelector('.sale__list-wrapper');
const salesHtml = sales.map(
    (sale) => `<div class="sale__item">
                    <h3 class="sale__item-title">${sale.title}</h3>
                    <div class="sale__img">
                        <img src="${sale.image}" alt="" />
                    </div>
                    <ul class="sale__list">
                        ${sale.list
                            .map(
                                (item) => `<li class="sale__item-text">
                                            <i class="fa-solid fa-check"></i>
                                            <span>${item}</span>
                                        </li>`
                            )
                            .join('')}
                            <li><button class="sale__button">Đặt Mua Ngay</button></li>
                            <li><span>Hoặc mua trên:</span></li>
                            <li class="sale__online-shopping">
                                <a href="https://shope.ee/2L1MVcwbVx" target="_blank" class="icon-shopee" title="Đặt hàng trên Shopee">
                                    <img src="./assets/img/shopee-img.jpg" />
                                </a>
                            </li>
                            <li class="sale__online-shopping">
                                <a href="https://lazada.vn" target="_blank" class="icon-shopee" title="Đặt hàng trên Shopee">
                                    <img src="./assets/img/lazada-image.jpg" />
                                </a>
                            </li>
                                
                    </ul>
                    
                </div>`
);
// <img src="./assets/img/lazada-image.jpg" />
// <a href="https://shope.ee/2L1MVcwbVx" target="_blank" class="icon-shopee" title="Đặt hàng trên Shopee"></a>
saleListWrapper.innerHTML = salesHtml.join('');
