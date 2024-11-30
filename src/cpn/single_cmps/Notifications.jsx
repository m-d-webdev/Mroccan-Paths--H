import { useState, useEffect, useRef } from "react"
import { auth, db, storage } from "../../config/firebase"
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import "./css/notifications.css"
function Notiications({ setNotVisibilt }) {
    let pageNotifRef = useRef(null);

    useEffect(() => {
        if (pageNotifRef.current) {
            let Container = document.querySelector(".cntNotifications");
            setTimeout(() => {
                function eventClickOutNotifi(e) {
                    if (!Container.contains(e.target)) {
                        setNotVisibilt(false);
                        window.removeEventListener("click", eventClickOutNotifi);
                    }
                }
                window.addEventListener("click", eventClickOutNotifi);

            }, 300)


        }

    }, [pageNotifRef])
    return (
        <>
            <div className="cntNotifications" ref={pageNotifRef}>
               
                <p className="titleNotif">Notifications</p>
                <div className="LIST_Notif">
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new destination has been added to the platform, check it out, you might like it.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-280v-400l200 200-200 200Z"/></svg>A new authentic Moroccan dish, learn how to prepare it</p>
                </div>
            </div>
        </>
    )
}
export default Notiications