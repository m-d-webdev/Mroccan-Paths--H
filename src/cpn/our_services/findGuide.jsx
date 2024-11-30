import "./css/fing-guide.css";
import {useState} from "react";
import TenDone from "../single_cmps/TenDone";
function FindGuide() {
    const tourGuides = [
        {
            firstName: "Ahmed",
            lastName: "El Mansouri",
            img: "https://i.pinimg.com/236x/6b/b6/d0/6bb6d094147301f3ccce198b6d6179bc.jpg",
            // img: "tourGuides_imgs/manTourGuide1.jpg",
            age: 35,
            languages: ["Arabic", "English"],
            city: "Marrakech",
            specialization: "Historical Sites",
            totalTrips: 150,
            rating: 4.8,
            phone: "0612345678",
            email: "ahmed.ilmansouri@example.com"
        },
        {
            firstName: "Fatima",
            lastName: "Bennani",
            img: "https://i.pinimg.com/474x/3a/ea/e7/3aeae76a2926af1e11651a44224cac8c.jpg",
            // img: "tourGuides_imgs/womanguidetour1.jpg",
            age: 29,
            languages: ["Arabic", "French", "Spanish"],
            city: "Fes",
            specialization: "Medina Tours",
            totalTrips: 200,
            rating: 4.9,
            phone: "0623456789",
            email: "fatima.bennani@example.com"
        },
        {
            firstName: "Mohammed",
            lastName: "Ait El Cadi",
            img: "https://i.pinimg.com/474x/f4/72/80/f47280da4b183febe352b89d85bd5bbd.jpg",
            // img: "tourGuides_imgs/manTourGuide2.jpg",
            age: 42,
            languages: ["Arabic", "English", "German"],
            city: "Agadir",
            specialization: "Beach and Coastal Tours",
            totalTrips: 120,
            rating: 4.7,
            phone: "0634567890",
            email: "mohammed.ait.elcadi@example.com"
        },
        {
            firstName: "Youssef",
            lastName: "Tazi",
            img: "https://i.pinimg.com/736x/d3/63/35/d36335bb6e74ede8ca8a9ca270dcdaf5.jpg",
            // img: "tourGuides_imgs/manTourGuide3.jpg",
            age: 38,
            languages: ["Arabic", "English", "French"],
            city: "Casablanca",
            specialization: "City Landmarks",
            totalTrips: 80,
            rating: 4.6,
            phone: "0645678901",
            email: "youssef.tazi@example.com"
        },
        {
            firstName: "Sara",
            lastName: "El Khattabi",
            img: "https://i.pinimg.com/236x/2e/64/dc/2e64dc4756c040036c9a08d2ec7e20ac.jpg",
            // img: "tourGuides_imgs/womanguidetour2.jpg",
            age: 32,
            languages: ["Arabic", "French"],
            city: "Rabat",
            specialization: "Museum and Cultural Tours",
            totalTrips: 90,
            rating: 4.5,
            phone: "0656789012",
            email: "sara.elkhattabi@example.com"
        },
        {
            firstName: "Ali",
            lastName: "Ameziane",
            img: "https://i.pinimg.com/236x/33/0b/2d/330b2da0f2977962a37f8155708ad9aa.jpg",
            // img: "tourGuides_imgs/manTourGuide4.jpg",
            age: 30,
            languages: ["Arabic", "English"],
            city: "Chefchaouen",
            specialization: "Photography Spots",
            totalTrips: 60,
            rating: 4.8,
            phone: "0667890123",
            email: "ali.ameziane@example.com"
        },
        {
            firstName: "Amina",
            lastName: "Bouskri",
            img: "https://i.pinimg.com/564x/85/2c/9c/852c9c35823914956b54ff402cff1be9.jpg",
            // img: "tourGuides_imgs/womanguidetour3.jpg",
            age: 28,
            languages: ["Arabic", "Spanish"],
            city: "Tangier",
            specialization: "Historical and Coastal",
            totalTrips: 110,
            rating: 4.7,
            phone: "0678901234",
            email: "amina.bouskri@example.com"
        },
        {
            firstName: "Hamza",
            lastName: "Ouazzani",
            img: "https://i.pinimg.com/236x/06/47/f8/0647f8d92ace7aa12e0658a7c3668a65.jpg",
            // img: "tourGuides_imgs/manTourGuide5.jpg",
            age: 34,
            languages: ["Arabic", "French", "Italian"],
            city: "Essaouira",
            specialization: "Beach and Port Areas",
            totalTrips: 130,
            rating: 4.9,
            phone: "0689012345",
            email: "hamza.ouazzani@example.com"
        },
        {
            firstName: "Salma",
            lastName: "El Alami",
            img: "https://i.pinimg.com/564x/10/ef/86/10ef867963dd7a453d5867e543225575.jpg",
            // img: "tourGuides_imgs/womanguidetour4.jpg",
            age: 36,
            languages: ["Arabic", "English", "French"],
            city: "Meknes",
            specialization: "Heritage Sites",
            totalTrips: 95,
            rating: 4.6,
            phone: "0690123456",
            email: "salma.elalami@example.com"
        },
        {
            firstName: "Omar",
            lastName: "Fadili",
            img: "https://i.pinimg.com/564x/03/df/8f/03df8f448bbe85d762e02b6b429fd6b7.jpg",
            // img: "tourGuides_imgs/manTourGuide6.jpg",
            age: 39,
            languages: ["Arabic", "German", "English"],
            city: "Ouarzazate",
            specialization: "Desert Adventures",
            totalTrips: 140,
            rating: 4.8,
            phone: "0601234567",
            email: "omar.fadili@example.com"
        },
        {
            firstName: "Karim",
            lastName: "Chafai",
            img: "https://i.pinimg.com/474x/11/bd/41/11bd414ac13c9cec8a8b8771874104fd.jpg",
            // img: "tourGuides_imgs/manTourGuide7.jpg",
            age: 31,
            languages: ["Arabic", "English"],
            city: "Merzouga",
            specialization: "Desert and Oasis Tours",
            totalTrips: 150,
            rating: 4.7,
            phone: "0612345678",
            email: "karim.chafai@example.com"
        },
        {
            firstName: "Zahra",
            lastName: "Brahimi",
            img: "https://i.pinimg.com/564x/bb/97/88/bb9788f4b0522bd6973842f3647921a8.jpg",
            // img: "tourGuides_imgs/womanguidetour5.jpg",
            age: 27,
            languages: ["Arabic", "French", "English"],
            city: "Ouarzazate",
            specialization: "Cultural Immersion",
            totalTrips: 70,
            rating: 4.6,
            phone: "0623456789",
            email: "zahra.brahimi@example.com"
        },
        {
            firstName: "Rachid",
            lastName: "Safi",
            img: "https://i.pinimg.com/474x/57/19/d6/5719d640c4495cc85e40769a6761d87f.jpg",
            // img: "tourGuides_imgs/manTourGuide8.jpg",
            age: 44,
            languages: ["Arabic", "English", "Spanish"],
            city: "Marrakech",
            specialization: "Adventure Tours",
            totalTrips: 160,
            rating: 4.9,
            phone: "0634567890",
            email: "rachid.safi@example.com"
        },
        {
            firstName: "Laila",
            lastName: "Khalid",
            img: "https://i.pinimg.com/236x/41/ef/69/41ef69c7c40e7ecbe319807312b8def5.jpg",
            // img: "tourGuides_imgs/womanguidetour6.jpg",
            age: 33,
            languages: ["Arabic", "Italian"],
            city: "Chefchaouen",
            specialization: "Nature Tours",
            totalTrips: 80,
            rating: 4.5,
            phone: "0645678901",
            email: "laila.khalid@example.com"
        },
        {
            firstName: "Nadia",
            lastName: "Mounir",
            img: "https://i.pinimg.com/236x/f9/93/06/f993068711e5a101179c15cbe0e9fc79.jpg",
            // img: "tourGuides_imgs/womanguidetour7.jpg",
            age: 37,
            languages: ["Arabic", "English", "German"],
            city: "Agadir",
            specialization: "Family Tours",
            totalTrips: 100,
            rating: 4.8,
            phone: "0656789012",
            email: "nadia.mounir@example.com"
        },
        {
            firstName: "Hakim",
            lastName: "Benhamou",
            img: "https://i.pinimg.com/236x/55/30/68/553068bc44684ebe59f999ab54e61e19.jpg",
            // img: "tourGuides_imgs/manTourGuide9.jpg",
            age: 40,
            languages: ["Arabic", "French"],
            city: "Fes",
            specialization: "Gastronomy Tours",
            totalTrips: 130,
            rating: 4.7,
            phone: "0667890123",
            email: "hakim.benhamou@example.com"
        },
        {
            firstName: "Nora",
            lastName: "Fawzi",
            img: "https://i.pinimg.com/474x/4c/4b/67/4c4b67223759635f2febe988118b1373.jpg",
            // img: "tourGuides_imgs/womanguidetour8.jpg",
            age: 29,
            languages: ["Arabic", "English"],
            city: "Tangier",
            specialization: "Eco-Tours",
            totalTrips: 60,
            rating: 4.6,
            phone: "0678901234",
            email: "nora.fawzi@example.com"
        },
        {
            firstName: "Ziad",
            lastName: "Khalil",
            img: "https://i.pinimg.com/236x/fd/8f/49/fd8f491cde92840aa9458be3b6a544b1.jpg",
            // img: "tourGuides_imgs/manTourGuide10.jpg",
            age: 32,
            languages: ["Arabic", "English", "Italian"],
            city: "Essaouira",
            specialization: "Art and Culture Tours",
            totalTrips: 75,
            rating: 4.9,
            phone: "0689012345",
            email: "ziad.khalil@example.com"
        }
    ];
    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: true,
        Message: ""
    });

    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);

    };
    function copyToClipboard(text){
        navigator.clipboard.writeText(text);
        setIsDone({
            isDone: true,
            Message: "Copied to clipboard"
        });
        ToggleTenVisibility()
    }

    return (
        <>
            <div className="cnt-findGuide_cpn">
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(478)" d="m0 0h450v2l26 8 22 9 16 8 14 8 17 12 13 11 10 9 10 10 9 11 12 17 9 15 11 23 7 19 6 23 3 21 1 11 1 31v100l-1 86 2 11 4 2 15 9 11 8 14 14 9 14 6 14 4 14 1 8v20l-3 14-4 10-6 12-1 6 7 13 7 10 8 13 7 17 3 13 1 10v17l-4 20-5 12-9 16-9 12-9 10-12 10-14 8-12 5-18 4-29 4v24l-3 32-5 33-6 25-10 30-7 17-8 18-12 21-11 18-13 18-11 13-12 14-11 12-14 14-10 8-12 10-22 16-6 7-2 4 1 35 4 13 6 11 4 5 13 9 14 5 27 5 80 12 52 9 32 7 20 6 29 11 16 8 17 9 11 7 17 12 17 13 13 12 5 4 7 8 10 10 15 20 12 18 9 15 12 21 14 26 8 14 8 16 13 25 12 22 14 28 6 11 7 14 2 2 4-1 10-11 9-11 12-13 8-10h2l2-4 10-11 9-11 7-7 8-10 12-13 7-8 9-11 9-10 9-11 12-13 7-8 2-3h2l2-4 11-12 7-8 12-14 7-7 8-10 13-15 9-10 7-8 12-14 11-12 9-11 6-7h2l2-4 13-14 1-2h2l2-4 11-12 3-7 1-5 1-350v-527l5-12 7-9 9-8 13-7 4-1h15l11 4 12 7 17 13 14 11 15 12 14 11 11 9 13 11 11 9 32 26 17 13 11 9 13 11 22 18 15 14 10 12 6 10 5 16-1 17-3 10-7 12-11 12-7 8-10 8-4 2v2l-10 8-10 9-13 10-14 11-17 14-10 8-12 10-11 9-16 13-14 11-11 9-13 10-16 13-17 13-10 8-1 1-1 45-1 386 30-9 13-2h19l20 2 19 4 25 10 16 10 14 11 14 14 13 18 7 12 10 24 4 15 3 19v28l-3 22-6 18-13 25-8 12-13 17-6 8h-2l-2 4-12 14-10 11-8 10-8 9-8 10h-2l-2 4-13 14-9 11-7 7-7 8-9 10-9 11-12 13-9 11-12 14-11 13-9 10-9 11-12 13-7 8-9 10-7 8-9 10-7 8-9 10-7 8-9 10-7 8-17 17-9 5h-9l-10-5-10-9-8-9-3-6 1-6 5-7 4-7 8-9 8-10 9-10 7-8 10-12 9-11 9-10 9-11 10-11 6-8h2l2-4 9-10 10-11 7-8 12-14 4-5h2l2-4 12-14 9-10 3-4h2l2-4 3-5v-4l-4-2-23-23-8-7-14-15-14-14-2-1v-2h-2v-2h-2l-7-8-7-6v-2h-2l-7-8-7-7-2-1v-2h-2v-2h-2l-7-8-11-12-6-1-8 7-9 10-7 8-10 11-9 11-13 15-2 3h-2l-2 4-12 13-7 8-9 10-24 28-10 12-9 11-13 14-7 8-9 10-7 8-13 14-7 8-16 17-10 9-13 8-9 4-10 2-18-4-12-5-11-9-8-9-8-13-16-28-18-34-12-22-10-19-8-16-12-23-13-23-16-27-7-10-8-11-11-13-4-4v-2h-2l-6-7-8-7-15-12-20-13-27-14-21-8-24-7-39-8-66-10-14-2h-13l-11 17-10 13-11 14-6 8h-2l-2 4-7 8-7 6-5 5-14 12-14 11-16 11-15 9-24 12-24 9-21 7-25 6-34 5-29 2h-20l-26-2-27-4-28-7-26-9-26-12-18-10-20-13-21-16-14-13-8-7-7-7-7-8-14-17-11-16-7-10-5-1-35 8-30 8-42 10-64 16-40 12-25 11-16 9-11 8-13 10-10 9-10 10-10 13-10 15-9 16-6 13-9 24-4 15-3 24-1 17-1 390-1 102-1 16-2 5-4 2v2l-2 1 3 3v4h-46l-1-5h2l-6-8-2-8-1-12-1-46-1-118v-246l2-77 2-32 4-27 5-20 8-22 14-29 12-21 11-16 13-16 7-8 14-14 11-9 13-10 17-11 25-13 25-10 32-10 75-19 50-12 89-22 19-5 18-6 10-6 5-4 6-10 5-17 2-18 1-22-4-8-9-8-11-8-16-13-10-9-8-7-18-18-7-8-14-17-14-20-11-17-12-22-8-16-12-29-8-26-6-27-4-26-2-27v-25l-1-3-4-1-30-3-15-5-19-9-11-8-10-10-9-10-11-18-6-14-5-19-1-6v-21l3-17 7-16 7-14 12-14 3-6-1-10-9-21-4-16v-17l3-16 8-21 6-10 8-10 9-9 23-15 8-6v-203l2-35 5-26 7-25 6-15 10-20 12-19 20-26 20-20 10-8 10-7 14-9 14-8 26-11 24-8zm1 1m101 58-47 1-31 2-19 3-16 5-12 5-15 8-16 11-11 9-17 17-11 15-10 17-8 17-7 26-3 27-1 18-1 141-1 41 36-12 52-15 32-8 48-10 31-5 51-6 44-3 24-1h72l42 2 38 4 24 4 10 4 4 3h2l2 5 2 8v9l-2 10-6 11-5 5-9 1h-11l-65-5-21-1h-94l-42 3-39 4-33 5-45 9-33 8-45 13-36 12-28 10-29 12-16 8-9 6-8 9-2 7v12l4 11 6 8 7 7 10 5 3 1h7l20-7 26-10 36-13 38-12 46-12 51-10 39-6 32-3 51-3h77l45 3 40 4 42 6 45 9 32 8 43 13 29 10 21 8 23 8 15 5 5 1h11l11-8 9-9 4-7 1-4v-16l-7-13-7-6-14-7-32-13-41-15-47-16-17-9-5-6-3-6v-9l4-10 8-12v-2h2l4-4 12 1 22 5 27 8 24 8h5l-1-176-1-26-3-28-4-15-8-20-9-17-12-17-11-12-10-10-15-11-16-9-19-9-23-7-25-3-16-1-50-1zm1214 320-1 5 1 285 1-2 4-1 11-9 13-11 14-11 5-4v-2l4-2 10-8 13-11 11-9 10-9 9-7 15-12 11-9 15-12 14-11 15-13 3-5-8-7-18-13-8-7-11-9-16-13-14-12-10-8-14-11-16-13-14-11-16-13-25-20-7-5zm-1140 175-39 3-27 3-41 7-43 9-49 14-37 12-22 8-2 2-1 17v179l3 36 4 22 6 21 7 21 7 18 10 19 10 18 13 18 14 17 7 8 24 24 14 11 13 10 21 13 22 12 20 9 15 6 23 7 23 5 24 3 14 1h45l23-3 19-4 23-6 28-10 25-12 16-9 18-12 13-10 9-7 11-9 7-6 7-8 9-9 10-13 8-10 10-15 8-13 14-27 10-26 7-23 6-32 2-17 1-17 1-40v-155l-3-3-17-7-36-12-35-10-41-10-43-8-45-6-33-3-19-1zm-334 75-17 1-9 3-9 6-8 11-5 11-1 5v8l3 14 6 11 10 12 11 7 16 5 11 1 2-3 1-8 1-28v-47l-3-8-7-1zm765 1-6 2-1 5-1 66 1 15 2 5h8l16-4 12-6 10-9 7-9 3-9 1-13-2-17-5-12-5-6-7-5-7-2-9-1zm-517 514v12l-4 20-7 19-8 16-7 11-11 12-9 8-16 9-10 5-5 3 2 5 7 9 12 12 2 3h2v2l8 7 13 11 16 12 16 10 16 9 17 8 21 8 22 6 28 4 13 1h43l24-3 19-4 20-6 24-10 16-8 17-10 15-11 14-11 24-22 10-10 11-14v-3l-20-9-12-7-13-10-11-12-8-13-11-23-2-8-2-27-4-1-24 7-32 8-24 4-28 3-18 1h-27l-26-2-28-4-23-5-22-6-12-5-2-1zm1274 82-18 3-13 5-14 9-10 9-7 6-7 8-13 14v2h-2l-9 11-11 13-7 8-8 8-1 5 7 8 9 9h2l1 3 61 61h2l2 4h2l2 4 29 29 7 8 5 1 7-5 6-8v-2h2v-2l4-2 10-11v-2h2l9-11 9-10 11-14 9-11 12-19 5-12 4-18v-23l-4-15-5-14-7-11-9-11-8-8-15-10-17-7-12-2z" />
                        <path transform="translate(1190,1757)" d="m0 0h10l13 3 8 5 6 8 1 5 1 26v37l4 10 9 10 5 5 5 4 7 8 63 63 12 9 14 8 11 4 12 2h12l13-4 15-8 11-8 12-11 9-10 7-8 9-11 9-10 9-11 10-11 7-9h2l2-4 13-15 7-8 12-14 10-11 7-8 10-10 8-4h11l12 5 10 7 6 7 2 4-1 9-6 12-15 21h-2l-2 4-18 22-9 10-9 11-11 12-9 11-11 12-7 8-9 10-9 11-9 9-1 2h-2l-2 4-12 11-18 13-12 7-17 6-19 5-8 1h-29l-18-3-20-7-15-8-15-10-11-9-10-9-22-22-7-8-12-12v50l-2 32-2 13-3 7-4 10 2 1h-42v-7l-3-6-5-6-1-2-1-22v-206l1-21 3-10 6-7 7-3z" />
                        <path transform="translate(331,1759)" d="m0 0h22l15 4 6 5 4 8 1 47v43l-1 121-1 37-2 9-7 8-1 5 3-1v3h-45l1-3h3l-6-10-3-3-2-8-1-26v-167l1-48 2-14 4-7z" />
                        <path transform="translate(631,906)" d="m0 0 10 1 19 6 21 7 15 2h19l14-2 29-11 9-2h12l8 4 8 7 4 9 1 4v16l-6 9-11 8-16 8-29 8-16 3-10 1h-20l-21-3-21-6-15-6-12-7-10-10-5-10v-11l5-10 7-9 8-5z" />
                        <path transform="translate(532,648)" d="m0 0h13l11 4 6 5 6 11 2 10 1 33-1 29-2 14-5 8-7 6-16 4h-8l-10-4-7-7-4-10-2-12v-56l2-15 4-10 7-6z" />
                        <path transform="translate(861,649)" d="m0 0h16l10 3 6 4 3 3 3 10 1 9v57l-1 14-3 10-5 7-11 4-5 1h-14l-10-4-6-7-4-12-2-17v-49l2-12 5-12 8-7z" />
                        <path transform="translate(941)" d="m0 0h8l-1 2h-6z" />
                        <path transform="translate(950)" d="m0 0 2 1z" />
                        <path transform="translate(462)" d="m0 0 2 1z" />
                        <path transform="translate(929,1)" d="m0 0" />
                    </svg>
                    <h2>Find Your Guide</h2>
                </span>
                {isTenDoneVisible && <TenDone Done={isDone} setTenDoneVisible={ToggleTenVisibility} />}

                <div className="cntInroService">
                    <p>Experience Morocco authentically with a personal guide who tailors your tour to your interests. From historic sites to hidden gems, our guides make every moment memorable.</p>
                    <img src="imgs/torGiudeImg.jpg" alt="" />
                </div>
                <div className="list-tour-guides">
                    {

                        tourGuides.map((item, index) => (
                            <div className="tour-guide-card" key={index}>
                                <img src={item.img} alt="" />
                                <h1>{item.firstName} {item.lastName} - {item.age} year</h1>
                                <p>Languages : <strong> {item.languages.splice(0, 3).join(" , ")}</strong></p>
                                <p>From  <strong> {item.city}</strong>   city</p>
                                <p>Specialization :<strong> {item.specialization} </strong></p>
                                <p>Total trips made : <strong>{item.totalTrips}</strong> trip</p>
                                <p>His rating based on previous trips is: : <strong>{item.rating}</strong></p>
                                <span className="contactPhone">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                                    {item.phone}
                                    <svg onClick={() => copyToClipboard(item.phone)} xmlns="http://www.w3.org/2000/svg" className="IcooneCopyPhoenN" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                                </span>
                                <span className="contact-whatsapp" onClick={() => window.open(`https://wa.me/${item.phone}`)}>
                                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                                        <path transform="translate(917)" d="m0 0 3 1h9l6-1h167l52 7 51 9 39 8 62 15 29 9 36 12 42 16 43 19 52 26 23 13 22 13 13 8 16 10 15 10 18 13 19 14 21 16 13 10 14 12 13 11 5 4v2l4 2 17 16 8 7 8 8 8 7 14 14 7 8 13 14 7 8 11 12 11 13 9 11 10 12 13 17 13 18 12 17 15 22 14 23 10 16 9 15 15 27 23 46 14 31 16 41 13 36 14 47 7 26 7 30 8 36 9 53 6 40 3 23v137l-9 64-9 53-7 34-15 60-12 41-10 30-17 43-11 26-14 30-19 38-9 16-24 40-16 25-7 10-11 16-13 17-24 32-11 14-13 15-11 12-7 8-7 7-7 8-9 9-5 6h-2l-2 4-8 7-8 8-8 7-17 16-10 9-8 7-13 11-8 7-19 14-45 33-25 16-26 16-29 17-32 17-32 16-33 15-32 13-47 17-40 12-42 11-49 11-46 9-48 8-22 3h-128l-48-6-47-7-57-11-63-14-34-9-41-14-41-16-42-17-20-9-22-12-19-10-21-12-23-13-21-12-18-8-13 6-59 19-201 64-42 13-27 8-28 9-14 4-4-1 10-25 12-35 15-47 18-55 24-72 26-77 13-40 5-13 1-4v-12l-6-12-10-16-12-19-14-22-13-21-9-15-14-25-11-22-23-54-18-45-10-29-11-39-10-40-9-38-7-34-6-39-8-71v-148l8-45 12-64 9-40 11-42 14-46 14-38 15-37 17-37 20-40 12-22 11-17 6-11 6-9 12-20 13-19 10-14 21-28 10-13 9-12 13-16 10-11 7-8 14-15 11-12 14-15 16-16 8-7 12-11 8-7 17-16 14-11 8-7 11-8 28-21 13-10 16-11 26-17 35-21 21-12 12-7 23-11 17-9 28-13 26-11 37-14 41-14 41-11 56-14 53-10 33-6 18-2z" fill="#5CAF60" />
                                        <path transform="translate(633,468)" d="m0 0h35l24 5 10 4 10 7 7 7 11 16 12 21 13 29 15 36 15 37 15 36 12 29 11 28 9 25 4 14 1 6v14l-4 12-6 11-10 15-7 9-9 12-11 12-9 11-12 13-9 11-10 14-8 13-4 12v12l8 16 10 17 28 42 24 34 13 16 11 13 9 11 10 11 7 8 11 12 11 11 4 5 8 7 10 10 2 1v2l4 2 7 7 11 9 14 12 28 22 15 11 17 12 15 10 13 8 25 15 16 9 32 16 24 11 19 8 16 5 12 3 15 1 13-5 10-6 10-9 11-12 11-14 14-18 20-26 13-17 13-16 9-10 7-7 9-7 3-1h20l22 5 21 7 31 13 26 12 18 8 16 8 50 24 52 26 22 12 15 10 10 9 6 12 1 4v28l-4 31-6 29-5 19-6 17-11 23-9 15-14 17-9 9-8 7-13 11-15 11-16 10-23 13-21 10-27 11-30 9-27 6-19 3h-28l-36-4-34-7-44-11-34-10-44-15-38-14-39-15-28-12-50-24-37-19-24-14-33-22-11-7-16-11-14-10-19-14-12-10-11-9-13-11-11-9-15-13-10-9-8-7-13-12-11-11-8-7v-2h-2l-7-8-20-20-7-8-11-12-9-11-12-14-11-13-9-11-12-14-9-11-11-13-22-28-16-21-12-17-10-14-14-20-10-15-14-22-12-20-10-18-12-23-13-28-13-32-10-28-10-34-6-29-3-25v-31l4-37 6-42 6-24 11-31 13-28 12-20 12-17 12-16 12-13 11-11 13-10 19-11 14-7 28-8z" fill="#FFFEFE" />
                                    </svg>
                                    Contact Via Whatsapp app
                                </span>
                                <span className="contactEmail" onClick={() => { window.open(`mailto:${item.email}`) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                        <path d="M3 7l9 6l9 -6"></path>
                                    </svg>
                                    Send Email
                                </span>
                            </div>

                        ))}
                </div>
                <button className="btnFindGuide blue-btn ">Find More</button>
            </div>
        </>
    )
}
export default FindGuide;
