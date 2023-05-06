const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

iconMenu.addEventListener('click', function(e) {
    menuBody.classList.toggle("menu__body_active");
    iconMenu.classList.toggle("icon-menu_active");
    document.body.classList.toggle("body_lock");
});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
});

function onMenuLinkClick(e) {

    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoPage = document.querySelector(menuLink.dataset.goto);
        const gotoPageValue = gotoPage.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight

        window.scrollTo({
            top: gotoPageValue,
            behavior: 'smooth'
        });
        e.preventDefault();
    }

    if (iconMenu.classList.contains('icon-menu_active')) {
        menuBody.classList.remove("menu__body_active");
        iconMenu.classList.remove("icon-menu_active");
        document.body.classList.remove("body_lock");
    }
}