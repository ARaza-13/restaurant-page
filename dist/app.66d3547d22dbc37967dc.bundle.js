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

;// CONCATENATED MODULE: ./src/assets/imgs/krusty-krab-home.jpg
const krusty_krab_home_namespaceObject = __webpack_require__.p + "krusty-krab-home.jpg";
;// CONCATENATED MODULE: ./src/home.js


function createHomePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to the Krusty Krab!";

    const homeImg = document.createElement("img");
    homeImg.src = krusty_krab_home_namespaceObject;
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

/* harmony default export */ const home = (loadHome);
;// CONCATENATED MODULE: ./src/menu.js
function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "GALLEY GRUB";

    const pattyMenu = createPattyMenu();
    const mealsMenu = createMealsMenu();
    const sidesMenu = createSidesMenu();
    const drinksMenu = createDrinksMenu();

    menu.appendChild(menuTitle);
    menu.appendChild(pattyMenu);
    menu.appendChild(mealsMenu);
    menu.appendChild(sidesMenu);
    menu.appendChild(drinksMenu);
    
    return menu;
}

function createPattyMenu() {
    const pattyMenu = document.createElement("div");
    pattyMenu.classList.add("patties");

    pattyMenu.appendChild(
        createMenuItem(
            "Krabby Patty",
            "$1.25"
        )
    );
    pattyMenu.appendChild(
        createMenuItem(
            "Krabby Patty with sea cheese",
            "$1.50"
        )
    );
    pattyMenu.appendChild(
        createMenuItem(
            "Double Krabby Patty",
            "$2.00"
        )
    );
    pattyMenu.appendChild(
        createMenuItem(
            "Double Krabby Patty with sea cheese",
            "$2.25"
        )
    );
    pattyMenu.appendChild(
        createMenuItem(
            "Triple Krabby Patty",
            "$3.00"
        )
    );
    pattyMenu.appendChild(
        createMenuItem(
            "Triple Krabby Patty with sea cheese",
            "$3.25"
        )
    );

    return pattyMenu;
}

function createMealsMenu() {
    const mealsMenu = document.createElement("div");
    mealsMenu.classList.add("meals");

    mealsMenu.appendChild(
        createMenuItem(
            "Krabby Meal",
            "$3.50"
        )
    );
    mealsMenu.appendChild(
        createMenuItem(
            "Double Krabby Meal",
            "$3.75"
        )
    );
    mealsMenu.appendChild(
        createMenuItem(
            "Triple Krabby Meal",
            "$4.00"
        )
    );
    mealsMenu.appendChild(
        createMenuItem(
            "Salty Sea Dog",
            "$1.25"
        )
    );
    mealsMenu.appendChild(
        createMenuItem(
            "Footlong",
            "$2.00"
        )
    );
    mealsMenu.appendChild(
        createMenuItem(
            "Sailors Surprise",
            "$3.00"
        )
    );
    mealsMenu.appendChild(
        createMenuItem(
            "Golden Loaf",
            "$2.00"
        )
    );
    mealsMenu.appendChild(
        createMenuItem(
            "Golden Loaf with sauce",
            "$2.50"
        )
    );

    return mealsMenu;
}

function createSidesMenu() {
    const sidesMenu = document.createElement("div");
    sidesMenu.classList.add("sides");

    sidesMenu.appendChild(
        createMenuItem(
            "Small Corral Bits",
            "$1.00"
        )
    );
    sidesMenu.appendChild(
        createMenuItem(
            "Medium Corral Bits",
            "$1.25"
        )
    );
    sidesMenu.appendChild(
        createMenuItem(
            "Large Corral Bits",
            "$1.50"
        )
    );
    sidesMenu.appendChild(
        createMenuItem(
            "Kelp Rings",
            "$1.50"
        )
    );
    sidesMenu.appendChild(
        createMenuItem(
            "Kelp Rings with salty sauce",
            "$2.00"
        )
    );

    return sidesMenu;
}

function createDrinksMenu() {
    const drinksMenu = document.createElement("div");
    drinksMenu.classList.add("drinks");

    drinksMenu.appendChild(
        createMenuItem(
            "Kelp Shake",
            "$2.00"
        )
    );
    drinksMenu.appendChild(
        createMenuItem(
            "Small Seafoam Soda",
            "$1.00"
        )
    );
    drinksMenu.appendChild(
        createMenuItem(
            "Medium Seafoam Soda",
            "$1.25"
        )
    );
    drinksMenu.appendChild(
        createMenuItem(
            "Large Seafoam Soda",
            "$1.50"
        )
    );

    return drinksMenu;
}

function createMenuItem(name, price) {

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("p");
    foodName.textContent = name;

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;

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

    const phoneMessage = document.createElement("p");
    phoneMessage.textContent = "Feel free to contact us! But please be sure to ask for Patrick...";

    const phoneImg = document.createElement("img");
    phoneImg.src = no_this_is_patrick_namespaceObject;
    phoneImg.alt = "THIS IS PATRICK!";

    const address = document.createElement("p");
    address.textContent = "⚓ 831 Bottom Feeder Lane, Downtown Bikini Bottom";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = krusty_krab_namespaceObject;
    restaurantLocation.alt = "Krusty Krab";

    contact.appendChild(phoneMessage);
    contact.appendChild(phoneImg);
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
    nav.classList.add('nav');
    nav.classList.add('nav-tabs');
    nav.classList.add('nav-fill');

    const homeLink = document.createElement("a");
    homeLink.classList.add("nav-link");
    homeLink.textContent = "Home";
    homeLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveLink(homeLink);
        home();
    })

    const menuLink = document.createElement("a");
    menuLink.classList.add("nav-link");
    menuLink.textContent = "Menu";
    menuLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveLink(menuLink);
        menu();
    })

    const contactLink = document.createElement("a");
    contactLink.classList.add("nav-link");
    contactLink.textContent = "Contact";
    contactLink.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveLink(contactLink);
        contact();
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
    home();
}

/* harmony default export */ const webpage = (initializeWebpage);
;// CONCATENATED MODULE: ./src/index.js



webpage();
/******/ })()
;
//# sourceMappingURL=app.66d3547d22dbc37967dc.bundle.js.map