import "../css/header.css";
import logo from "../logo.png";
import { useState, useEffect, useRef } from "react";
import { auth } from "../config/firebase.js";
import Profile from "./single_cmps/profile.jsx";
import Notiications from "./single_cmps/Notifications.jsx";

function Header() {
    const DivRef = useRef(null);
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [isNotificationsVisible, setNotificationsVisible] = useState(false);
    let User = JSON.parse(localStorage.getItem("user"));
    let list_langs;
    useEffect(() => {

        if (DivRef.current) {
            let currentMode = localStorage.getItem("mode");
            if (currentMode == null || currentMode == 'lightMode') {
                document.querySelector('.iconDark').classList.add('display_block');
                document.body.classList.remove('darkMode');
            } else {
                document.querySelector('.iconLight').classList.add('display_block');
                document.body.classList.add('darkMode');
            }
        }


    }, []);
    function handelChangeTheme() {
        (localStorage.getItem("mode") == 'lightMode') ? localStorage.setItem("mode", 'darkMode') : localStorage.setItem("mode", 'lightMode')
        if (document.body.classList.contains('darkMode')) {
            document.body.classList.remove('darkMode');
            document.querySelector('.iconLight').classList.remove('display_block');
            document.querySelector('.iconDark').classList.add('display_block');
        } else {
            document.body.classList.add('darkMode');
            document.querySelector('.iconLight').classList.add('display_block');
            document.querySelector('.iconDark').classList.remove('display_block');
        }
    };

    function toggleVisibility() {
        if (auth.currentUser) {
            setIsProfileVisible(!isProfileVisible);
        }
    }
    function toggleVisibilitySecond() {
        if (auth.currentUser) {
            setNotificationsVisible(!isNotificationsVisible);
        }
    }
    const [langVisibility, setlangVisibility] = useState(false)
    const [lang, setlang] = useState('English')


    function handelChooseLang() {

        setlangVisibility(!langVisibility);

        let EventCliskOutSideListLang = (e) => {
            if (!list_langs.contains(e.target)) {
                setlangVisibility(false);
                window.removeEventListener("click", EventCliskOutSideListLang);
            }
        }
        setTimeout(() => {
            list_langs = document.querySelector(".list-langs");
            window.addEventListener("click", EventCliskOutSideListLang);
        }, 100)
    }


    return (
        <>
            <div className="header" ref={DivRef}>
                <div className="cntLogo" >
                    <img src={logo} className="logo" alt="" />
                    <h1>Moroccan Paths</h1>
                </div>
                <div className="searchCMP">
                    <label htmlFor="Input_search" className="inpSearchCmp">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                        <input type="text" id='Input_search' placeholder="Search four place, accommodation, Moroccan food and more." />
                    </label>
                </div>
                <a href="/comunity" className="btnGetComnt" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" /></svg>
                    <p>Community</p>
                </a>
                <div className="btnLanguage" onClick={handelChooseLang}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" /></svg>
                    <p>{lang}</p>
                    {
                        langVisibility && (
                            <>
                                <div className="list-langs">
                                    <span onClick={() => changeLanguage("en")}>
                                        English
                                    </span>
                                    <span onClick={() => changeLanguage("ar")}>
                                        Arabic (العربية )
                                    </span>
                                    <span onClick={() => changeLanguage("fr")}>
                                        French
                                    </span>
                                    <span onClick={() => changeLanguage("sp")}>
                                        Spanish
                                    </span>
                                    <span onClick={() => setlang("Russian")}>
                                        Russian
                                    </span>
                                    <p className="appologizinLang">We apologize for any inconvenience, but currently, our website is only available in English. We are working to add support for more languages soon. Thank you for your understanding!</p>

                                </div></>
                        )
                    }
                </div>

                <div className="cntModeSvg" onClick={handelChangeTheme}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconDark" viewBox="0 -960 960 960" ><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconLight" viewBox="0 -960 960 960"  ><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>
                </div>

                <div className="PathsRouting">
                    <a href='/' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" >
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                        <p>Home</p>
                    </a>
                    {!User && (
                        <>
                            <a href="/login">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z" /></svg>
                                <p>Login</p>
                            </a>
                            <a href="/SignUp_step_1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" >
                                    <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
                                </svg>
                                <p>Register</p>
                            </a>
                        </>
                    )}
                    {
                        User && (
                            <>
                                <div className="cntNotif" >
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleVisibilitySecond} viewBox="0 -960 960 960" className="iconNotification"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>
                                    {isNotificationsVisible &&
                                        <Notiications setNotVisibilt={toggleVisibilitySecond} />
                                    }
                                </div>

                                <h1 className="UserNmae">Mr.{User.displayName.substring(0, User.displayName.indexOf(" "))}</h1>
                                <img src={User.photoUrl ? User.photoUrl : "https://i.pinimg.com/236x/23/2e/92/232e92f748f259847613fe46f3329ce3.jpg"} onClick={toggleVisibility} alt="" className="userImgProf" />
                                {isProfileVisible && (<Profile setIsProfileVisible={setIsProfileVisible} />)}
                            </>
                        )


                    }
                </div>
            </div>
        </>
    )
};
export default Header;