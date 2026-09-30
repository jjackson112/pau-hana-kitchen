import chickenKatsu from "../assets/chicken-katsu.png";
import locoMoco from "../assets/loco-moco.png";
import kalbiPlate from "../assets/kalbi-plate.png";
import huliHuliChicken from "../assets/madhurima-basak-R25pvpErlsl-unsplash.jpg";
import kaluaPork from "../assets/kalua-pork.png";
import shoyuChicken from "../assets/dennis-zhang-NseBwyq-UOY-unsplash.jpg";
import garlicShrimp from "../assets/durenne-loris-aEHCeaGSgKA-unsplash.jpg";





const menuItems = [
    {
        id: 1,
        name: "Chicken Katsu",
        description: "Crispy chicken katsu served with rice and macaroni salad.",
        price: 14.95,
        category: "Plate Lunches",
        popular: true,
        vegetarian: false,
        image: chickenKatsu
    },
    {
        id: 2,
        name: "Loco Moco",
        description: "Beef patty over rice topped with brown gravy and a fried egg.",
        price: 15.95,
        category: "Plate Lunches",
        popular: true,
        vegetarian: false,
        image: locoMoco
    },
    {
        id: 3,
        name: "Kalbi Plate",
        description: "Grilled marinated short ribs served with rice and macaroni salad.",
        price: 17.95,
        category: "Plate Lunches",
        popular: false,
        vegetarian: false,
        image: kalbiPlate
    },
    {
        id: 4,
        name: "Huli Huli Chicken",
        description: "Sweet and savory grilled chicken rotated over an open fire with mac salad.",
        price: 11.99,
        category: "Plate Lunches",
        popular: false,
        vegetarian: false,
        image: huliHuliChicken
    },
    {
        id: 5,
        name: "Kālua Pork",
        description: "Tender and smokey shredded pork served with mac salad and white rice.",
        price: 18.99,
        category: "Plate Lunches",
        popular: true,
        vegetarian: false,
        image: kaluaPork
    },
    {
        id: 6,
        name: "Shoyu Chicken",
        description: "A comfort dish made with braising bone-in, skin-on chicken thighs in a sweet and savory mixture of soy sauce (shoyu), sugar, ginger, and garlic.",
        price: 15.99,
        category: "Plate Lunches",
        popular: true,
        vegetarian: false,
        image: shoyuChicken
    },
    {
        id: 7,
        name: "Garlic Shrimp",
        description: "Shell-on jumbo shrimp pan-fried in olive oil and butter with garlic. Served with white rice.",
        price: 16.99,
        category: "Plate Lunches", 
        popular: true,
        vegetarian: false,
        image: garlicShrimp
    },
    {
        id: 8,
        name: "Laulau",
        description: "A dish made of pork and butterfish wrapped in lu'au and ti leaves.",
        price: 12.95, 
        category: "Plate Lunches",
        popular: true,
        vegetarian: false,
        image: laulau
    },
    {
        id: 9,
        name: "Teriyaki Beef",
        description: "Thinly sliced beef served over rice with steamed vegetables.",
        price: 14.95,
        category: "Plate Lunches",
        popular: false,
        vegetarian: false,
        image: teriyakiBeef
    },
    {
        id: 10,
        name: "Salmon Poke",
        description: "Salmon marinated in soy sauce and sesame oil, served over rice, carrots, avocado, and other fresh vegetables.",
        price: 15.95,
        category: "Poke",
        popular: false,
        vegetarian: false,
        image: salmonPoke
    },
    {
        id: 11,
        name: "Shoyu Ahi Poke",
        description: "Ahi tuna tossed with shoyu, sesame oil, onion, and green onion over rice.",
        price: 13.99,
        category: "Poke",
        popular: false,
        vegetarian: false,
        image: shoyuAhiPoke
    },
    {
        id: 12,
        name: "Spicy Tuna Poke",
        description: "Ahi tuna, rice, spicy mayo, and cucumber.",
        price: 15.99,
        category: "Poke",
        popular: true,
        vegetarian: false,
        image: spicyTunaPoke
    },
    {
        id: 13,
        name: "Ginger-Ponzu Salmon Poke",
        description: "A poke bowl with salmon, ponzu, Korean perilla oil, sea salt, and white rice.",
        price: 17.99,
        category: "Poke",
        popular: true,
        vegetarian: false,
        image: gingerPonzuSalmonPoke
    },
    {
        id: 14, 
        name: "Portuguese Sausage Musubi",
        description: "Swap traditional spam for Redondo's Hawaiian Portuguese Sausage, pressed with rice, and furikake sprinkles.",
        price: 4.95,
        category: "Musubi",
        popular: false,
        vegetarian: false,
        image: portugueseSausageMusubi
    },
    {
        id: 15,
        name: "Spam Musubi",
        description: "Grilled spam and rice wrapped with nori.",
        price: 4.59,
        category: "Musubi",
        popular: true,
        vegetarian: false,
        image: spamMusubi
    },
    {
        id: 16,
        name: "Teriyaki Chicken Musubi",
        description: "Teriyaki-glazed chicken and rice wrapped with nori.",
        price: 4.95,
        category: "Musubi",
        popular: false,
        vegetarian: false,
        image: teriyakiChickenMusubi
    },
    {
        id: 17,
        name: "Chicken Katsu Musubi",
        description: "Crispy, panko breaded chicken with rice, tonkatsu sauce, and rice.",
        price: 4.95,
        category: "Musubi",
        popular: false,
        vegetarian: false,
        image: chickenKatsuMusubi
    },
    {
        id: 18,
        name: "Chicken Long Rice",
        description: "A noodle dish made from vermicelli noodles, chicken, ginger, and scallions.",
        price: 9.95,
        category: "Soup/Stew",
        popular: false,
        vegetarian: false,
        image: chickenLongRice
    },
    {
        id: 19,
        name: "Beef Stew",
        description: "A hearty, local beef stew made with beef, carrots, and potatoes.",
        price: 11.95,
        category: "Soup/Stew",
        popular: false,
        vegetarian: false,
        image: beefStew
    },
    {
        id: 20,
        name: "Saimin",
        description: "Made from wheat egg noodles garnished with scallions, kamaboko, mushrooms, spam, nori, and bok choy.",
        price: 10.95,
        category: "Soup/Stew",
        popular: true,
        vegetarian: false,
        image: saimin
    },
    {
        id: 21,
        name: "Portuguese Bean Soup",
        description: "Portuguese sausage, smoked ham hocks, red kidney beans, vegetables, and macaroni.",
        price: 11.95,
        category: "Soup/Stew",
        popular: false,
        vegetarian: false,
        image: portugueseBeanSoup
    },
    {
        id: 22,
        name: "Luau Stew",
        description: "A plant-based stew made with simmering taro leaves, coconut milk, vegetable broth, onion, garlic, and ginger.",
        price: 8.95,
        category: "Vegetarian",
        popular: false,
        vegetarian: true,
        image: luauStew
    },
    {
        id: 23,
        name: "Vegetarian Laulau",
        description: "A dish made of root vegetables and squash wrapped in lu'au and ti leaves.",
        price: 10.95, 
        category: "Vegetarian",
        popular: true,
        vegetarian: true,
        image: vegetarianLaulau
    },
    {
        id: 24,
        name: "Sweet Potato and Taro Plate",
        description: "Roasted sweet potato - 'uala and taro - kalo - served with steamed rice and seasonal vegetables.",
        price: 9.95,
        category: "Vegetarian",
        popular: false,
        vegetarian: true,
        image: sweetPotatoTaroPlate
    },
        {
        id: 25,
        name: "Avocado Poke",
        description: "Creamy avocado tossed with shoyu, sesame oil, scallions, and seaweed.",
        price: 10.95,
        category: "Vegetarian",
        popular: false,
        vegetarian: true,
        image: avocadoPoke
    },
    {
        id: 26,
        name: "Avocado Musubi",
        description: "Rice and avocado wrapped in crisp nori with a teriyaki glaze.",
        price: 5.59,
        category: "Vegetarian",
        popular: true,
        vegetarian: true,
        image: avocadoMusubi
    },
    {
        id: 27,
        name: "Macaroni Salad",
        description: "Creamy local-style macaroni salad.",
        price: 3.95,
        category: "Sides",
        popular: true,
        vegetarian: false,
        image: macaroniSalad
    },
    {
        id: 28,
        name: "French Fries",
        description: "Crisp and golden french fries seasoned with salt.",
        price: 3.95,
        category: "Sides",
        popular: false,
        vegetarian: false,
        image: frenchFries
    },
    {
        id: 29,
        name: "Garlic Edamame",
        description: "Steamed edamame tossed with garlic and savory seasoning.",
        price: 5.95,
        category: "Sides",
        popular: false,
        vegetarian: false,
        image: garlicEdamame
    },
    {
        id: 30,
        name: "Grilled Pineapple",
        description: "Fresh, caramelized pineapple sprinkled with brown sugar.",
        price: 4.59,
        category: "Sides",
        popular: true,
        vegetarian: false,
        image: grilledPineapple
    },
    {
        id: 31,
        name: "Seaweed Salad",
        description: "Chilled seaweed tossed with sesame dressing and sesame seeds.",
        price: 6.95,
        category: "Sides",
        popular: false,
        vegetarian: false,
        image: seaweedSalad
    },
    {
        id: 32,
        name: "Green Salad",
        description: "A spinach salad with tomatoes.",
        price: 4.95,
        category: "Sides",
        popular: false,
        vegetarian: false,
        image: greenSalad
    },
    {
        id: 33,
        name: "Lomi Lomi Salmon",
        description: "Salted salmon mixed with tomatoes, onion, and green onions.",
        price: 6.95,
        category: "Sides",
        popular: true,
        vegetarian: false,
        image: lomiLomiSalmon
    },
    {
        id: 34,
        name: "Poi",
        description: "A traditional staple made from taro root.",
        price: 3.59,
        category: "Sides",
        popular: true,
        vegetarian: false,
        image: poi
    },
    {
        id: 35,
        name: "Haupia",
        description: "A traditional coconut pudding.",
        price: 5.95,
        category: "Desserts",
        popular: true,
        vegetarian: false,
        image: haupia
    },
    {
        id: 36,
        name: "Butter Mochi",
        description: "A chewy, sweet cake made from coconut milk, butter, and mochiko - sweet rice flour.",
        price: 6.95,
        category: "Desserts",
        popular: false,
        vegetarian: false,
        image: butterMochi
    },
    {
        id: 37,
        name: "Malasadas",
        description: "Portuguese fried doughnuts.",
        price: 7.99,
        category: "Desserts",
        popular: true,
        vegetarian: false,
        image: malasadas
    },
    {
        id: 38,
        name: "POG Juice",
        description: "A refreshing blend of passion fruit, orange, and guava.",
        price: 4.25,
        category: "Drinks",
        popular: false,
        vegetarian: false,
        image: pogjuice
    },
    {
        id: 39,
        name: "Hawaiian Sun Guava",
        description: "Chilled guava nectar.",
        price: 3.25,
        category: "Drinks",
        popular: false,
        vegetarian: false,
        image: hawaiianSunGuava
    },
    {
        id: 40,
        name: "Lilikoi Lemonade",
        description: "A refreshing, tropical drink that mixes tart lemon and passion fruit juice.",
        price: 3.95,
        category: "Drinks",
        popular: true,
        vegetarian: false,
        image: lilikoiLemonade
    }
]

export default menuItems;