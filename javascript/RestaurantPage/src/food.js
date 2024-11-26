import greenSalad from "./images/mixed-greenSalad.jpeg";
import caesarSalad from "./images/caesar.jpeg";
import quinoaSalad from "./images/quinoa.jpeg";
import greekSalad from "./images/greekSalad.jpeg";
import veggieWrap from "./images/veggie.jpeg";
import turkeySandwich from "./images/turkeySandwich.jpeg";
import caprese from "./images/caprese_sandwich.jpeg";
import gazpacho from "./images/gazpacho.jpeg";
import lentil from "./images/lentil.jpeg";
import miso from "./images/miso.jpeg";
import grain from "./images/grain_bowls.jpeg";
import smoothie from "./images/smoothie_bowls.jpeg";
import hummus from "./images/hummus.jpeg";
import bruschetta from "./images/bruschetta.jpeg";
import fruitSalad from "./images/fruit_salad.jpeg";
import infusedWater from "./images/infused.jpeg";
import smoothiesLight from "./images/smoothies_light.jpeg";
import yogurt from "./images/yougurt.jpeg";
import chiaSeed from "./images/chia_seed.jpeg";


const food = [
    {
        type: "Salads",
        typeclass: "divSalad",
        class: "salad",
        varieties: [
            {
                class: "salad",
                name: "Mixed Green Salad - $7.00",
                img: greenSalad,
                description: "A variety of greens with a light viaigrette."
            }, 
            {
                name: "Caesar Salad - $8.00",
                img: caesarSalad,
                description: "Romaine lettuce, croutons, and a light Caesar dressing."
            }, 
            {
                name: "Quinoa Salad - $9.50",
                img: quinoaSalad,
                description:"Quinoa with vegetables, herbs, and a light dressing."
            }, 
            {   
                name: "Greek Salad - $9.00",
                img: greekSalad,
                description: "Tomatoes, cucumbers, olives, feta cheese, and olive oil."

            }
        ]
    },
    { 
        type: "Wraps and Sandwichs",
        typeclass: "divSandwich",
        class: "sandwich",
        varieties: [
            {
                name: "Veggie Wrap - $7.50",
                img: veggieWrap,
                description: "A whole wheat or spinach wrap filled with fresh vegetables and hummus."
            },
            {
                name: "Turkey or Chicken Sandwich - $8.50",
                img: turkeySandwich,
                description: "Lean turkey or grilled chicken breast on whole grain bread with lettuce and tomato."
            },
            {
                name: "Caprese Sandwich - $9.00",
                img: caprese,
                description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze on ciabatta."
            }
        ]
    },
    {
        type: "Soups",
        typeclass: "divSoup",
        class: "Soup",
        varieties: [
            {
                name: "Gazpacgo - $6.00",
                img: gazpacho,
                description: "A cold vegetable soup, perfect for hot days."
            },
            {
                name: "Lentil Soup",
                img: lentil,
                description: "A light yet filling option packed with protein."
            },
            {
                name: "Miso Soup - $6.50",
                img: miso,
                description: "A light yet filling option packed with protein."
            }
        ]
    },
    {
        type: "Bowls",
        typeclass: "divBowls",
        class: "bowls",
        varieties: [
            {
                name: "Grain Bowls - $10.00",
                img:  grain,
                description: "Brown rice or quinoa topped with assorted veggies, nuts, and a light dressing."
            },
            {
                name: "Smoothie Bowls - $8.50",
                img: smoothie,
                description: "Blended fruits and vegetables topped with granola and seeds."
            }
        ]
    },
    {
        type: "Snacks",
        typeclass: "divSnacks",
        class: "snacks",
        varieties: [
            {
                name: "Hummus and Veggies - $7.00",
                img:  hummus,
                description: "Blended fruits and vegetables topped with granola and seeds."
            },
            {
                name: "Bruschetta - $6.50",
                img: bruschetta,
                description: "Toasted bread topped with fresh tomatoes, garlic, and basil."
            },
            {
                name: "Fruit Salad - $5.50",
                img: fruitSalad,
                description: "A mix of seasonal fruits served fresh."
            }
        ]
    },
    {
        type: "Beverages",
        typeclass: "divBeverages",
        class: "beverages",
        varieties: [
            {
                name: "Infused Water - $2.50",
                img:  infusedWater,
                description: "Water infused with fruits and herbs for a refreshing drink."
            },
            {
                name: "Smoothies - $5.00",
                img: smoothiesLight,
                description: "Light smoothies made with fruits and vegetables."
            }
        ]
    },
    {
        type: "Desserts",
        typeclass: "divDesserts",
        class: "dessert",
        varieties: [
            {
                name: "Yogurt Parfait - $6.00",
                img:  yogurt,
                description: "Layers of yogurt, granola, and fresh fruits."
            },
            {
                name: "Chia Seed Pudding - $6.50",
                img: chiaSeed,
                description: "Chia seeds soaked in almond milk and topped with fruits."
            }
        ]
    }
];

export { food }