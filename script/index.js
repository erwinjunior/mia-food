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
                     <span class="product__cost">${item.cost} - ${item.unit}</span>
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

// scroll sale list wrapper
// const saleButton = document.querySelector('a[href="#khuyenmai"]');
// const saleElement = document.querySelector('.sale');
// saleButton.addEventListener('click', () => {
//     saleElement.scrollIntoView({ behavior: 'smooth' });
// });

// scroll categories list
// const productButton = document.querySelector('a[href="#menu"]');
// const productsCostElement = document.querySelector('.product__cost-wrapper');
// productButton.addEventListener('click', () => {
//     productsCostElement.scrollIntoView({ behavior: 'smooth' });
// });

// handle scroll-x order cart
const cart = document.querySelector('.menu_right .cart');
const orderCart = document.querySelector('.ordercart');

const closeOrderCart = () => {
    const orderCartCoordinateX = orderCart.getBoundingClientRect().x;
    orderCart.style.transform = `translateX(${orderCartCoordinateX !== 0 ? 0 : '-100%'})`;
};

cart.addEventListener('click', () => {
    closeOrderCart();
});

// handle close order cart
const orderCartCloseBtn = document.querySelector('.container1 .btn-dark');
orderCartCloseBtn.addEventListener('click', () => {
    closeOrderCart();
});

// handle transition contract box
const contactIcon = document.querySelector('.contact_icon');
const contactBox = document.querySelector('.contact_box');
contactIcon.addEventListener('click', () => {
    const contactBoxX = contactBox.getBoundingClientRect().x;
    const clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // console.log({ contactBoxX, clientWidth });
    if (contactBoxX <= clientWidth) {
        contactBox.style.right = 'calc(-100% - 10px)';
        contactIcon.style.transform = `rotateY(2turn)`;
    } else {
        contactBox.style.right = '75px';
        contactIcon.style.transform = `rotateY(1turn)`;
    }
});

// handle checked checkbox product
const checkboxProducts = document.querySelectorAll('.product__info input');
const cartQuantity = document.querySelector('.cart .quantity');
checkboxProducts.forEach((checkboxProduct) => {
    checkboxProduct.addEventListener('change', () => {
        const checked = checkboxProduct.checked;
        const quantity = cartQuantity.textContent;

        // if checked => quantity += 1 else quantity -= 1
        cartQuantity.textContent = (Number(quantity) + (checked ? 1 : -1)).toString();
        cart.classList.add('shake');
        setTimeout(() => cart.classList.remove('shake'), 200);
    });
});

// handle checkbox header
const labelBars = document.querySelector('.header__bars');
const headerCheckbox = document.querySelector('.header__checkbox');
const mobileSidebarWrapper = document.querySelector('.mobile-sidebar-wrapper');
const mobileSidebar = document.getElementById('mobile-sidebar');
const navbar = document.getElementById('navbar');
const navbarCheckedClass = 'header--checked';
// labelBars.addEventListener('click', () => {
//     // headerCheckbox.checked = !headerCheckbox.checked;
//     // console.log(headerCheckbox.checked);
//     // mobileSidebarWrapper.style.display = headerCheckbox.checked ? 'block' : 'none';
//     // mobileSidebarWrapper.style.maxHeight = headerCheckbox.checked ? '100%' : '0px';
//     // mobileSidebar.style.maxHeight = headerCheckbox.checked ? '100%' : '0px';
//     const checked = headerCheckbox.checked;
//     if (checked) navbar.classList.add(navbarCheckedClass);
//     else navbar.classList.remove(navbarCheckedClass);
// });

// handle open navbar mobile
$(document).ready(function () {
    $('.header__bars').on('click', function () {
        $('#navbar').toggle(300);
    });
});

// handle active navbar home page
const navbarsHomePage = [
    document.querySelector('#navbar li a[href="#sanpham"] '),
    document.querySelector('#navbar li a[href="#khuyenmai"] '),
];

const navbarActiveClass = 'navbar--selected';

const activeNavbarHomePage = (href) => {
    navbarsHomePage.forEach((navbar) => {
        const navbarHref = navbar.getAttribute('href');
        // console.log(navbarHref);
        if (navbarHref.toLowerCase() === href.toLowerCase()) navbar.classList.add(navbarActiveClass);
    });
};

// handle active navbar home page reload and change page
(() => {
    const href = window.location.href;
    // console.log(href);

    if (!href.includes('#')) {
        document.querySelector('#navbar li a[href="#sanpham"] ').classList.add(navbarActiveClass);
        return;
    }

    const suffixes = [];
    for (let i = href.length - 1; i > 0; --i) {
        if (href[i] === '#') break;
        else suffixes.unshift(href[i]);
    }
    const currentHref = suffixes.join('');
    // console.log(currentHref);
    activeNavbarHomePage(`#${currentHref}`);
})();

navbarsHomePage.forEach((navbar) => {
    navbar.addEventListener('click', () => {
        navbar.classList.add(navbarActiveClass);

        navbarsHomePage.forEach((item) => {
            if (item.getAttribute('href') != navbar.getAttribute('href')) item.classList.remove('navbar--selected');
        });
    });
});
