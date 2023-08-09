/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/home.js
function createHomePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    const headline = document.createElement("h1");
    headline.textContent = "Krusty Krab";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to the Krusty Krab! How may we take your order?";

    home.appendChild(headline);
    home.appendChild(paragraph);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

/* harmony default export */ const home = (loadHome);
;// CONCATENATED MODULE: ./src/assets/imgs/food/krabby-patty.png
const krabby_patty_namespaceObject = __webpack_require__.p + "krabby-patty.png";
;// CONCATENATED MODULE: ./src/menu.js


function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Krabby Patty",
            "$1.25"
        )
    );
    
    return menu;
}

function createMenuItem(name, price) {

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;

    const foodImg = document.createElement("img");
    foodImg.src = krabby_patty_namespaceObject;
    foodImg.alt = `${name}`;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodPrice);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

/* harmony default export */ const menu = (loadMenu);
;// CONCATENATED MODULE: ./src/assets/imgs/no-this-is-patrick.gif
const no_this_is_patrick_namespaceObject = __webpack_require__.p + "no-this-is-patrick.gif";
;// CONCATENATED MODULE: ./src/assets/imgs/krusty-krab.png
const krusty_krab_namespaceObject = __webpack_require__.p + "krusty-krab.png";
;// CONCATENATED MODULE: ./src/contact.js



function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phone = document.createElement("div");

    const message = document.createElement("p");
    message.textContent = "Feel free to contact us! But please be sure to ask for Patrick...";
    phone.appendChild(message);

    const phoneImg = document.createElement("img");
    phoneImg.src = no_this_is_patrick_namespaceObject;
    phoneImg.alt = "THIS IS PATRICK!";
    phone.appendChild(phoneImg);

    const address = document.createElement("p");
    address.textContent = "⚓ 831 Bottom Feeder Lane, Downtown Bikini Bottom";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = krusty_krab_namespaceObject;
    restaurantLocation.alt = "Krusty Krab";

    contact.appendChild(phone);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

/* harmony default export */ const contact = (loadContact);
;// CONCATENATED MODULE: ./src/assets/imgs/krusty-krab-logo.png
const krusty_krab_logo_namespaceObject = __webpack_require__.p + "krusty-krab-logo.png";
;// CONCATENATED MODULE: ./src/webpage.js





function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("img");
    logo.src = krusty_krab_logo_namespaceObject;
    logo.alt = "Krusty Krab Logo";

    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("btn");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        home();
    })

    const menuButton = document.createElement("button");
    menuButton.classList.add("btn");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        menu();
    })

    const contactButton = document.createElement("button");
    contactButton.classList.add("btn");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        contact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
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

    setActiveButton(document.querySelector(".btn"));
    home();
}

/* harmony default export */ const webpage = (initializeWebpage);
;// CONCATENATED MODULE: ./src/index.js



webpage();
/******/ })()
;
//# sourceMappingURL=app.9aaee98297860ea3fdb5.bundle.js.map