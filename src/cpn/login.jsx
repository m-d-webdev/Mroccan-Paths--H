import "../css/login.css";
import { useState, useRef, useEffect } from "react";
import { auth, Gprovider, db, storage } from "../config/firebase.js";
import { getDoc, doc, setDoc, collection } from "firebase/firestore"
import { getDownloadURL, ref } from "firebase/storage";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import TenDone from "./single_cmps/TenDone.jsx";
function Login() {
    const containerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current) { aceesElements() };
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: false,
        Message: ""
    });
    // setIsDone({
    //     isDone: false,
    //     Message: ""
    // })
    // ToggleTenVisibility();
    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);
    };

    const sendLogin = async (e) => {
        if (email != "" && password != "" && CorrectEmailAdrres.test(email)) {
            let loaderContainer = document.createElement("div");
            let loaderElemParent = document.createElement("div");
            let loader = document.createElement("div");
            loaderContainer.className = "cntLoader";
            loaderElemParent.className = "LoaderParent";
            loader.className = "loader2";
            loaderElemParent.appendChild(loader);
            loaderContainer.appendChild(loaderElemParent);
            containerRef.current.appendChild(loaderContainer);


            const res = await signInWithEmailAndPassword(auth, email, password)
                .then(async (res) => {
                    containerRef.current.removeChild(loaderContainer);
                    containerRef.current.appendChild(loaderContainer);
                    const userDoc = await getDoc(doc(db, "users", res.user.uid));
                    if (userDoc.exists()) {
                        containerRef.current.removeChild(loaderContainer);
                        let UserData = userDoc.data();
                        UserData['userID'] = res.user.uid
                        if (UserData.provider == "em-pass") {
                            if (UserData.photoUrl != "") {
                                containerRef.current.appendChild(loaderContainer);
                                await getDownloadURL(ref(storage, UserData.photoUrl)).then((url) => {
                                    UserData['photoUrl'] = url;
                                })
                                containerRef.current.removeChild(loaderContainer);
                            }

                        }

                        localStorage.setItem("user", JSON.stringify(UserData));
                        window.location.href = "/";
                    }
                })
                .catch((err) => {
                    containerRef.current.removeChild(loaderContainer);
                    let ErrorType = err.code;
                    if (ErrorType == "auth/invalid-credential") {
                        setIsDone({
                            isDone: false,
                            Message: "The information you entered is incorrect. Do you already have an account? You can create one. <a href='SignUp_step_1'>Go Creat One</a> "
                        })
                        ToggleTenVisibility();
                    } else {
                        setIsDone({
                            isDone: false,
                            Message: "Error "
                        })
                        ToggleTenVisibility();
                    }
                });
        }

    }
    const signInWithGoogle = async (e) => {
        await signInWithPopup(auth, Gprovider)
            .then(async (result) => {
                await setDoc(doc(db, "users", result.user.uid)
                    , {
                        age: "",
                        contry: "",
                        password: "",
                        provider: "Google",
                        displayName: result.user.displayName,
                        email: result.user.email,
                        photoUrl: result.user.photoURL
                    }, { merge: true }
                ).then(res => {
                    let UserIfno = {
                        userID: result.user.uid,
                        displayName: result.user.displayName,
                        provider: "Google",
                        email: result.user.email,
                        photoUrl: result.user.photoURL
                    };
                    localStorage.setItem("user", JSON.stringify(UserIfno));
                    window.location.href = "/";
                }).catch(er => {
                    console.log(er);
                })

            });
    }


    function aceesElements() {
        let inpPassword = document.getElementById("inpPassword");
        let svgShowPass = document.querySelector(".svgShowPass");
        let cntButtonsShoHidePass = document.querySelector(".cntButtonsShoHidePass");
        let svgHidePass = document.querySelector(".svgHidePass");

        inpPassword.onkeyup = function (e) {
            if (inpPassword.value.length > 0) {
                if (inpPassword.type == "password") {
                    svgShowPass.classList.add("display_block");
                    svgHidePass.classList.remove("display_block");
                } else {
                    svgShowPass.classList.remove("display_block");
                    svgHidePass.classList.add("display_block");
                }
                cntButtonsShoHidePass.classList.add("display_block");
            } else {
                cntButtonsShoHidePass.classList.remove("display_block");
            };
        }
        cntButtonsShoHidePass.onclick = function (e) {
            if (inpPassword.type == "password") {
                inpPassword.type = "text";
                svgShowPass.classList.remove("display_block");
                svgHidePass.classList.add("display_block");
            } else {
                inpPassword.type = "password";
                svgShowPass.classList.add("display_block");
                svgHidePass.classList.remove("display_block");
            }
        }
    }


    const invalidEmailCharacters = [' ', ',', ';', ':', '<', '>', '(', ')', '[', ']', '\\', '/', '"', "'", '!', '&'];
    let CorrectEmailAdrres = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    function handelChangeEmailInput(e) {
        for (let i = 0; i < invalidEmailCharacters.length; i++) {
            if (e.target.value.includes(invalidEmailCharacters[i])) {
                e.target.classList.add("errInpt");
                console.log('asdfd');

                break
            } else {

                e.target.classList.remove("errInpt");
            }
        }
        e.target.value = e.target.value.toLowerCase();
        setEmail(e.target.value);
        console.log(email);

    }
    function HandelBlurInpEmail(e) {
        if (!CorrectEmailAdrres.test(e.target.value)) {
            e.target.classList.add("errInpt2")
        } else {
            e.target.classList.remove("errInpt2")
        }
    }

    return (
        <>
            <div className="cnt-loging-page">
                <img className="img_vetrasd" src="imgs/6333040-removebg-preview.png" alt="" />
                <form className="CTN_login" ref={containerRef}>
                    {isTenDoneVisible && <TenDone Done={isDone} setTenDoneVisible={ToggleTenVisibility} />}
                    <h1>Welcome Back !</h1>
                    <div className="cntInptComplogin">
                        <input type="email" id="inpEmail" required placeholder="" onChange={handelChangeEmailInput} onBlur={HandelBlurInpEmail} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" /></svg>
                        <label className="labelLoginFomr" htmlFor="inpEmail">Email</label>
                    </div>
                    <div className="cntInptComplogin">
                        <input type="password" id="inpPassword" minLength={6} placeholder="" onChange={(e) => setPassword(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>
                        <label className="labelLoginFomr" htmlFor="inpPassword">Password</label>
                        <div className="cntButtonsShoHidePass">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="svgShowPass"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="svgHidePass"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" /></svg>
                        </div>
                    </div>
                    <button id="btnLogin" className="blue-btn " onClick={sendLogin} type="button">Log in</button>
                    <p>Don't have an account? <a href="/SignUp_step_1">Sign up</a></p>
                    <div className="connectWidthFireBase">
                        <button type="button" onClick={signInWithGoogle}>
                            <img src="https://i.pinimg.com/236x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" alt="" />
                            <p>Continue with Google</p>
                        </button>
                        <button type="button">
                            <img src="https://i.pinimg.com/control/236x/1d/3d/b9/1d3db940e03e1b44e795aad98ab747b1.jpg" alt="" />
                            <p>Continue with Facebook</p>
                        </button>
                        <button type="button">
                            <img src="https://i.pinimg.com/236x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg" alt="" />
                            <p>Continue with Github</p>
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login