// do I really need this if menuItems already has category as a key?
/*const categories = [
    "Plate lunches",
    "Poke",
    "Musubi",
    "Bowls",
    "Sides",
    "Desserts",
    "Drinks"
] */

const categories = menuItems.map((item) => item.category)

const menuItems = [
        {
        id: 1,
        name: "Chicken Katsu Plate",
        description: "Crispy chicken katsu served with rice and macaroni salad.",
        price: 14.95,
        category: "Plate Lunches",
        popular: true
    },
    {
        id: 2,
        name: "Loco Moco",
        description: "Beef patty over rice topped with brown gravy and a fried egg.",
        price: 15.95,
        category: "Plate Lunches",
        popular: true
    },
    {
        id: 3,
        name: "Kalbi Plate",
        description: "Grilled marinated short ribs served with rice and macaroni salad.",
        price: 17.95,
        category: "Plate Lunches",
        popular: false
    },
    {
        id: 4,
        name: "Shoyu Ahi Poke",
        description: "Ahi tuna tossed with shoyu, sesame oil, onion, and green onion over rice.",
        price: 13.99,
        category: "Poke",
        popular: false
    },
    {
        id: 5,
        name: "Spicy Tuna Poke",
        description: "Ahi tuna, rice, spicy mayo, and cucumber.",
        price: 15.99,
        category: "Poke",
        popular: true
    },
    {
        id: 6,
        name: "Spam Musubi",
        description: "Grilled spam and rice wrapped with nori.",
        price: 4.50,
        category: "Musubi",
        popular: true
    },
    {
        id: 7,
        name: "Teriyaki Chicken Musubi",
        description: "Teriyaki-glazed chicken and rice wrapped with nori.",
        price: 4.95,
        category: "Musubi",
        popular: false
    },
    {
        id: 8,
        name: "Macaroni Salad",
        description: "Creamy local-style macaroni salad.",
        price: 3.95,
        category: "Sides",
        popular: true
    },
    {
        id: 9,
        name: "Garlic Edamame",
        description: "Steamed edamae tossed with garlic and savory seasoning.",
        price: 5.95,
        category: "Sides",
        popular: false
    },
    {
        id: 10,
        name: "Haupia",
        description: "A traditional coconut pudding.",
        price: 5.95,
        category: "Desserts",
        popular: true
    },
    {
        id: 11,
        name: "Butter Mochi",
        description: "A chewy, sweet cake made from coconut milk, butter, and mochiko - sweet rice flour.",
        price: 6.95,
        category: "Desserts",
        popular: false
    },
    {
        id: 12,
        name: "POG Juice",
        description: "A refreshing blend of passion fruit, orange, and guava.",
        price: 4.25,
        category: "Drinks",
        popular: false
    },
    {
        id: 13,
        name: "Hawaiian Sun Guava",
        description: "Chilled guava nectar.",
        price: 3.25,
        category: "Drinks",
        popular: false
    }
]

export default menuItems;