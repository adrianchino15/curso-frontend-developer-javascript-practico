const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoicon = document.querySelector(".navbar-shopping-cart");
const menuCarrito = document.querySelector(".product-detail");

menuEmail.addEventListener('click', toogleDesktopMenu);
mobileIcon.addEventListener('click', toogleMobileMenu);
menuCarritoicon.addEventListener('click', toogleMenuCarrito)


function toogleMenuCarrito() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}


function toogleDesktopMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add("inactive");
    }


    desktopMenu.classList.toggle('inactive');
}


function toogleMobileMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add("inactive");
    }

    mobileMenu.classList.toggle('inactive');
}