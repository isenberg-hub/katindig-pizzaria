let cart = [];
let total = 0;
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });
    total += price;
    displayCart();
}
function displayCart() {
    let cartElement =
        document.getElementById("cart");
    let totalElement =
        document.getElementById("total");
    cartElement.innerHTML = "";
    if (cart.length === 0) {
        cartElement.innerHTML =
            "<p>Your cart is empty.</p>";
    }
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let cartItem =
            document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>
                ${item.name} - ₱${item.price}
            </span>
            <button onclick="removeFromCart(${i})">
                Remove
            </button>
        `;
        cartElement.appendChild(cartItem);
    }
    totalElement.textContent = total;
}
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}
function clearCart() {
    cart = [];
    total = 0;
    displayCart();
}
function placeOrder() {
    let name =
        document.getElementById("name").value;
    let contact =
        document.getElementById("contact").value;
    let address =
        document.getElementById("address").value;
    let payment =
        document.getElementById("payment").value;
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (contact === "") {
        alert("Please enter your contact number.");
        return;
    }
    if (address === "") {
        alert("Please enter your delivery address.");
        return;
    }
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert(
        "Order placed successfully!\n\n" +
        "Name: " + name + "\n" +
        "Contact: " + contact + "\n" +
        "Payment: " + payment + "\n" +
        "Total: ₱" + total
    );
    clearCart();
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("address").value = "";
    document.getElementById("payment").selectedIndex = 0;
}
