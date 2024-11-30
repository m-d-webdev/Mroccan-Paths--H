import React, { useRef, useState} from "react";
import { storage, db } from "../config/firebase.js"
import { v4 } from "uuid";
import { updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import "../css/addProfilePic.css";
import { useParams, useNavigate } from 'react-router-dom';
import SVGInthik from "./11423313-removebg-preview.png"

function AddProfilePic() {
    const { id } = useParams();
    const navigate = useNavigate();
    const CNT_profilePic_REF = useRef(null);
    const [imgFile, setImgFile] = useState('');

    async function handelUploadImg() {
        let loaderContainer = document.createElement("div");
        let loaderElemParent = document.createElement("div");
        let loader = document.createElement("div");
        loaderContainer.className = "cntLoader";
        loaderElemParent.className = "LoaderParent";
        loader.className = "loader2";
        loaderElemParent.appendChild(loader);
        loaderContainer.appendChild(loaderElemParent);
        CNT_profilePic_REF.current.appendChild(loaderContainer);
        if (imgFile == null) return;
        let imgPath = `imgs/${imgFile.name + v4()}`;
        const imgRef = ref(storage, imgPath);
        await uploadBytes(imgRef, imgFile).then(async (res) => {
            await updateDoc(doc(db, "users", id), {
                photoUrl: imgPath
            }).then(() => {
                navigate(`/SignUp_last_step`);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
            <div className="CNT_profilePic" ref={CNT_profilePic_REF}>
                <form action="" onSubmit={e => e.preventDefault()}>
                    <h1>Add  Picture For Your Profile </h1>
                    <img src={imgFile ? URL.createObjectURL(imgFile) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" className="DefaultImg" />
                    <input type="file" onChange={((e) => { setImgFile(e.target.files[0]) })} style={{ display: "none" }} name="profilePic" accept="image/*" id="profilePic" />
                    <label htmlFor="profilePic" className="lblSelectProfPic"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>Select From Your Device</label>
                    {
                        imgFile && (
                            <button id="btnSave" onClick={handelUploadImg}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" /></svg> Save</button>
                        )

                    }

                    <button className="btnSkipAddingProfile" onClick={() => navigate(`/SignUp_last_step`)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" /></svg> Skip</button>

                </form>
              <img className="Svg_hane" src={SVGInthik} alt="" />
            </div>
    )
}

export default AddProfilePic