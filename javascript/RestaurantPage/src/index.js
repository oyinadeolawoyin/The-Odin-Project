import { content } from './home.js';
import { foodMenu } from './menu.js';
import { ourContact } from './contact.js';

import "./index.css";

const header = document.getElementById("header");
const  divTitle = document.createElement("div");
divTitle.id = "divTitle";

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Wholesome Bites";

divTitle.appendChild(title);

const nav = document.createElement("nav");

const button1 = document.createElement("button");
button1.classList.add("button");
button1.id = "home";
button1.textContent = "Home";

const button2 = document.createElement("button");
button2.classList.add("button");
button2.id = "menu";;
button2.textContent = "Menu";

const button3 = document.createElement("button");
button3.classList.add("button");
button3.id = "contact";
button3.textContent = "Contact";

nav.appendChild(button1);
nav.appendChild(button2);
nav.appendChild(button3);

header.appendChild(divTitle);
header.appendChild(nav);

let divContent = document.getElementById("content");
divContent.appendChild(content);

let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");

home.addEventListener("click", ()=> {
    divContent.innerHTML = "";
    divContent.appendChild(content);
});

menu.addEventListener("click", ()=> {
    divContent.innerHTML = "";
    divContent.appendChild(foodMenu);
});

contact.addEventListener("click", () => {
    divContent.innerHTML = "";
    divContent.appendChild(ourContact);

    let submit = document.getElementById("buttonSubmit");
    let form = document.getElementById("form");

    submit.addEventListener("click", ()=> {
        form.innerHTML = " ";
        let appreciation = document.createElement("p");
        appreciation.classList.add("appreciation");
        appreciation.innerHTML = `<p>Hi there,<br>Thank you for contacting us! We appreciate your interest and will get back to you as soon as possible. If your message requires urgent attention, please feel free to reach out by phone.</p><p>Looking forward to connecting!</p><p>Warm regards,<br>Wholesome Bites.</p>`
        form.appendChild(appreciation); 
    });
});