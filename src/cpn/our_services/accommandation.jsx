import { useState, useRef, useEffect } from "react";
import './css/accmmodation.css'



function accommandation() {
    const cnt_accomandationRef = useRef(null);
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
    // '''''''

    let All_accommotions = {
        agadir: {
            hotels: [
                {
                    name: "Sofitel Agadir Royal Bay Resort",
                    description: "A luxury beachfront resort with Moroccan-style architecture.",
                    type: "Resort",
                    pricePerNight: 150,
                    rating: 4.6,
                    img: "accommodationIMGS/hotelimg1.jpeg"
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }
                },
                {
                    name: "Riu Palace Tikida Agadir",
                    description: "An all-inclusive resort with extensive amenities and ocean views.",
                    type: "All-Inclusive Resort",
                    pricePerNight: 120,
                    rating: 4.4,
                    img: "accommodationIMGS/hotelimg2.jpeg"
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }
                },
                {
                    name: "Kenzi Europa Hotel",
                    description: "Centrally located, with family-friendly facilities near Agadir Beach.",
                    type: "Hotel",
                    pricePerNight: 75,
                    rating: 4.0,
                    img: "accommodationIMGS/hotelimg3.jpeg",
                    location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }

                },
                {
                    name: "Hotel Timoulay and Spa Agadir",
                    description: "Known for its relaxing spa and modern, comfortable rooms.",
                    type: "Hotel and Spa",
                    pricePerNight: 85,
                    rating: 4.3,
                    img: "accommodationIMGS/hotelimg4.jpeg",
                    location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }

                },
                {
                    name: "Atlantic Hotel Agadir",
                    description: "A boutique hotel with a cozy atmosphere, close to Agadir’s main attractions.",
                    type: "Boutique Hotel",
                    pricePerNight: 70,
                    rating: 4.1,
                    img: "accommodationIMGS/hotelimg5.jpeg",
                    location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }
                },
                {
                    name: "Iberostar Founty Beach",
                    description: "A large, all-inclusive resort ideal for families and beachgoers.",
                    type: "All-Inclusive Resort",
                    pricePerNight: 110,
                    rating: 4.5,
                    img: "accommodationIMGS/hotelimg6.jpeg",
                    location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }

                },
                {
                    name: "Residence Yasmina Agadir",
                    description: "A budget-friendly option with apartment-style accommodations.",
                    type: "Apartment-Style Hotel",
                    pricePerNight: 45,
                    rating: 3.8,
                    img: "accommodationIMGS/hotelimg7.jpeg",
                    location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }

                },
                {
                    name: "Riad Villa Blanche",
                    description: "A charming riad offering a blend of luxury and traditional decor.",
                    type: "Riad",
                    pricePerNight: 90,
                    rating: 4.7,
                    img: "accommodationIMGS/hotelimg8.jpeg",
                    location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }

                },
                {
                    name: "Odyssee Park Hotel",
                    description: "Located near the beach and Agadir's shopping areas, with great amenities.",
                    type: "Hotel",
                    pricePerNight: 60,
                    rating: 4.2,
                    img: "accommodationIMGS/hotelimg9.jpeg",
                    location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    }

                }
            ],
            houses: [
                {
                    name: "Cozy Family Villa",
                    description: "A spacious villa perfect for families, featuring a garden and modern amenities.",
                    type: "Villa",
                    monthlyRent: 800, // in USD
                    rating: 4.5
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg1.jpeg"
                },
                {
                    name: "Luxury Oceanfront Apartment",
                    description: "An elegant apartment with stunning sea views, located near the beach.",
                    type: "House",
                    monthlyRent: '1,200', // in USD
                    rating: 4.7
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg2.jpeg"
                },
                {
                    name: "Charming Riad",
                    description: "A traditional riad with Moroccan decor, offering a peaceful courtyard.",
                    type: "House",
                    monthlyRent: '1 ,500', // in USD
                    rating: 4.6
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg3.jpeg"
                },
                {
                    name: "Modern Townhouse",
                    description: "A stylish townhouse in a quiet neighborhood, close to local shops.",
                    type: "House",
                    monthlyRent: 750, // in USD
                    rating: 4.3
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg4.jpeg"
                },
                {
                    name: "Budget-Friendly Studio",
                    description: "A compact studio apartment, ideal for solo travelers or couples.",
                    type: "House",
                    monthlyRent: 400, // in USD
                    rating: 4.0
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg5.jpeg"
                },
                {
                    name: "Spacious Penthouse",
                    description: "A luxurious penthouse with a private terrace and panoramic city views.",
                    type: "House",
                    monthlyRent: '1,500', // in USD
                    rating: 4.8
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg6.jpeg"
                },
                {
                    name: "Traditional Moroccan House",
                    description: "A charming house showcasing Moroccan architecture, located in the heart of the city.",
                    type: "House",
                    monthlyRent: 650, // in USD
                    rating: 4.4
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg7.jpeg"
                },
                {
                    name: "Contemporary Bungalow",
                    description: "A modern bungalow with an open-plan layout, perfect for relaxing stays.",
                    type: "Villa",
                    monthlyRent: 400, // in USD
                    rating: 4.2
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg8.jpeg"
                },
                {
                    name: "Seaside Cottage",
                    description: "A quaint cottage just steps away from the beach, offering a cozy retreat.",
                    type: "House",
                    monthlyRent: 900, // in USD
                    rating: 4.5
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/vilimg9.jpeg"
                }
            ],
            appartments: [
                {
                    name: "Luxury Oceanfront Apartment",
                    description: "An elegant apartment with stunning sea views, located near the beach.",
                    type: "Apartment",
                    monthlyRent: 300, // in USD
                    rating: 4.7
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/apar1.jpeg"
                },
                {
                    name: "Budget-Friendly Studio Apartment",
                    description: "A compact studio apartment, ideal for solo travelers or couples.",
                    type: "Apartment",
                    monthlyRent: 400, // in USD
                    rating: 4.0
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/apar2.jpeg"
                },
                {
                    name: "Modern One-Bedroom Apartment",
                    description: "A stylish one-bedroom apartment with a modern kitchen and living area.",
                    type: "Apartment",
                    monthlyRent: 330, // in USD
                    rating: 4.3
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/apar3.jpeg"
                },
                {
                    name: "Chic Studio Apartment",
                    description: "A contemporary studio with minimalist decor, located in a vibrant neighborhood.",
                    type: "Apartment",
                    monthlyRent: 250, // in USD
                    rating: 4.2
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/apar4.jpeg"
                },
                {
                    name: "Spacious Two-Bedroom Apartment",
                    description: "A spacious apartment perfect for families, featuring a balcony and shared pool.",
                    type: "Apartment",
                    monthlyRent: 400, // in USD
                    rating: 4.5
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/apar5.jpeg"
                },
                {
                    name: "Cozy Garden Apartment",
                    description: "A charming apartment with a private garden, offering a peaceful retreat.",
                    type: "Apartment",
                    monthlyRent: 550, // in USD
                    rating: 4.4
                    , location: function () {
                        return this.name.trim().replace(/\s+/g, "+").toLocaleLowerCase();
                    },
                    img: "accommodationIMGS/apar6.jpeg"
                }
            ]
        }

    }

    const [cityChoosedName, setCityName] = useState("Chose Your City");
    const [CityNotFound, setSityNor] = useState(null);
    const [wantedArea, setWantedArea] = useState({})
    function handelSetCity(e) {
        setCityName(e)
        if (All_accommotions[e]) {
            setSityNor(false)
            setWantedArea(All_accommotions[e])
            console.log(All_accommotions[e]);

        } else {
            setWantedArea([])
            setSityNor(true)
        }


    }




    return (
        <>
            <div className="cnt_accommandationDiv" ref={cnt_accomandationRef} >
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(1017)" d="m0 0h21l-2 1v2h-2l1 4 11 8 16 12 20 14 18 13 13 10 19 14 14 10 11 8 21 16 19 13 15 12 11 8 20 15 17 12 13 10 15 11 21 16 13 9 15 11 16 12 19 14 20 14 16 12 14 11 17 12 4 4-2-18 1-154 1-7 1-1 168-1h46l145 1 1 1v439l3 7 8 7 17 12 21 16 19 13 11 9 14 10 16 12 18 13 15 11 19 14 13 10 18 13 13 10 19 14 16 13 4 2v7l-19 19-11 14-11 15-13 20-10 15-5 5-5-1-16-9-14-11-18-13h-2v133l-1 1100h-1800l-1-53v-1077l1-85 1-19-9 5-21 16-10 9-10 6-5-2-8-8-8-12-13-18-24-34-9-11-6-3-1-9 12-9 36-26 16-12 18-13 13-10 76-56 16-12 14-10 28-21 19-14 16-12 19-14 12-9 38-28 16-12 19-14 14-10 19-14 18-13 16-12 19-14 18-13 13-10 16-12 53-39 18-13 28-21 18-13 16-12 14-10 16-12 18-13 16-12 14-10 38-28 36-27 95-70 18-13 16-12 15-11 18-13 38-28 16-12 13-9zm7 151-12 6-10 8-19 13-15 12-22 16-16 12-17 12-19 14-16 12-15 11-18 13-19 14-10 8-16 11-20 15-15 11-10 8-20 14-13 10-19 14-20 15-13 9-17 13-11 8-16 12-14 10-16 12-19 14-22 16-18 13-12 9-10 8-19 13-13 10-15 11-8 6-13 10-16 11-26 20-11 8-12 9-17 12-32 24-18 13-38 28-19 13-11 8-3 2v60l-1 127v1018h1559v-714l1-294 1-192-7-8-16-12-13-10-57-42-14-10-17-12-13-10-14-10-19-14-18-13-13-10-11-8-16-12-19-14-12-9-34-25-19-14-11-8-34-25-11-8-19-14-18-13-28-21-18-13-21-16-19-14-16-12-19-14-14-10-38-28-16-12-11-8-18-13-13-10-14-10-19-14-13-10-14-10-18-13-19-14-14-11-16-12-13-9zm583 95-43 1-1 108v37l4 7 9 8 18 13 19 14 13 9 18 13 17 13 17 12 5 4v-11l-1-20v-207l-8-1z" />
                        <path transform="translate(363,847)" d="m0 0h119l2 3v106l-1 131h169l34 2 20 3 16 5 16 6 17 9 11 7 13 10 12 11 7 7 9 11 12 18 11 22 7 20 4 15 3 21v20l-2 18-6 25-3 10h847l3 3 1 24v450l-3 2-65 1h-51l-2-2-1-5v-38l1-75-1080-1 1 3 1 115-6 3h-115l-2-2-1-16v-936zm120 359v119l1 2 68 1h50l48-1 26-2 12-5 9-7 9-8v-2h2l9-13 4-10 2-11-1-13-4-12-6-11-8-10-9-8-11-5-10-2-24-1-92-1zm0 240v120l1 1h733l166 1h92l74-1 11-1 2-5 1-73v-41l-43-1z" />
                        <path transform="translate(724,486)" d="m0 0h597l2 1 1 3v473l-5 3-6 1h-381l-128 1h-72l-7-2-2-3-1-20v-452zm121 120-2 1v240l3 1 355-1 1-1v-161l1-71-1-7-9-1z" />
                    </svg>
                    <h2>Accommodation</h2>
                </span>
                <div className="cntInroService">
                    <p>Find the perfect place to stay with our range of accommodations, from cozy guesthouses to luxury hotels, ensuring comfort and relaxation for every journey</p>
                    <img src="imgs/19199484.jpg" alt="" />
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
                {(CityNotFound == false) ?
                    <>
                        <span className="TypeOfAccomSection">Hotels / Riads</span>
                        <div className="cntHotelesFounded">
                            {wantedArea.hotels.map(elem => (
                                <>
                                    <div className="cnt_accommo-card">
                                        <h1>{elem.name}</h1>
                                        <img src={elem.img} alt="" />
                                        <span className="tYPEaCCOM">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80v-80h520v80H400Zm40-120q0-81 51-141.5T620-416v-25q0-17 11.5-28.5T660-481q17 0 28.5 11.5T700-441v25q77 14 128.5 74.5T880-200H440Zm105-81h228q-19-27-48.5-43.5T660-341q-36 0-66 16.5T545-281Zm114 0ZM40-440v-440h240v58l280-78 320 100v40q0 50-35 85t-85 35h-80v24q0 25-14.5 45.5T628-541L358-440H40Zm80-80h80v-280h-80v280Zm160 0h64l232-85q11-4 17.5-13.5T600-640h-71l-117 38-24-76 125-42h247q9 0 22.5-6.5T796-742l-238-74-278 76v220Z" /></svg>
                                            <h4>{elem.type}</h4>
                                        </span>
                                        <p>
                                            {elem.description}
                                        </p>
                                        <span className="rattingAccom">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                                            <h4>{elem.rating} </h4>
                                        </span>
                                        <span className="PriceAccom">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z" /></svg>
                                            <h4>{elem.pricePerNight} $<p>per night</p></h4>
                                        </span>
                                        <a href={`https://www.google.com/maps/search/?api=1&query=${elem.location()}`} target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>
                                            <p>Get Localisation</p>
                                        </a>

                                        <button id="BtnBookHotel">
                                            <svg viewBox="0 0 512 512" >
                                                <path d="M180.446,191.742c3.953-1.977,5.555-6.781,3.578-10.734c-1.973-3.949-6.773-5.551-10.734-3.578
                                                    c-0.125,0.059-12.758,6.039-24.844,0c-3.965-1.973-8.762-0.371-10.734,3.578c-1.977,3.953-0.375,8.758,3.578,10.734
                                                    c6.586,3.293,13.133,4.391,18.934,4.391C171.469,196.133,179.919,192.004,180.446,191.742z"></path>
                                                <path d="M144.86,138.555c2.586,0,5.121-1.25,6.664-3.562c2.449-3.676,1.457-8.645-2.219-11.094c-12.984-8.648-26.773-4.078-32.875,0
                                                    c-3.676,2.449-4.668,7.418-2.219,11.094c2.445,3.672,7.414,4.668,11.094,2.219c0.074-0.059,7.648-4.984,15.125,0
                                                    C141.794,138.121,143.337,138.555,144.86,138.555z"></path>
                                                <path d="M181.305,137.211c0.074-0.059,7.652-4.984,15.125,0c1.363,0.91,2.906,1.344,4.43,1.344c2.586,0,5.121-1.25,6.664-3.562
                                                    c2.449-3.676,1.457-8.645-2.219-11.094c-12.988-8.648-26.77-4.078-32.875,0c-3.676,2.449-4.668,7.418-2.219,11.094
                                                    C172.661,138.664,177.63,139.66,181.305,137.211z"></path>
                                                <path d="M504.868,207h-280c-4.418,0-8,3.582-8,8v33.578l-9.344-14.016c-0.956-1.433-2.346-2.339-3.85-2.912l-1.691-9.989
                                                    c16.462-10.012,28.076-27.19,30.413-47.208c1.443,0.332,2.929,0.546,4.472,0.546c11.027,0,20-8.973,20-20V89.582
                                                    c0-49.945-39.477-90.582-88-90.582h-16c-48.523,0-88,40.637-88,90.582V155c0,11.027,8.973,20,20,20c1.542,0,3.029-0.214,4.472-0.546
                                                    c2.354,20.173,14.131,37.465,30.796,47.441l-1.729,9.603c-1.648,0.54-3.166,1.517-4.196,3.065L100.587,255H80.868
                                                    c-12.484,0-24.449,2.801-35.562,8.32c-3.957,1.969-5.57,6.766-3.605,10.727c1.398,2.812,4.227,4.438,7.172,4.438
                                                    c1.195,0,2.406-0.266,3.551-0.836C61.305,273.234,70.876,271,80.868,271h21.191l34.622,27.698L129.238,455H80.868v-96
                                                    c0-4.422-3.582-8-8-8s-8,3.578-8,8v96h-48V335c0-15.773,5.789-30.93,16.297-42.664c2.945-3.289,2.668-8.352-0.625-11.297
                                                    s-8.348-2.672-11.297,0.625C8.102,296.336,0.868,315.281,0.868,335v168c0,4.422,3.582,8,8,8h496c4.418,0,8-3.578,8-8v-40
                                                    c0-4.422-3.582-8-8-8h-112v-32h112c4.418,0,8-3.578,8-8V215C512.868,210.582,509.286,207,504.868,207z M216.868,273.247V415
                                                    c0,4.422,3.582,8,8,8h16v32h-48.371l-7.443-156.302L216.868,273.247z M336.868,455h-16v-32h16V455z M304.868,455h-48v-32h48V455z
                                                    M206.141,261.336l-26.543,21.234l-8.262-16.523l27.105-16.262L206.141,261.336z M240.868,155c0,2.207-1.793,4-4,4s-4-1.793-4-4v-24
                                                    c0-2.207,1.793-4,4-4s4,1.793,4,4V155z M152.868,15h16c39.699,0,72,33.457,72,74.582v21.823c-1.293-0.264-2.63-0.405-4-0.405
                                                    s-2.707,0.141-4,0.405V103c0-2.32-1.008-4.523-2.758-6.043c-1.754-1.516-4.07-2.203-6.375-1.875
                                                    c-44.723,6.402-72.543-26.273-78.867-34.656V39c0-4.418-3.582-8-8-8s-8,3.582-8,8v22.482c-7.434,19.978-35.302,34.223-35.586,34.365
                                                    c-2.699,1.359-4.414,4.129-4.414,7.152v8.405c-1.293-0.264-2.63-0.405-4-0.405s-2.707,0.141-4,0.405V89.582
                                                    C80.868,48.457,113.169,15,152.868,15z M84.868,159c-2.207,0-4-1.793-4-4v-24c0-2.207,1.793-4,4-4s4,1.793,4,4v24
                                                    C88.868,157.207,87.075,159,84.868,159z M104.868,167v-59.273c7.769-4.531,23.752-15.213,33.535-30.191
                                                    c12.581,13.718,39.347,36.255,78.465,34.266V167c0,26.469-21.531,48-48,48h-16C126.399,215,104.868,193.469,104.868,167z
                                                    M152.868,231h16c6.262,0,12.301-0.944,18.026-2.628l1.488,8.791l-27.514,16.51l-27.248-16.35l1.594-8.854
                                                    C140.829,230.083,146.739,231,152.868,231z M167.133,293.422l-6.266,6.266l-6.266-6.266l6.266-12.531L167.133,293.422z
                                                    M123.294,249.785l27.105,16.262l-8.262,16.523l-26.543-21.234L123.294,249.785z M151.997,313.445l3.215,3.211
                                                    c3.125,3.125,8.188,3.125,11.312,0l3.215-3.211L176.477,455h-31.218L151.997,313.445z M496.868,495h-480v-24h480V495z M352.868,455
                                                    V311h24v144H352.868z M496.868,407h-104v-48h24c4.418,0,8-3.578,8-8v-72c0-4.422-3.582-8-8-8h-104c-4.418,0-8,3.578-8,8v72
                                                    c0,4.422,3.582,8,8,8h8c4.418,0,8-3.578,8-8s-3.582-8-8-8v-56h88v56h-16v-40c0-4.422-3.582-8-8-8h-40c-4.418,0-8,3.578-8,8v104h-104
                                                    V223h264V407z"></path>
                                            </svg>Book
                                        </button>
                                    </div>

                                </>
                            ))}
                        </div>
                        <span className="TypeOfAccomSection">Houses / Villas</span>

                        <div className="cntHousesFounded">
                            <div className="cntHotelesFounded">
                                {wantedArea.houses.map(elem => (
                                    <>
                                        <div className="cnt_accommo-card">
                                            <h1>{elem.name}</h1>
                                            <img src={elem.img} alt="" />
                                            <span className="tYPEaCCOM">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-520l520-200v360h40q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v360H120Zm80-80h160v-280h200v-244L200-585v385Zm240 0h120v-120h80v120h120v-200H440v200ZM280-560Zm320 360Zm0-20Z" /></svg>
                                                <h4>{elem.type}</h4>
                                            </span>
                                            <p>
                                                {elem.description}
                                            </p>
                                            <span className="rattingAccom">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                                                <h4>{elem.rating} </h4>
                                            </span>
                                            <span className="PriceAccom">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z" /></svg>
                                                <h4>{elem.monthlyRent} $<p>per month</p></h4>
                                            </span>
                                            <a href={`https://www.google.com/maps/search/?api=1&query=${elem.location()}`} target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>
                                                <p>Get Localisation</p>
                                            </a>

                                            <button id="BtnBookHotel">
                                                <svg viewBox="0 0 512 512" >
                                                    <path d="M180.446,191.742c3.953-1.977,5.555-6.781,3.578-10.734c-1.973-3.949-6.773-5.551-10.734-3.578
                                                    c-0.125,0.059-12.758,6.039-24.844,0c-3.965-1.973-8.762-0.371-10.734,3.578c-1.977,3.953-0.375,8.758,3.578,10.734
                                                    c6.586,3.293,13.133,4.391,18.934,4.391C171.469,196.133,179.919,192.004,180.446,191.742z"></path>
                                                    <path d="M144.86,138.555c2.586,0,5.121-1.25,6.664-3.562c2.449-3.676,1.457-8.645-2.219-11.094c-12.984-8.648-26.773-4.078-32.875,0
                                                    c-3.676,2.449-4.668,7.418-2.219,11.094c2.445,3.672,7.414,4.668,11.094,2.219c0.074-0.059,7.648-4.984,15.125,0
                                                    C141.794,138.121,143.337,138.555,144.86,138.555z"></path>
                                                    <path d="M181.305,137.211c0.074-0.059,7.652-4.984,15.125,0c1.363,0.91,2.906,1.344,4.43,1.344c2.586,0,5.121-1.25,6.664-3.562
                                                    c2.449-3.676,1.457-8.645-2.219-11.094c-12.988-8.648-26.77-4.078-32.875,0c-3.676,2.449-4.668,7.418-2.219,11.094
                                                    C172.661,138.664,177.63,139.66,181.305,137.211z"></path>
                                                    <path d="M504.868,207h-280c-4.418,0-8,3.582-8,8v33.578l-9.344-14.016c-0.956-1.433-2.346-2.339-3.85-2.912l-1.691-9.989
                                                    c16.462-10.012,28.076-27.19,30.413-47.208c1.443,0.332,2.929,0.546,4.472,0.546c11.027,0,20-8.973,20-20V89.582
                                                    c0-49.945-39.477-90.582-88-90.582h-16c-48.523,0-88,40.637-88,90.582V155c0,11.027,8.973,20,20,20c1.542,0,3.029-0.214,4.472-0.546
                                                    c2.354,20.173,14.131,37.465,30.796,47.441l-1.729,9.603c-1.648,0.54-3.166,1.517-4.196,3.065L100.587,255H80.868
                                                    c-12.484,0-24.449,2.801-35.562,8.32c-3.957,1.969-5.57,6.766-3.605,10.727c1.398,2.812,4.227,4.438,7.172,4.438
                                                    c1.195,0,2.406-0.266,3.551-0.836C61.305,273.234,70.876,271,80.868,271h21.191l34.622,27.698L129.238,455H80.868v-96
                                                    c0-4.422-3.582-8-8-8s-8,3.578-8,8v96h-48V335c0-15.773,5.789-30.93,16.297-42.664c2.945-3.289,2.668-8.352-0.625-11.297
                                                    s-8.348-2.672-11.297,0.625C8.102,296.336,0.868,315.281,0.868,335v168c0,4.422,3.582,8,8,8h496c4.418,0,8-3.578,8-8v-40
                                                    c0-4.422-3.582-8-8-8h-112v-32h112c4.418,0,8-3.578,8-8V215C512.868,210.582,509.286,207,504.868,207z M216.868,273.247V415
                                                    c0,4.422,3.582,8,8,8h16v32h-48.371l-7.443-156.302L216.868,273.247z M336.868,455h-16v-32h16V455z M304.868,455h-48v-32h48V455z
                                                    M206.141,261.336l-26.543,21.234l-8.262-16.523l27.105-16.262L206.141,261.336z M240.868,155c0,2.207-1.793,4-4,4s-4-1.793-4-4v-24
                                                    c0-2.207,1.793-4,4-4s4,1.793,4,4V155z M152.868,15h16c39.699,0,72,33.457,72,74.582v21.823c-1.293-0.264-2.63-0.405-4-0.405
                                                    s-2.707,0.141-4,0.405V103c0-2.32-1.008-4.523-2.758-6.043c-1.754-1.516-4.07-2.203-6.375-1.875
                                                    c-44.723,6.402-72.543-26.273-78.867-34.656V39c0-4.418-3.582-8-8-8s-8,3.582-8,8v22.482c-7.434,19.978-35.302,34.223-35.586,34.365
                                                    c-2.699,1.359-4.414,4.129-4.414,7.152v8.405c-1.293-0.264-2.63-0.405-4-0.405s-2.707,0.141-4,0.405V89.582
                                                    C80.868,48.457,113.169,15,152.868,15z M84.868,159c-2.207,0-4-1.793-4-4v-24c0-2.207,1.793-4,4-4s4,1.793,4,4v24
                                                    C88.868,157.207,87.075,159,84.868,159z M104.868,167v-59.273c7.769-4.531,23.752-15.213,33.535-30.191
                                                    c12.581,13.718,39.347,36.255,78.465,34.266V167c0,26.469-21.531,48-48,48h-16C126.399,215,104.868,193.469,104.868,167z
                                                    M152.868,231h16c6.262,0,12.301-0.944,18.026-2.628l1.488,8.791l-27.514,16.51l-27.248-16.35l1.594-8.854
                                                    C140.829,230.083,146.739,231,152.868,231z M167.133,293.422l-6.266,6.266l-6.266-6.266l6.266-12.531L167.133,293.422z
                                                    M123.294,249.785l27.105,16.262l-8.262,16.523l-26.543-21.234L123.294,249.785z M151.997,313.445l3.215,3.211
                                                    c3.125,3.125,8.188,3.125,11.312,0l3.215-3.211L176.477,455h-31.218L151.997,313.445z M496.868,495h-480v-24h480V495z M352.868,455
                                                    V311h24v144H352.868z M496.868,407h-104v-48h24c4.418,0,8-3.578,8-8v-72c0-4.422-3.582-8-8-8h-104c-4.418,0-8,3.578-8,8v72
                                                    c0,4.422,3.582,8,8,8h8c4.418,0,8-3.578,8-8s-3.582-8-8-8v-56h88v56h-16v-40c0-4.422-3.582-8-8-8h-40c-4.418,0-8,3.578-8,8v104h-104
                                                    V223h264V407z"></path>
                                                </svg>Book
                                            </button>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                        <span className="TypeOfAccomSection">Apartements</span>

                        <div className="cntAppartementsFounded">
                            <div className="cntHotelesFounded">
                                {wantedArea.appartments.map(elem => (
                                    <>
                                        <div className="cnt_accommo-card">
                                            <h1>{elem.name}</h1>
                                            <img src={elem.img} alt="" />
                                            <span className="tYPEaCCOM">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-520l520-200v360h40q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v360H120Zm80-80h160v-280h200v-244L200-585v385Zm240 0h120v-120h80v120h120v-200H440v200ZM280-560Zm320 360Zm0-20Z" /></svg>
                                                <h4>{elem.type}</h4>
                                            </span>
                                            <p>
                                                {elem.description}
                                            </p>
                                            <span className="rattingAccom">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                                                <h4>{elem.rating} </h4>
                                            </span>
                                            <span className="PriceAccom">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z" /></svg>
                                                <h4>{elem.monthlyRent} $<p>per month</p></h4>
                                            </span>
                                            <a href={`https://www.google.com/maps/search/?api=1&query=${elem.location()}`} target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>
                                                <p>Get Localisation</p>
                                            </a>

                                            <button id="BtnBookHotel">
                                                <svg viewBox="0 0 512 512" >
                                                    <path d="M180.446,191.742c3.953-1.977,5.555-6.781,3.578-10.734c-1.973-3.949-6.773-5.551-10.734-3.578
                                                    c-0.125,0.059-12.758,6.039-24.844,0c-3.965-1.973-8.762-0.371-10.734,3.578c-1.977,3.953-0.375,8.758,3.578,10.734
                                                    c6.586,3.293,13.133,4.391,18.934,4.391C171.469,196.133,179.919,192.004,180.446,191.742z"></path>
                                                    <path d="M144.86,138.555c2.586,0,5.121-1.25,6.664-3.562c2.449-3.676,1.457-8.645-2.219-11.094c-12.984-8.648-26.773-4.078-32.875,0
                                                    c-3.676,2.449-4.668,7.418-2.219,11.094c2.445,3.672,7.414,4.668,11.094,2.219c0.074-0.059,7.648-4.984,15.125,0
                                                    C141.794,138.121,143.337,138.555,144.86,138.555z"></path>
                                                    <path d="M181.305,137.211c0.074-0.059,7.652-4.984,15.125,0c1.363,0.91,2.906,1.344,4.43,1.344c2.586,0,5.121-1.25,6.664-3.562
                                                    c2.449-3.676,1.457-8.645-2.219-11.094c-12.988-8.648-26.77-4.078-32.875,0c-3.676,2.449-4.668,7.418-2.219,11.094
                                                    C172.661,138.664,177.63,139.66,181.305,137.211z"></path>
                                                    <path d="M504.868,207h-280c-4.418,0-8,3.582-8,8v33.578l-9.344-14.016c-0.956-1.433-2.346-2.339-3.85-2.912l-1.691-9.989
                                                    c16.462-10.012,28.076-27.19,30.413-47.208c1.443,0.332,2.929,0.546,4.472,0.546c11.027,0,20-8.973,20-20V89.582
                                                    c0-49.945-39.477-90.582-88-90.582h-16c-48.523,0-88,40.637-88,90.582V155c0,11.027,8.973,20,20,20c1.542,0,3.029-0.214,4.472-0.546
                                                    c2.354,20.173,14.131,37.465,30.796,47.441l-1.729,9.603c-1.648,0.54-3.166,1.517-4.196,3.065L100.587,255H80.868
                                                    c-12.484,0-24.449,2.801-35.562,8.32c-3.957,1.969-5.57,6.766-3.605,10.727c1.398,2.812,4.227,4.438,7.172,4.438
                                                    c1.195,0,2.406-0.266,3.551-0.836C61.305,273.234,70.876,271,80.868,271h21.191l34.622,27.698L129.238,455H80.868v-96
                                                    c0-4.422-3.582-8-8-8s-8,3.578-8,8v96h-48V335c0-15.773,5.789-30.93,16.297-42.664c2.945-3.289,2.668-8.352-0.625-11.297
                                                    s-8.348-2.672-11.297,0.625C8.102,296.336,0.868,315.281,0.868,335v168c0,4.422,3.582,8,8,8h496c4.418,0,8-3.578,8-8v-40
                                                    c0-4.422-3.582-8-8-8h-112v-32h112c4.418,0,8-3.578,8-8V215C512.868,210.582,509.286,207,504.868,207z M216.868,273.247V415
                                                    c0,4.422,3.582,8,8,8h16v32h-48.371l-7.443-156.302L216.868,273.247z M336.868,455h-16v-32h16V455z M304.868,455h-48v-32h48V455z
                                                    M206.141,261.336l-26.543,21.234l-8.262-16.523l27.105-16.262L206.141,261.336z M240.868,155c0,2.207-1.793,4-4,4s-4-1.793-4-4v-24
                                                    c0-2.207,1.793-4,4-4s4,1.793,4,4V155z M152.868,15h16c39.699,0,72,33.457,72,74.582v21.823c-1.293-0.264-2.63-0.405-4-0.405
                                                    s-2.707,0.141-4,0.405V103c0-2.32-1.008-4.523-2.758-6.043c-1.754-1.516-4.07-2.203-6.375-1.875
                                                    c-44.723,6.402-72.543-26.273-78.867-34.656V39c0-4.418-3.582-8-8-8s-8,3.582-8,8v22.482c-7.434,19.978-35.302,34.223-35.586,34.365
                                                    c-2.699,1.359-4.414,4.129-4.414,7.152v8.405c-1.293-0.264-2.63-0.405-4-0.405s-2.707,0.141-4,0.405V89.582
                                                    C80.868,48.457,113.169,15,152.868,15z M84.868,159c-2.207,0-4-1.793-4-4v-24c0-2.207,1.793-4,4-4s4,1.793,4,4v24
                                                    C88.868,157.207,87.075,159,84.868,159z M104.868,167v-59.273c7.769-4.531,23.752-15.213,33.535-30.191
                                                    c12.581,13.718,39.347,36.255,78.465,34.266V167c0,26.469-21.531,48-48,48h-16C126.399,215,104.868,193.469,104.868,167z
                                                    M152.868,231h16c6.262,0,12.301-0.944,18.026-2.628l1.488,8.791l-27.514,16.51l-27.248-16.35l1.594-8.854
                                                    C140.829,230.083,146.739,231,152.868,231z M167.133,293.422l-6.266,6.266l-6.266-6.266l6.266-12.531L167.133,293.422z
                                                    M123.294,249.785l27.105,16.262l-8.262,16.523l-26.543-21.234L123.294,249.785z M151.997,313.445l3.215,3.211
                                                    c3.125,3.125,8.188,3.125,11.312,0l3.215-3.211L176.477,455h-31.218L151.997,313.445z M496.868,495h-480v-24h480V495z M352.868,455
                                                    V311h24v144H352.868z M496.868,407h-104v-48h24c4.418,0,8-3.578,8-8v-72c0-4.422-3.582-8-8-8h-104c-4.418,0-8,3.578-8,8v72
                                                    c0,4.422,3.582,8,8,8h8c4.418,0,8-3.578,8-8s-3.582-8-8-8v-56h88v56h-16v-40c0-4.422-3.582-8-8-8h-40c-4.418,0-8,3.578-8,8v104h-104
                                                    V223h264V407z"></path>
                                                </svg>Book
                                            </button>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>

                            <button className="btnLoadMore">Load More</button>

                    </>
                    :
                    CityNotFound && (
                        <>
                            <h1 className="H1Apolojgising">We are very sorry that we do not have information about this city, but we will address this issue as soon as possible.</h1>
                        </>
                    )



                }
            </div >
        </>
    )
}

export default accommandation;