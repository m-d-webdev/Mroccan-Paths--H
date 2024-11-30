import { cloneElement, useEffect, useState } from "react";
import TenDone from "./TenDone.jsx";
import "./css/btnRate.css";
import PageRatting from "./pageRatting";
function btnRate({ collectionName, elemId }) {
    const [isPageRattingOpen, setPageRatingOpen] = useState(false)
    const [isRated, setisRated] = useState(false)


    // for (var i = 0; i <= old_rated_elemens.length; i++) {
    //     if (old_rated_elemens[i] == elemId) {
    //         console.log();

    //         setisAlreadyRated(true);
    //         console.log('already exists');
    //         localStorage.setItem('ratedItems', JSON.stringify(old_rated_elemens))
    //         // break;
    //         return;
    //     }
    // }

    var old_rated_elemens = localStorage.getItem('ratedItems');
    (old_rated_elemens != null) ? old_rated_elemens = JSON.parse(old_rated_elemens) : localStorage.setItem('ratedItems', JSON.stringify([]));
    old_rated_elemens = JSON.parse(localStorage.getItem("ratedItems"));

    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: false,
        Message: ""
    });
    const closePageRating = () => setPageRatingOpen(false);
    const isRateDone = () => {
        setPageRatingOpen(false);
        setIsDone({
            isDone: true,
            Message: "Your rating has been saved, thank you for that."
        })
        ToggleTenVisibility();

        old_rated_elemens.push(elemId);
        localStorage.setItem('ratedItems', JSON.stringify(old_rated_elemens))

        setTimeout(() => {
            setisRated(true)
        }, 12000)
    }

    let openPageRate = () => {
        if (isRated) {
            setTenDoneVisible(false);
            setIsDone({
                isDone: false,
                Message: "This item has already been rated."
            })
            ToggleTenVisibility();
            return;
        } else {

            setPageRatingOpen(true)
        }
    }

    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);
    };

    return (
        <>

            <button className="btn-rate-elem " onClick={openPageRate}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165-126 165Zm126 135Z" /></svg> <p>Rate </p></button>
            <PageRatting isOpen={isPageRattingOpen} onClose={closePageRating} elemId={elemId} collectionName={collectionName} isRateDone={isRateDone} />
            {isTenDoneVisible && <TenDone Done={isDone} setTenDoneVisible={ToggleTenVisibility} />}


        </>
    )
}
export default btnRate;