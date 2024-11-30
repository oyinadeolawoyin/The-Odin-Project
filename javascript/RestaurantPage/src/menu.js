import { food } from "./food.js";
import "./menu.css";

function foodType(list) {
  let menu = document.createElement("div");
  menu.classList.add("menu");

  let headDiv = document.createElement("div");
  headDiv.classList.add("headDiv");

  let menuHead = document.createElement("h1");
  menuHead.classList.add("menuHeadline");
  menuHead.textContent = "Menu";

  headDiv.appendChild(menuHead);

  menu.appendChild(headDiv);

  for (let typeFood of list) {
    let divType = document.createElement("div");
    divType.classList.add(`${typeFood.typeclass}`);

    let typeFoodTitle = document.createElement("p");
    typeFoodTitle.classList.add("head");
    typeFoodTitle.textContent = `${typeFood.type}`;

    divType.appendChild(typeFoodTitle);

    let varieties = document.createElement("div");
    varieties.classList.add(`${typeFood.class}`);

    for (let variety of typeFood.varieties) {
      let varietyDiv = document.createElement("div");

      // //image head
      let varietyHead = document.createElement("p");
      varietyHead.classList.add("head");
      varietyHead.textContent = `${variety.name}`;

      // //image
      let varietyImage = document.createElement("img");
      varietyImage.src = variety.img;
      varietyImage.classList.add("image");

      //images paragraph
      let varietyPara = document.createElement("p");
      varietyPara.classList.add("para");
      varietyPara.textContent = `${variety.description}`;

      varietyDiv.appendChild(varietyHead);
      varietyDiv.appendChild(varietyImage);
      varietyDiv.appendChild(varietyPara);

      varieties.appendChild(varietyDiv);
      divType.appendChild(varieties);
    }

    menu.appendChild(divType);
  }

  return menu;
}

let foodMenu = foodType(food);
export { foodMenu };
