import burgerImage from "./images/burger.jpg"

function menuLoad() {
    const container = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    container.appendChild(title);

    addMenuItem(container);
    addMenuItem(container);
    addMenuItem(container);
    addMenuItem(container);
}

function addMenuItem(parent) {
    const food = document.createElement("div");
    food.classList.add("menuItem");

    const image = document.createElement("img");
    image.src = burgerImage;
    image.alt = "Picture of lovely burger";
    food.appendChild(image);

    const para = document.createElement("p");
    para.textContent = "Our no.1 seller with the highest quality meat";
    food.appendChild(para);

    const price = document.createElement("h3");
    price.textContent = "$11.99"
    food.appendChild(price);

    parent.appendChild(food);

}

export {menuLoad};