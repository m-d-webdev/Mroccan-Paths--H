import { useState, useRef, useEffect } from "react";
import './css/moroccan_cuise.css'

import { v4 } from "uuid";

function morpccan_cuisine() {
    const moroccanDishesDetailed = [
        {
            name: "Tagine",
            img:"https://i.pinimg.com/564x/c8/ab/80/c8ab80751068029eca2d3ac90f972a77.jpg",
            arabicName: "الطاجين",
            origin: "Named after the clay pot in which it’s cooked, popular across North Africa, especially in Morocco.",
            ingredients: ["Lamb or chicken", "vegetables", "dried fruits (apricots, prunes)", "spices (saffron, ginger, cumin)", "preserved lemons", "olives"],
            preparation: "Ingredients are slow-cooked in a clay pot over low heat, allowing flavors to blend and intensify.",
            servingStyle: "Typically served directly from the tagine pot and eaten with Moroccan bread for scooping.",
            culturalContext: "Each region in Morocco has its own variation, such as Marrakesh with sweeter flavors and coastal regions with seafood tagines."
        },
        {
            name: "Couscous",
            img:"https://i.pinimg.com/236x/4f/6a/41/4f6a413e72b2a314889b6b6e3b299a98.jpg",
            arabicName: "الكسكس",
            origin: "A North African staple with roots dating back centuries, traditionally served during gatherings and family meals.",
            ingredients: ["Couscous grains", "lamb or chicken", "vegetables (carrots, zucchini, pumpkin)", "chickpeas", "raisins", "spices"],
            preparation: "Couscous is steamed multiple times for a fluffy texture, and vegetables and meats are prepared separately in a spiced broth.",
            servingStyle: "Often served on Fridays, with a mound of couscous topped with meats, vegetables, and broth, typically shared from a communal plate.",
            culturalContext: "Considered a 'Friday dish' across Morocco, symbolizing family and unity, and a staple for special occasions."
        },
        {
            name: "Pastilla",
            img:"https://i.pinimg.com/564x/74/d4/00/74d400a0f64ce3768b6839abfda1dbf7.jpg",
            arabicName: "البسطيلة",
            origin: "A unique fusion dish with roots in Andalusian cuisine, now a Moroccan specialty, especially in Fez.",
            ingredients: ["Pigeon or chicken", "almonds", "spices (cinnamon, saffron)", "pastry sheets", "powdered sugar"],
            preparation: "Meat is cooked with spices, layered with almonds, wrapped in pastry, and baked until crispy. Finished with a dusting of powdered sugar and cinnamon.",
            servingStyle: "Served as a starter at weddings and special gatherings, combining savory and sweet flavors.",
            culturalContext: "Symbolizes Moroccan culinary creativity, blending savory and sweet in a single dish, representing Moroccan-Andalusian heritage."
        },
        {
            name: "Harira",
            img:"https://i.pinimg.com/236x/7d/ef/d4/7defd4cd0cd3cfcf8f19a9cfc6b32b3b.jpg",
            arabicName: "الحريرة",
            origin: "A beloved soup, traditionally served during Ramadan to break the fast.",
            ingredients: ["Tomatoes", "lentils", "chickpeas", "coriander", "parsley", "spices (cumin, turmeric, ginger)"],
            preparation: "Tomatoes and spices are simmered, followed by lentils and chickpeas. Thickened with flour for a smooth texture.",
            servingStyle: "Typically served with dates or honey-coated chebakia, especially during Ramadan.",
            culturalContext: "Considered the quintessential Ramadan soup in Morocco, with every family adding its own variations."
        },
        {
            name: "Rfissa",
            img:"https://i.pinimg.com/564x/e9/85/d3/e985d34b5ce79b9ee3d1c1ff80f80e38.jpg",
            arabicName: "الرفيسة",
            origin: "Traditionally prepared for special family events, especially after childbirth.",
            ingredients: ["Chicken", "lentils", "fenugreek seeds", "msemen (layered flatbread)", "spices (saffron, ras el hanout)"],
            preparation: "Chicken is cooked with lentils and spices. Served over msemen, soaking the flatbread in rich broth.",
            servingStyle: "Eaten from a large communal plate, with the bread used to scoop the sauce.",
            culturalContext: "Rfissa holds cultural significance in family events and gatherings, especially for post-birth celebrations."
        },
        {
            name: "Mechoui",
            img:"https://i.pinimg.com/236x/b9/af/16/b9af1686d50f90b1c0ada4ebe3593fc2.jpg",
            arabicName: "المشوي",
            origin: "Traditional Moroccan roasted lamb, often prepared for large gatherings and festivals.",
            ingredients: ["Whole lamb", "salt", "cumin", "butter or olive oil"],
            preparation: "Lamb is seasoned and slowly roasted, usually over an open fire, for a tender, flavorful meat.",
            servingStyle: "Served in large portions, with cumin and salt on the side for added flavor.",
            culturalContext: "A celebratory dish in Morocco, especially for weddings and religious festivals like Eid al-Adha."
        },
        {
            name: "Zaalouk",
            img:"https://i.pinimg.com/736x/1b/85/48/1b85485e6cb4c1cb0b92c7311a2423ee.jpg",
            arabicName: "الزعلوك",
            origin: "A classic Moroccan side dish served across the country, often with bread.",
            ingredients: ["Eggplant", "tomatoes", "garlic", "olive oil", "spices (paprika, cumin)"],
            preparation: "Eggplant is cooked down with tomatoes, garlic, and spices, creating a smooth and flavorful dip.",
            servingStyle: "Served as a side or appetizer with bread for scooping.",
            culturalContext: "Popular in both homes and restaurants, and often paired with other cold salads."
        },
        {
            name: "Mrouzia",
            img:"https://i.pinimg.com/564x/39/05/f6/3905f67d20e0f7a658d1a5179f2d0345.jpg",
            arabicName: "المروزية",
            origin: "A sweet and savory dish traditionally prepared during Eid al-Adha.",
            ingredients: ["Lamb", "honey", "almonds", "raisins", "spices (ras el hanout, cinnamon, saffron)"],
            preparation: "Lamb is slow-cooked with spices, honey, and dried fruits for a sweet and tender result.",
            servingStyle: "Served with bread, often at festive meals during Eid celebrations.",
            culturalContext: "A dish that represents the balance of sweet and savory in Moroccan cuisine, especially during religious festivities."
        },
        {
            name: "Bissara",
            img:"https://i.pinimg.com/236x/eb/4e/23/eb4e23961a272abd0768ccfcc6c7e206.jpg",
            arabicName: "البصارة",
            origin: "A comforting fava bean soup, popular in colder months in rural areas.",
            ingredients: ["Dried fava beans", "garlic", "olive oil", "spices (cumin, paprika)"],
            preparation: "Beans are boiled and blended into a smooth, creamy soup, topped with olive oil and spices.",
            servingStyle: "Served hot with a sprinkle of cumin and paprika, and bread for dipping.",
            culturalContext: "Often enjoyed as a warming street food, especially in northern Morocco."
        },
        {
            name: "Chebakia",
            img:"https://i.pinimg.com/236x/bf/84/83/bf8483913b5d3ed2c07b5bc37e4c85f3.jpg",
            arabicName: "الشباكية",
            origin: "A traditional Moroccan sweet enjoyed during Ramadan, especially with Harira.",
            ingredients: ["Sesame seeds", "flour", "honey", "orange blossom water", "spices (anise, cinnamon)"],
            preparation: "Dough is shaped, fried, and dipped in honey, then sprinkled with sesame seeds.",
            servingStyle: "Served alongside Harira soup, especially at iftar (meal to break the fast) during Ramadan.",
            culturalContext: "A symbolic sweet during Ramadan, as it provides energy and sweetness after a day of fasting."
        },
        {
            name: "Khobz",
            img:"https://i.pinimg.com/236x/86/32/e9/8632e94ed5079f0534014ced3e15c6fe.jpg",
            arabicName: "الخبز",
            origin: "A staple Moroccan bread made across households and bakeries, often baked in communal ovens.",
            ingredients: ["Flour", "yeast", "salt", "water"],
            preparation: "Mixed, kneaded, shaped into round loaves, and baked, traditionally in a wood-fired communal oven.",
            servingStyle: "Served with nearly every Moroccan meal, used for scooping up tagines, stews, and dips.",
            culturalContext: "Essential in Moroccan cuisine, symbolizing hospitality and community; daily bread often shared with family and neighbors."
        },
        {
            name: "Tanjia",
            img:"https://i.pinimg.com/236x/b4/3b/61/b43b61029437813fe6b1e8fcc74b6e0a.jpg",
            arabicName: "الطنجية",
            origin: "A specialty of Marrakech, traditionally prepared by men and slow-cooked in a clay pot over hot ashes.",
            ingredients: ["Beef or lamb", "preserved lemons", "garlic", "spices (cumin, saffron)", "olive oil"],
            preparation: "All ingredients are placed in a clay pot, sealed, and cooked in a communal oven or over embers for several hours.",
            servingStyle: "Served straight from the clay pot, often with Khobz for scooping the tender meat.",
            culturalContext: "Associated with celebrations and social gatherings, especially popular among men in Marrakech for special occasions."
        },
        {
            name: "Maakouda",
            img:"https://i.pinimg.com/236x/b2/bd/48/b2bd4891a04ae76f5178259489292f16.jpg",
            arabicName: "المعقودة",
            origin: "A popular street food, especially in northern Morocco, enjoyed as a snack or side dish.",
            ingredients: ["Potatoes", "eggs", "spices (cumin, turmeric)", "parsley", "flour"],
            preparation: "Potatoes are mashed and seasoned, formed into patties, and deep-fried until golden and crispy.",
            servingStyle: "Often served hot with bread or as part of a sandwich with harissa sauce.",
            culturalContext: "Loved as street food or a quick bite, especially during the winter months when hearty foods are appreciated."
        },
        {
            name: "Baghrir",
            img:"https://i.pinimg.com/236x/ef/bb/39/efbb396fd6b4d223d555a5d3280180df.jpg",
            arabicName: "البغرير",
            origin: "Also known as 'thousand-hole pancakes,' enjoyed across Morocco for breakfast or tea time.",
            ingredients: ["Semolina", "yeast", "water", "salt"],
            preparation: "Batter is poured into a pan and cooked on one side, forming tiny holes on top, which capture the toppings.",
            servingStyle: "Served warm with melted butter and honey drizzled over the top.",
            culturalContext: "Symbolic of hospitality, often served to guests or during celebrations like Eid."
        },
        {
            name: "Seffa",
            img:"https://i.pinimg.com/236x/38/be/52/38be52e6ee6941ba058b7d2592d4446b.jpg",
            arabicName: "السفة",
            origin: "A festive dish combining sweet and savory flavors, often served during special events and family gatherings.",
            ingredients: ["Vermicelli or couscous", "cinnamon", "powdered sugar", "almonds", "butter"],
            preparation: "Vermicelli or couscous is steamed and sweetened, then topped with cinnamon, sugar, and nuts, sometimes layered with meat.",
            servingStyle: "Arranged in a mound with toppings, enjoyed warm as a main or dessert.",
            culturalContext: "Associated with celebrations and comfort, especially loved for its combination of textures and flavors."
        },
        {
            name: "Msemmen",
            img:"https://i.pinimg.com/236x/8f/e5/a4/8fe5a4d0faa054954f7553946240bd7b.jpg",
            arabicName: "المسمن",
            origin: "A traditional flatbread served across Morocco, known for its flaky, layered texture.",
            ingredients: ["Flour", "semolina", "butter", "salt", "oil"],
            preparation: "Dough is folded and flattened multiple times to create layers, then pan-fried until golden.",
            servingStyle: "Served with honey and butter or stuffed with spiced fillings, such as meat or herbs.",
            culturalContext: "Popular at breakfast and tea time, symbolizing Moroccan hospitality and often prepared for guests."
        },
        {
            name: "Briouat",
            img:"https://i.pinimg.com/236x/b2/b0/b3/b2b0b3a4a55e30cfceabb7d5a8474d16.jpg",
            arabicName: "بريوات",
            origin: "A small pastry with roots in Moroccan-Andalusian cuisine, filled with sweet or savory ingredients.",
            ingredients: ["Thin pastry sheets", "ground meat or almonds", "spices (cinnamon for sweet, cumin for savory)", "honey or oil"],
            preparation: "Filling is wrapped in pastry, shaped into triangles or rolls, then fried or baked until golden.",
            servingStyle: "Served as appetizers or desserts, depending on filling, with honey drizzled for sweet versions.",
            culturalContext: "Served during holidays like Ramadan, weddings, and special gatherings as a symbol of tradition and celebration."
        },
        {
            name: "Raib",
            img:"https://i.pinimg.com/564x/9b/27/00/9b27009c83d15f7a276d0a6ffcf8ec47.jpg",
            arabicName: "الرايب",
            origin: "A traditional Moroccan yogurt, homemade or store-bought, enjoyed as a cooling dessert.",
            ingredients: ["Milk", "sugar", "vanilla or citrus zest"],
            preparation: "Milk is fermented until creamy, sometimes flavored with vanilla or orange blossom water.",
            servingStyle: "Served chilled in small cups, often as a dessert or snack.",
            culturalContext: "A beloved Moroccan dessert, offering a light and refreshing end to a hearty meal, especially in summer."
        },
        {
            name: "Batbout",
            img:"https://i.pinimg.com/236x/39/f6/66/39f6662d061945aec344a133ecb025fe.jpg",
            arabicName: "البطبوط",
            origin: "Known as Moroccan pita bread, popular across Morocco and often served with various fillings.",
            ingredients: ["Flour", "semolina", "yeast", "salt", "water"],
            preparation: "Dough is rolled into small rounds and cooked on a griddle until puffed and golden.",
            servingStyle: "Served plain or filled with grilled meats, cheeses, or vegetables for sandwiches.",
            culturalContext: "Served as a versatile bread for meals or snacks, representing the Moroccan love for flavorful, portable foods."
        }

    ];

    return (
        <>
            <div className="cntMoroccan_cuise">
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(439,31)" d="m0 0h66l52 4 33 4 35 6 54 12 55 14 41 12 45 14 37 12 36 13 20 7 38 14 36 14 41 16 24 9 23 6 43 8 66 11 73 13 53 10 56 11 70 14 66 14 80 18 39 9 38 9 28 8 22 8 15 8 10 8 6 5 7 8 10 14 8 16 4 10 4 20v27l-3 16-7 17-10 18-6 8-8 7-1 4 6 8 14 12 8 8 8 10 8 13 7 16 4 16 2 16-1 17-4 20-4 10-10 18-6 9-9 11-11 10-15 9-14 6-23 6-20 2-8-1-9-1-19-5-20-8-33-15-45-22-25-12-34-16-27-13-56-26-15-7-18-8-15-7-35-17-17-8-5-3h-2l6 16 5 10 8 24 7 28 3 18 1 15v24l-2 30-5 33-9 42-7 25-7 20-6 16-11 21-9 14-9 10-8 7-21 11-25 7-17 3-11 4-5 8v8l11 3 32 8 41 9 24 7 21 6 26 9 33 13 42 18 50 25 14 8 24 14 19 12 11 7 12 8 17 12 19 14 17 13 11 9 13 11 11 9 9 9 8 7 30 28 9 9 7 8 8 8 7 8 9 10 18 22 13 16 15 20 10 14 9 13 10 15 14 22 9 15 9 16 14 26 11 22 13 28 13 31 13 36 9 27 10 35 11 45 7 36 7 50 4 36 3 34 4 4 29 10 17 9 11 9 7 7v2h2l13 18 9 17 5 15 3 16v31l-4 17-7 16-9 15-9 11-12 13-14 10-12 7-12 6-9 5h-1831l-13-5-16-8-12-7-12-9-12-12-9-11-7-11-8-17-5-19-1-11v-14l2-16 4-15 7-17 9-16 10-11 7-8 10-8 19-10 30-10 2-10 5-52 8-54 7-40 16-64 13-40 11-30 9-22 13-30 17-35 17-32 8-14 12-20 9-14 20-30 8-11 7-10 12-16 7-9 12-14 9-11 11-12 9-10 14-16h2l2-4 30-30 11-9 8-8 11-9 10-9 11-9 18-14 13-10 18-13 24-16 22-14 22-13 29-16 42-21 20-9 21-9 29-11 22-8 59-17 69-15 9-4h2l1-5h-2v-2h-2v-2l-5-2-8-5-13-4-20-7-19-10-12-9-15-15-10-13-14-20-13-19-7-10-32-49-13-20-14-22-15-24-13-21-10-16-13-21-21-31-14-19-12-14-12-13-16-15-16-12-18-11-19-9-19-6-16-3-12-1h-22l-17 2-21 5-12 4-20 9-19 10-44 24-21 12-19 10-23 13-54 29-29 16-29 15-24 9-8 2h-13l-17-5-11-6-12-11-8-9-9-13-2-15-1-29-1-101v-145l2-152 1-23 2-14 3-8 8-11 6-7 13-9 15-8 29-12 31-12 42-14 36-10 37-9 45-9 43-7 46-5 46-3zm-6 67-42 3-47 5-35 5-36 7-51 12-50 15-36 12-31 11-18 8-4 3v426l1 5 18-8 24-14 25-13 21-12 26-14 23-13 28-15 23-13 24-13 18-10 24-12 25-10 24-7 26-4 19-1h14l28 2 19 3 21 6 23 10 20 11 15 10 18 14 10 9 12 11 11 11 7 8 10 11 10 13 9 12 11 16 8 12 14 22 14 23 13 21 10 16 11 17 10 16 18 27 12 19 19 28 10 14 8 12 14 18 11 13 7 5h4l3-7 6-23 9-26 9-17 6-15-3-10-7-18-12-32-8-28-5-24-3-26v-31l2-17 5-23 8-20 6-11 11-13 8-7 16-9 18-6 12-2 11-1h20l22 3 26 6 24 8 29 13 21 11 15 10 16 12 19 19 9 12 13 20 8 15 10 25 5 19 1 7v34l-2 19-4 22-8 32-8 29-3 11v9l4 11 9 9 10 6 10 4 10-2 8-5 5-5 6-8 8-16 8-25 10-36 6-32 3-28 1-14v-25l-3-19-8-28-10-25-12-26-16-27-10-14-10-13-13-16-7-10-8-14-2-4v-6l8-13 9-10 7-6 7-1 13 3 26 11 38 18 28 13 32 15 23 11 36 17 33 16 20 9 25 12 28 13 34 16 29 14 16 7 16 8 32 15 12 6 24 11 16 6 13 3 9-1 9-4 9-7 9-11 7-13 1-4v-15l-2-9-8-11-8-7-11-7-16-9-12-7-14-7-19-10-34-18-20-11-16-8-27-14-162-81-23-11-24-12-26-12-29-14-24-11-36-16-37-17-20-9-42-19-42-18-27-11-30-12-56-22-29-11-46-17-55-19-36-12-49-15-57-16-42-10-43-9-38-6-50-5-17-1zm900 208v3l48 22 48 23 25 12 30 15 19 9 19 10 39 20 17 9 16 8 23 11 19 10 19 8 9 3h7l10-5 11-9 6-9 5-10 3-12-1-10-5-14-6-9-7-6-14-6-40-10-163-37-41-8-32-7-25-5h-2l-4-2-7-1-3 1v-2l-11-2zm-40 247m-335 9-22 1-7 4-4 5-5 13-3 16-1 12v27l4 29 6 26 10 25 1 2 4 1 12-3 21-8 25-5 7-1 21-1 27 2 21 5 20 8 13 5 6 2 2-8 1-23-2-16-5-17-9-21-10-15-12-13-13-12-17-11-17-9-18-8-19-6-24-5zm52 211-16 3-20 8-11 8-10 9-7 7-11 17-7 16-4 16-1 5v18l4 20 6 15 7 14 6 9 6 3 14 1 48-2h28l25 1h26l6-3 1-3h2l7-11 6-9 3-6v-10l-10-18-6-10-7-17-4-16v-18l1-7 1-3-4-10-6-8-10-7-14-7-17-4-7-1zm-10 233-32 2-42 4-53 8-31 6-44 11-33 10-38 13-39 16-31 14-38 20-10 6-21 12-10 7-11 7-14 9-13 9-11 8-14 11-16 12-11 9-14 12-11 9-11 11-3 2v2l-4 2-36 36-7 8-16 17-8 10-11 13-14 19-11 16-9 12-14 21-9 15-9 14-9 16-6 11-12 23-14 29-14 32-9 24-10 28-5 15-10 35-6 25-8 42-7 41-3 26-3 38v7l40 1 131 1 9 2 10 6 3 1 2 5 2 6 1 7v16l-3 8-7 7-13 8-216 1-22 1-13 3-6 4-8 11-8 14-3 10-1 11 4 13 9 14 6 7 7 5 9 4 10 2 13 1h204l329-1h1232l20-2 12-5 10-6 6-7 7-14 2-12-1-11-4-12-6-12-8-10-10-5-10-2-22-1-75-1h-1307l-11-1-8-4-8-9-6-13-1-3v-9l8-16 5-5 4-3 8-2h841l394-1 107-1 8-1v-11l-5-50-5-35-8-43-9-40-9-31-9-29-13-37-15-35-14-30-10-19-14-25-12-20-14-22-12-17-20-28-10-13-13-16-12-14-15-16-7-8-18-18-5-6-8-7-15-15-8-7-14-12-12-10-10-8-36-27-16-11-23-15-21-13-21-12-23-12-19-10-24-11-40-16-36-13-26-8-25-7-37-9-36-7-28-4-34-4-36-3-18-1z" />
                        <path transform="translate(614,1197)" d="m0 0 9 1 8 5 7 8 8 13 3 7-1 8-4 8-12 12-13 11-9 7-18 13-14 11-14 12-7 7-8 7-10 9-4 2v2l-8 7-13 13-7 8-13 14-7 8-9 10-7 9-10 13-12 17-10 15-8 11-12 20-12 21-12 23-9 19-7 15-11 26-11 30-13 44-8 30-8 29-7 14-7 6-10 2-15-1-10-4-8-6-6-9-2-6v-12l5-26 9-38 8-27 12-36 12-30 12-26 9-19 8-16 20-36 15-24 16-24 8-11 11-15 11-13 6-8 10-12 7-8 8-10h2l2-4 10-10 6-7h2l2-4 8-8h2v-2l8-7 9-9 8-7 13-12 11-9 17-13 12-9 15-11 17-11 16-6z" />
                        <path transform="translate(322,177)" d="m0 0 10 2 12 9 4 5 3 7 1 5v23l-3 6-12 6-26 8-48 11-39 11-5 1v30l-1 101-2 13-6 9-7 6-7 3-5 1h-17l-12-5-7-9-4-8-2-13v-116l1-42 4-13 6-7 17-8 24-8 44-12 45-10z" />
                        <path transform="translate(718,1140)" d="m0 0h8l10 4 9 7 6 7 4 11v10l-4 11-9 10-14 9-5 2-7-1-9-5-12-11-7-11-2-5v-11l4-8 7-8 13-8z" />
                        <path transform="translate(102,2046)" d="m0 0 6 1v1h-7z" />
                        <path transform="translate(91,2046)" d="m0 0 2 2-3-1z" />
                        <path transform="translate(1945,2047)" d="m0 0 3 1z" />
                        <path transform="translate(1380,315)" d="m0 0 3 1z" />
                        <path transform="translate(1384,316)" d="m0 0 2 1z" />
                        <path transform="translate(1364,312)" d="m0 0" />
                        <path transform="translate(97,2047)" d="m0 0" />
                        <path transform="translate(1357,312)" d="m0 0" />
                    </svg>


                    <h2> Moroccan Cuisine Section</h2>
                </span>

                <div className="cntInroService">
                    <p>Welcome to our Moroccan Cuisine section, where we bring you the finest and most flavorful authentic Moroccan dishes. Enjoy the rich tastes and traditions of Morocco in every bite!</p>
                    <img src="imgs/5046397.jpg" alt="" />
                </div>
                <div className="cnt-list-foods">
                    {
                        moroccanDishesDetailed.map((item, index) => (
                            <>
                                <div className="cntFood-card">
                                    <img src={item.img}  alt="" />
                                    <span><h1>{item.name}</h1> -<h1 className="arabicName"> {item.arabicName}</h1></span>
                                    <p><strong>Origin :</strong>{item.origin}</p>
                                    <p><strong>ingredients :</strong>{item.ingredients}</p>
                                    <p><strong>preparation :</strong>{item.preparation}</p>
                                    <p><strong>servingStyle :</strong> {item.servingStyle}</p>
                                    <p><strong>culturalContext :</strong>{item.culturalContext}</p>
                                    <button ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z"/></svg>Cooking Way</button>
                                </div>
                            </>
                        ))
                    }
                </div>
                    <button className="btnLoadMore">View All</button>
            </div>
        </>
    )

};

export default morpccan_cuisine