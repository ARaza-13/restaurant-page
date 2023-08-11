import patrick from './assets/imgs/no-this-is-patrick.gif';
import krustyKrab from './assets/imgs/krusty-krab.png';

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneMessage = document.createElement("p");
    phoneMessage.textContent = "Feel free to contact us! But please be sure to ask for Patrick...";

    const phoneImg = document.createElement("img");
    phoneImg.src = patrick;
    phoneImg.alt = "THIS IS PATRICK!";

    const address = document.createElement("p");
    address.textContent = "⚓ 831 Bottom Feeder Lane, Downtown Bikini Bottom";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = krustyKrab;
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

export default loadContact;