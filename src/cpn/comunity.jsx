import { useState, useRef, useEffect } from "react";
import "../css/comunity.css"
import Review from "./single_cmps/review.jsx";
import { db, storage } from '../config/firebase'
import { getDocs, getDoc, collection, serverTimestamp, setDoc, addDoc, deleteDoc, doc, updateDoc, query, where, orderBy, limit, startAt, endAt } from 'firebase/firestore'

import TenDone from "./single_cmps/TenDone.jsx";
import { getDownloadURL, ref } from "firebase/storage";

function Community() {
    const pagerRef = useRef(null);
    const [REVIEWS, SET_REVIEWS] = useState([])
    const [isHaveAccess, accessWriteRview] = useState(false);
    const [isReviewsRmpty, setReviewEmty] = useState(null);

    useEffect(() => {
        if (pagerRef.current) {
            GetRiviews();
            accesElements()
            if (localStorage.getItem("user") != null) {
                accessWriteRview(true);

            }
        }
    }, []);

    async function GetRiviews() {
        let ContainerPageComunity = document.querySelector(".ContainerComunity");
        let loaderElem = document.createElement("div");
        loaderElem.className = "loader";
        ContainerPageComunity.insertBefore(loaderElem, ContainerPageComunity.childNodes[1])
        let collectionRef = collection(db, "reviews")
        let q = query(collectionRef);

        SET_REVIEWS([]);

        await getDocs(q).then(async (data) => {
            let ResData = data.docs.map(docs => ({ ...docs.data(), id: docs.id }))
            if (ResData.length > 0) {
                ResData.forEach(async rev => {
                    let userDoc = await getDoc(doc(db, "users", rev.UserId));
                    if (userDoc.exists()) {
                        rev["userDATA"] = userDoc.data();
                        if (rev["userDATA"].provider == "em-pass") {
                            if (rev["userDATA"].photoUrl != "") {
                                await getDownloadURL(ref(storage, rev["userDATA"].photoUrl)).then(async url => {
                                    rev["userDATA"].photoUrl = url;
                                    SET_REVIEWS(re => [...re, rev])
                                }).catch(err => {
                                    console.log(err);
                                })
                            } else {
                                SET_REVIEWS(re => [...re, rev])
                            }
                        }
                    };
                    if (ContainerPageComunity.querySelector(".loader")) {
                        ContainerPageComunity.querySelector(".loader").remove()
                    }
                })
                setReviewEmty(false)
            } else {
                ContainerPageComunity.removeChild(loaderElem)
                setReviewEmty(true)
            }


        }).catch(error => {
            console.log(error);

        })
    }
    // -----------------

    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: true,
        Message: ""
    });

    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);
    }

    // -----------------------------------

    const [ReviewItemName, setReviewItemName] = useState('')
    const [ReviewItemType, setReviewItemType] = useState('')
    const [ReviewItemFelling, setReviewItemFelling] = useState('')
    const [ReviewItemText, setReviewItemText] = useState("")
    function accesElements() {
        let InpSerachAbouAres = document.querySelector("#InpSerachAbouAres");
        let cntPeopelReviews = document.querySelector(".cntPeopelReviews");
        let cntReview = document.querySelectorAll(".cntReview");

    }
    function HandelWriteReview(istrue) {
        let cntInpWriteRev = document.querySelector(".cntInpWriteRev");
        let CntComWrtReview = document.querySelectorAll(".CntComWrtReview");
        let NumElemReview = document.querySelectorAll(".NumElemReview");

        if (istrue) {
            let i = 0;
            NumElemReview[0].onclick = () => {
                i = 0;
                chooseOptio();
            }
            NumElemReview[1].onclick = () => {
                i = 1;
                chooseOptio();
            }
            NumElemReview[2].onclick = () => {
                i = 2;
                chooseOptio();
            }
            NumElemReview[3].onclick = () => {
                i = 3;
                chooseOptio();
            }
            cntInpWriteRev.classList.add("displayFlex");
            let btnNext1uas = document.querySelector(".btnNext1uas");
            btnNext1uas.onclick = () => {
                i++;
                chooseOptio();
            }
            chooseOptio();
            CntComWrtReview[1].querySelectorAll(".cntTypeItme span").forEach((item) => {
                item.onclick = () => {
                    CntComWrtReview[1].querySelectorAll(".cntTypeItme span").forEach((item) => { item.classList.remove("active"); });
                    setReviewItemType(item.innerHTML);
                    item.classList.add("active");
                    i++;
                    chooseOptio();
                }
            })
            CntComWrtReview[2].querySelectorAll(".EmojisFelling span").forEach((item) => {
                item.onclick = () => {
                    CntComWrtReview[2].querySelectorAll(".EmojisFelling span").forEach((item) => { item.classList.remove("active"); });
                    setReviewItemFelling(item.querySelector("p").innerHTML);
                    item.classList.add("active");
                    i++;
                    chooseOptio();
                }
            })
            function chooseOptio() {
                CntComWrtReview.forEach((cntComWrtReview) => {
                    cntComWrtReview.classList.remove("active")
                })
                CntComWrtReview[i].classList.add("active");
            }
        } else {
            cntInpWriteRev.classList.remove("displayFlex");

        }


    }


    function handelChangeRiviewText(e) {
        setReviewItemText(e.target.value);
    }

    function handelTextareaValue(e) {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    async function handelSubmitReview() {
        if (ReviewItemType.length > 0 &&
            ReviewItemName.length > 0 &&
            ReviewItemFelling.length > 0 &&
            ReviewItemText.length > 0) {
            let respon = await addDoc(collection(db, "reviews"), {
                UserId: JSON.parse(localStorage.getItem("user")).userID,
                ReviewItemName: ReviewItemName.toLocaleLowerCase(),
                ReviewItemType: ReviewItemType.toLocaleLowerCase(),
                ReviewItemFelling: ReviewItemFelling,
                ReviewItemText: ReviewItemText.toLocaleLowerCase(),
                createAt: serverTimestamp()
            }).then(() => {
                setReviewItemName('');
                setReviewItemType('');
                setReviewItemFelling('');
                setReviewItemText('');
                setIsDone({
                    isDone: true,
                    Message: "The review was added successfully , Thank you for your feedback"
                });
                ToggleTenVisibility();
                document.querySelector(".cntInpWriteRev").classList.remove("displayFlex");
                pagerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }).catch((err) => {
                setIsDone({
                    isDone: false,
                    Message: " An error occurred while adding the review , please try again later"
                });
                ToggleTenVisibility();
            })

        }
    }
    // --------------------------------------------------
    const [isInSearchPage, setInSearchPage] = useState(false);
    const [resutlSearch, setResSearch] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    function backFormSearchPage() {
        setInSearchPage(false);
        setReviewEmty(false);
        GetRiviews();
    }

    async function searchForElem(e) {
        e.preventDefault();
        if (searchValue.length > 0) {
            let ContainerPageComunity = document.querySelector(".ContainerComunity");
            let loaderElem = document.createElement("div");
            loaderElem.className = "loader";
            ContainerPageComunity.insertBefore(loaderElem, ContainerPageComunity.childNodes[1])
            setInSearchPage(true);
            SET_REVIEWS([]);
            let searchElem = searchValue.toLowerCase();
            searchElem = searchElem.trimStart();
            let q = query(collection(db, "reviews"), orderBy("ReviewItemName"), startAt(searchElem), endAt(searchElem + "\uf8ff"), limit(50))
            await getDocs(q).then(res => {
                if (res.docs.length == 0) {
                    if (ContainerPageComunity.querySelector(".loader")) {
                        ContainerPageComunity.querySelector(".loader").remove()
                    }
                    setReviewEmty(true);
                }

                res.docs.forEach(
                    async r => {
                        let FoundedReviews = { ...r.data(), id: r.id }
                        let userDoc = await getDoc(doc(db, "users", FoundedReviews.UserId));
                        if (userDoc.exists()) {
                            let userdata = userDoc.data();

                            if (userdata.photoUrl != "") {
                                if (userdata.provider == "em-pass") {
                                    await getDownloadURL(ref(storage, userdata.photoUrl)).then(url => {
                                        userdata.photoUrl = url;
                                    })
                                }
                            };

                            if (ContainerPageComunity.querySelector(".loader")) {
                                ContainerPageComunity.querySelector(".loader").remove()
                            }
                            FoundedReviews['userDATA'] = userdata;
                            SET_REVIEWS(ries => [...ries, FoundedReviews]);
                        };
                    }
                )

            })
        }


    }


    return (
        <>
            <div className="ContainerComunity" ref={pagerRef}>
                {isTenDoneVisible && <TenDone Done={isDone} setTenDoneVisible={ToggleTenVisibility} />}

                <div className="bareSearchForPlace">
                    <form action="" onSubmit={searchForElem}>
                        <input type="text" id="InpSerachAbouAres" onChange={e => setSearchValue(e.target.value)} placeholder="Find reviews about a specific area ,Hotel ,Food  ,Restaurant ..." />
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v80Zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380q0-75 52.5-127.5T620-560q75 0 127.5 52.5T800-380q0 27-8 51t-20 45l128 128-56 56ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" /></svg>
                    </form>
                </div>
                {
                    isInSearchPage && (
                        <button className="btnBackFromSearch" onClick={backFormSearchPage}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></button>
                    )
                }
                <div className="cntPeopelReviews">

                    {(isReviewsRmpty == false) ? REVIEWS.map((item, index) => (
                        <Review item={item} key={index} />
                    )) : ""}
                    {
                        isReviewsRmpty && (
                            <>
                                <div className="CntNoResultFounded">
                                    <svg version="1.1" className="svgNoReuslt" viewBox="0 0 1024 1024" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <path transform="translate(506,63)" d="m0 0h12l20 2 25 6 23 10 18 11 11 9 10 9 9 9 12 16 9 16 7 15 6 19 3 15 1 8v32l-3 18-3 12 145 1 11 1 6 4 6 12 19 53 15 41 9 26 16 44 11 30 9 26 20 55 16 45 20 55 7 21v265l-4 6-4 4-3 1h-906l-5-3-5-5-1-3-1-13v-247l3-12 12-33 10-29 21-58 19-53 41-114 18-50 20-55 6-10 5-3 5-1 151-1-3-9-3-19-1-12v-13l2-19 5-21 6-16 8-16 10-16 11-13 16-16 17-12 16-9 11-5 18-6 14-3zm0 33-18 2-19 5-18 8-14 9-11 9-13 13-11 16-8 16-6 16-4 24v21l4 22 6 18 9 17 9 12 9 10 8 8 14 10 19 10 23 8 6 5 8 15 11 23h3l10-19 11-21 4-3 25-9 19-10 13-10 5-4v-2l4-2v-2h2l9-11 11-18 7-17 4-15 2-13v-26l-3-17-5-16-7-16-7-11-10-13-10-10-16-12-19-10-18-6-16-3-10-1zm-281 208-1 2v221l5 1h567l4-1-1-223h-148l-2 1-3 6-10 14-12 13-12 11-18 12-17 9-19 7-10 19-19 38-6 9-4 3-3 1h-8l-6-3-6-8-24-48-6-11-17-6-16-8-14-9-9-7-10-9-9-9-11-15-7-10zm-35 80-13 38-9 24-10 29-16 44-19 53-18 50-9 24-8 23v2h57l7-19 19-52 9-26 11-30 1-18-1-142zm642 1v152l2 10 19 53 17 47 8 22 1 2h57l-1-5-15-42-17-47-22-61-23-64-13-36-9-25-2-6zm-613 175-11 30-9 26-18 49-1 6 207 1 11 2 8 4 5 5 5 8 5 16 5 18 5 8 4 2 10 1h134l9-1 6-4 4-7 7-27 5-12 4-4v-2l5-2 8-4 8-1h205l4-1-3-10-11-30-25-70-1-1zm-138 144-1 3v220h864l-1-223h-306l-2 6-7 26-5 10-3 4v2h-2l-5 5-9 6-9 3-7 1h-154l-12-3-9-5-8-7-7-11-4-10-6-25-1-2z" />
                                        <path transform="translate(451,151)" d="m0 0h8l6 3 10 9 36 36 4-2 42-42 7-4h8l8 4 4 6 1 9-3 7-6 7-7 6-5 6-7 6-5 6-7 6-5 5-3 4 2 4 41 41 4 6 1 9-3 7-7 6-9 1-8-4-10-9-22-22v-2l-4-2-8-9-5 1-44 44-8 3-8-1-6-4-4-7v-9l3-6 43-43h2l-1-6-4-3v-2l-4-2v-2l-4-2v-2l-4-2v-2l-3-1-7-8-10-9v-2l-3-1-7-9-1-3v-7l4-8 5-4z" />
                                    </svg>

                                    <h1>No results, be the first to share a review about this item</h1>

                                </div>


                            </>
                        )
                    }
                </div>
                {isHaveAccess && (
                    <>
                        <div className="cntWriteReview">
                            <button id="btnWriteReview" onClick={() => HandelWriteReview(true)} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                                Write a review about something
                            </button>


                            <div className="cntInpWriteRev">
                                <button className="btnCloseWrt" onClick={() => HandelWriteReview(false)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg></button>
                                <div className="CntComWrtReview">
                                    <span className="NumElemReview"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-20 200h80v-400H380v80h80v320Z" /></svg></span>
                                    <p className="desInp">What is the Name of the item ?  </p>
                                    <input type="text" placeholder="Name" onChange={(e) => setReviewItemName(e.target.value)} className="inpNameReview" />
                                    <button className="btnNext1uas"> Next</button>
                                </div>
                                <div className="CntComWrtReview">
                                    <span className="NumElemReview"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h240v-80H440v-80h80q33 0 56.5-23.5T600-520v-80q0-33-23.5-56.5T520-680H360v80h160v80h-80q-33 0-56.5 23.5T360-440v160Z" /></svg></span>
                                    <p className="desInp">What type of item would you like to review?</p>
                                    <div className="cntTypeItme ">
                                        <span>City</span>
                                        <span>village</span>
                                        <span>Hotel</span>
                                        <span>Restaurant</span>
                                        <span>Food</span>
                                        <span>Peopel</span>
                                        <span>Transport</span>
                                        <span>Other</span>
                                    </div>
                                </div>
                                <div className="CntComWrtReview">
                                    <span className="NumElemReview"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h160q33 0 56.5-23.5T600-360v-60q0-26-17-43t-43-17q26 0 43-17t17-43v-60q0-33-23.5-56.5T520-680H360v80h160v80h-80v80h80v80H360v80Z" /></svg></span>
                                    <p className="desInp">How do you feel about that?</p>
                                    <div className="EmojisFelling ">
                                        <span role="img" aria-label="satisfied">😊<p>Satisfied</p></span>
                                        <span role="img" aria-label="excited">🤩<p>Excited</p></span>
                                        <span role="img" aria-label="delighted">😁<p>Delighted</p></span>
                                        <span role="img" aria-label="amazed">😲<p>Amazed</p></span>
                                        <span role="img" aria-label="relaxed">😌<p>Relaxed</p></span>
                                        <span role="img" aria-label="disappointed">😞<p>Disappointed</p></span>
                                        <span role="img" aria-label="frustrated">😠<p>Frustrated</p></span>
                                        <span role="img" aria-label="confused">🤔<p>Confused</p></span>
                                        <span role="img" aria-label="inspired">🌟<p>Inspired</p></span>
                                        <span role="img" aria-label="bored">😐 <p>Bored</p></span>
                                        <span role="img" aria-label="angry">😡 <p>Angry</p></span>
                                        <span role="img" aria-label="impressed">👍<p>Impressed</p></span>
                                        <span role="img" aria-label="surprised">😮 <p>Surprised</p></span>
                                        <span role="img" aria-label="nostalgic">🥰<p>Nostalgic</p></span>
                                        <span role="img" aria-label="curious">🤨<p>Curious</p></span>

                                    </div>
                                </div>

                                <div className="CntComWrtReview">
                                    <span className="NumElemReview">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm40 200h80v-400h-80v160h-80v-160h-80v240h160v160Z" /></svg>
                                    </span>
                                    <p className="desInp">Write your review Here :</p>
                                    <textarea onKeyDown={handelTextareaValue} onChange={handelChangeRiviewText} type="text" placeholder="Write your review " id='InpWriteReivew' className="" />
                                    <button className="BtnSendReivew " onClick={handelSubmitReview}>Send <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {!isHaveAccess && (
                    <>
                        <div className="cntSayLogin">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                            <p>If you would like to share a review, you must log in or create an account through simple steps. </p>
                            <a href="/login">Login</a><p> Or </p><a href="/SignUp_step_1">Register</a>
                        </div>
                    </>
                )}

            </div>

        </>
    )
};
export default Community;