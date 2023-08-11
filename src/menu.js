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

export default loadMenu;