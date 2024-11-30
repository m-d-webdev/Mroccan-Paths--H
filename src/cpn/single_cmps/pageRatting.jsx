import {  db, storage } from "../../config/firebase"
import { getDownloadURL, ref } from "firebase/storage";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react"
import ReactDom from "react-dom";
import "./css/pageRatting.css"
function pageRatting({ isOpen, onClose, children, elemId, collectionName, isRateDone }) {
    if (!isOpen) {
        return null;
    }

    const [ItemData, setItemData] = useState(null)

    const pageRef_portaleRating = useRef(null);
    useEffect(() => {
        if (pageRef_portaleRating.current) {
            Get_item();
            let cntPageRating = document.querySelector(".rating-cpn")
            let btnClosePopup = document.querySelector(".btnClosePopup")
            setTimeout(() => {
                let ClickOut_portaleEveent = (e) => {
                    if (!cntPageRating.contains(e.target) || btnClosePopup.contains(e.target)) {
                        window.removeEventListener("click", ClickOut_portaleEveent);
                        onClose();
                    }
                }
                window.addEventListener("click", ClickOut_portaleEveent);
            }, 100)


        }

    }, [])

    async function Get_item() {
        await getDoc(doc(db, collectionName, elemId)).then(async res => {
            let Result_1 = res.data();
            if (Result_1.img) {
                Result_1['img_path'] = Result_1.img ;
            }
            await getDownloadURL(ref(storage, Result_1['img_path'])).then(url => {
                Result_1['img_path'] = url;
                (document.querySelector(".loader3")) ? document.querySelector(".loader3").remove() : null;
                setItemData(Result_1);
            })
        }).catch(er => {
            console.log(er);
        });

    }
    const [rateStart, setRateStars] = useState({})

    const surveyQuestions = [
        { id: 1, question: "Overall Satisfaction: How would you rate your overall experience at this place?", num_stars: 0 },
        { id: 2, question: "Ambiance: How would you rate the atmosphere or ambiance of the place?", num_stars: 0 },
        { id: 3, question: "Cleanliness: Was the place clean and well-maintained?", num_stars: 0 },
        { id: 4, question: "Customer Service: How would you rate the quality of service you received?", num_stars: 0 },
        { id: 5, question: "Value for Money: Was the experience worth the price?", num_stars: 0 },
        { id: 6, question: "Accessibility: How accessible is the place (e.g., transportation, parking)?", num_stars: 0 },
        { id: 7, question: "Amenities: Were all the amenities (restrooms, seating, etc.) satisfactory?", num_stars: 0 },
    ];

    function rating_elem(obj) {
        function handelChangeNumStars(num) {
            switch (obj.id) {
                case 1:

                    setRateStars({ ...rateStart, q1: num })

                    break;
                case 2:

                    setRateStars({ ...rateStart, q2: num })

                    break;
                case 3:

                    setRateStars({ ...rateStart, q3: num })

                    break;
                case 4:

                    setRateStars({ ...rateStart, q4: num })

                    break;
                case 5:

                    setRateStars({ ...rateStart, q5: num })

                    break;
                case 6:

                    setRateStars({ ...rateStart, q6: num })

                    break;
                case 7:

                    setRateStars({ ...rateStart, q7: num })
                    break;

                default:
                    break;
            }

        }

        return (
            <>
                <div className="radio">
                    <input id={"rating-5" + obj.id} type="radio" name={'ratting' + obj.id} value="5" />

                    <label htmlFor={"rating-5" + obj.id} onClick={() => handelChangeNumStars(5)} title="5 stars" >
                        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                        </svg>

                    </label>

                    <input id={"rating-4" + obj.id} type="radio" name={'ratting' + obj.id} value="4" />

                    <label htmlFor={"rating-4" + obj.id} onClick={() => handelChangeNumStars(4)} title="4 stars" >
                        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                        </svg>

                    </label>

                    <input id={"rating-3" + obj.id} type="radio" name={'ratting' + obj.id} value="3" />

                    <label htmlFor={"rating-3" + obj.id} onClick={() => handelChangeNumStars(3)} title="3 stars" >
                        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                        </svg>

                    </label>

                    <input id={"rating-2" + obj.id} type="radio" name={'ratting' + obj.id} value="2" />
                    <label htmlFor={"rating-2" + obj.id} onClick={() => handelChangeNumStars(2)} title="2 stars" >

                        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>

                        </svg>
                    </label>

                    <input id={"rating-1" + obj.id} type="radio" name={'ratting' + obj.id} value="1" />
                    <label htmlFor={"rating-1" + obj.id} onClick={() => handelChangeNumStars(1)} title="1 stars" >

                        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>

                        </svg>
                    </label>
                </div>

            </>
        )
    }


    async function handelSubmitForm_rating(e) {
        e.preventDefault();
        if (Object.keys(rateStart).length == 0) return;
        let oldRateObj = await getDoc(doc(db, "rattings", `rateOf${elemId}`));
        if (oldRateObj.exists()) {
            oldRateObj = oldRateObj.data();
            oldRateObj.peopl_rate_num = oldRateObj.peopl_rate_num + 1;
            if (rateStart.q1) {
                (oldRateObj.q1) ? oldRateObj.q1 = (oldRateObj.q1 + rateStart.q1) / oldRateObj.peopl_rate_num :
                    oldRateObj.q1 = rateStart.q1;
            }
            if (rateStart.q2) {
                (oldRateObj.q2) ? oldRateObj.q2 = (oldRateObj.q2 + rateStart.q2) / oldRateObj.peopl_rate_num :
                    oldRateObj.q2 = rateStart.q2;
            }
            if (rateStart.q2) {
                (oldRateObj.q2) ? oldRateObj.q2 = (oldRateObj.q2 + rateStart.q2) / oldRateObj.peopl_rate_num :
                    oldRateObj.q2 = rateStart.q2;
            }
            if (rateStart.q3) {
                (oldRateObj.q3) ? oldRateObj.q3 = (oldRateObj.q3 + rateStart.q3) / oldRateObj.peopl_rate_num :
                    oldRateObj.q3 = rateStart.q3;
            }
            if (rateStart.q4) {
                (oldRateObj.q4) ? oldRateObj.q4 = (oldRateObj.q4 + rateStart.q4) / oldRateObj.peopl_rate_num :
                    oldRateObj.q4 = rateStart.q4;
            }
            if (rateStart.q5) {
                (oldRateObj.q5) ? oldRateObj.q5 = (oldRateObj.q5 + rateStart.q5) / oldRateObj.peopl_rate_num :
                    oldRateObj.q5 = rateStart.q5;
            }
            if (rateStart.q6) {
                (oldRateObj.q6) ? oldRateObj.q6 = (oldRateObj.q6 + rateStart.q6) / oldRateObj.peopl_rate_num :
                    oldRateObj.q6 = rateStart.q6;
            }
            if (rateStart.q7) {
                (oldRateObj.q7) ? oldRateObj.q7 = (oldRateObj.q7 + rateStart.q7) / oldRateObj.peopl_rate_num :
                    oldRateObj.q7 = rateStart.q7;
            }
            if (rateStart.q8) {
                (oldRateObj.q8) ? oldRateObj.q8 = oldRateObj.q8 + "^+^" + rateStart.q8 :
                    oldRateObj.q8 = rateStart.q8
            }
            if (rateStart.q9) {
                (oldRateObj.q9) ? oldRateObj.q9 = oldRateObj.q9 + "^+^" + rateStart.q9 :
                    oldRateObj.q9 = rateStart.q9
            }
            if (rateStart.peopel_say_yes_for_10 || rateStart.peopel_say_no_for_10) {
                if (rateStart.peopel_say_yes_for_10 == 1) {
                    (oldRateObj.peopel_say_yes_for_10) ? oldRateObj.peopel_say_yes_for_10 = oldRateObj.peopel_say_yes_for_10 + 1 :
                        oldRateObj.peopel_say_yes_for_10 = 1
                }
                else if (rateStart.peopel_say_no_for_10 == 1) {
                    (oldRateObj.peopel_say_no_for_10) ? oldRateObj.peopel_say_no_for_10 = oldRateObj.peopel_say_no_for_10 + 1 :
                        oldRateObj.peopel_say_no_for_10 = 1
                }
            }
            if (rateStart.peopel_say_yes_for_11 || rateStart.peopel_say_no_for_11) {
                if (rateStart.peopel_say_yes_for_11 == 1) {
                    (oldRateObj.peopel_say_yes_for_11) ? oldRateObj.peopel_say_yes_for_11 = oldRateObj.peopel_say_yes_for_11 + 1 :
                        oldRateObj.peopel_say_yes_for_11 = 1
                }
                else if (rateStart.peopel_say_no_for_11 == 1) {
                    (oldRateObj.peopel_say_no_for_11) ? oldRateObj.peopel_say_no_for_11 = oldRateObj.peopel_say_no_for_11 + 1 :
                        oldRateObj.peopel_say_no_for_11 = 1
                }
            }

            await setDoc(doc(db, "rattings", `rateOf${elemId}`), oldRateObj).then(res => {
                isRateDone();
            });

        } else {
            await setDoc(doc(db, "rattings", `rateOf${elemId}`), { ...rateStart, peopl_rate_num: 1 }).then(
                () => {
                    isRateDone();
                }
            )
        }



    }


    return ReactDom.createPortal(
        <>
            <div className="cntPageRating" ref={pageRef_portaleRating}>
                <div className="rating-cpn">
                    {!children &&
                        <div className="loader3"></div>
                    }
                    <button className="btnClosePopup"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg> close</button>
                    {(children) ? (children) :
                        (ItemData) ? (
                            <>
                                <h1 className="RattingElemName">Rate {ItemData.name} Destinations</h1>
                                <img src={ItemData.img_path} alt="" className="itemIMG" />
                                <p className="descInserFromQu">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                    You are not obligated to answer all questions.
                                </p>
                                <div className="Form_get_rattgin">
                                    {
                                        surveyQuestions.map((r, index) => (
                                            <div className="cntRatingQuestion" key={index}>
                                                <p>{r.question}</p>
                                                {rating_elem(r)}
                                            </div>
                                        ))
                                    }
                                    <div className="cntRatingQuestion">
                                        <p>Favorite Aspect: What did you like the most about the place?</p>
                                        <textarea name="" id="" onChange={(e) => setRateStars({ ...rateStart, q8: e.target.value })} placeholder="Write Your Answer Here.."></textarea>
                                    </div>
                                    <div className="cntRatingQuestion">
                                        <p>Improvement Suggestions: What areas could use improvement?</p>
                                        <textarea name="" id="" onChange={(e) => setRateStars({ ...rateStart, q9: e.target.value })} placeholder="Write Your Answer Here.."></textarea>
                                    </div>
                                    <div className="cntRatingQuistionYN">
                                        <p>Recommendation: Would you recommend this place to others?</p>
                                        <div className="cntInpInswerYesNo">

                                            <input type="radio" id="inpYesQYN1" onChange={(e) => setRateStars({ ...rateStart, peopel_say_yes_for_10: 1, peopel_say_no_for_10: 0 })} name="inpYN_1" />
                                            <label htmlFor="inpYesQYN1"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg> Yes</label>

                                            <input type="radio" name="inpYN_1" onChange={(e) => setRateStars({ ...rateStart, peopel_say_no_for_10: 1, peopel_say_yes_for_10: 0 })} id="inpYesQYN2" />
                                            <label htmlFor="inpYesQYN2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z" /></svg>No</label>
                                        </div>

                                    </div>
                                    <div className="cntRatingQuistionYN">
                                        <p>Return Visit: Would you consider returning here in the future?</p>
                                        <div className="cntInpInswerYesNo">
                                            <input type="radio" id="inpYesQYN3" onChange={(e) => setRateStars({ ...rateStart, peopel_say_yes_for_11: 1, peopel_say_no_for_11: 0 })} name="inpYN_2" />
                                            <label htmlFor="inpYesQYN3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg> Yes</label>
                                            <input type="radio" id="inpYesQYN4" onChange={(e) => setRateStars({ ...rateStart, peopel_say_no_for_11: 1, peopel_say_yes_for_11: 0 })} name="inpYN_2" />
                                            <label htmlFor="inpYesQYN4"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z" /></svg>No</label>
                                        </div>
                                    </div>
                                    <button id="btnSubmitRating" onClick={handelSubmitForm_rating}>Submit<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /></svg></button>
                                </div>
                            </>
                        ) : ""

                    }
                </div>
            </div>
        </>
        , document.getElementById("portals")
    )
}


export default pageRatting;