"use strict";
console.log("-------1 VENDING MACHINE--------")
let products = document.querySelectorAll(".products");
let total = 0;
let totalParagraph = document.querySelector(".total");
products.forEach((product) => {
    product.addEventListener("click", (event) => {
        event.preventDefault();
        let amount = parseInt(product.getAttribute("data-amount"));//getting actual info from data-amounts when clicked
        total += amount;
        totalParagraph.innerText = [`Total: ${total}`]; //send data-amount info and putts
        //into innerText of "total" paragraph class.
    });
});


console.log("-------2 MAKE MONEY--------")

let coins = document.querySelector(".coin-container");
let form = document.querySelector(".make-money");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(form);//needs reference to html form
    let quantity = data.get("quantity");
    let coin = data.get("coin");
    for (let i = 0; i < quantity; i++) {
        let newCoin = document.createElement("div");//creating a new coin each time and 
        //sending to coin-container
        newCoin.classList.add(coin, "coin");//adds "coin" to each option
        //value and now you can make grey circles
        newCoin.innerText = coin;
        coins.append(newCoin)
        newCoin.addEventListener("click", () => {
            newCoin.remove();//removes from html
        })
    } //forloop is there to repeat itself and 
    //create a new coin each time
    //dont need to use i, just need the syntax
    form.reset()
});


console.log("-------3 Lights--------")

let bulb = document.querySelector(".light-bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
    bulb.classList.add("light");//turns on light
});

offButton.addEventListener("click", () => {
    bulb.classList.remove("light");//turns off light
});

toggleButton.addEventListener("click", () => {
    bulb.classList.toggle("light");//toggle
});

endButton.addEventListener("click", () => {
    bulb.remove();
    let buttons = document.querySelectorAll(".switch");
    buttons.forEach((button) => {
        button.disabled = true;
    });
});

