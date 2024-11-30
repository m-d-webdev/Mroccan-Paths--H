import React from 'react'
import { useRef, useState, useEffect } from 'react'
import "./css/TenDone.css"
import ReactDom from "react-dom"
function TinDone({ Done, setTenDoneVisible }) {
    const Done_ref = useRef(null);
    useEffect(
        () => {
            if (Done_ref.current) {
                let containerDone = document.querySelector(".cntTinDone");
                containerDone.classList.add("animate__fadeInUpBig");
                setTimeout(() => {
                    containerDone.classList.remove("animate__fadeInUpBig");
                    containerDone.classList.add("animate__fadeOutDownBig");
                    setTimeout(() => {
                        containerDone.classList.remove("animate__fadeOutDownBig");
                        setTenDoneVisible(false)
                    }, 200)
                }, 10000)

                let CNTErrorText = document.querySelector(".CNTErrorText");
                if (Done.Message != '' && !Done.isDone) {
                    let p = document.createElement("p");
                    p.className = 'TextoneError'
                    p.innerHTML = Done.Message;
                    CNTErrorText.appendChild(p)
                }
                
            }

        }, [Done_ref]
    )


  


    return ReactDom.createPortal(
        <>
            <div ref={Done_ref} className="cntTinDone animate__animated ">
                {Done.isDone && (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className='IConeDone' viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z" /></svg>
                        {Done.Message ?   <p className='TextoneDone'> {Done.Message}</p> : <p className='TextoneDone'> Action was successful </p>}

                    </>
                )}
                {!Done.isDone && (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className='IconError' viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" /></svg>
                        <div className="CNTErrorText"></div>
                    </>
                )

                }
            </div>
        </>
        ,document.getElementById("portals")
    )
}
export default TinDone;