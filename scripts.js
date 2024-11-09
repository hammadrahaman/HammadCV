// Initialize cart as an empty array
let cart = [];
let cartTotal = 0;

// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    cartTotal += itemPrice;
    updateCart();
}

// Function to update the cart UI
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const orderTextArea = document.getElementById('order');

    // Clear the current cart display
    cartItemsElement.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    // Update the cart total
    cartTotalElement.textContent = cartTotal.toFixed(2);

    // Update the order textarea
    const orderSummary = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join('\n');
    orderTextArea.value = orderSummary;
}

// Function to handle order submission
function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Proceed with the order
    alert('Your order has been placed!');
}

// Form submission handler
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const order = document.getElementById('order').value;

    if (!name || !phone || !order) {
        alert('Please fill out all fields!');
        return;
    }

    // Send the order to the backend or display a confirmation message
    alert(`Thank you, ${name}! Your order has been placed.`);

    // Clear the cart and reset the form
    cart = [];
    cartTotal = 0;
    updateCart();
});
