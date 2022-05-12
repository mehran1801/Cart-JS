"use strict"
// accessing all add to cart buttons

const addToCartButtonsDOM = document.querySelectorAll("[data-action=ADD_TO_CART]");

const cartDOM = document.querySelector(".cart");



addToCartButtonsDOM.forEach(addToCartButtonDOM =>{
    addToCartButtonDOM.addEventListener('click',()=>{
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image:productDOM.querySelector(".product__image").getAttribute('src'),
            name: productDOM.querySelector(".product__name").innerText,
            price:productDOM.querySelector(".product__price").innerText,
        }
       
// ? Now I am able to click on "add to cart button" and get an object with image , name and price.

console.table(product);
    })
})

