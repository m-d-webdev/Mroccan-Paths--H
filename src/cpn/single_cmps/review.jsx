import { useState, useRef, useEffect } from "react";
import "./css/review.css"

function Review({ item}) {
    if (item.ReviewItemText) {
        const [realSatement, setRealSatement] = useState('To be in');
        const reviewRef = useRef(null);
        let arrEmogis = {
            Satisfied: '😊',
            Excited: '🤩',
            Delighted: '😁',
            Amazed: '😲',
            Relaxed: '😌',
            Disappointed: '😞',
            Frustrated: '😠',
            Confused: '🤔',
            Inspired: '🌟',
            Bored: '😐',
            Angry: '😡',
            Impressed: '👍',
            Surprised: '😮',
            Nostalgic: '🥰',
            Curious: '🤨'
        }


        useEffect(() => {
            if (reviewRef.current) {
                if (item.ReviewItemType == "Restaurant" || item.ReviewItemType == "Hotel") {
                    setRealSatement('went to the ')
                } else if (item.ReviewItemType == "Transport") {
                    setRealSatement('Traveling with')
                } else if (item.ReviewItemType == "Food") {
                    setRealSatement('after got')

                } else if (item.ReviewItemType == "Peopel") {
                    setRealSatement('about')
                }
                accesElements2();
            }
        }, []);



        function accesElements2() {
            let BTNSLikeArticle = document.querySelectorAll(".btnLikeArticle");
            BTNSLikeArticle.forEach((btnLikeArticle) => {
                btnLikeArticle.onclick = () => {
                    btnLikeArticle.classList.toggle("active");
                }
            })

        }
        return (
            <>
                <div className="cntReview" key ={item.id} ref={reviewRef} >
                    <div className="UserInfo">
                        <img src={item.userDATA?.photoUrl ? item.userDATA?.photoUrl : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                        <span>
                            <h1>{item.userDATA?.displayName ? item.userDATA?.displayName : "Anonymous"}</h1>
                            <p className="timePost">{item.createAt.toDate().toDateString()}</p>
                        </span>
                    </div>
                    <div className="cntellingText">
                        {arrEmogis[item.ReviewItemFelling]}
                        <p className="FilleingText">{item.userDATA?.displayName ? item.userDATA?.displayName : "Anonymous"} feel {item.ReviewItemFelling} {realSatement} {item.ReviewItemName} {item.ReviewItemType} </p>

                    </div>
                    <div className="cntContentReview">
                        <p className="TextReview">{item.ReviewItemText}</p>
                        <div className="InterReview" >
                            <svg className="btnLikeArticle" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" /></svg>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default Review