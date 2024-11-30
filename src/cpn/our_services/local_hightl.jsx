import { useState, useRef } from "react";
import './css/local_highl.css';

import { auth, db, storage } from "../../config/firebase.js"
import { getDocs, setDoc, addDoc, doc, collection, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import BtnRate from "../single_cmps/button_rate.jsx";
import Result_rating from "../single_cmps/result_rating.jsx";

import { v4 } from "uuid";

function s2() {

    const cnt_s2_ref = useRef(null);
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
    
    const [cityChoosedName, setCityName] = useState("Chose Your City");
    const [CityNotFound, setSityNor] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [wantedArea, setWantedArea] = useState([])
    const [current_place, setPlce] = useState('')
    async function handelSetCity(e, n) {
        setSityNor(false);
        setisLoading(true)
        setPlce(e)
        setCityName(n)
        let collectionName_for = collection(db, e);
        try {
            let highloght_data = await getDocs(collectionName_for);
            highloght_data = highloght_data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            if (highloght_data.length == 0) {
                setisLoading(false);
                setSityNor(true);
                return;
            }
            setWantedArea([]);
            highloght_data.forEach(async h => {
                await getDownloadURL(ref(storage, h.img)).then(url => {
                    h['img'] = url;
                })
                let rate_d = await getDoc(doc(db, "rattings", `rateOf${h.id}`))
                if (rate_d.exists()) {
                    h['ratting_data'] = rate_d.data();
                } else {
                    h['ratting_data'] = {};
                }
                setisLoading(false)
                setWantedArea(o => [...o, h]);
            })
        } catch (er) {
            setisLoading(false);
            console.log(er);
        }
    }



    return (
        <>
            <div className="CNT-service2" ref={cnt_s2_ref}>
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(758,127)" d="m0 0h21l38 2 41 4 37 6 30 7 30 8 27 9 29 11 35 16 22 11 18 10 23 14 22 15 17 12 18 14 11 9 14 12 24 22 23 23 7 8 9 10 11 14 10 12 8 11 13 18 15 23 13 22 15 28 13 27 14 34 12 35 8 28 8 34 6 33 3 22 3 36 1 23v54l-2 43-3 40-4 33-8 47-6 20-6 11-9 11-9 7-8 4-14 3h-22l-16-4-10-4-11-8-9-9-7-9-4-14-1-6v-15l12-77 4-39 3-49v-44l-3-35-5-37-6-27-6-23-14-41-12-28-10-21-12-22-14-23-13-19-13-18-8-10-11-13-14-15-20-20-8-7-14-12-13-10-16-12-15-10-14-9-17-10-18-10-23-11-32-13-36-12-26-7-31-6-38-5-26-2h-47l-38 3-32 5-28 6-25 7-38 13-26 11-16 8-23 12-16 10-23 15-11 8-16 12-10 9-11 9-15 14-15 15-3 4h-2l-2 4-7 7-18 22-8 11-8 10-17 26-8 14-6 10-11 21-10 22-10 25-10 28-7 25-7 35-5 35-3 30v59l4 47 6 45 7 41 9 39 10 40 14 45 8 24 13 35 11 27 13 31 12 26 14 30 12 24 12 22 15 28 15 26 27 45 12 19 11 17 24 36 12 17 7 10 20 28 10 13 14 18 10 13 8 10 12 16 10 12 8 10 13 16 18 22 12 14 9 10 9 11 14 15 7 8 9 10 7 8 17 17 7 8 13 13 5 6v2h2l7 7 5-1 40-40 7-8 9-10 10-11 7-8 10-11 9-11 3-4h2l2-4 9-10 9-11 20-20 14-9 11-4 6-1h18l11 2 13 5 9 6 6 5 9 12 7 16 3 15v8l-2 10-8 16-10 14-8 10-9 11-24 26-7 8-11 12-10 11-7 8-11 12-16 17-32 32-8 7-24 24-8 7-10 9-16 10-7 3-15 3h-12l-15-4-13-7-11-9-12-11-13-12-37-37-1-3h-2v-2h-2v-2h-2l-7-8-14-14v-2h-2l-7-8-14-14v-2h-2l-7-8-13-14v-2h-2l-7-8-12-14-9-10-18-22-12-14-9-11-11-13-9-11-11-14-16-21-10-13-12-16-14-19-13-18-12-17-13-19-29-43-12-19-32-52-12-21-10-18-13-24-12-22-25-50-14-31-11-25-15-36-18-49-14-40-15-51-9-36-11-52-7-43-5-40-4-45-1-17v-62l2-34 4-33 5-29 8-37 8-29 13-38 12-29 9-20 16-32 13-23 6-9 9-15 14-20 10-14 12-16 10-11 7-8 13-15 9-9 7-8 12-12 8-7 9-9 10-8 10-9 14-11 18-13 10-7 26-17 15-9 17-10 29-15 29-13 49-18 35-10 25-6 39-7 24-3 40-3z" />
                        <path transform="translate(1466,1086)" d="m0 0 13 1 16 5 20 8 46 23 25 12 19 10 246 123 22 12 18 11 12 11 9 10 5 11 2 7 1 21v85l-1 38-2 15-3 8-7 10-11 13-9 7-11 4-14 2-14 1-56 1v63l-1 192 57 2 26 2 10 3 11 7 9 9 7 10 5 10 3 12v19l-3 13-7 13-10 13-9 8-7 4-12 2-15 1-39 1h-737l-15-2-14-7-11-11-9-14-4-8-3-9-1-6v-11l2-12 5-13 8-11 11-12 13-9 6-2 15-1 67-1-1-46v-130l1-79h-69l-14-3-12-6-11-9-10-11-7-11-3-9-1-6-1-30v-65l1-50 2-11 7-14 9-11h2l1-3 15-10 23-12 34-17 19-10 240-120 23-11 44-22 12-5zm5 139-11 4-24 12-19 10-25 12-48 24-23 11-80 40-21 11-19 9-19 10-21 12-9 7-3 4v7l3 6 2 1 17 1 51 1 197 1h82l239-1 34-1 16-2 4-5 1-4-3-6-7-6-14-9-24-13-19-10-21-10-88-44-19-10-64-32-23-11-38-19zm-191 310-1 73v182l1 1h120l6-2v-173l1-80-9-1zm256 0-1 45v211h120l7-2v-253l-21-1z" />
                        <path transform="translate(743,384)" d="m0 0h50l40 4 22 4 23 6 26 9 25 11 26 13 20 12 17 12 17 13 11 9 10 9 6 5 7 8 12 12 8 10 9 11 12 17 12 19 8 14 12 23 10 23 8 22 10 38 5 30 2 20v47l-3 36-4 23-8 32-9 27-13 30-12 23-9 15-9 14-9 12-11 14-9 11-16 17-17 17-26 20-9 6-10 7-13 8-32 17-26 11-30 10-31 8-23 4-28 3-23 1h-19l-21-1-31-4-23-5-28-8-22-8-25-11-20-10-15-9-14-9-14-10-16-13-11-10-8-7-19-19-7-8-12-14-10-13-12-18-15-25-13-26-11-28-8-24-7-28-5-32-2-20v-44l1-17 7-42 6-23 12-36 11-25 8-16 9-17 20-30 8-10 6-8 12-14 16-17 9-9 11-9h2v-2l13-10 18-13 17-11 23-13 22-11 23-9 24-8 34-8 33-4zm8 128-28 3-25 6-23 7-22 10-17 10-15 10-12 9-10 9-8 7-15 15-8 10-10 13-13 22-10 19-8 19-7 24-6 31-2 16v34l5 32 7 27 7 19 12 25 9 16 11 15 8 10 9 10 5 6 6 5 5 5 10 9 18 13 14 9 26 14 26 10 29 7 31 4h37l28-4 26-6 20-7 18-8 18-10 12-8 14-10 11-9 14-12 12-13 14-17 11-16 9-15 11-24 6-19 6-25 3-14 2-15v-36l-3-26-5-26-11-33-13-27-11-18-11-15-9-11-12-13-12-11-17-13-15-10-15-9-23-11-19-7-14-4-25-5-16-2-15-1z" />
                    </svg>
                    <h2>Local Highlights</h2>
                </span>

                <div className="cntInroService">
                    <p> Discover the must-see spots and hidden gems of each region with our Local Highlights. Explore unique attractions, local culture, and the best-kept secrets for an authentic experience.</p>
                    <img src="imgs/4202730.jpg" alt="" />
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
                                <span onClick={() => handelSetCity('local_highlight_casablanca', "casablanca")} id="casablanca"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Casablanca</p></span>
                                <span onClick={() => handelSetCity('local_highlight_rabat', "rabat")} id="rabat"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Rabat</p></span>
                                <span onClick={() => handelSetCity('local_highlight_marrakech', "marrakech")} id="marrakech"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Marrakech</p></span>
                                <span onClick={() => handelSetCity('local_highlight_fes', "fes")} id="fes"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Fes</p></span>
                                <span onClick={() => handelSetCity('local_highlight_meknes', "meknes")} id="meknes"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Meknes</p></span>
                                <span onClick={() => handelSetCity('local_highlight_agadir', "Agadir")} id="agadir"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Agadir</p></span>
                                <span onClick={() => handelSetCity('local_highlight_tangier', "tangier")} id="tangier"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Tangier</p></span>
                                <span onClick={() => handelSetCity('local_highlight_oujda', "oujda")} id="oujda"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Oujda</p></span>
                                <span onClick={() => handelSetCity('local_highlight_tetouan', "tetouan")} id="tetouan"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Tetouan</p></span>
                                <span onClick={() => handelSetCity('local_highlight_safi', "safi")} id="safi"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Safi</p></span>
                                <span onClick={() => handelSetCity('local_highlight_laayoune', "laayoune")} id="laayoune"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Laayoune</p></span>
                                <span onClick={() => handelSetCity('local_highlight_nador', "nador")} id="nador"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Nador</p></span>
                                <span onClick={() => handelSetCity('local_highlight_kenitra', "kenitra")} id="kenitra"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Kenitra</p></span>
                                <span onClick={() => handelSetCity('local_highlight_essaouira', "essaouira")} id="essaouira"> <svg disabled xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-100 0-170-70T80-480q0-100 70-170t170-70q90 0 156.5 57T557-520h323v80H557q-14 86-80.5 143T320-240Zm0-240Z" /></svg><p>Essaouira</p></span>

                            </div>
                        )
                    }
                    {
                        isLoading && (<div className="loader3_container"><div className="loader3"></div></div>)
                    }
                </div>
                <div className="wantedAreaContent">
                    {wantedArea &&
                        wantedArea.map(elem => {

                            // let elemText = resizeText(elem.highlight)
                            return (
                                <>
                                    <div className="cntLocalHirghInfo" id={elem.id} key={elem.id+ v4()}>
                                        <h1 className="lclHightName">{elem.name}</h1>
                                        <img src={elem.img} alt="" />
                                        <a href={`https://www.google.com/maps/search/?api=1&query=${elem.name.trim().replace(/\s+/g, "_")}`} target="_blank" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>
                                            <p>Get Localisation</p>
                                        </a>
                                        <p>{elem.highlight}</p>
                                        <Result_rating result={elem.ratting_data} elemId={elem.id} />
                                        <button className="btnSeeMoreAboutPlace">See More About This place</button>
                                        {(!JSON.parse(localStorage.getItem("ratedItems"))?.includes(elem.id)) ?
                                            <BtnRate collectionName={current_place} elemId={elem.id} />
                                            : <p className="p_alreadyRated"> I have already rated This item </p>
                                        }
                                    </div>
                                </>
                            )
                        }


                        )
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
export default s2;