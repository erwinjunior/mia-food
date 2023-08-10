// handle scroll to sale product
const saleButton = document.querySelector('a[href="index.html#khuyenmai"]');
const saleElement = document.querySelector('.sale');
saleButton.addEventListener('click', () => {
    saleElement.scrollIntoView({ behavior: 'smooth' });
});
