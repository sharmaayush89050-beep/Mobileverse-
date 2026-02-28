let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({name, price});
    total += price;

    updateCart();

}

function updateCart(){

    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total");

    cartList.innerHTML = "";

    cart.forEach(item=>{
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartList.appendChild(li);
    });

    totalSpan.textContent = total;

}
