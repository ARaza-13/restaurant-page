function createHomePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    const headline = document.createElement("h1");
    headline.textContent = "Krusty Krab";

    const logo = document.createElement("img");
    logo.src = "images/krusty-krab-logo.png";
    logo.alt = "Krusty Krab Logo";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to the Krusty Krab! How may we take your order?";

    home.appendChild(headline);
    home.appendChild(logo);
    home.appendChild(paragraph);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHome;