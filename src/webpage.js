import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import logoImg from './assets/imgs/krusty-krab-logo.png';

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("img");
    logo.src = logoImg;
    logo.alt = "Krusty Krab Logo";

    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add('nav');
    nav.classList.add('nav-tabs');
    nav.classList.add('nav-fill');

    const homeLink = document.createElement("a");
    homeLink.classList.add("nav-link");
    homeLink.textContent = "Home";
    homeLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveLink(homeLink);
        loadHome();
    })

    const menuLink = document.createElement("a");
    menuLink.classList.add("nav-link");
    menuLink.textContent = "Menu";
    menuLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveLink(menuLink);
        loadMenu();
    })

    const contactLink = document.createElement("a");
    contactLink.classList.add("nav-link");
    contactLink.textContent = "Contact";
    contactLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveLink(contactLink);
        loadContact();
    })

    nav.appendChild(homeLink);
    nav.appendChild(menuLink);
    nav.appendChild(contactLink);

    return nav;
}

function setActiveLink(link) {
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
        if (link !== this) {
            link.classList.remove("active");
        }
    });

    link.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = "Copyright © Eugene H. Krabs";

    footer.appendChild(copyright);

    return footer;
}

function initializeWebpage() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveLink(document.querySelector(".nav-link"));
    loadHome();
}

export default initializeWebpage;