import homeImage from "./images/homepage-image.jpg"

function homepageLoad() {
    const container = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Carl's Cousine";
    container.appendChild(title);

    const image = document.createElement("img");
    image.src = homeImage;
    image.alt = "Picture of food on a plate in a restaurant";
    container.appendChild(image);

    const para = document.createElement("p");
    para.textContent = "A dining experience to share with friends and family";
    container.appendChild(para);
}

export {homepageLoad};