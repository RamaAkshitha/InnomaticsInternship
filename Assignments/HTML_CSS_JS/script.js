let cart = JSON.parse(localStorage.getItem('cart')) || [];
document.addEventListener("DOMContentLoaded", updateCartUI);
function addToCart(id, name, price) {
    let item = cart.find(product => product.id === id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    saveCart();
    updateCartUI();
}
function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `<li>${item.name} x ${item.quantity} - $${item.price * item.quantity} 
            <button onclick="removeFromCart(${item.id})">Remove</button></li>`;
    });
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalPrice.textContent = total;
}
function removeFromCart(id) {
    let itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1); 
        }
    }

    saveCart();
    updateCartUI();
}
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function toggleCart() {
    let cartElement = document.getElementById("cart");
    let containerElement = document.querySelector(".container");

    cartElement.classList.toggle("show");
    if (cartElement.classList.contains("show")) {
        containerElement.classList.add("shift");
    } else {
        containerElement.classList.remove("shift");
    }
}




