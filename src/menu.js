function createMenuItem(name, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;

    const foodImg = document.createElement("img");
    foodImg.src = `images/food/${name.replace(/\s+/g, '-').toLowerCase()}..png`;
    foodImg.alt = `${name}`;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodPrice);

    return menuItem;
}