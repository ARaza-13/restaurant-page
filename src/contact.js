function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phone = document.createElement("div");

    const message = document.createElement("p");
    message.textContent = "Feel free to contact us! But please be sure to ask for Patrick...";
    phone.appendChild(message);

    const phoneImg = document.createElement("img");
    phoneImg.src = "images/no-this-is-patrick.gif";
    phoneImg.alt = "THIS IS PATRICK!";
    phone.appendChild(phoneImg);

    const address = document.createElement("p");
    address.textContent = "⚓ 831 Bottom Feeder Lane, Downtown Bikini Bottom";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = "images/krusty-krab.png";
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

export default loadContact;