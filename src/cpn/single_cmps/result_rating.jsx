import { useState } from "react";
import "./css/result_rating.css"


function result_ratting({ result, elemId }) {
    let rating_res;
    const [detail_rateVisible , setdetail_rateVisible] = useState(false)
    if (Object.keys(result).length > 0) {
        rating_res = () => {
            let totoaleRating = 0;
            let num_qs = 0
            let numStars = [
                result.q1,
                result.q2,
                result.q3,
                result.q4,
                result.q5,
                result.q6, result.q7,]
            for (let i = 0; i < numStars.length; i++) {
                const element = numStars[i];
                if (element != undefined) {
                    num_qs++;
                    totoaleRating = totoaleRating + element
                }
            }
            let average_rate = totoaleRating / num_qs;
            average_rate = average_rate.toString();
            (average_rate.indexOf('.') != -1) ? average_rate = average_rate.substring(0, average_rate.indexOf('.') + 2) : null;
            return (
                <span className="aver_rate_sp">
                    <span><p>The rating for this destination is :</p>
                        <svg version="1.1" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
                            <path transform="translate(1020,63)" d="m0 0h16l11 3 9 8 9 14 14 29 10 23 13 30 11 26 16 38 20 51 12 29 18 42 22 51 36 84 17 39 15 35 6 11 6 4 13 2 80 8 100 9 259 24 69 7 18 4 12 6 7 8 7 14 3 9v8l-7 14-10 13-26 26-11 9-13 12-10 8-13 12-8 7-14 12-14 13h-2v2l-11 9-13 12-11 9-12 11-11 9-13 12-11 9-14 13-11 9-12 11-8 7-11 10-8 7-15 13-10 9-11 9-14 13-8 7-14 12-10 9-14 12-10 9-8 7-11 10-10 8-5 5h-2l-2 4h-2l1 4 3 4 5 17 10 47 14 64 12 53 23 102 13 58 10 45 12 52 11 48 5 22 2 20-2 10-9 13-9 8-14 7h-8l-16-4-16-7-17-9-27-16-29-17-20-12-22-13-32-19-35-21-29-17-20-12-32-19-28-17-29-17-28-17-24-14-29-17-32-19-15-9-2-1h-6l-15 9-24 14-27 16-15 9-22 13-15 9-22 13-25 15-29 17-24 14-15 9-29 17-15 9-29 17-20 12-26 16-17 10-19 12-31 20-26 15-22 10-9 3h-12l-10-4-12-8-10-10-4-7v-25l4-24 7-29 9-43 11-46 10-46 6-25 9-42 7-30 11-49 8-35 7-31 8-37 9-40 7-28 1-6v-11l-7-8-7-7-8-7-13-12-10-9-8-7-10-9-12-11-8-7-10-9-11-9-12-11-11-9-10-9-8-7-11-9-14-13-8-7-14-12-14-13-8-7-14-12-10-9-11-9-11-10-11-9-10-9-8-7-10-9-8-7-13-12-8-7-11-10-8-7-14-12-10-9-8-7-13-12-7-7-11-16-6-12-1-9 7-14 11-13 5-5 10-6 9-3 69-6 72-8 117-10 63-7 104-8 43-5 53-6 10-3 5-4 10-18 18-43 13-30 12-28 11-25 12-28 11-26 12-28 9-20 8-19 18-42 17-40 5-11 7-17 7-15 8-20 13-30 8-18 12-25 7-11 5-6 9-6z" fill="#FDD86E" />
                            <path transform="translate(1020,63)" d="m0 0h16l11 3 9 8 9 14 14 29 10 23 13 30 11 26 16 38 18 46-1 5h-6l-1 3-10 3-5 5-7 8-10 16-4 6-6 11-7 11-11 20-7 11-6 9-9 15-9 14-5 9-5 10h-2l-2 6-5 9h-2l-1 5h-2l-1 5-7 10-3 6-4 7-9 16-2 5h-2l-2 6-10 19-5 9-2 4h-2l-1 5-1 3h-2l-1 5-1 3h-2l-1 5-7 12-10 21-9 17-7 15-8 16-8 17-10 19-5 12-10 21-7 15-9 19-15 35-13 30-10 25-9 22-6 16-17 44-15 39-6 17-8 21-8 25-3 8-7 21-8 25-8 24-10 33-6 17-2 9-6 17-6 25-6 18-10 40-6 21-6 25-4 17-5 18-4 15-7 30-5 25-4 17-12 54-7 31-4 15-6 26-3 17v11l1 11-2 4-32 20-22 12-19 8-6 2h-12l-10-4-12-8-10-10-4-7v-25l4-24 7-29 9-43 11-46 10-46 6-25 9-42 7-30 11-49 8-35 7-31 8-37 9-40 7-28 1-6v-11l-7-8-7-7-8-7-13-12-10-9-8-7-10-9-12-11-8-7-10-9-11-9-12-11-11-9-10-9-8-7-11-9-14-13-8-7-14-12-14-13-8-7-14-12-10-9-11-9-11-10-11-9-10-9-8-7-10-9-8-7-13-12-8-7-11-10-8-7-14-12-10-9-8-7-13-12-7-7-11-16-6-12-1-9 7-14 11-13 5-5 10-6 9-3 69-6 72-8 117-10 63-7 104-8 43-5 53-6 10-3 5-4 10-18 18-43 13-30 12-28 11-25 12-28 11-26 12-28 9-20 8-19 18-42 17-40 5-11 7-17 7-15 8-20 13-30 8-18 12-25 7-11 5-6 9-6z" fill="#FDC960" />
                            <path transform="translate(1671,1131)" d="m0 0 37 4 65 8 68 10 57 9 44 8 40 8 20 5 14 7 10 8 16 20 4 8 2 5v32l-12 18-8 10-10 9-10 6-16 4-5 1h-9l-17-3-22-8-52-25-35-17-17-8-22-12-25-13-23-13-23-12-22-12-26-14-16-9-13-10-4-5-1-2v-8l4-6z" fill="#FDED8A" />
                            <path transform="translate(417,44)" d="m0 0 17 1 11 3 14 7 10 9 8 9 11 18 26 48 16 31 10 19 18 36 14 29 13 28 19 39 13 28 5 16 1 6v11l-3 3h-10l-9-4-9-7-10-9-8-7-26-26-8-7-25-25-8-7-63-63-7-8-21-21-7-8-14-14-7-8-11-12-11-15-8-17-3-11v-11l3-12 5-13 10-14 10-9 11-7 11-4z" fill="#FDED8A" />
                            <path transform="translate(1612,45)" d="m0 0h23l12 3 14 7 10 8 7 8 8 14 4 11 2 16-2 13-5 12-9 14-8 10-14 15-11 12-11 11-7 8-15 15-1 2h-2v2h-2l-2 4-15 15-1 2h-2l-2 4-20 20-8 7-24 24-8 7-26 26-8 7-13 13-8 7-10 10-8 7-7 4-5 1h-8l-5-4-2-4 1-11 11-26 19-40 16-34 12-25 19-39 13-26 11-20 6-12 12-22 7-13 11-20 10-16 11-12 8-7 10-5z" fill="#FDED8A" />
                            <path transform="translate(362,1132)" d="m0 0h18l5 5 2 4v6l-5 8-7 6-19 10-17 10-25 13-23 13-34 18-22 12-33 17-39 19-28 13-19 9-24 10-19 5h-19l-12-3-12-6-10-9-6-7-14-21v-38l7-10 10-14 7-7 13-9 16-5 31-7 70-13 79-12 102-14z" fill="#FDED8A" />
                            <path transform="translate(1021,1600)" d="m0 0h9l5 3 4 9 8 37 20 111 12 75 10 71 3 22v13l-2 12-5 12-9 13-8 9-10 7-13 5-17 3-16-1-14-4-11-6-9-8-9-13-6-12-3-11v-31l6-45 12-82 8-46 9-48 9-47 6-28 5-13z" fill="#FDED8A" />
                            <path transform="translate(221,634)" d="m0 0 2 1v3l-2 1 1 4-7 2-5 16-1 9 2 3 2 13-2 2-1-1v8h-7l-8-14-2-6v-6l7-14 11-13 5-5z" fill="#FDD86E" />
                            <path transform="translate(313,621)" d="m0 0h7l-2 2-8 2-26 1-10 1h-16v-1l46-4z" fill="#FDDF7B" />
                            <path transform="translate(471,606)" d="m0 0h7l-4 2-10 2-8-1 3-2z" fill="#FDEDB9" />
                        </svg>
                        <h1>{average_rate}</h1></span>
                    <p>Peopl Rate This : <strong> {result.peopl_rate_num}</strong></p>
                </span>
            )
        }
    } else {
        rating_res = () => {
            return "No one Rate This Item"
        }
    }

    function handelShowResRate() {
        setdetail_rateVisible(!detail_rateVisible);

    }
    return (
        <>
            <div className="ratting_ra">
                {rating_res()}
                <button className="btn_check_rate" onClick={handelShowResRate}><p>Check</p> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></button>
                { detail_rateVisible&&
                    <div className="CheckResult">
                        <span className="totale_peopl_rate"><strong> Total number of people who rated this item : </strong> {result.peopl_rate_num}</span>
                        <span><strong>Overall Satisfaction:</strong> We asked users to rate their overall experience at this location. <span> <strong>  {(result.q1) ? 'Average Of rating for this question = ' + result.q1 + " / 5 " : "No one rate this question"} </strong></span> </span>
                        <span><strong>Ambiance:</strong> We requested feedback on the atmosphere and ambiance of the establishment. <span> <strong>  {(result.q2) ? 'Average Of rating for this question = ' + result.q2 + " / 5 " : "No one rate this question"} </strong></span> </span>
                        <span><strong>Cleanliness:</strong> Users were asked to evaluate the cleanliness and maintenance of the space. <span> <strong>  {(result.q3) ? 'Average Of rating for this question = ' + result.q3 + " / 5 " : "No one rate this question"} </strong></span> </span>
                        <span><strong>Customer Service:</strong> We inquired about the quality of service received by the users. <span> <strong>  {(result.q4) ? 'Average Of rating for this question = ' + result.q4 + " / 5 " : "No one rate this question"} </strong></span> </span>
                        <span><strong>Value for Money:</strong> We assessed whether users felt the experience was worth the price. <span> <strong>  {(result.q5) ? 'Average Of rating for this question = ' + result.q5 + " / 5 " : "No one rate this question"} </strong></span> </span>
                        <span><strong>Accessibility:</strong> We asked users how accessible they found the location, including aspects like transportation and parking options. <span> <strong>  {(result.q6) ? 'Average Of rating for this question = ' + result.q6 + " / 5 " : "No one rate this question"} </strong></span> </span>
                        <span><strong>Amenities:</strong> Users were asked about their satisfaction with amenities, such as restrooms, seating, and other facilities. <span> <strong>  {(result.q7) ? 'Average Of rating for this question = ' + result.q7 + " / 5 " : "No one rate this question"} </strong></span> </span>
                        <span className="q_y_n"> <h5>Recommendation:</h5> We asked users if they would recommend this place to others.
                            <strong>{(result.peopel_say_yes_for_10) ? result.peopel_say_yes_for_10 + " Answered By Yes" : " No one answered This question"} </strong>
                            <strong>{(result.peopel_say_no_for_10) ? result.peopel_say_no_for_10 + " Answered By No" : " No one answered This question"} </strong>
                        </span>
                        <span className="q_y_n"> <h5>Return Visit:</h5> We asked users if they would consider returning here in the future.
                            <strong>{(result.peopel_say_yes_for_11) ? result.peopel_say_yes_for_11 + " Answered By Yes" : " No one answered This question"} </strong>
                            <strong>{(result.peopel_say_no_for_11) ? result.peopel_say_no_for_11 + " Answered By No" : " No one answered This question"} </strong>
                        </span>
                        {/* <span><strong>Amenities:</strong> Users were asked about their satisfaction with amenities, such as restrooms, seating, and other facilities. <span> <strong>  {(result.q7) ? 'Average Of rating for this question = '+ result.q7 +" / 5 " : "No one rate this question"} </strong></span> </span> */}
                    </div>
                }
            </div>
        </>
    );
}

export default result_ratting;