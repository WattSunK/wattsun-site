
// Save to localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cart.find(item => item.title === product.title);
    if (found) {
        found.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product.title + " added to cart!");
}

// Load cart items and render them
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    const totalElem = document.getElementById('cart-total');
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        totalElem.textContent = "€0.00";
        return;
    }

    cart.forEach(item => {
        const div = document.createElement('div');
        div.style.marginBottom = '20px';
        div.innerHTML = `
            <strong>${item.title}</strong><br>
            Price: €${item.price} × ${item.quantity} = €${item.price * item.quantity}
        `;
        container.appendChild(div);
        total += item.price * item.quantity;
    });

    totalElem.textContent = "€" + total.toFixed(2);
}
