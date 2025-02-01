import aboutImage from "./images/restaurant.jpg"

function aboutpageLoad() {
    const container = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "About Us";
    container.appendChild(title);

    const image = document.createElement("img");
    image.src = aboutImage;
    image.alt = "Picture of the restaurant";
    container.appendChild(image);

    const para = document.createElement("p");
    para.textContent = "We have been here for 25 years and we're not planning on going away anytime soon";
    container.appendChild(para);
}

export {aboutpageLoad};