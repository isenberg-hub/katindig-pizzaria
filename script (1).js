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
    let cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";
    for (let item of cart) {
        let food = document.createElement("p");
        food.textContent = item.name + " - ₱" + item.price;
        cartElement.appendChild(food);
    }
    document.getElementById("total").textContent = total;
}
function placeOrder() {
    let name = document.getElementById("name").value;
        if (name === "") {
        alert("Please enter your name.");
        return;
    }
    let contact = document.getElementById("contact").value;
        if (contact === "") {
        alert("Please enter your contact.");
        return;
    }
    let address = document.getElementById("address").value;
        if (address === "") {
        alert("Please enter your address.");
        return;
    }
    let payment = document.getElementById("payment").value;

    alert("Order placed successfully!");
}
function clearCart() {
    cart = [];
    total = 0;
    displayCart();
}