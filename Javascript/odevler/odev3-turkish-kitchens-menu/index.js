import MENUS from './menu.json' assert {type: 'json'};

const categories = [];

MENUS.forEach(item => {
  if (!categories.includes(item.category)) {
    categories.push(item.category);
  }
});

function formatPrice(price, options) {
  const lang = (options && options.lang) || 'tr-TR';
  const currency = (options && options.currency) || 'TRY';
  let formattedPrice = new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: currency,
  }).format(price);
  return formattedPrice;
}

// ADD BUTTONS
function addButtons() {
  const btnContainerDOM = document.querySelector(".btn-container");

  categories.forEach(category => {
    const buttonElement = document.createElement("button");
    buttonElement.className = "btn btn-outline-dark btn-item";
    buttonElement.innerHTML = category;
    btnContainerDOM.append(buttonElement);
  })

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.addEventListener("click", filterMeals));
}

function createMenuItem(menu) {
  // <menu-items>
  const menuItemDOM = document.createElement("div");
  menuItemDOM.className = "menu-items col-lg-6 col-sm-12";

  // <img>
  const imgDOM = document.createElement("img");
  imgDOM.src = menu.img;
  imgDOM.alt = menu.title;
  imgDOM.className = "photo";
  menuItemDOM.append(imgDOM);
  // </img>

  // <menu-info>
  const menuInfoDOM = document.createElement("div");
  menuInfoDOM.className = "menu-info";

  // <menu-title>
  const menuTitleDOM = document.createElement("div");
  menuTitleDOM.className = "menu-title";

  const menuTitleHeaderDOM = document.createElement("h4");
  menuTitleHeaderDOM.innerHTML = menu.title;
  const menuTitlePriceDOM = document.createElement("h4");
  menuTitlePriceDOM.className = "price";
  // menuTitlePriceDOM.innerHTML = menu.price;
  menuTitlePriceDOM.innerHTML = formatPrice(menu.price);

  menuTitleDOM.append(menuTitleHeaderDOM, menuTitlePriceDOM);
  // </menu-title>

  // <menu-text>
  const menuTextDOM = document.createElement("div");
  menuTextDOM.className = "menu-text";
  menuTextDOM.innerHTML = menu.desc;
  // <menu-text>

  menuInfoDOM.append(menuTitleDOM, menuTextDOM);
  // </menu-info>

  menuItemDOM.append(imgDOM, menuInfoDOM);
  // <menu-items>

  return menuItemDOM;
}

function addMenuItems(menus = MENUS) {
  const menuItemsDOM = document.querySelector(".section-center");
  menuItemsDOM.innerHTML = "";

  const menuItemsArray = menus.map((menu) => {
    return createMenuItem(menu);
  });

  menuItemsArray.forEach(menuItem => {
    menuItemsDOM.append(menuItem);
  })
};

function filterMeals(event) {
  const filteredMenus = MENUS.filter(menu => menu.category === event.target.innerHTML);
  filteredMenus.length === 0 ? addMenuItems() : addMenuItems(filteredMenus);
}

document.addEventListener("DOMContentLoaded", function () {
  addButtons();
  addMenuItems();
});
