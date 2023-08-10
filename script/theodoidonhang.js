// handle close login modal
const closeModalIcon = document.querySelector('.order__dialog-icon i');
closeModalIcon.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// handle scorll down order dialog

const orderDialog = document.querySelector('.order__dialog');
if (window.location.href !== 'theodoidonhang.html') orderDialog.style.transform = `translateY(calc(-100% - 40px))`;

// console.log(orderDialog);
orderDialog.style.transform = `translateY(calc(40px))`;
