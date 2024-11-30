import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { auth, storage, db } from "../../config/firebase.js";
// import { getDownloadURL, getDwonloadURL, ref, uploadBytes } from "firebase/storage"
import { signOut } from "firebase/auth";
import "./css/profile.css"
function Profile({ setIsProfileVisible }) {
    let cntProfileRef = useRef(null);
    useEffect(() => {
        if (cntProfileRef.current) {
            setTimeout(() => {
                let Container = document.querySelector(".cntProfile");
                function evvenClickOutProfil(e) {
                    if (!Container.contains(e.target)) {
                        window.removeEventListener("click", evvenClickOutProfil);
                        Container.classList.add("active")
                        setTimeout(() => {
                            setIsProfileVisible(false);
                        }, 300)
                    }
                }
                window.addEventListener("click", evvenClickOutProfil);

            }, 100)

        }
    }, []);
    let User = JSON.parse(localStorage.getItem("user"));
    // async function getProfileYrl() {
    //     await  getDownloadURL( ref(storage ,User.photoUrl))
    // }
    async function handelSignOut() {
        await signOut(auth).then(() => {
            setIsProfileVisible(false);
            localStorage.clear();
            window.location.href = "/";
        })
    }

    return (

        <>
            <div className="cntProfile" ref={cntProfileRef}>
                <svg className="iconDrop" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L480-120Z" /></svg>
                <p className="titleProfilePage">Profile</p>
                <img src={User.photoUrl ? User.photoUrl : "https://i.pinimg.com/236x/23/2e/92/232e92f748f259847613fe46f3329ce3.jpg"} alt="" />
                <h1>{User.displayName}</h1>
                <p>{User.email}</p>

                <button id="btnSignOut" onClick={handelSignOut}> Sign Out</button>
            </div>
        </>

    )
}
export default Profile;