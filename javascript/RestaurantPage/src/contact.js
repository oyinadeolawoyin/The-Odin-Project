import "./contact.css"
import { list } from "./contactus.js";

function contact(list) {
    let contactUs = document.createElement("div");
    contactUs.classList.add("contactUs");
    
    let contactHead = document.createElement("div");
    contactHead.classList.add("contactHead");
    
    let contactHeadline = document.createElement("h1");
    contactHeadline.classList.add("contactHead");
    contactHeadline.textContent = "Contact Us";
    
    contactHead.appendChild(contactHeadline);
    
    let contactInfo = document.createElement("p");
    contactInfo.classList.add("contactInfo");
    contactInfo.textContent = "Have questions? We’d love to hear from you. Please fill out the form below or reach us through one of the methods listed.";

    contactUs.appendChild(contactHead);
    contactUs.appendChild(contactInfo);

    for (let types of list) {
        if (types.type == "form") {
            let contactForm = document.createElement("form");
            contactForm.id = "form";

            for (let input of types.inputs) {

                let nameLabel = document.createElement("label");
                nameLabel.textContent = `${input.labelName}`;
                let nameInput = document.createElement("input");
                nameLabel.classList.add(`${input.labelclass}`);
                nameInput.classList.add("input");
                nameInput.setAttribute("type", input.type);
                nameInput.setAttribute("name", "name");
                nameInput.setAttribute("required", true);

                contactForm.appendChild(nameLabel);
                contactForm.appendChild(nameInput);
            }

            let messageLabel = document.createElement("label");
            messageLabel.textContent = "Message:";
            let messageInput = document.createElement("textarea");
            messageLabel.classList.add("label");
            messageInput.classList.add("input");
            messageInput.setAttribute("name", "message");
            messageInput.setAttribute("required", true);

            let submitButton = document.createElement("button");
            submitButton.setAttribute("type", "button");
            submitButton.id = "buttonSubmit";
            submitButton.textContent = "Submit";

            contactForm.appendChild(messageLabel);
            contactForm.appendChild(messageInput);
            contactForm.appendChild(submitButton);
            
            contactUs.appendChild(contactForm);
        }

        else if (types.type == "sociaMedia") {
            let socialMedia = document.createElement("ul");
            socialMedia.classList.add("socialMedia");
            socialMedia.classList.add("info");

            for (let icon of types.list) {
                let imageIcon = document.createElement("div");
                let image = document.createElement("img");
                image.src = icon.img;
                image.classList.add(`${icon.class}`);
                imageIcon.appendChild(image);

                socialMedia.appendChild(imageIcon);

                contactUs.appendChild(socialMedia);
            }  
        }

        else{
            let ul = document.createElement("ul");
            ul.classList.add(`${types.type}`)
            ul.classList.add("info");

            let para = document.createElement("p");
            para.classList.add(`${types.type}`);
            para.textContent = `${types.content}`;

            ul.appendChild(para);

            for (let lists of types.list) {
                let li = document.createElement("li");
                li.classList.add(`${lists.class}`);
                li.textContent = `${lists.content}`;

                ul.appendChild(li);

                contactUs.appendChild(ul);
            }
        }

    }

    return contactUs;
}

let ourContact = contact(list);

export { ourContact }