import "./styles.css";
import {homepageLoad} from "./homepage.js";
import {menuLoad} from "./menu.js";
import { aboutpageLoad } from "./about.js";

function clearContent() {
    const container = document.querySelector("#content");
    container.replaceChildren();
}

homepageLoad();

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {
    clearContent();
    homepageLoad();
});

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
    clearContent();
    menuLoad();
});

const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {
    clearContent();
    aboutpageLoad();
});