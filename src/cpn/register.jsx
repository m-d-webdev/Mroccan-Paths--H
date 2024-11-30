import "../css/register.css";
import { useState, useRef } from "react";
import { auth,  db } from "../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import TenDone from "./single_cmps/TenDone.jsx";
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const containerRef = useRef(null)
    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: true,
        Message: ""
    });

    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);
    };
    const [UserInfo, SET_USERINFO] = useState({
        displayName: "",
        age: "",
        contry: "",
        email: "",
        photoUrl: "",
        password: ""
    });
    const [passwordConfirmed, SET_PASSWORDCONFIRMED] = useState(false);


    function HandelChange(e) {
        SET_USERINFO({ ...UserInfo, [e.target.name]: e.target.value });

    }
    let CorrectEmailAdrres = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    function handelChangeEmailInput(e) {
        for (let i = 0; i < invalidEmailCharacters.length; i++) {
            if (e.target.value.includes(invalidEmailCharacters[i])) {
                e.target.classList.add("errInpt");

                break
            } else {

                e.target.classList.remove("errInpt");
            }
        }
        e.target.value = e.target.value.toLowerCase();
        SET_USERINFO({ ...UserInfo, [e.target.name]: e.target.value });
    }
    function HandelBlurInpEmail(e) {
        if (!CorrectEmailAdrres.test(e.target.value)) {
            e.target.classList.add("errInpt2")
        } else {
            e.target.classList.remove("errInpt2")
        }
    }

    function handelConfirmpass(e) {
        if (e.target.value == UserInfo.password && UserInfo.password.length >= 6) {
            SET_PASSWORDCONFIRMED(true)
        } else {
            SET_PASSWORDCONFIRMED(false)

        }
    }

    const invalidEmailCharacters = [' ', ',', ';', ':', '<', '>', '(', ')', '[', ']', '\\', '/', '"', "'", '!', '&'];

    async function HandelSubmi(e) {
        e.preventDefault();
        if (UserInfo.displayName != '' && CorrectEmailAdrres.test(UserInfo.email) && passwordConfirmed) {

            let loaderContainer = document.createElement("div");
            let loaderElemParent = document.createElement("div");
            let loader = document.createElement("div");
            loaderContainer.className = "cntLoader";
            loaderElemParent.className = "LoaderParent";
            loader.className = "loader2";
            loaderElemParent.appendChild(loader);
            loaderContainer.appendChild(loaderElemParent);
            containerRef.current.appendChild(loaderContainer);
            const userCredential = await createUserWithEmailAndPassword(auth, UserInfo.email, UserInfo.password)
                .then(async (userCredential) => {
                    let user = userCredential.user
                    if (userCredential.user != null) {
                        let userID = user.uid;
                        await setDoc(doc(db, "users", userID), {
                            displayName: UserInfo.displayName,
                            age: UserInfo.age,
                            contry: UserInfo.contry,
                            provider: "em-pass",
                            email: UserInfo.email,
                            photoUrl: UserInfo.photoUrl,
                            creat_at: serverTimestamp()
                        }).then(() => {
                            containerRef.current.removeChild(loaderContainer);
                            navigate(`/SignUp_step_2/${userID}`);
                        }).catch((err) => {
                            containerRef.current.removeChild(loaderContainer);
                            setIsDone({
                                isDone: false,
                                Message: " An error occurred while Signing Up , please try again later"
                            });
                            ToggleTenVisibility();
                        })
                    }

                })
                .catch((err) => {
                    let errorCode = err.code;
                    switch (errorCode) {
                        case "auth/email-already-in-use":
                            SayEmailAlreadyExists();
                            break;

                        default:
                            break;
                    }
                    containerRef.current.removeChild(loaderContainer);

                });

        }

    }
    function SayEmailAlreadyExists() {
        setIsDone({
            isDone: false,
            Message: "The email address is already Exists , Do you Already have an account ?. You  can  Login in Login  Page <a href='/login'> Go To Login Page</a>"
        });
        ToggleTenVisibility();
    }
    // -------------
    // function HandelAddUser() {
    //     SET_USERINFO({})
    //     setAddUser(true)
    // }

    // function handelAddUser() {
    //     setAddUser(false)
    //     UserInfo.id = v4()
    //     setUsersDetail([...usersDetali, UserInfo]);
    // }
    // function handelUpdateUser() {
    //     setAddUser(false)
    //     setWantToUpdate(false)
    //     usersDetali.forEach(elem => {
    //         if (elem.id == UserInfo.id) {
    //             console.log('founded');
    //             let inde = usersDetali.indexOf(elem)
    //             usersDetali[inde] = UserInfo
    //             return
    //         }
    //     })
    //     setUsersDetail(usersDetali);
    // }

    // const [isAddUser, setAddUser] = useState(false)
    // const [usersDetali, setUsersDetail] = useState([]);


    // function handelDeleteUser(id) {
    //     let cleanUserDeatil = usersDetali.filter(elm =>
    //         elm.id != id
    //     );
    //     setUsersDetail(cleanUserDeatil)
    // }
    // const [isWantToUpdate, setWantToUpdate] = useState(false)
    // function handelEditInfo(id) {

    //     let wantedUser = usersDetali.filter(elm => {
    //         return elm.id == id
    //     })[0]
    //     setAddUser(true)
    //     setWantToUpdate(true)
    //     SET_USERINFO(wantedUser)

    // }
    // =====================
    return (
        <>
            <div className="cnt-register-page">
            
                <form className="CTN_register" onSubmit={HandelSubmi} ref={containerRef}>
                    {isTenDoneVisible && <TenDone Done={isDone} setTenDoneVisible={ToggleTenVisibility} />}
                    <h1>Welcome to our platform </h1>
                    <p className="PDesc">If you are not Moroccan, welcome to our country. We hope you have a pleasant and exciting time here, and if you are, we hope you have a wonderful time in your country.</p>
                    <p className="PsayStart"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m360-313 167-167-167-167-167 167 167 167Zm0 113L80-480l280-280 240 240h280v80H600L360-200Zm0-280Z" /></svg> Start creating your account</p>
                    <div className="cntInptCompRegister">
                        <input type="text" placeholder="" onChange={HandelChange} value={UserInfo.displayName} name="displayName" required id="inpName" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" /></svg>
                        <label htmlFor="inpName" className="labelLoginFomr">Name</label>
                        <p className="TWDIH">* Last Name -&gt; First Name *</p>
                    </div>
                    <div className="cntInptCompRegister">
                        <input type="text" placeholder="" onChange={HandelChange} value={UserInfo.age} name="age" id="inAge" />
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                        <label htmlFor="inAge" className="labelLoginFomr">Your Age</label>
                        <p className="TWDIH">This field is not important, but we would like to know the age group that visits our country.</p>
                    </div>
                    <div className="cntInptCompRegister">
                        <input type="text" placeholder="" onChange={HandelChange} value={UserInfo.contry} name="contry" id="inContry" />
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-80v-760h640l-80 200 80 200H280v360h-80Zm80-440h442l-48-120 48-120H280v240Zm0 0v-240 240Z" /></svg>
                        <label htmlFor="inAge" className="labelLoginFomr">Your Contry</label>
                        <p className="TWDIH">This field is also not important, but we would like to know the countries that visit our country the most.</p>
                    </div>
                    <div className="cntInptCompRegister">
                        <input type="text" id="inpEmail" onChange={handelChangeEmailInput} onBlur={HandelBlurInpEmail} value={UserInfo.email} name="email" placeholder="" required />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" /></svg>
                        <label className="labelLoginFomr" htmlFor="inpEmail">Email</label>
                    </div>

                    <div className="cntInptCompRegister">
                        <input type="password" id="inpPassword" required onChange={HandelChange} value={UserInfo.password} name="password" placeholder="" minLength={6} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>
                        <label className="labelLoginFomr" htmlFor="inpPassword" >Create Password</label>
                        <p className="TWDIH">Important : Password Should Be Great Than 6 Characters !</p>
                    </div>
                    <div className="cntInptCompRegister">
                        <input type="password" id="inpPassword2" placeholder="" minLength={6} onChange={handelConfirmpass} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>

                        <label className="labelLoginFomr" htmlFor="inpPassword2">Confirm Password</label>
                        {passwordConfirmed && (<svg xmlns="http://www.w3.org/2000/svg" className="svgCheckPass" viewBox="0 -960 960 960"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" /></svg>)}
                    </div>
                    <button id="btnLogin" type="submit" >Next<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></button>

                </form>
                <img src="imgs/6300959-removebg-preview.png" alt="" />
            </div>


        </>
    )
};
export default Register;



