import grilled from "./images/grilled_veggie.jpeg";
import bowl from "./images/bowl.jpeg";
import smoothies from "./images/smoothies_light.jpeg";
import image from "./images/bites.jpeg";

import "./home.css";

let content = document.createElement("div");
content.classList.add("content");

//restuarant image
let restuarantImageDiv = document.createElement("div");

let restuarant = document.createElement("img");
restuarant.src = image;
restuarant.classList.add("restuarantImage");

let restaurantTagline = document.createElement("p");
restaurantTagline.textContent =
  "Light Bites, Fresh Flavors—Experience Wholesome Eating!";
restaurantTagline.classList.add("restuarantTagline");

restuarantImageDiv.appendChild(restuarant);
restuarantImageDiv.appendChild(restaurantTagline);

//restuarant describtion
let divDescribtion = document.createElement("div");
divDescribtion.classList.add("divDescription");
divDescribtion.classList.add("div");

let description = document.createElement("p");
description.classList.add("description");
description.innerHTML =
  "<p>Welcome to Wholesome Bites, where every dish is a celebration of fresh, light flavors! Our menu features vibrant salads, delicious grain bowls, and flavorful wraps, all crafted from the finest seasonal ingredients. Each bite is designed to nourish your body and delight your taste buds.</p><p>Step inside our cozy restaurant, where natural light floods the space, highlighting the warm wooden accents and lush greenery. The inviting atmosphere, adorned with soft colors and modern decor, creates the perfect backdrop for a relaxed dining experience. Whether you're enjoying a meal with friends or a quiet moment to yourself, Wholesome Bites is your sanctuary for health and happiness. Come savor the goodness!</p>";

divDescribtion.appendChild(description);

//resturant favourite food

//food1
let foodImageDiv = document.createElement("div");
foodImageDiv.classList.add("foodImageDiv");

let foodTagline = document.createElement("p");
foodTagline.textContent = "Our Favourite";
foodTagline.classList.add("foodTagline");

//food div
let foodDiv = document.createElement("div");
foodDiv.classList.add("foodDiv");

//food one
let food1Div = document.createElement("div");

let foodImage1 = document.createElement("img");
foodImage1.src = grilled;
foodImage1.classList.add("foodImage");

let food1Tagline = document.createElement("p");
food1Tagline.textContent =
  "Garden Fresh Salad: A vibrant mix of seasonal greens, ripe tomatoes, and our house dressing.";

food1Div.appendChild(foodImage1);
food1Div.appendChild(food1Tagline);

//food2
let food2Div = document.createElement("div");

let foodImage2 = document.createElement("img");
foodImage2.src = bowl;
foodImage2.classList.add("foodImage");
let food2Tagline = document.createElement("p");
food2Tagline.textContent =
  "Grilled Veggie Wrap: Roasted vegetables wrapped in a soft tortilla with creamy avocado spread.";

food2Div.appendChild(foodImage2);
food2Div.appendChild(food2Tagline);

//food3
let food3Div = document.createElement("div");

let foodImage3 = document.createElement("img");
foodImage3.src = smoothies;
foodImage3.classList.add("foodImage");

let food3Tagline = document.createElement("p");
food3Tagline.textContent = "Light smoothies made with fruits and vegetables.";

food3Div.appendChild(foodImage3);
food3Div.appendChild(food3Tagline);

foodDiv.appendChild(food1Div);
foodDiv.appendChild(food2Div);
foodDiv.appendChild(food3Div);

//append foods
foodImageDiv.appendChild(foodTagline);
foodImageDiv.appendChild(foodDiv);

//Brief Story
let story = document.createElement("div");
story.classList.add("story");
story.classList.add("para");
//paragraph
let storyPara1 = document.createElement("p");
storyPara1.textContent = "About us";
storyPara1.classList.add("Para1");
let storyPara2 = document.createElement("p");
storyPara2.classList.add("Para2");

storyPara2.textContent =
  "Founded on the principles of health and flavor, Wholesome Bites is a cozy restaurant dedicated to providing light yet satisfying meals made from locally sourced ingredients. Our team is passionate about food and committed to sustainability.";

story.appendChild(storyPara1);
story.appendChild(storyPara2);

//div special offer
let specialOffer = document.createElement("div");
specialOffer.classList.add("specialOffer");
specialOffer.classList.add("para");
//paragraph
let offerPara1 = document.createElement("p");
offerPara1.textContent = "Special Offer!";
offerPara1.classList.add("Para1");
let offerPara2 = document.createElement("p");
offerPara2.classList.add("Para2");
offerPara2.textContent =
  "Join Us for Special Events: Check out our upcoming events and promotions. Join us for Wine Wednesdays and enjoy discounts on select bottles!";

specialOffer.appendChild(offerPara1);
specialOffer.appendChild(offerPara2);

//div testimonials
let testimonials = document.createElement("div");
testimonials.classList.add("testimonials");
testimonials.classList.add("para");
//paragraph
let testPara1 = document.createElement("p");
testPara1.textContent = "What Our Guest Say:";
testPara1.classList.add("Para1");
let testPara2 = document.createElement("blockquote");
testPara2.classList.add("Para2");
testPara2.textContent =
  '"The best place for light and healthy meals!" - Jane D';

testimonials.appendChild(testPara1);
testimonials.appendChild(testPara2);

//contact div
let footer = document.createElement("div");
footer.classList.add("footer");
footer.classList.add("para");
footer.innerHTML =
  "<p>Contact: (123) 456-7890</p><p>Address: 123 Healthy Lane, Food Town</p>";

content.appendChild(restuarantImageDiv);
content.appendChild(divDescribtion);
content.appendChild(foodImageDiv);
content.appendChild(story);
content.appendChild(specialOffer);
content.appendChild(testimonials);
content.appendChild(footer);

export { content };
