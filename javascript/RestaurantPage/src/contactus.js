import facebook from "./images/facebook.jpeg";
import twitter from "./images/twitter.jpeg";
import linkedin from "./images/linkedin.jpeg";

let list = [
  {
    type: "form",
    id: "form",
    inputs: [
      {
        labelName: "Name:",
        labelclass: "label",
        type: "text",
      },
      {
        labelName: "Email:",
        labelclass: "label",
        type: "email",
      },
      {
        labelName: "Subject:",
        labelclass: "label",
        type: "text",
      },
    ],
  },
  {
    type: "reach",
    content: "You can contact us with:",
    list: [
      {
        class: "list",
        content: "Phone: +1(123) 456-7890",
      },
      {
        class: "list",
        content: "support@wholesomebites.com",
      },
      {
        class: "list",
        content: "Address: 123 Healthy Lane, Food Town",
      },
    ],
  },
  {
    type: "hours",
    content: "Operating Hours",
    list: [
      {
        class: "list",
        content: "Mon - Fri: 9:00 Am - 6:00 PM",
      },
      {
        class: "list",
        content: "Sat: 10:00 AM - 4:00 PM",
      },
      {
        class: "list",
        content: "Sun: Closed",
      },
    ],
  },
  {
    type: "sociaMedia",
    list: [
      {
        img: facebook,
        class: "images",
      },
      {
        img: twitter,
        class: "images",
      },
      {
        img: linkedin,
        class: "images",
      },
    ],
  },
];

export { list };
