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
