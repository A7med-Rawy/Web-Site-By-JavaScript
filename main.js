document.body.style.cssText = "box-sizing: border-box;margin: 0;padding: 0;";
// Start Header
let head = document.createElement("header");
let logo = document.createElement("div");
logo.className = "logo";
logo.style.cssText = "margin-left: 10px;color:#25ac6b;font-weight:bold;display: flex;justify-content: center;font-size: 24px;align-content: center;align-items: center;";
let elzero = document.createTextNode("ElRawy");
logo.appendChild(elzero);
let main = document.createElement("div");
main.className = "main";
let ulElement = document.createElement("ul");
let liElementOne = document.createElement("li");
liElementOne.style.cssText = "transition:0.3s;font-size: 18px;cursor: pointer;display: inline;padding:10px"
liElementOne.innerHTML = "Home";
let liElementTwo = document.createElement("li");
liElementTwo.style.cssText = "transition:0.3s;font-size: 18px;cursor: pointer;display: inline;padding:10px"
liElementTwo.innerHTML = "About";
let liElementThree = document.createElement("li");
liElementThree.style.cssText = "transition:0.3s;font-size: 18px;cursor: pointer;display: inline;padding:10px"
liElementThree.innerHTML = "Service";
let liElementFour = document.createElement("li");
liElementFour.style.cssText = "transition:0.3s;font-size: 18px;cursor: pointer;display: inline;padding:10px"
liElementFour.innerHTML = "Contact";
ulElement.appendChild(liElementOne);
ulElement.appendChild(liElementTwo);
ulElement.appendChild(liElementThree);
ulElement.appendChild(liElementFour);
main.appendChild(ulElement);
head.appendChild(logo);
head.appendChild(main);
document.body.append(head);
head.style.cssText = "box-sizing: border-box;position: relative;display: flex;justify-content: space-between;padding: 10px;z-index: 2;box-shadow: 2px -2px 5px 0px black;"
liElementOne.onclick = function () {
    liElementOne.style.color = "rgb(37, 172, 107)";
}
liElementTwo.onclick = function () {
    liElementTwo.style.color = "rgb(37, 172, 107)";
}
liElementThree.onclick = function () {
    liElementThree.style.color = "rgb(37, 172, 107)";
}
liElementFour.onclick = function () {
    liElementFour.style.color = "rgb(37, 172, 107)";
}

// End Header
// Strat Countainer
let countainer = document.createElement("div");
countainer.className = "content"
for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    product.style.cssText = "color:gray;border-radius:4px; box-shadow: 3px 21px 25px 0px rgba(0,0,0,0.1);box-sizing: border-box;background-color:white;padding:10px;width:100%;display: flex;align-items: center;justify-content: center;flex-direction: column;";
    let inProduct = document.createElement("span")
    inProduct.style.cssText = "color:black;display: block;font-size: 40px;padding: 10px;";
    inProduct.innerHTML = `${i}`
    product.appendChild(inProduct);
    let productText = document.createTextNode(`Product ${i}`);
    product.appendChild(productText);
    product.className = `product${i}`;
    countainer.appendChild(product);
}
document.body.append(countainer);
countainer.style.cssText = "padding: 14px;height: 788px;box-sizing: border-box;    background-color: rgb(238, 238, 238); display: grid;grid-template-columns: 1fr 1fr 1fr;gap: 20px;justify-items: center;";
// End Countainer
// Strat Footer
let footer = document.createElement("footer");
footer.className = "footer";
footer.innerHTML = "Copyright 2024"
footer.style.cssText = "box-sizing: border-box;height: 66px;background-color: rgb(37, 172, 107);text-align: center;padding: 15px;font-size: 24px;color: white;"
document.body.append(footer);
// End Footer