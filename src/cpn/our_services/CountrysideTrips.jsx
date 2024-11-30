import { useState, useRef, useEffect } from "react";
import './css/contrySide.css'

import { db, storage, auth } from '../../config/firebase'
import { getDocs, getDoc, collection, serverTimestamp, setDoc, addDoc, deleteDoc, doc, updateDoc, query, where, orderBy, limit, startAt, endAt } from 'firebase/firestore'

import TenDone from "../single_cmps/TenDone.jsx";
import { getDownloadURL, ref } from "firebase/storage";

import { v4 } from "uuid";

function s4() {
    const [main_img_c, setmain_img_c] = useState('');
    const cnt_s4_ref = useRef(null);
    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: true,
        Message: ""
    });

    useEffect(() => {
        if (cnt_s4_ref.current) {
            const get_main_imgs = async () => {

                const querySnapshot = await getDownloadURL(ref(storage, "main_imgs/contrySide3.jpg")).then(res => {

                    setmain_img_c(res);
                });
            }
            get_main_imgs();
        }

    }, []);

    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);
    };


    return (
        <>
            <div className="cntCountrysideTrips_page" ref={cnt_s4_ref}>
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(870,248)" d="m0 0h26l20 4 14 5 15 8 10 8 12 11 9 9 9 11 14 18 39 54 10 14 12 16 14 19 13 18 12 16 16 21 7 8 4-2 7-9 11-13 15-15 7-8 15-16 11-12 12-14 15-16 7-8 16-17 9-10 5-5h2v-2l11-9 17-13 16-9 18-8 18-5 13-2h41l23 5 13 5 16 8 14 9 14 11 14 12 14 14 7 8 7 7 7 8 9 10 11 12 9 10 11 12 1 3h2l7 8 9 10 14 15 12 13 11 12 12 13 5 5v2h2l7 8 11 12 7 8 24 26 9 10 11 12 9 10 4 4v2h2l7 8 15 16 7 8 60 65 7 7 7 8 10 11 7 8 14 15 22 24 7 8 7 7 7 8 7 7 7 8 11 12 7 8 13 14v2h2l7 8 11 12 7 8 15 16 2 4h2l9 11 11 12 7 10 3 8v13l-3 9-7 6-12 5-1 2-242-1-35-1v2l5 2 20 11 20 13 33 22 16 12 16 13 12 11 12 12 9 11 10 12 12 18 9 16 8 15 10 25 6 19 5 25 2 14 1 13v18l-2 23-4 29-6 27-15 44-13 30-10 19-5 10-14 23-8 13-11 16-13 18-16 22-11 13-9 11-14 15-9 11-7 7-7 8-14 15-35 35h-2v2l-8 7-9 9-8 7-10 9-11 9-12 11-14 11-10 9-14 11-13 10-14 10-17 12-14 10-32 22-19 9-14 3h-848l-239 2h-113l-52-1-32-1-10-2-8-7-4-8-3-13 1-8 4-6 7-6 10-5 29-10 71-24 52-17 30-9 27-9 41-13 38-12 27-9 98-32 31-10 35-11 41-14 37-13 27-9 36-13 26-10 30-11 37-14 39-15 27-11 40-16 34-14 16-7 28-12 35-16 28-13 54-27 23-13 22-12 17-10 28-17 42-28 21-16 17-14 11-9 14-13 8-7 9-9 1-2h2l2-4 12-14 12-17 6-9 9-19 6-17 4-19 1-7v-21l-4-24-4-4v-2l-93 1h-94l-82-1h-753l-279 2-81-1-27-1-13-2-6-4-8-11-2-6 1-11 3-9 16-21 8-10 10-13 12-16 11-14 1-2h2l2-4 8-11 14-18 12-16 9-11 9-12 10-13 9-11 6-8 10-13 5-7h2l2-4 12-16 14-18 12-15 10-13 12-15 9-12 11-14 14-18 10-13 12-15 15-20 14-17 9-12 10-13 14-18 10-13 11-14 12-16 16-21 13-17 12-13 10-9 14-8 12-4 12-2h14l19 5 21 9 17 9 28 17 11 7 15 10h5l7-9 8-11 6-7 16-24 7-10 10-14 8-11 12-17 13-18 20-28 24-34 10-14 16-23 12-16 14-15 9-8 16-10 18-8 16-4zm6 56-11 3-14 7-12 11-5 5-8 10-12 17-8 11-6 8-16 24-8 11-10 13-8 11-8 12-8 11-10 14-12 16-9 13-11 16-16 21-9 13-13 18-8 11-11 12-8 7-3 1-10-5-16-7-19-10-14-8-46-26-22-13-9-4-5 1-6 5-8 10-9 10-8 11-10 13-13 17-11 14-6 8-14 19-14 17-9 11-7 9-8 10-12 16-13 17-13 16-11 14-10 13-14 19-12 15-7 9-8 10-11 14-10 13-12 16-7 9-20 25-10 13-16 21-13 17-12 14-16 21-9 11-12 14-6 8 12 1 61 1h1118l114-1 8-1-2-6-16-21-13-18-12-16-24-34-14-19-11-15-12-17-10-14-14-18-12-17-13-18-12-16-14-19-13-18-10-14-16-21-12-17-16-22-15-20-26-36-14-18-12-17-13-18-16-21-10-14-14-19-12-17-12-16-26-36-10-14-11-15-13-18-13-19-14-18-9-12-12-14-7-7-14-9-11-4-6-1zm486 46-16 3-17 7-16 10-13 11-20 20-9 11-10 10-7 8-10 10-7 8-15 16-11 12-2 4-3 1-7 8-7 7v2h-2l-7 8-11 12v2l-4 2-12 11-1 3 12 17 7 10 14 19 11 15 12 17 14 19 13 17 12 17 13 18 16 21 26 36 9 12 14 19 11 15 10 14 9 12 14 19 20 28 13 18 14 19 9 10 5 3 355-1h133l3-2-8-10-7-7-7-8-10-11-9-11-12-13-7-8-11-12-14-15-18-20-11-12-12-13-11-12-14-15-11-12-12-13-14-15-12-13-9-10-11-12-7-8-10-11-7-8-2-3h-2l-2-4-16-17-24-26-22-24-7-7-7-8-12-13-16-17-9-10-16-17-27-30-9-11-8-8-7-8-11-12-9-10-7-8-7-7-2-3h-2l-2-4-11-11-14-11-14-9-14-6-15-4-10-1zm112 615-3 2 2 5 7 8 9 13 10 13 10 17 9 19 6 16 5 22 2 16v26l-2 17-4 18-8 23-8 16-11 20-11 16-9 12-9 11-3 3v2h-2l-4 4v2h-2l-7 8-7 7-2 1v2l-4 2-12 12-11 9-10 8-9 8-19 13-11 8-20 14-16 10-19 12-29 17-18 10-14 8-16 8-23 12-24 12-23 11-19 9-33 15-34 15-25 10-27 11-15 6-12 5-29 12-57 22-20 7-24 9-39 14-43 15-52 18-62 21-36 12-49 16-82 26-55 18-32 9-35 8-1 2 13 2 33 2h74l119 1h834l21-2 9-3 17-13 14-10 18-13 19-14 13-11 10-8 11-9 34-28 12-11 10-9 2-1v-2l4-2 11-11 8-7 39-39 7-8 9-10 13-15 9-10 9-11 13-16 8-11 20-28 12-19 9-15 14-27 8-17 8-20 8-24 6-26 4-28v-43l-3-22-6-21-6-16-8-16-8-14-10-15-13-16-17-17-11-9-7-6-12-9-24-16-15-9-18-10-26-13-27-12-28-11-37-13-26-8-17-3-13-1z" />
                        <path transform="translate(812,1306)" d="m0 0h123l33 1 15 2 6 4 3 8v28l-3 6-5 4-13 4-43 1h-115l-29-1-14-3-5-6-5-13v-12l6-14 7-6 9-2z" />
                        <path transform="translate(472,1306)" d="m0 0h85l50 1 13 2 5 4 4 11 1 11-2 13-4 8-5 4-9 2-9 1-32 1h-115l-34-1-11-2-7-6-4-8-2-13 3-12 5-10 5-3 12-2z" />
                        <path transform="translate(568,1462)" d="m0 0h183l17 1 10 3 3 3 1 3 1 12v16l-2 9-6 7-10 2h-190l-13-2-5-5-5-11-2-12 2-10 4-8 7-6z" />
                        <path transform="translate(329,1461)" d="m0 0h30l80 1 10 4 5 4 4 7 1 4v15l-4 13-5 5-7 3-14 1h-173l-18-2-7-8-5-10v-13l4-11 5-7 9-5z" />
                        <path transform="translate(276,1152)" d="m0 0h144l18 1 10 2 5 5 5 8 1 5v12l-3 10-6 8-8 4-6 1h-182l-13-1-6-3-6-8-3-8v-16l5-10 7-7 4-2z" />
                        <path transform="translate(688,1152)" d="m0 0h92l23 1 9 3 5 4 4 7 1 4v18l-4 9-7 6-8 3-6 1-49 1h-51l-85-1-11-2-7-6-4-10v-20l5-10 6-5 12-2z" />
                        <path transform="translate(1018,1152)" d="m0 0h131l17 1 10 2 6 4 2 4 1 7v13l-2 13-6 7-11 4-4 1h-182l-12-1-7-4-5-6-3-12v-11l4-9 7-10 2-1 9-1z" />
                    </svg>
                    <h2> Countryside Trips</h2>
                </span>

                <div className="cntInroService">
                    <p>Discover the beauty of nature, local culture, and unforgettable adventures in rural landscapes. Whether you're seeking relaxation or exploration, we’ve got the perfect countryside getaway for you</p>
                    <img src={main_img_c} alt="" />
                </div>

                <div className="cntServicesInContryTips">
                    <section id="curated-itineraries">
                        <h2>Pre-arranged trips</h2>
                        <p> Enjoy stress-free travel with our pre-arranged trips. Choose from carefully crafted itineraries that include the best destinations, accommodations, and activities. Just book and relax as we handle all the details, ensuring a seamless experience across Morocco's most beautiful regions.</p>
                        <img src="imgs/organizedTripImg.png" alt="" />
                    </section>

                    <section id="local-guides">
                        <h2>Organize a private trip</h2>
                        <p>Design your own personalized trip by choosing from the various destinations we offer, spanning across different regions of Morocco.</p>
                        <img src="imgs/organezOwn.png" alt="" />
                    </section>
                    <section id="local-guides">
                        <h2>Trips with Overnight Stays</h2>
                        <p> Discover Morocco’s countryside with our tailored overnight trips. Stay in traditional guesthouses, explore stunning landscapes, and immerse yourself in local culture. Enjoy a relaxing escape with flexible itineraries across various regions of Morocco.</p>
                        <img src="imgs/nightstay.png" alt="" />

                    </section>
                    <section id="local-guides">
                        <h2>Discover Morocco's Most Popular Mountain Destinations</h2>
                        <p> Embark on an unforgettable journey to Morocco's most visited mountain areas. Explore breathtaking peaks, scenic trails, and charming villages, offering a perfect blend of adventure and natural beauty. Whether you're hiking, sightseeing, or simply enjoying the fresh air, these iconic mountain regions promise a remarkable experience for every traveler.</p>
                        <img src="imgs/4272937-removebg-preview.png" alt="" />
                    </section>
                    <section id="local-guides">
                        <h2> Exclusive Countryside Transportation Rental</h2>
                        <p>Experience the freedom of private transportation in Morocco’s stunning countryside. Enjoy the convenience of a dedicated vehicle for your journey, giving you flexibility to explore remote areas, hidden gems, and picturesque landscapes at your own pace. Perfect for those seeking a comfortable, personalized travel experience without the hassle of public transport.</p>
                        <img src="imgs/8547448-removebg-preview.png" alt="" />
                    </section>
                    <section id="local-guides">
                        <h2> Share Your Journey</h2>
                        <p>
                            Tell the story of your adventure! Share your experiences, photos, and tips from your countryside trip with our community. Inspire other travelers by offering insights, recommendations, and memories from your journey through Morocco’s beautiful landscapes.
                        </p>
                        <img src="imgs/9261631-removebg-preview.png" alt="" />
                    </section>


                </div>
                <button className="btnLoadMore blue-btn">Load More Services</button>
            </div>
        </>
    );
}
export default s4;