// handle close login modal
const closeModalIcon = document.querySelector('.order__dialog-icon i');
closeModalIcon.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const orderDialog = document.querySelector('.order__dialog');
console.log(orderDialog);
orderDialog.style.transform = `translateY(calc(40px))`;
