const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoicon = document.querySelector(".navbar-shopping-cart");
const menuCarrito = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const infoProduct = document.querySelector(".product-detail2");
const closeInfo =document.querySelector(".product-detail2-close");


menuEmail.addEventListener('click', toogleDesktopMenu);
mobileIcon.addEventListener('click', toogleMobileMenu);
menuCarritoicon.addEventListener('click', toogleMenuCarrito);
closeInfo.addEventListener('click', openProductDetailAside);

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

function openProductDetailAside() {
    const isInfoProductClosed = infoProduct.classList.contains('inactive');

    if (isInfoProductClosed) {
        infoProduct.classList.add('inactive');
    }

    infoProduct.classList.toggle("inactive")
}

const producList = [];
producList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "bike hello buen dia esta es una muy buena descripcion del producto que se va a vender"
})
producList.push({
    name: 'Pantalla',
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "pantalla hello buen dia esta es una muy buena descripcion del producto que se va a vender"
})
producList.push({
    name: 'computadora',
    price: 1532,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "computadora hello buen dia esta es una muy buena descripcion del producto que se va a vender"
})
producList.push({
    name: 'laptop',
    price: 13332,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "laptop hello buen dia esta es una muy buena descripcion del producto que se va a vender"
})
producList.push({
    name: 'iphone',
    price: 1,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "iphone hello buen dia esta es una muy buena descripcion del producto que se va a vender"
})
producList.push({
    name: 'audifonos',
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "audifonos hello buen dia esta es una muy buena descripcion del producto que se va a vender"
})
producList.push({
    name: 'microfono',
    price: 532,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "microfono hello buen dia esta es una muy buena descripcion del producto que se va a vender"
})
/* function renderInfoProducts(name, price, image, description) {
    const imgCloseDiv = document.createElement("div");
    const closeImg = document.createElement('img');
    imgCloseDiv.classList.add('product-detail2-close');
    closeImg = setAttribute('src', "./icons/icon_close.png");
    imgCloseDiv.appendChild(closeImg);

    const imagInfo = document.createElement('img');
    imagInfo.setAttribute('src', image);

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('product-info2');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + price;
    const productName = document.createElement('p');
    productName.innerText = name;
    const descriptions = document.createElement('p');
    descriptions.innerText = description

    const buttonInfo = document.createElement('button')
    buttonInfo.classList.add('primary-button add-to-cart-button');
    const imgsell = document.createElement('img');
    imgsell.setAttribute('src','./icons/bt_add_to_cart.svg');

    buttonInfo.appendChild(imgsell);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(descriptions);
    productInfoDiv.appendChild(buttonInfo);


    infoProduct.appendChild(imgCloseDiv);
    infoProduct.appendChild(imagInfo);
    infoProduct.appendChild(productInfoDiv);
} */
function renderProducts(arr) {
    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');


        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(producList);