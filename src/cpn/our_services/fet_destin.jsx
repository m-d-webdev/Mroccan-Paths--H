import { useState, useRef, useEffect } from "react";
import './css/fet_destin.css'

import { auth, db  ,storage} from "../../config/firebase.js"
import { getDocs, setDoc, addDoc, doc, collection, getDoc } from "firebase/firestore";
import { getDownloadURL , ref } from "firebase/storage";
import TenDone from "../single_cmps/TenDone.jsx";
import BtnRate from "../single_cmps/button_rate.jsx";
import Result_rating from "../single_cmps/result_rating.jsx";
import { v4 } from "uuid";

function s1() {
    const cnt_s1_ref = useRef(null);
    const [isTenDoneVisible, setTenDoneVisible] = useState(false);
    const [isDone, setIsDone] = useState({
        isDone: true,
        Message: ""
    });
    const [s1_des_data ,sets1_des_data] = useState([]);

    function ToggleTenVisibility() {
        setTenDoneVisible(!isTenDoneVisible);
    };
    useEffect(()=>{
        Get_returedDetination_data()
    },[])
    async function Get_returedDetination_data() {
        let loaderContainer = document.createElement("div");
        let loaderElemParent = document.createElement("div");
        let loader = document.createElement("div");
        loaderContainer.className = "cntLoader";
        loaderElemParent.className = "LoaderParent";
        loader.className = "loader2";
        loaderElemParent.appendChild(loader);
        loaderContainer.appendChild(loaderElemParent);
        cnt_s1_ref.current.appendChild(loaderContainer);

        await getDocs(collection(db, 'featured_destinationsDATA')).then(
            res => {
                let feat_des_data = res.docs.map(d => ({ ...d.data(), id: d.id }))
                feat_des_data.forEach( async (elem) =>{
                    await getDownloadURL(ref(storage ,elem.img_path)).then(res =>{
                        elem['img_path']=res
                    });
                      let elem_rate=  await getDoc(doc(db ,"rattings" ,`rateOf${elem.id}`));
                      if(elem_rate.exists()){
                        elem_rate = elem_rate.data();
                        elem['ratting_data'] = elem_rate;
                    }else{
                        elem['ratting_data'] ={};
                    }
                    sets1_des_data(old => [...old ,elem] )
                    cnt_s1_ref.current.removeChild(loaderContainer);
                })
                 }
           )
        }

    // for(var i =0 ; i<All_des_arrau.length ; i++){
    //     if(SendArrayData(All_des_arrau[i])){
    //         continue;
    //     }
    // }

    // async function SendArrayData(o){   
    //     let id_obj = o.name.trim().replace(/\s+/g ,"_")+Math.random()*100*12;
    //     console.log(id_obj);

    //     await setDoc(doc(db ,"featured_destinationsDATA" ,id_obj ) , o).then(res =>{
    //         console.log(res);
    //         return true;
    //     }).catch(er=>{
    //         console.log(er);

    //     })
    // }

    var old_rated_elemens = localStorage.getItem('ratedItems');
    if(old_rated_elemens != null){
        old_rated_elemens = JSON.parse(old_rated_elemens) ;
    }else{
        old_rated_elemens =[];
    }


    return (
        <>
            <div className="CNT-service1" ref={cnt_s1_ref}>
                {isTenDoneVisible && <TenDone Done={isDone} setTenDoneVisible={ToggleTenVisibility} />}

                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(1791,637)" d="m0 0h13l11 4 10 7 7 6 5 9 2 5 1 7v825l-1 50-2 9-6 8-9 7-17 10-186 93-21 10-19 10-86 43-23 11-40 20-17 9-16 8-21 10-19 10-23 12-22 10-10 5-14 4-4 1h-11l-16-6-16-8-30-16-46-25-22-12-28-15-44-24-78-42-29-16-32-17-54-29-22-12-71-38-16-8-27-15-17-9-8 1-19 10-22 12-56 31-21 12-11 6-21 11-23 13-21 11-22 12-23 12-23 13-24 13-20 11-23 13-23 12-22 12-20 10-16 9-14 7-17 9-18 7-9 2h-9l-15-8-7-6-8-11-2-7-1-13-1-29-1-74v-664l1-88 1-17 4-8 5-6 19-13 25-15 16-10 19-12 25-15 22-13 15-9 19-12 52-30 19-10 13-4h13l16 8 9 9 8 14 2 7 1 12-3 7-5 8-3 4h-2l-2 4-10 8-11 7-15 9-14 8-18 11-24 14-26 16-14 8-20 12-27 15-19 11-1 1-1 102v662l17-8 24-14 27-14 23-13 29-16 46-25 23-13 44-24 27-15 19-10 18-10 26-14 19-10 18-10 46-25 13-6 10-1 14 4 26 12 18 10 16 8 22 12 25 14 32 17 23 13 25 13 22 12 29 15 22 12 32 17 26 14 23 13 25 13 22 12 27 14 23 13 14 7 12 7 14 7 44 24 12 7 10 4 9-1 19-10 23-12 32-16 29-15 16-8 31-15 19-10 16-8 21-10 19-10 104-52 27-14 23-11 41-20 24-11 17-9 1-1 1-686 1-65-22 11-15 9-18 10-28 16-27 15-24 13-16 8-19 7h-15l-10-5-10-10-8-13-4-10-1-5v-9l6-11 7-8 8-7 19-12 22-13 25-15 24-15 17-10 16-10 15-9 29-17 15-9 28-17 15-7z" />
                        <path transform="translate(998,207)" d="m0 0h51l38 4 28 5 24 7 22 8 21 9 23 11 27 16 13 9 19 14 13 11 8 7 15 14 12 12 6 7v2h2l15 20 13 19 10 16 10 18 10 21 8 20 9 27 7 27 4 22 4 33 1 18v17l-2 24-3 28-4 24-6 25-9 31-8 22-8 21-16 36-10 19-7 14-7 12-9 16-12 19-7 11-11 17-13 18-8 11-13 19-9 11-11 14-13 15-12 14-9 11-12 13-7 9-12 13-3 4h-2l-2 4-21 21-6 7-16 16-8 7-13 13h-2v2h-2v2l-8 7-12 11-12 10-19 14-14 9-8 1h-8l-15-8-16-12-15-13-11-10-8-7-7-7-8-7-13-12-28-28-7-8-8-8-7-8-9-10-7-8-10-11-9-11-11-12-9-11-12-14-13-17-10-13-13-18-12-17-22-33-17-28-15-27-16-32-13-29-10-26-11-33-7-27-7-33-4-32-1-12v-45l4-35 5-27 7-25 10-29 9-21 13-26 10-17 9-13 11-16 13-16 8-10 8-8 7-8 7-7 8-7 10-9 19-14 14-10 21-13 16-9 22-11 23-9 24-8 24-6 30-5zm7 86-24 2-28 5-22 6-21 8-20 9-19 10-11 7-14 10-16 12-8 8-8 7-17 17-11 14-6 8-10 15-12 21-14 29-8 21-6 24-5 27-2 14-1 14v23l2 24 6 35 7 28 12 36 8 20 15 33 12 23 14 24 12 19 16 24 13 19 21 28 10 13 13 16 8 10 13 15 9 10 9 11 16 17 9 10 8 8 7 8 32 32h2v2l8 7 12 12 6 5 4-1 17-16 8-8 8-7 19-19 5-6 22-22 7-8 8-8 8-10 2-4h2l9-11 10-11 11-14 10-12 8-10 11-14 10-13 7-10 9-13 10-15 15-23 21-35 16-32 10-22 8-20 12-36 5-19 5-25 4-31 1-17v-13l-2-25-4-29-8-32-7-19-13-29-14-24-10-15-9-12-12-14-13-13-8-7-11-9-13-10-20-13-16-9-24-12-30-11-22-6-25-4-26-2z" />
                    </svg>
                    <h2>Featured Destinations</h2>
                </span>
                
                <div className="cntInroService">
                    <p>Discover Morocco’s top attractions with Featured Destinations. From Marrakech’s lively markets to the Sahara’s endless dunes, we highlight must-see spots for every traveler. Explore Morocco’s beauty and culture with our curated guide to the best places to visit.</p>
                    <img src="imgs/20945945.jpg" alt="" />
                </div>

                <p className="introText">
                    Morocco is known for its rich history, diverse landscapes, and vibrant culture, offering many featured destinations that attract travelers from around the world. Here are some of the most them:
                </p>
                <div className="cntFetrDesServices">
                    {s1_des_data &&
                        s1_des_data.map(el => (
                            <div className="FetDesn_Contaoiner" key={el.id} id={el.id}>
                                <h1 className="FetDesName">{el.name}</h1>
                                <img src={el.img_path} alt="" />
                                <p className="descThisEFetDes">{el.desc}</p>
                                <p className="AttractionsText"><strong> Key Attractions: </strong>{el.Attractions}</p>
                                <span className="OrderInCities">
                                    <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" >
                                        <path d="M4 15l3 3l3 -3"></path>
                                        <path d="M7 6v12"></path>
                                        <path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z"></path>
                                        <path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M19 5v3a2 2 0 0 1 -2 2h-1.5"></path>
                                     </svg>
                                     <p>{el.order} </p>
                                </span>
                                <Result_rating result={el.ratting_data} elemId={el.id} />
                                <button className="btnLearnMoreAboutDesten blue-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320q17 0 29.5-12.5T522-362q0-17-12.5-29.5T480-404q-17 0-29.5 12.5T438-362q0 17 12.5 29.5T480-320Zm-30-124h60q0-19 1.5-30t4.5-18q4-8 11.5-16.5T552-534q21-21 31.5-42t10.5-42q0-47-31-74.5T480-720q-41 0-72 23t-42 61l54 22q7-23 23-35.5t37-12.5q24 0 39 13t15 33q0 17-7.5 29.5T500-558q-17 14-27 25.5T458-510q-5 10-6.5 24.5T450-444Zm30 258q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>Learn more</button>
                              { (!old_rated_elemens.includes(el.id)) ?
                                  <BtnRate collectionName={"featured_destinationsDATA"} elemId={el.id}  />
                                :<p className="p_alreadyRated"> I have already rated This item </p>
                              }
                            </div>
                        ))
                    }

                </div>
                <button id="btnGetMore" className="blue-btn "> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>Load More</button>
            </div>
        </>
    )
}

export default s1;