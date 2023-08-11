// handle checkbox header
const labelBars = document.querySelector('.header__bars');
const headerCheckbox = document.querySelector('.header__checkbox');
const mobileSidebarWrapper = document.querySelector('.mobile-sidebar-wrapper');
labelBars.addEventListener('click', () => {
    // headerCheckbox.checked = !headerCheckbox.checked;
    console.log(headerCheckbox.checked);
    mobileSidebarWrapper.style.display = headerCheckbox.checked ? 'block' : 'none';
});
