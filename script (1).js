/* =========================
   CART VARIABLES
========================= */

let cart = [];

let total = 0;


/* =========================
   ADD TO CART
========================= */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    displayCart();
}


/* =========================
   DISPLAY CART
========================= */

function displayCart() {

    let cartElement =
        document.getElementById("cart");

    let totalElement =
        document.getElementById("total");


    /* Clear current cart display */

    cartElement.innerHTML = "";


    /* If cart is empty */

    if (cart.length === 0) {

        cartElement.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    /* Display each item */

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


    /* Update total */

    totalElement.textContent = total;
}


/* =========================
   REMOVE ITEM
========================= */

function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    displayCart();
}


/* =========================
   CLEAR CART
========================= */

function clearCart() {

    cart = [];

    total = 0;

    displayCart();
}


/* =========================
   PLACE ORDER
========================= */

function placeOrder() {

    let name =
        document.getElementById("name").value;

    let contact =
        document.getElementById("contact").value;

    let address =
        document.getElementById("address").value;

    let payment =
        document.getElementById("payment").value;


    /* Check name */

    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    /* Check contact */

    if (contact === "") {

        alert("Please enter your contact number.");

        return;
    }


    /* Check address */

    if (address === "") {

        alert("Please enter your delivery address.");

        return;
    }


    /* Check cart */

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    /* Successful order */

    alert(
        "Order placed successfully!\n\n" +
        "Name: " + name + "\n" +
        "Contact: " + contact + "\n" +
        "Payment: " + payment + "\n" +
        "Total: ₱" + total
    );


    /* Optional: clear cart after order */

    clearCart();


    /* Clear form */

    document.getElementById("name").value = "";

    document.getElementById("contact").value = "";

    document.getElementById("address").value = "";

    document.getElementById("payment").selectedIndex = 0;
}