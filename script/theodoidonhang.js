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

// handle checkbox header
const labelBars = document.querySelector('.header__bars');
const headerCheckbox = document.querySelector('.header__checkbox');
const mobileSidebar = document.getElementById('mobile-sidebar');
const mobileSidebarWrapper = document.querySelector('.mobile-sidebar-wrapper');
// labelBars.addEventListener('click', () => {
//     // headerCheckbox.checked = !headerCheckbox.checked;
//     // console.log(headerCheckbox.checked);
//     mobileSidebarWrapper.style.display = headerCheckbox.checked ? 'block' : 'none';
//     mobileSidebarWrapper.style.maxHeight = headerCheckbox.checked ? '100%' : '0px';
//     mobileSidebar.style.maxHeight = headerCheckbox.checked ? '100%' : '0px';
// });
$(document).ready(function () {
    $('.header__bars').on('click', function () {
        $('#navbar').toggle(300);
    });
});
