import { useState, useRef, useEffect } from "react";
import './css/local_highl.css'
import './css/cityGuide.css'

function CityGuise() {
    const cnt_s2_ref = useRef(null);
    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: true,
        Message: ""
    });

    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);
    };

    const [listCityVisibility, setlistCityVisibility] = useState(false);
    function ToggleListCityVisibility(e) {
        setlistCityVisibility(!listCityVisibility);
        let evetClickOutListCity = (ev) => {
            if (!e.target.contains(ev.target)) {
                window.removeEventListener("click", evetClickOutListCity);
                document.querySelector(".cntListCitys").classList.add("active");
                setTimeout(() => {
                    setlistCityVisibility(false);
                }, 300)
            }
        }
        window.addEventListener("click", evetClickOutListCity);

    };
    // ToggleListCityVisibility()
    const [cityChoosedName, setCityName] = useState("Chose Your City");
    const [CityNotFound, setSityNor] = useState(false);
    const [wantedArea, setWantedArea] = useState({})

    let cityGuidesList = {
        agadir: {
            cityName: "Agadir",
            cityAbout: "Agadir is a modern city located on Morocco’s southern Atlantic coast, known for its beach resorts and vibrant souks.",
            torsistAtraction: [
                {
                    localHighName: "Agadir Beach",
                    localHighdesc: "A long, sandy beach perfect for swimming, sunbathing, or water sports."
                },
                {
                    localHighName: "Kasbah of Agadir Oufella",
                    localHighdesc: "An ancient fortress on a hilltop offering panoramic views of the city and coastline."
                },
                {
                    localHighName: "Crocoparc",
                    localHighdesc: "A park home to hundreds of Nile crocodiles, great for family visits."
                },
                {
                    localHighName: "Souk El Had",
                    localHighdesc: "One of the largest markets in Morocco, offering a variety of products like spices, handicrafts, and fresh produce."
                },
                {
                    localHighName: "Valley of the Birds",
                    localHighdesc: "A small zoo with birds, animals, and beautiful gardens in the city center."
                }
            ],
            accommodation: [
                {
                    localHighName: "Sofitel Agadir Thalassa Sea & Spa",
                    localHighdesc: "A luxury hotel offering beachfront views and wellness facilities."
                },
                {
                    localHighName: "Hotel Sindibad",
                    localHighdesc: "A budget-friendly hotel offering comfortable stays at affordable prices."
                },
                {
                    localHighName: "Aferni Hotel",
                    localHighdesc: "Another affordable option located in the heart of the city."
                }
            ],

            dining: [
                {
                    localHighName: "Le Jardin d’Eau",
                    localHighdesc: "A well-known restaurant serving both Moroccan and international cuisine."
                },
                {
                    localHighName: "Pure Passion",
                    localHighdesc: "A beachfront restaurant famous for its seafood and Mediterranean dishes."
                },
                {
                    localHighName: "Ibtissam",
                    localHighdesc: "A local favorite, serving traditional Moroccan dishes like tajines and couscous."
                }
            ],
            transportation: [
                {
                    localHighName: "Petit Taxis",
                    localHighdesc: "Affordable taxi service within the city, great for short trips."
                },
                {
                    localHighName: "Grand Taxis",
                    localHighdesc: "Larger taxis used for nearby trips outside the city."
                },
                {
                    localHighName: "Public Buses",
                    localHighdesc: "An inexpensive way to get around Agadir."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Available for travelers who want the freedom to explore the city at their own pace."
                }
            ],
            shopping: [
                {
                    localHighName: "Souk El Had",
                    localHighdesc: "The city's most famous market for buying spices, handicrafts, leather goods, and traditional clothing."
                },
                {
                    localHighName: "Marina Shopping",
                    localHighdesc: "A modern shopping area with international brands, cafes, and restaurants."
                },
                {
                    localHighName: "Artisanal Shops",
                    localHighdesc: "Scattered around the city, offering handmade crafts, rugs, and jewelry."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Timitar Festival",
                    localHighdesc: "A summer music festival celebrating Amazigh (Berber) culture and world music."
                },
                {
                    localHighName: "Amazigh Heritage Museum",
                    localHighdesc: "A museum that explores the history and cultural artifacts of the Amazigh people."
                }
            ],
            safetyTips: [
                {
                    localHighName: "General Safety",
                    localHighdesc: "Agadir is generally safe, but avoid isolated areas at night."
                },
                {
                    localHighName: "Taxi Fares",
                    localHighdesc: "Always negotiate taxi fares before getting in, especially with grand taxis."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Founty",
                    localHighdesc: "A modern area near the beach, known for luxury hotels and resorts."
                },
                {
                    localHighName: "Talborjt",
                    localHighdesc: "A lively neighborhood filled with local shops, cafes, and affordable accommodations."
                },
                {
                    localHighName: "Anza",
                    localHighdesc: "A quieter area, located further from the center, offering a relaxed atmosphere and beautiful views."
                }
            ]
        },
        casablanca: {
            cityName: "Casablanca",
            cityAbout: "Casablanca, the largest city in Morocco, is a major port and commercial hub known for its modern architecture, rich history, and vibrant economy.",
            torsistAtraction: [
                {
                    localHighName: "Hassan II Mosque",
                    localHighdesc: "One of the largest mosques in the world, renowned for its stunning architecture and its location over the Atlantic Ocean."
                },
                {
                    localHighName: "Old Medina",
                    localHighdesc: "A bustling neighborhood full of narrow streets, traditional markets, and local artisans."
                },
                {
                    localHighName: "Corniche Ain Diab",
                    localHighdesc: "A beautiful seaside promenade offering cafes, restaurants, and beach clubs."
                },
                {
                    localHighName: "Morocco Mall",
                    localHighdesc: "One of Africa's largest shopping malls, featuring luxury brands, restaurants, and an aquarium."
                },
                {
                    localHighName: "Place Mohammed V",
                    localHighdesc: "A grand square known for its French colonial architecture and iconic fountain."
                }
            ],
            accommodation: [
                {
                    localHighName: "Four Seasons Hotel Casablanca",
                    localHighdesc: "A luxury beachfront hotel offering stunning views of the Atlantic and world-class amenities."
                },
                {
                    localHighName: "Hotel Kenzi Tower",
                    localHighdesc: "A high-end hotel located in the heart of Casablanca’s business district."
                },
                {
                    localHighName: "Ibis Casablanca City Center",
                    localHighdesc: "A budget-friendly option near the city’s train station, offering clean and comfortable rooms."
                }
            ],
            dining: [
                {
                    localHighName: "Rick's Café",
                    localHighdesc: "Inspired by the famous movie 'Casablanca', this restaurant serves Moroccan and international cuisine in a classic setting."
                },
                {
                    localHighName: "La Sqala",
                    localHighdesc: "A popular restaurant located in a historic fortress, serving traditional Moroccan dishes."
                },
                {
                    localHighName: "Le Cabestan",
                    localHighdesc: "A high-end restaurant offering Mediterranean cuisine with stunning ocean views."
                }
            ],
            transportation: [
                {
                    localHighName: "Petit Taxis",
                    localHighdesc: "Small taxis available for short trips within the city, be sure to ask for the meter."
                },
                {
                    localHighName: "Tramway",
                    localHighdesc: "Casablanca’s modern tram system offers an affordable and efficient way to get around the city."
                },
                {
                    localHighName: "Train",
                    localHighdesc: "ONCF trains connect Casablanca to other major cities like Rabat, Marrakech, and Fez."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Car rental services are available, offering flexibility for travelers who want to explore at their own pace."
                }
            ],
            shopping: [
                {
                    localHighName: "Morocco Mall",
                    localHighdesc: "One of the biggest malls in Africa, with a mix of international luxury brands and local stores."
                },
                {
                    localHighName: "AnfaPlace Mall",
                    localHighdesc: "A modern shopping center located on the Corniche, offering a mix of shopping, dining, and entertainment."
                },
                {
                    localHighName: "Maarif District",
                    localHighdesc: "A popular shopping area in Casablanca with local boutiques and international brands."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Casablanca Festival",
                    localHighdesc: "An annual cultural festival that celebrates music, art, and Moroccan traditions."
                },
                {
                    localHighName: "Jazzablanca Festival",
                    localHighdesc: "A popular jazz music festival held annually, attracting international artists."
                }
            ],
            safetyTips: [
                {
                    localHighName: "General Safety",
                    localHighdesc: "Casablanca is a busy city, so it's important to be aware of your surroundings, especially in crowded areas."
                },
                {
                    localHighName: "Taxi Meters",
                    localHighdesc: "Always ask the taxi driver to use the meter or agree on a price beforehand."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Anfa",
                    localHighdesc: "A luxurious residential area known for its upscale villas and beautiful views."
                },
                {
                    localHighName: "Maarif",
                    localHighdesc: "A lively neighborhood, popular for its shopping streets and cafes."
                },
                {
                    localHighName: "Habous Quarter",
                    localHighdesc: "A traditional neighborhood with narrow streets, local markets, and historic buildings."
                }
            ]
        },
        marrakech: {
            cityName: "Marrakech",
            cityAbout: "Marrakech, known as the 'Red City,' is a vibrant, historic city in Morocco, famous for its palaces, gardens, and bustling souks.",
            torsistAtraction: [
                {
                    localHighName: "Jemaa el-Fnaa",
                    localHighdesc: "The city's central square, filled with food stalls, performers, and vibrant local life."
                },
                {
                    localHighName: "Koutoubia Mosque",
                    localHighdesc: "An iconic mosque with a beautiful minaret that dominates the skyline of Marrakech."
                },
                {
                    localHighName: "Majorelle Garden",
                    localHighdesc: "A peaceful garden with exotic plants, created by French artist Jacques Majorelle."
                },
                {
                    localHighName: "Bahia Palace",
                    localHighdesc: "A stunning 19th-century palace with intricate mosaics and tranquil courtyards."
                },
                {
                    localHighName: "Saadian Tombs",
                    localHighdesc: "The beautifully preserved tombs of the Saadian dynasty, hidden for centuries."
                }
            ],
            accommodation: [
                {
                    localHighName: "La Mamounia",
                    localHighdesc: "A luxurious hotel known for its opulence and stunning gardens."
                },
                {
                    localHighName: "Riad Kniza",
                    localHighdesc: "A traditional riad offering an authentic Moroccan experience with modern comfort."
                },
                {
                    localHighName: "Les Jardins de la Koutoubia",
                    localHighdesc: "A five-star hotel located near the Koutoubia Mosque, offering beautiful views and top-notch service."
                }
            ],
            dining: [
                {
                    localHighName: "Nomad",
                    localHighdesc: "A rooftop restaurant in the Medina offering modern Moroccan cuisine with a view."
                },
                {
                    localHighName: "Al Fassia",
                    localHighdesc: "A restaurant run entirely by women, famous for its traditional Moroccan dishes like couscous and tajine."
                },
                {
                    localHighName: "Le Jardin",
                    localHighdesc: "A charming garden restaurant offering a mix of Moroccan and international dishes."
                }
            ],
            transportation: [
                {
                    localHighName: "Petit Taxis",
                    localHighdesc: "Small taxis ideal for quick trips within the city, just make sure the meter is on."
                },
                {
                    localHighName: "Carriages",
                    localHighdesc: "Horse-drawn carriages are a traditional way to explore the city, especially the Medina."
                },
                {
                    localHighName: "Bus Services",
                    localHighdesc: "Public buses offer an affordable way to travel across the city."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Available for those wanting to explore areas outside of Marrakech at their own pace."
                }
            ],
            shopping: [
                {
                    localHighName: "Souks of Marrakech",
                    localHighdesc: "The souks in the Medina are famous for their vibrant stalls selling spices, textiles, pottery, and more."
                },
                {
                    localHighName: "Ensemble Artisanal",
                    localHighdesc: "A government-run market where local artisans sell their handmade goods at fixed prices."
                },
                {
                    localHighName: "Gueliz",
                    localHighdesc: "The modern part of Marrakech, where you’ll find luxury boutiques and trendy cafes."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Marrakech International Film Festival",
                    localHighdesc: "An annual event that attracts stars from around the world and celebrates both local and international cinema."
                },
                {
                    localHighName: "Popular Arts Festival",
                    localHighdesc: "A cultural festival featuring traditional music, dance, and theater performances."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Crowded Areas",
                    localHighdesc: "Marrakech can be very crowded, especially in the Medina, so be mindful of your belongings."
                },
                {
                    localHighName: "Taxis",
                    localHighdesc: "Make sure to negotiate the fare or use the meter when taking a taxi."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Medina",
                    localHighdesc: "The heart of Marrakech, filled with narrow streets, vibrant souks, and historical landmarks."
                },
                {
                    localHighName: "Gueliz",
                    localHighdesc: "A more modern neighborhood, offering shopping, cafes, and restaurants."
                },
                {
                    localHighName: "Hivernage",
                    localHighdesc: "An upscale area known for luxury hotels and nightclubs."
                }
            ]
        },
        tangier: {
            cityName: "Tangier",
            cityAbout: "Tangier, a historic port city on the Strait of Gibraltar, blends Moroccan, Spanish, and French influences, known for its vibrant culture, beautiful coastlines, and rich history.",
            torsistAtraction: [
                {
                    localHighName: "The Kasbah",
                    localHighdesc: "A historic fortress offering stunning views over the Mediterranean and the city’s winding streets."
                },
                {
                    localHighName: "Caves of Hercules",
                    localHighdesc: "A famous cave believed to be the resting place of Hercules, located near the Atlantic coast."
                },
                {
                    localHighName: "Tangier Beach",
                    localHighdesc: "A popular beach along the Mediterranean coast, perfect for relaxation and watersports."
                },
                {
                    localHighName: "American Legation Museum",
                    localHighdesc: "A unique museum housed in the first American public property outside the U.S., showcasing art and history."
                },
                {
                    localHighName: "Grand Socco",
                    localHighdesc: "A bustling public square marking the entrance to the Medina, filled with cafes, markets, and local life."
                }
            ],
            accommodation: [
                {
                    localHighName: "El Minzah Hotel",
                    localHighdesc: "A luxurious historic hotel known for its elegance and views of the Mediterranean."
                },
                {
                    localHighName: "La Tangerina",
                    localHighdesc: "A charming riad in the Kasbah offering personalized service and stunning views."
                },
                {
                    localHighName: "Hilton Tangier Al Houara Resort & Spa",
                    localHighdesc: "A modern, beachfront resort with spacious rooms and world-class amenities."
                }
            ],
            dining: [
                {
                    localHighName: "Le Saveur du Poisson",
                    localHighdesc: "A famous seafood restaurant offering a fixed menu with fresh, local ingredients."
                },
                {
                    localHighName: "El Morocco Club",
                    localHighdesc: "A chic restaurant located in the Kasbah, serving Moroccan and international fusion cuisine."
                },
                {
                    localHighName: "Café Hafa",
                    localHighdesc: "A historic café with spectacular views of the Mediterranean, known for its tea and relaxed atmosphere."
                }
            ],
            transportation: [
                {
                    localHighName: "Petit Taxis",
                    localHighdesc: "Ideal for short trips within the city; always ask the driver to use the meter."
                },
                {
                    localHighName: "Tangier Med Port",
                    localHighdesc: "A major port offering ferry services to Spain and other Mediterranean destinations."
                },
                {
                    localHighName: "Train Services",
                    localHighdesc: "ONCF trains connect Tangier with other major Moroccan cities like Rabat, Casablanca, and Marrakech."
                }
            ],
            shopping: [
                {
                    localHighName: "Tangier Medina",
                    localHighdesc: "The old town's souks are full of traditional Moroccan goods, from rugs to spices."
                },
                {
                    localHighName: "Socco Alto Mall",
                    localHighdesc: "A modern shopping mall offering a range of international and local brands."
                },
                {
                    localHighName: "Marché de Beni Makada",
                    localHighdesc: "A lively market where locals shop for fresh produce, clothing, and everyday items."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Tanjazz Festival",
                    localHighdesc: "An annual jazz festival attracting both international and local artists."
                },
                {
                    localHighName: "Tangier International Book Fair",
                    localHighdesc: "A major literary event showcasing Moroccan and international literature."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Busy Areas",
                    localHighdesc: "Like other Moroccan cities, Tangier’s busy markets and squares require attention to personal belongings."
                },
                {
                    localHighName: "Beach Safety",
                    localHighdesc: "Be mindful of tides and currents when swimming in the Atlantic or Mediterranean."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Medina",
                    localHighdesc: "The historic heart of Tangier, with narrow streets, traditional houses, and vibrant souks."
                },
                {
                    localHighName: "Malabata",
                    localHighdesc: "A beachfront area known for its resorts, modern hotels, and beautiful coastline."
                },
                {
                    localHighName: "Iberia",
                    localHighdesc: "An upscale neighborhood with European-style villas and international schools."
                }
            ]
        },
        rabat: {
            cityName: "Rabat",
            cityAbout: "Rabat, the capital city of Morocco, is known for its historical landmarks, beautiful gardens, and vibrant culture, blending tradition with modernity.",
            torsistAtraction: [
                {
                    localHighName: "Hassan Tower",
                    localHighdesc: "An iconic minaret of an unfinished mosque, offering stunning views and rich historical significance."
                },
                {
                    localHighName: "Mausoleum of Mohammed V",
                    localHighdesc: "A beautiful mausoleum that houses the tombs of the Moroccan royal family, known for its intricate architecture."
                },
                {
                    localHighName: "Kasbah of the Udayas",
                    localHighdesc: "A picturesque fortress overlooking the Bou Regreg River, featuring narrow streets and a lovely garden."
                },
                {
                    localHighName: "Rabat Archaeological Museum",
                    localHighdesc: "Showcasing Morocco's rich history, this museum features artifacts from ancient civilizations."
                },
                {
                    localHighName: "Andalusian Gardens",
                    localHighdesc: "A serene garden in the Kasbah, perfect for a relaxing stroll amidst beautiful plants and fountains."
                }
            ],
            accommodation: [
                {
                    localHighName: "Sofitel Rabat Jardin des Roses",
                    localHighdesc: "A luxury hotel set in beautiful gardens, offering top-notch amenities and dining options."
                },
                {
                    localHighName: "Hotel La Tour Hassan",
                    localHighdesc: "A historic hotel known for its Moorish architecture and central location."
                },
                {
                    localHighName: "Riad Kalaa",
                    localHighdesc: "A charming riad in the heart of the Medina, offering traditional Moroccan hospitality."
                }
            ],
            dining: [
                {
                    localHighName: "Le Dhow",
                    localHighdesc: "A unique dining experience aboard a boat, offering delicious Moroccan and Mediterranean cuisine."
                },
                {
                    localHighName: "Dar Zaki",
                    localHighdesc: "Known for its authentic Moroccan dishes, this restaurant offers a cozy and welcoming atmosphere."
                },
                {
                    localHighName: "ElWaha",
                    localHighdesc: "A popular restaurant serving traditional Moroccan cuisine with a modern twist."
                }
            ],
            transportation: [
                {
                    localHighName: "Rabat Tramway",
                    localHighdesc: "An efficient tram system connecting key areas of the city."
                },
                {
                    localHighName: "Taxi Services",
                    localHighdesc: "Available for short trips within the city; negotiate fares or ensure the meter is running."
                },
                {
                    localHighName: "Train Services",
                    localHighdesc: "ONCF trains connect Rabat with other major Moroccan cities."
                }
            ],
            shopping: [
                {
                    localHighName: "Medina of Rabat",
                    localHighdesc: "Explore the winding streets for local crafts, textiles, and souvenirs."
                },
                {
                    localHighName: "Cultural Complex of Les Oudayas",
                    localHighdesc: "A great place to find traditional Moroccan crafts and artisanal products."
                },
                {
                    localHighName: "Marjane Supermarket",
                    localHighdesc: "A large supermarket chain offering a wide range of products at reasonable prices."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Rabat Festival of Popular Arts",
                    localHighdesc: "An annual event celebrating Moroccan music and dance, attracting performers from across the country."
                },
                {
                    localHighName: "International Book Fair",
                    localHighdesc: "A major literary event bringing together authors, publishers, and readers."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Stay Aware in Crowded Places",
                    localHighdesc: "Like in any city, keep an eye on your belongings, especially in markets and tourist areas."
                },
                {
                    localHighName: "Transportation Safety",
                    localHighdesc: "Use reputable taxi services and ensure they use the meter."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Medina",
                    localHighdesc: "The historic heart of Rabat, filled with narrow streets, traditional shops, and vibrant culture."
                },
                {
                    localHighName: "Agdal",
                    localHighdesc: "A modern neighborhood known for its cafes, restaurants, and shopping centers."
                },
                {
                    localHighName: "Hassan",
                    localHighdesc: "Home to many of the city’s major landmarks, including the Royal Palace."
                }
            ]
        },
        fes: {
            cityName: "Fes",
            cityAbout: "Fes is a city known for its well-preserved medieval architecture, vibrant souks, and historical significance as a cultural and spiritual center of Morocco.",
            torsistAtraction: [
                {
                    localHighName: "Fes el-Bali",
                    localHighdesc: "The oldest part of the city, characterized by its narrow streets, historical buildings, and bustling markets."
                },
                {
                    localHighName: "Bou Inania Madrasa",
                    localHighdesc: "An impressive 14th-century Islamic school known for its stunning architecture and intricate tilework."
                },
                {
                    localHighName: "Al-Attarine Madrasa",
                    localHighdesc: "Another beautiful madrasa, famous for its wood carvings and decorative fountains."
                },
                {
                    localHighName: "Chouara Tannery",
                    localHighdesc: "One of the oldest tanneries in the world, where you can see traditional leather-making techniques."
                },
                {
                    localHighName: "Dar Batha Museum",
                    localHighdesc: "A museum showcasing Fes's art and history, located in a former royal palace."
                }
            ],
            accommodation: [
                {
                    localHighName: "Riad Fes",
                    localHighdesc: "A luxury riad offering traditional Moroccan hospitality and modern comforts."
                },
                {
                    localHighName: "Palais Faraj Suites & Spa",
                    localHighdesc: "A beautiful hotel with stunning views of the city and excellent amenities."
                },
                {
                    localHighName: "Dar Hafsa",
                    localHighdesc: "A charming guesthouse located in the Medina, offering personalized service."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant Dar Hatim",
                    localHighdesc: "Famous for its authentic Moroccan dishes served in a traditional setting."
                },
                {
                    localHighName: "La Maison Bleue",
                    localHighdesc: "An upscale restaurant offering a mix of traditional and contemporary Moroccan cuisine."
                },
                {
                    localHighName: "Cafe Clock",
                    localHighdesc: "A trendy café known for its fusion dishes and cultural events."
                }
            ],
            transportation: [
                {
                    localHighName: "Petit Taxis",
                    localHighdesc: "Available for short trips within the city; ensure the driver uses the meter."
                },
                {
                    localHighName: "Train Services",
                    localHighdesc: "Trains connect Fes to major cities like Rabat and Casablanca."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local buses are available for travel around the city and to nearby attractions."
                }
            ],
            shopping: [
                {
                    localHighName: "Souk el Henna",
                    localHighdesc: "A vibrant market where you can find traditional henna, textiles, and spices."
                },
                {
                    localHighName: "Fes Pottery",
                    localHighdesc: "Visit the pottery workshops to see artisans at work and purchase handmade ceramics."
                },
                {
                    localHighName: "Tannery Souk",
                    localHighdesc: "Shop for leather goods directly from the tanners in the Medina."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Fes Festival of World Sacred Music",
                    localHighdesc: "An annual festival celebrating spiritual music from around the world."
                },
                {
                    localHighName: "Sufi Nights",
                    localHighdesc: "Cultural events featuring Sufi music and dance performances throughout the year."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Stay Aware of Your Belongings",
                    localHighdesc: "Keep an eye on your belongings, especially in crowded areas."
                },
                {
                    localHighName: "Use Licensed Taxis",
                    localHighdesc: "Always opt for licensed taxis to ensure safety during travel."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Fes el-Bali",
                    localHighdesc: "The historic part of Fes, filled with ancient architecture and vibrant markets."
                },
                {
                    localHighName: "Fes el-Jdid",
                    localHighdesc: "A newer area of the city known for its royal palace and gardens."
                },
                {
                    localHighName: "Ville Nouvelle",
                    localHighdesc: "The modern part of Fes with shops, cafes, and restaurants."
                }
            ]
        },
        meknes: {
            cityName: "Meknes",
            cityAbout: "Meknes is a city rich in history, known for its grand architecture, including palaces and gates, and as a former imperial city of Morocco.",
            torsistAtraction: [
                {
                    localHighName: "Bab Mansour",
                    localHighdesc: "One of the most famous gates in Morocco, showcasing stunning architectural details."
                },
                {
                    localHighName: "Mausoleum of Moulay Ismail",
                    localHighdesc: "The resting place of the great Sultan Moulay Ismail, known for its beautiful architecture."
                },
                {
                    localHighName: "Heritage Site of Volubilis",
                    localHighdesc: "Ancient Roman ruins located a short drive from Meknes, offering a glimpse into the past."
                },
                {
                    localHighName: "Meknes Medina",
                    localHighdesc: "Explore the winding streets and vibrant souks filled with local crafts and goods."
                },
                {
                    localHighName: "Royal Stables",
                    localHighdesc: "An impressive historical site that housed thousands of horses during the reign of Moulay Ismail."
                }
            ],
            accommodation: [
                {
                    localHighName: "Riad Yacout",
                    localHighdesc: "A beautifully restored riad offering a peaceful atmosphere and traditional Moroccan hospitality."
                },
                {
                    localHighName: "Hotel Tafilalet",
                    localHighdesc: "A comfortable hotel with modern amenities, located near the city center."
                },
                {
                    localHighName: "Riad Meknes",
                    localHighdesc: "A charming riad located in the heart of the Medina, with personalized service."
                }
            ],
            dining: [
                {
                    localHighName: "Riad Ma Boheme",
                    localHighdesc: "Known for its Moroccan cuisine, this restaurant offers a cozy dining experience."
                },
                {
                    localHighName: "Restaurant Dar Al-Mounia",
                    localHighdesc: "Offers a variety of traditional Moroccan dishes in a beautiful setting."
                },
                {
                    localHighName: "Le Restaurant du Golf",
                    localHighdesc: "A restaurant located near the golf course, serving a mix of Moroccan and international cuisine."
                }
            ],
            transportation: [
                {
                    localHighName: "Petit Taxis",
                    localHighdesc: "Ideal for short trips within the city; ensure the driver uses the meter."
                },
                {
                    localHighName: "Train Services",
                    localHighdesc: "Meknes is well connected by train to major Moroccan cities."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local buses are available for transportation around the city."
                }
            ],
            shopping: [
                {
                    localHighName: "Meknes Medina Souks",
                    localHighdesc: "Explore the traditional markets for local crafts, spices, and souvenirs."
                },
                {
                    localHighName: "Place El Hedim",
                    localHighdesc: "A lively square where you can find various local vendors and artists."
                },
                {
                    localHighName: "Hedim Market",
                    localHighdesc: "A bustling market where you can purchase fresh produce and local products."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Meknes Festival of Classical Music",
                    localHighdesc: "An annual festival celebrating classical music in various venues across the city."
                },
                {
                    localHighName: "Tannery Workshops",
                    localHighdesc: "Visit the traditional tannery workshops to learn about leather production."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Stay Aware in Crowded Areas",
                    localHighdesc: "Keep your belongings secure, especially in busy markets."
                },
                {
                    localHighName: "Use Licensed Taxis",
                    localHighdesc: "Opt for licensed taxis to ensure safe transportation."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Meknes Medina",
                    localHighdesc: "The historic part of Meknes, rich in culture and architecture."
                },
                {
                    localHighName: "Hedim",
                    localHighdesc: "A lively neighborhood known for its market and vibrant atmosphere."
                },
                {
                    localHighName: "Ville Nouvelle",
                    localHighdesc: "The modern part of Meknes with shops, cafes, and restaurants."
                }
            ]
        },
        oujda: {
            cityName: "Oujda",
            cityAbout: "Oujda, located near the Algerian border, is known for its rich history, vibrant souks, and beautiful parks, making it a unique destination in eastern Morocco.",
            torsistAtraction: [
                {
                    localHighName: "Sidi Yahya Mosque",
                    localHighdesc: "An important historical mosque known for its beautiful architecture and spiritual significance."
                },
                {
                    localHighName: "Oujda Medina",
                    localHighdesc: "Explore the old city with its narrow streets, local shops, and traditional markets."
                },
                {
                    localHighName: "Parks of Oujda",
                    localHighdesc: "Visit the lush parks and gardens for a relaxing day out, perfect for families."
                },
                {
                    localHighName: "Dar Sebti",
                    localHighdesc: "A historical building showcasing Oujda's architectural heritage and cultural significance."
                },
                {
                    localHighName: "Lalla Aicha Park",
                    localHighdesc: "A popular park with walking paths, picnic areas, and children's play spaces."
                }
            ],
            accommodation: [
                {
                    localHighName: "Hotel Ibis Oujda",
                    localHighdesc: "A modern hotel offering comfortable rooms and convenient amenities for travelers."
                },
                {
                    localHighName: "Riad Oujda",
                    localHighdesc: "A charming riad providing a traditional Moroccan experience with modern comforts."
                },
                {
                    localHighName: "Hotel Atlas Terminus & Spa",
                    localHighdesc: "A luxurious hotel with a spa, restaurant, and spacious accommodations."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant La Veranda",
                    localHighdesc: "Known for its delicious Moroccan cuisine and beautiful terrace."
                },
                {
                    localHighName: "Le Jardin des Saveurs",
                    localHighdesc: "Offers a variety of local and international dishes in a cozy setting."
                },
                {
                    localHighName: "Café Restaurant Oujda",
                    localHighdesc: "A casual spot popular for coffee, pastries, and light meals."
                }
            ],
            transportation: [
                {
                    localHighName: "Petit Taxis",
                    localHighdesc: "Available for short trips within the city; ensure the driver uses the meter."
                },
                {
                    localHighName: "Train Services",
                    localHighdesc: "Oujda is connected by train to major Moroccan cities, making travel convenient."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local buses serve the city and surrounding areas for affordable transportation."
                }
            ],
            shopping: [
                {
                    localHighName: "Oujda Souk",
                    localHighdesc: "A bustling market where you can find local crafts, spices, and textiles."
                },
                {
                    localHighName: "Centre Commercial",
                    localHighdesc: "A modern shopping center offering a variety of shops and dining options."
                },
                {
                    localHighName: "Traditional Handicrafts Shops",
                    localHighdesc: "Explore shops selling handmade pottery, carpets, and jewelry."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Oujda Music Festival",
                    localHighdesc: "An annual festival celebrating various music genres and artists from Morocco and beyond."
                },
                {
                    localHighName: "Cultural Exhibitions",
                    localHighdesc: "Various exhibitions and events are held throughout the year, showcasing local art and culture."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Stay Alert in Crowded Areas",
                    localHighdesc: "Keep an eye on your belongings in busy markets and public places."
                },
                {
                    localHighName: "Use Licensed Taxis",
                    localHighdesc: "Opt for licensed taxis for safe and reliable transportation."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Oujda Medina",
                    localHighdesc: "The historic part of Oujda with traditional architecture and lively markets."
                },
                {
                    localHighName: "Hay al-Intissar",
                    localHighdesc: "A modern neighborhood with shops, cafes, and residential areas."
                },
                {
                    localHighName: "El Qods",
                    localHighdesc: "A bustling area known for its markets and local culture."
                }
            ]
        },
        tetouan: {
            cityName: "Tetouan",
            cityAbout: "Tetouan, known as the 'White Dove,' is famous for its stunning architecture, rich history, and vibrant culture. Its medina is a UNESCO World Heritage site, reflecting a blend of Moroccan and Andalusian influences.",
            torsistAtraction: [
                {
                    localHighName: "Tetouan Medina",
                    localHighdesc: "A UNESCO World Heritage site filled with narrow alleys, shops, and traditional Moroccan architecture."
                },
                {
                    localHighName: "Royal Palace of Tetouan",
                    localHighdesc: "An impressive palace with beautiful gardens and stunning architecture, though not open to the public."
                },
                {
                    localHighName: "Musee d'Arts et Traditions",
                    localHighdesc: "A museum showcasing local arts, crafts, and the rich history of the region."
                },
                {
                    localHighName: "Sidi Ali Ghandour",
                    localHighdesc: "A significant historical site with beautiful views and cultural importance."
                },
                {
                    localHighName: "Plage de Martil",
                    localHighdesc: "A nearby beach offering relaxation and water activities along the Mediterranean coast."
                }
            ],
            accommodation: [
                {
                    localHighName: "Hotel Palais Medina & Spa",
                    localHighdesc: "A luxury hotel featuring modern amenities, a spa, and excellent dining options."
                },
                {
                    localHighName: "Riad Dar Sema",
                    localHighdesc: "A charming riad located in the medina, offering a traditional Moroccan experience."
                },
                {
                    localHighName: "Hotel Le Rio",
                    localHighdesc: "A comfortable hotel providing convenient access to the city’s attractions."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant El Fassia",
                    localHighdesc: "Known for its traditional Moroccan dishes and cozy atmosphere."
                },
                {
                    localHighName: "Le Relais de Paris",
                    localHighdesc: "A popular restaurant serving a mix of Moroccan and French cuisine."
                },
                {
                    localHighName: "Café Resto",
                    localHighdesc: "A casual dining spot offering coffee, pastries, and light meals."
                }
            ],
            transportation: [
                {
                    localHighName: "Local Taxis",
                    localHighdesc: "Easily available for short trips around the city; negotiate the fare in advance."
                },
                {
                    localHighName: "Bus Services",
                    localHighdesc: "Buses connect Tetouan with nearby towns and cities for convenient travel."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Rental services are available for those looking to explore the region independently."
                }
            ],
            shopping: [
                {
                    localHighName: "Tetouan Souk",
                    localHighdesc: "A vibrant market where you can buy local crafts, spices, and traditional textiles."
                },
                {
                    localHighName: "Artisan Workshops",
                    localHighdesc: "Explore workshops where you can see artisans create beautiful pottery and textiles."
                },
                {
                    localHighName: "Modern Shopping Centers",
                    localHighdesc: "Various shopping centers offering both local and international brands."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Tetouan International Arts Festival",
                    localHighdesc: "An annual event celebrating various forms of art, including music, theater, and visual arts."
                },
                {
                    localHighName: "Local Handicrafts Exhibitions",
                    localHighdesc: "Regular exhibitions showcasing traditional crafts and local artisans."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Beware of Pickpockets",
                    localHighdesc: "Be cautious in crowded areas and keep your belongings secure."
                },
                {
                    localHighName: "Stay Hydrated",
                    localHighdesc: "Drink plenty of water, especially during the hot summer months."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Tetouan Medina",
                    localHighdesc: "The historic center filled with shops, cafes, and stunning architecture."
                },
                {
                    localHighName: "El Ensanche",
                    localHighdesc: "A modern area with a variety of shops, restaurants, and residential buildings."
                },
                {
                    localHighName: "Martil",
                    localHighdesc: "A beach neighborhood known for its resorts and beautiful coastline."
                }
            ]
        },
        safi: {
            cityName: "Safi",
            cityAbout: "Safi is a coastal city known for its vibrant pottery, rich history, and beautiful beaches. It offers a unique blend of traditional and modern influences, making it a fascinating destination in Morocco.",
            torsistAtraction: [
                {
                    localHighName: "Safi Medina",
                    localHighdesc: "Explore the historic medina with its narrow streets, traditional architecture, and local artisan shops."
                },
                {
                    localHighName: "Safi Pottery Workshops",
                    localHighdesc: "Visit local workshops where artisans create stunning pottery, a specialty of the region."
                },
                {
                    localHighName: "The Fortress of Badr",
                    localHighdesc: "An ancient fortress offering panoramic views of the ocean and the city."
                },
                {
                    localHighName: "Safi Beach",
                    localHighdesc: "A beautiful beach perfect for sunbathing, swimming, and enjoying seaside activities."
                },
                {
                    localHighName: "The Great Mosque of Safi",
                    localHighdesc: "A significant historical mosque with impressive architecture reflecting the city’s heritage."
                }
            ],
            accommodation: [
                {
                    localHighName: "Atlas Oriental Hotel",
                    localHighdesc: "A comfortable hotel offering modern amenities and a convenient location."
                },
                {
                    localHighName: "Riad Safi",
                    localHighdesc: "A charming riad that provides a traditional Moroccan experience with a personal touch."
                },
                {
                    localHighName: "Hotel Al Borj",
                    localHighdesc: "A well-rated hotel with a restaurant and easy access to local attractions."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant La Grillardière",
                    localHighdesc: "Known for its fresh seafood and traditional Moroccan dishes in a cozy setting."
                },
                {
                    localHighName: "Café Restaurant El Barco",
                    localHighdesc: "A casual dining spot offering a variety of local and international dishes."
                },
                {
                    localHighName: "Le Gourmet",
                    localHighdesc: "A restaurant with a menu featuring both Moroccan and Mediterranean cuisine."
                }
            ],
            transportation: [
                {
                    localHighName: "Taxis",
                    localHighdesc: "Available throughout the city for convenient transportation; agree on a fare before starting."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local buses connect various parts of the city and nearby towns for affordable travel."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Rental services are available for those wishing to explore the region at their own pace."
                }
            ],
            shopping: [
                {
                    localHighName: "Safi Pottery Souk",
                    localHighdesc: "A vibrant market where you can find exquisite local pottery and handicrafts."
                },
                {
                    localHighName: "Traditional Craft Shops",
                    localHighdesc: "Explore shops selling handmade rugs, textiles, and other artisanal products."
                },
                {
                    localHighName: "Modern Shopping Centers",
                    localHighdesc: "Various shopping centers offering a mix of local and international brands."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Safi Cultural Festival",
                    localHighdesc: "An annual event celebrating local arts, crafts, music, and cultural heritage."
                },
                {
                    localHighName: "Pottery Exhibitions",
                    localHighdesc: "Regular exhibitions showcasing the unique pottery styles and techniques of Safi."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Be Cautious in Crowded Areas",
                    localHighdesc: "Keep an eye on your belongings, especially in busy markets and tourist spots."
                },
                {
                    localHighName: "Stay Safe at the Beach",
                    localHighdesc: "Follow local guidelines for swimming and water activities to ensure safety."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Safi Medina",
                    localHighdesc: "The historic part of Safi, full of local shops and traditional architecture."
                },
                {
                    localHighName: "El Mansouria",
                    localHighdesc: "A lively neighborhood known for its dining and shopping options."
                },
                {
                    localHighName: "Hay Mohammadi",
                    localHighdesc: "A residential area with local markets and a vibrant community atmosphere."
                }
            ]
        },
        laayoune: {
            cityName: "Laayoune",
            cityAbout: "Laayoune is the largest city in Western Sahara, known for its unique blend of modern architecture and traditional culture. The city is a gateway to the Sahara desert, offering stunning landscapes and rich history.",
            torsistAtraction: [
                {
                    localHighName: "Laayoune Museum",
                    localHighdesc: "A museum showcasing the history, culture, and natural heritage of the Western Sahara region."
                },
                {
                    localHighName: "Oued Eddahab Beach",
                    localHighdesc: "A beautiful beach where visitors can enjoy swimming, sunbathing, and water sports."
                },
                {
                    localHighName: "Laayoune Mosque",
                    localHighdesc: "A significant religious site known for its stunning architecture and peaceful ambiance."
                },
                {
                    localHighName: "Sahara Desert",
                    localHighdesc: "Explore the vast desert landscapes and experience camel trekking and sandboarding."
                },
                {
                    localHighName: "Souk Laayoune",
                    localHighdesc: "A local market where you can find traditional crafts, textiles, and local produce."
                }
            ],
            accommodation: [
                {
                    localHighName: "Hotel Parador",
                    localHighdesc: "A comfortable hotel with modern amenities and excellent dining options."
                },
                {
                    localHighName: "Riad Lala Mimouna",
                    localHighdesc: "A traditional riad offering a unique Moroccan experience in a welcoming atmosphere."
                },
                {
                    localHighName: "Hotel Al Sahara",
                    localHighdesc: "A well-rated hotel providing a relaxing stay with easy access to local attractions."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant Al Mounia",
                    localHighdesc: "Known for its delicious Moroccan cuisine and friendly service."
                },
                {
                    localHighName: "Café Restaurant Le Zahir",
                    localHighdesc: "A popular spot offering a mix of traditional and international dishes."
                },
                {
                    localHighName: "Laayoune Seafood Restaurant",
                    localHighdesc: "Specializes in fresh seafood dishes with a Moroccan twist."
                }
            ],
            transportation: [
                {
                    localHighName: "Taxis",
                    localHighdesc: "Available for hire around the city; negotiate the fare before starting your trip."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local bus services connect various parts of the city and surrounding areas."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Rental services are available for exploring the city and surrounding desert areas."
                }
            ],
            shopping: [
                {
                    localHighName: "Laayoune Souk",
                    localHighdesc: "A vibrant market where you can buy local crafts, clothing, and spices."
                },
                {
                    localHighName: "Craft Shops",
                    localHighdesc: "Explore shops selling traditional Sahrawi handicrafts and souvenirs."
                },
                {
                    localHighName: "Modern Shopping Malls",
                    localHighdesc: "Various shopping centers offering both local and international brands."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Laayoune Cultural Festival",
                    localHighdesc: "An annual event celebrating local arts, music, and traditions of the Sahrawi people."
                },
                {
                    localHighName: "Traditional Music and Dance Performances",
                    localHighdesc: "Experience local music and dance that reflect the culture of Western Sahara."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Stay Hydrated",
                    localHighdesc: "Drink plenty of water, especially during the hot summer months."
                },
                {
                    localHighName: "Respect Local Customs",
                    localHighdesc: "Be mindful of local customs and traditions, especially in religious sites."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Laayoune City Center",
                    localHighdesc: "The bustling heart of the city with shops, cafes, and local attractions."
                },
                {
                    localHighName: "Hay Moulay Rachid",
                    localHighdesc: "A residential area known for its community atmosphere and local markets."
                },
                {
                    localHighName: "El Aaiun",
                    localHighdesc: "A vibrant neighborhood with a mix of traditional and modern influences."
                }
            ]
        },
        nador: {
            cityName: "Nador",
            cityAbout: "Nador is a vibrant coastal city in northeastern Morocco, known for its beautiful beaches and proximity to the Rif Mountains. The city offers a unique blend of modern amenities and traditional Moroccan culture, making it a popular destination for both locals and tourists.",
            torsistAtraction: [
                {
                    localHighName: "Al Hoceima National Park",
                    localHighdesc: "A stunning national park known for its diverse wildlife, hiking trails, and breathtaking landscapes."
                },
                {
                    localHighName: "Mar Chica Lagoon",
                    localHighdesc: "A picturesque lagoon perfect for water sports and relaxing by the water."
                },
                {
                    localHighName: "Nador Beach",
                    localHighdesc: "A popular beach destination with golden sands and clear waters, ideal for sunbathing and swimming."
                },
                {
                    localHighName: "Rif Mountains",
                    localHighdesc: "Explore the beautiful mountain range offering hiking opportunities and spectacular views."
                },
                {
                    localHighName: "Nador's Souk",
                    localHighdesc: "A bustling market where you can find local products, spices, and handmade crafts."
                }
            ],
            accommodation: [
                {
                    localHighName: "Hotel Ibis Nador",
                    localHighdesc: "A modern hotel offering comfortable rooms and convenient amenities."
                },
                {
                    localHighName: "Riad La Perle",
                    localHighdesc: "A charming riad with a traditional Moroccan atmosphere and personalized service."
                },
                {
                    localHighName: "Hotel Mirage",
                    localHighdesc: "A well-rated hotel with stunning views and easy access to the beach."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant Al Waha",
                    localHighdesc: "Known for its delicious seafood dishes and traditional Moroccan cuisine."
                },
                {
                    localHighName: "Café Restaurant Le Panorama",
                    localHighdesc: "A popular spot offering local specialties and stunning views of the lagoon."
                },
                {
                    localHighName: "La Brise",
                    localHighdesc: "A restaurant with a menu featuring a mix of Moroccan and Mediterranean dishes."
                }
            ],
            transportation: [
                {
                    localHighName: "Taxis",
                    localHighdesc: "Readily available for local travel; it's advisable to agree on a fare beforehand."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local buses operate within the city and connect to nearby towns."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Rental services are available for those wishing to explore the surrounding areas."
                }
            ],
            shopping: [
                {
                    localHighName: "Nador Souk",
                    localHighdesc: "A vibrant market offering a variety of local products, crafts, and textiles."
                },
                {
                    localHighName: "Artisan Shops",
                    localHighdesc: "Explore shops selling traditional crafts, pottery, and local artwork."
                },
                {
                    localHighName: "Modern Shopping Centers",
                    localHighdesc: "Various malls featuring local and international brands for a contemporary shopping experience."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Nador Cultural Festival",
                    localHighdesc: "An annual event celebrating the culture and heritage of the region through music, dance, and art."
                },
                {
                    localHighName: "Traditional Crafts Exhibitions",
                    localHighdesc: "Exhibitions showcasing local artisans and their craftsmanship."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Stay Alert in Crowded Areas",
                    localHighdesc: "Keep an eye on your belongings in busy markets and tourist spots."
                },
                {
                    localHighName: "Respect Local Customs",
                    localHighdesc: "Be mindful of local customs and traditions, especially in cultural and religious sites."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Nador City Center",
                    localHighdesc: "The bustling hub of Nador with shops, cafes, and local attractions."
                },
                {
                    localHighName: "Hay Mohammadi",
                    localHighdesc: "A vibrant neighborhood known for its community atmosphere and local markets."
                },
                {
                    localHighName: "El Aaiun Street",
                    localHighdesc: "A lively street lined with shops and eateries, reflecting the local culture."
                }
            ]
        },
        kenitra: {
            cityName: "Kenitra",
            cityAbout: "Kenitra is a bustling city located on the banks of the Sebou River, just a short distance from the Atlantic coast. Known for its agricultural production and industrial activities, Kenitra also offers a rich cultural heritage and several attractions for visitors.",
            torsistAtraction: [
                {
                    localHighName: "Hassan II Park",
                    localHighdesc: "A large urban park perfect for leisurely walks, picnics, and enjoying nature."
                },
                {
                    localHighName: "Sidi Bouknadel",
                    localHighdesc: "A picturesque coastal area with beautiful beaches and recreational activities."
                },
                {
                    localHighName: "The Kasbah of Kenitra",
                    localHighdesc: "A historical site showcasing the city's rich history and traditional architecture."
                },
                {
                    localHighName: "Sebou River",
                    localHighdesc: "Enjoy boat rides and scenic views along this important waterway."
                },
                {
                    localHighName: "Local Markets",
                    localHighdesc: "Explore vibrant markets where you can find local produce, crafts, and spices."
                }
            ],
            accommodation: [
                {
                    localHighName: "Hotel Ibis Kenitra",
                    localHighdesc: "A comfortable hotel offering modern amenities and easy access to local attractions."
                },
                {
                    localHighName: "Riad Al Ksar",
                    localHighdesc: "A charming riad providing a traditional Moroccan experience with warm hospitality."
                },
                {
                    localHighName: "Kenitra Hotel",
                    localHighdesc: "A well-rated hotel with excellent facilities and proximity to the city center."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant La Mediterranee",
                    localHighdesc: "Known for its delicious seafood dishes and Moroccan cuisine."
                },
                {
                    localHighName: "Café Restaurant Al Khaima",
                    localHighdesc: "A popular spot offering a mix of local and international dishes in a cozy setting."
                },
                {
                    localHighName: "Pizzeria Bella Napoli",
                    localHighdesc: "A favorite for pizza lovers, serving a variety of Italian dishes."
                }
            ],
            transportation: [
                {
                    localHighName: "Taxis",
                    localHighdesc: "Available throughout the city; agree on a fare before starting your journey."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local buses connect various parts of the city and nearby areas."
                },
                {
                    localHighName: "Car Rentals",
                    localHighdesc: "Rental services are available for exploring the city and its surroundings."
                }
            ],
            shopping: [
                {
                    localHighName: "Kenitra Souk",
                    localHighdesc: "A vibrant market offering a wide range of local products, crafts, and textiles."
                },
                {
                    localHighName: "Artisan Shops",
                    localHighdesc: "Explore shops selling traditional handicrafts and Moroccan artwork."
                },
                {
                    localHighName: "Shopping Malls",
                    localHighdesc: "Modern shopping centers featuring both local and international brands."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Kenitra Music Festival",
                    localHighdesc: "An annual festival celebrating local music, arts, and culture."
                },
                {
                    localHighName: "Traditional Handicraft Exhibitions",
                    localHighdesc: "Showcasing local artisans and their craftsmanship in various events."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Be Cautious in Crowded Areas",
                    localHighdesc: "Keep an eye on your belongings, especially in busy markets."
                },
                {
                    localHighName: "Respect Local Customs",
                    localHighdesc: "Be mindful of cultural norms and traditions while visiting local sites."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Kenitra City Center",
                    localHighdesc: "The lively heart of Kenitra with shops, cafes, and entertainment options."
                },
                {
                    localHighName: "Hay Aouina",
                    localHighdesc: "A residential neighborhood known for its community vibe and local amenities."
                },
                {
                    localHighName: "Boulevard Mohammed V",
                    localHighdesc: "A major avenue lined with shops, restaurants, and local attractions."
                }
            ]
        },
        essaouira: {
            cityName: "Essaouira",
            cityAbout: "Essaouira is a charming coastal city known for its well-preserved medina, beautiful beaches, and vibrant arts scene. A UNESCO World Heritage site, Essaouira boasts a rich history and offers a blend of Moroccan culture and Portuguese influence.",
            torsistAtraction: [
                {
                    localHighName: "Essaouira Medina",
                    localHighdesc: "A UNESCO World Heritage site featuring narrow streets, vibrant souks, and stunning architecture."
                },
                {
                    localHighName: "Skala de la Ville",
                    localHighdesc: "Historical ramparts offering breathtaking views of the Atlantic Ocean and the city."
                },
                {
                    localHighName: "Essaouira Beach",
                    localHighdesc: "A popular beach for windsurfing, kitesurfing, and relaxing under the sun."
                },
                {
                    localHighName: "Moulay Hassan Square",
                    localHighdesc: "The heart of the city, hosting local events, cafes, and shops."
                },
                {
                    localHighName: "Galeries d'Art",
                    localHighdesc: "A variety of art galleries showcasing local artists and crafts."
                }
            ],
            accommodation: [
                {
                    localHighName: "Riad Watier",
                    localHighdesc: "A beautiful riad offering traditional Moroccan hospitality and comfort."
                },
                {
                    localHighName: "Hotel Des Iles",
                    localHighdesc: "A beachfront hotel with modern amenities and stunning ocean views."
                },
                {
                    localHighName: "Riad L'Atelier",
                    localHighdesc: "A stylish riad located in the medina, featuring comfortable rooms and local decor."
                }
            ],
            dining: [
                {
                    localHighName: "Restaurant La Table by Amandine",
                    localHighdesc: "Known for its fresh seafood and traditional Moroccan dishes in a cozy atmosphere."
                },
                {
                    localHighName: "Café Moulay",
                    localHighdesc: "A popular spot for coffee and light meals, offering views of the bustling square."
                },
                {
                    localHighName: "Les Remparts",
                    localHighdesc: "A restaurant with a diverse menu featuring local specialties and international cuisine."
                }
            ],
            transportation: [
                {
                    localHighName: "Taxis",
                    localHighdesc: "Available for local travel; agree on the fare before the journey."
                },
                {
                    localHighName: "Buses",
                    localHighdesc: "Local buses connect Essaouira with nearby towns and cities."
                },
                {
                    localHighName: "Bicycle Rentals",
                    localHighdesc: "A popular way to explore the city and its beautiful surroundings."
                }
            ],
            shopping: [
                {
                    localHighName: "Essaouira Souk",
                    localHighdesc: "A lively market filled with local crafts, textiles, and souvenirs."
                },
                {
                    localHighName: "Artisan Workshops",
                    localHighdesc: "Visit workshops to see artisans at work and purchase unique handmade items."
                },
                {
                    localHighName: "Local Galleries",
                    localHighdesc: "Explore galleries showcasing local art and photography."
                }
            ],
            localCultureandEvents: [
                {
                    localHighName: "Gnaoua World Music Festival",
                    localHighdesc: "An annual music festival celebrating Gnaoua music and culture, attracting artists from around the world."
                },
                {
                    localHighName: "Artisan Festivals",
                    localHighdesc: "Various events showcasing local crafts and traditions throughout the year."
                }
            ],
            safetyTips: [
                {
                    localHighName: "Stay Aware of Your Surroundings",
                    localHighdesc: "Keep an eye on your belongings, especially in crowded areas."
                },
                {
                    localHighName: "Respect Local Customs",
                    localHighdesc: "Be mindful of local traditions, especially when visiting cultural sites."
                }
            ],
            neighborhoods: [
                {
                    localHighName: "Essaouira Medina",
                    localHighdesc: "The historic center filled with shops, cafes, and cultural sites."
                },
                {
                    localHighName: "Kasbah",
                    localHighdesc: "A neighborhood known for its historical significance and beautiful views."
                },
                {
                    localHighName: "New Essaouira",
                    localHighdesc: "A modern area with a range of amenities, restaurants, and shopping options."
                }
            ]
        }
    };



    function handelSetCity(e) {
        setCityName(e)
        if (cityGuidesList[e]) {
            setSityNor(false)
            setWantedArea(cityGuidesList[e])
            console.log(cityGuidesList[e]);

        } else {
            setWantedArea([])
            setSityNor(true)
        }


    }


    return (
        <>
            <div className="CNT-service2" ref={cnt_s2_ref}>
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(1153)" d="m0 0h279l-2 1 4 8 10 9 5 5 2 4 1 16v166h495l15 2 14 7 5 5 4 6 2 7 1 19 1 87v235l-1 244-2 10-4 8-6 7-14 7-14 3-10 1h-58l-16-3-6-4-7-6-9-14-2-4-1-10 3-14 7-12 5-6 8-4 9-2h36v-197l1-293-16 1h-1264l-18 1-6 2-2 4-12 16-9 11-7 9-9 12-13 18-14 18-12 14-7 9-13 17-8 11-12 16-8 9-7 9-13 16-14 19-12 16-8 9-5 5-1 3 9 11 13 16 11 14 13 16 13 17 12 15 10 13 13 17 11 14 14 18 40 52 15 20 11 14 7 5 3 1h240l6-3 5-4 10-13 13-18 12-17 13-17 14-19 12-14 9-10 7-6 6-2h15l13 3 10 5 7 6 4 8 3 17v85h531l20 1 8 2 6 4 7 8 4 9 2 8 1 10-2 11-5 10-9 10-12 5-6 1-54 1h-50l-1 1088-1 56-1 19-4 9-8 6-5 2-3 11h-277l-6-10-12-12-4-9-1-5-1-30v-1106l1-20-19 1h-99v824l-1 36-2 22-3 19-6 20-12 24-7 10-12 16-11 12-13 12-18 13-21 11-19 7-24 5-27 3-19 1-53 1h-190l-21-1-11-4-10-9-8-13-3-10v-11l9-17 9-10 8-5 29-1 120-1h126l22-1 15-3 15-5 15-9 10-8 10-10 9-13 6-12 3-11 2-17 1-26 1-879h-2l-2 4-9 9-12 16-11 14-12 17-14 19-14 18-14 19-10 14-13 17-11 14-13 16-11 12-9 6-9 3-11 1-36 1h-465l-37 2-14 3-14 6-15 10-12 11-12 18-6 13-4 16-2 18-1 502v94l2 20 4 17 5 12 9 13 13 14 16 12 11 5 16 5 32 6 10 4 9 6 5 4 6 9 2 8-1 13-5 13-7 9-7 6-10 5-6 1h-15l-26-3-17-4-19-7-20-10-14-10-11-9-13-13-11-12-11-16-7-12-11-25-6-21-3-18-2-31v-578l2-31 5-22 7-21 8-16 7-13 8-12 9-11 5-6 8-7 8-8 19-14 23-12 27-9 18-3 23-2 32-1h465l10-2 6-4 10-13 10-14 14-19 10-14 9-13-21 2h-172l-21-1-12-3-10-9-9-9-18-22-11-14-16-21-10-13-12-15-10-13-12-15-14-19-13-16-13-17-12-15-14-19-14-18-13-16-12-16-13-17-9-13-10-17-2-4v-7l9-17 9-13 50-65 11-13 8-11 20-26 13-17 11-13 35-45 14-19 10-12 8-11 14-18 11-14 14-15 9-8 9-3 20-1h529l1-172 5-13 7-9 5-5h2v-2h2l2-6zm57 79v128l1 1 54 1h99l5-2 1-1 1-94v-31l-3-1-39-1zm150 777-150 1v1106l1 5h64l94-1 2-1v-628l1-394v-88z" />
                        <path transform="translate(510,1069)" d="m0 0h36l25 3 25 5 24 8 23 11 22 13 16 12 13 11 8 7 14 14 11 14 14 21 12 22 10 22 8 26 5 23 2 17v41l-4 25-9 33-7 17-12 25-13 23-13 21-13 22-12 19-15 25-10 15-8 14-12 20-12 19-22 36-17 28-9 14-11 18-8 12-10 14-4 5-8 7-8 5-12 1h-7l-14-7-6-5-15-20-24-39-15-24-12-19-12-20-13-21-17-28-13-21-15-25-16-26-15-24-13-22-13-24-9-19-10-26-7-28-3-20-1-23 1-24 5-26 6-22 7-19 12-25 13-21 9-13 8-9 8-10h2l2-4 8-8 11-9 8-7 19-13 27-15 23-10 17-5 19-4zm7 81-19 2-22 5-15 6-16 8-15 10-10 8-10 9-4 4v2h-2l-10 13-6 9-6 11-8 16-7 20-4 19-1 10v30l3 21 5 18 10 22 12 22 10 17 9 15 15 24 11 18 15 24 13 22 13 21 14 22 16 27 9 15 7 11 4 5 4-1 10-15 9-16 9-14 13-21 14-23 7-11 11-18 9-15 11-17 10-17 13-21 11-18 13-22 12-23 7-21 4-18 1-9v-29l-3-26-7-24-8-18-8-14-8-11-12-14-8-7-15-12-15-9-17-9-24-8-16-3-20-2z" />
                        <path transform="translate(718,411)" d="m0 0h1026l20 2 12 5 5 5 6 8 2 9v21l-4 11-6 9-12 8-4 1-881 2h-159l-11-1-9-4-8-7-6-7-6-12-1-4v-11l4-12 8-11 8-7 10-4z" />
                        <path transform="translate(1184,575)" d="m0 0h537l34 1 10 1 6 3 10 9 5 7 3 10 1 11-2 13-5 10-9 10-4 3-4 1-45 1h-566l-14-2-9-7-7-8-6-10-2-7v-12l4-10 6-8 9-9 9-5 7-1z" />
                        <path transform="translate(516,1210)" d="m0 0h26l13 2 16 5 18 10 13 11 6 5 12 16 10 21 4 12 1 6 1 22-2 19-7 19-8 14-9 11-14 14-10 7-19 10-16 5-18 2-22-1-17-4-16-7-14-9-12-11-9-11-9-14-4-8-6-18-2-16v-19l4-19 10-22 7-10 8-10 7-7 11-8 14-8 15-6 9-2zm7 80-9 3-5 4-4 9-1 5v9l6 11 8 8 5 2h12l8-4 7-7 5-8v-13l-5-10-5-4-8-4-3-1z" />
                        <path transform="translate(395,1812)" d="m0 0 12 1 12 5 12 11 6 8 3 6 1 9-2 10-5 10-7 9-7 6-11 5-9 1-13-3-9-5-10-10-8-14-1-3v-13l6-12 7-9 9-7 8-4z" />
                        <path transform="translate(1713,778)" d="m0 0h12l13 4 9 6 8 9 3 8v17l-4 11-7 11-10 8-11 4h-16l-9-4-8-6-7-8-6-12-1-6v-9l3-12 7-10 7-6 10-4z" />
                        <path transform="translate(1149,2045)" d="m0 0 3 1v2h-6v-2z" />
                        <path transform="translate(1150)" d="m0 0" />
                    </svg>
                    <h2> City Guides</h2>
                </span>

                <div className="cntInroService">
                    <p>Explore Morocco's cities with ease using our curated guides. Find must-see attractions, local tips, and hidden gems to make the most of every visit.</p>
                    <img src="imgs/40812.jpg" alt="" />
                </div>
                <div className="ciltersCitys">
                    <span className="cityName">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" /></svg>
                        <h1>{cityChoosedName}</h1>
                    </span>
                    <button className="btnSelectCitty" onClick={ToggleListCityVisibility}> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z" /></svg></button>
                    {
                        listCityVisibility && (
                            <div className="cntListCitys">
                                <span onClick={() => handelSetCity('casablanca')} id="casablanca"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Casablanca</p></span>
                                <span onClick={() => handelSetCity('rabat')} id="rabat"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Rabat</p></span>
                                <span onClick={() => handelSetCity('marrakech')} id="marrakech"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Marrakech</p></span>
                                <span onClick={() => handelSetCity('fes')} id="fes"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Fes</p></span>
                                <span onClick={() => handelSetCity('meknes')} id="meknes"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Meknes</p></span>
                                <span onClick={() => handelSetCity('agadir')} id="agadir"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Agadir</p></span>
                                <span onClick={() => handelSetCity('tangier')} id="tangier"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Tangier</p></span>
                                <span onClick={() => handelSetCity('oujda')} id="oujda"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Oujda</p></span>
                                <span onClick={() => handelSetCity('tetouan')} id="tetouan"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Tetouan</p></span>
                                <span onClick={() => handelSetCity('safi')} id="safi"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Safi</p></span>
                                <span onClick={() => handelSetCity('laayoune')} id="laayoune"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Laayoune</p></span>
                                <span onClick={() => handelSetCity('nador')} id="nador"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Nador</p></span>
                                <span onClick={() => handelSetCity('kenitra')} id="kenitra"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Kenitra</p></span>
                                <span onClick={() => handelSetCity('essaouira')} id="essaouira"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Essaouira</p></span>

                            </div>
                        )
                    }

                </div>
                <div className="cntCityGuide">
                    {
                        (Object.keys(wantedArea).length > 0) ? (
                            <>
                                <h1 className="CityChoosedName">{wantedArea.cityName}</h1>
                                <p className="intro">{wantedArea.cityAbout}</p>

                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>1.Tourist Attractions:</h1>
                                    {
                                        wantedArea.torsistAtraction.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/4338817-removebg-preview.png" />
                                </span>
                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>2.Accommodation:</h1>
                                    {
                                        wantedArea.accommodation.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/2392426-removebg-preview.png" />
                                </span>
                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>3.Dining:</h1>
                                    {
                                        wantedArea.dining.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/3099617-removebg-preview.png" />
                                </span>
                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>4.Transportation:</h1>
                                    {
                                        wantedArea.transportation.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/66143-removebg-preview.png" />
                                </span>
                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>5.Shopping:</h1>
                                    {
                                        wantedArea.shopping.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/vecteezy_happy-man-shopping-with-cart_-removebg-preview.png" />
                                </span>
                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>6. Local Culture and Events:</h1>
                                    {
                                        wantedArea.localCultureandEvents.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/2202.i032.021.S.m005.c13.isometric_ramadan_illustration-removebg-preview.png" />
                                </span>
                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>7. Safety Tips:</h1>
                                    {
                                        wantedArea.safetyTips.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/4054267-removebg-preview.png" alt="" />
                                </span>
                                <span className="spanInfoDetailCity">
                                    <h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" /></svg>8. Neighborhoods:</h1>
                                    {
                                        wantedArea.neighborhoods.map(item => (
                                            <>
                                                <p className=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg> <strong>{item.localHighName} :</strong>{item.localHighdesc}</p>
                                            </>

                                        ))
                                    }
                                    <button className="btnMoreGiudes">More</button>
                                    <img src="imgs/3821178-removebg-preview.png" />
                                </span>


                            </>
                        ) : ""
                    }
                </div>


                {
                    CityNotFound && (
                        <>
                            <h1 className="H1Apolojgising">We are very sorry that we do not have information about this city, but we will address this issue as soon as possible.</h1>
                        </>
                    )
                }
            </div>
        </>

    )
}
export default CityGuise