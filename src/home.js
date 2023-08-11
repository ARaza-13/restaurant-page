import krustyKrabHome from './assets/imgs/krusty-krab-home.jpg';

function createHomePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to the Krusty Krab!";

    const homeImg = document.createElement("img");
    homeImg.src = krustyKrabHome;
    homeImg.alt = "Welcome to the Krusty Krab";

    const paragraph = document.createElement("h2");
    paragraph.textContent = "How may we take your order?";

    home.appendChild(headline);
    home.appendChild(homeImg);
    home.appendChild(paragraph);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHome;