import "../css/Home.css";
import {useState , useRef, useEffect } from "react";
import { storage } from '../config/firebase'
import { getDownloadURL, ref } from "firebase/storage";

function Home() {
    const MainHomeRef = useRef(null);
    const [isLoding , setLodding] = useState(true)

    useEffect(() => {
        if (MainHomeRef.current) {
            let imgsPaths = [];
            const get_imgs = async () => {
                let imgs_names = [
                    'b24', 'b1', 'b3', 'b4', 'b26', 'b22', 'b23', 'b20', 'b21', 'b25', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16', 'b17', 'b18'
                ]
                for (var i = 0; i < imgs_names.length; i++) {

                    await getDownloadURL(ref(storage, `main_imgs/${imgs_names[i]}.jpg`)).then(res => {
                        imgsPaths.push(res);
                        if (i == imgs_names.length - 1) {
                            changeImg();
                            setLodding(false);
                        }
                    });

                }

            }
            get_imgs();

            let BackGroImgs = document.querySelector(".cntBackImgs img");

            function sleep(time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            async function changeImg() {
                for (let i = 0; i < imgsPaths.length; i++) {
                    BackGroImgs.src = imgsPaths[i];
                    setTimeout(() => {
                        BackGroImgs.classList.remove("animate__fadeOut")
                        BackGroImgs.classList.add("animate__fadeIn")
                    }, 400)
                    setTimeout(() => {
                        BackGroImgs.classList.remove("animate__fadeIn")
                        BackGroImgs.classList.add("animate__fadeOut")
                    }, 9000)
                    await sleep(10000);
                    if (i == imgsPaths.length - 1) {
                        changeImg();
                    }
                }
            }
        }
    }, [])

    document.title = "Home";
    return (
        <>

            <div className="homeCMP" ref={MainHomeRef}>
            
               
                <div className="cntBackImgs ">
                    <img alt="" className="animate__animated " />
                </div>
                <h1> Welocome to Moroccan Paths !</h1>
                <p>Discover the beauty, culture, and adventure of Morocco like never before! From the bustling streets of Marrakech to the serene landscapes of the Atlas Mountains, Morocco offers a rich blend of ancient traditions and modern attractions. Whether you're seeking adventure in the Sahara Desert, exploring the vibrant souks, or relaxing in a traditional riad, our travel guide is here to help you every step of the way. Plan your perfect Moroccan experience with our expert tips, curated itineraries, and insider recommendations for the best places to eat, stay, and explore.</p>
                <p>Start your journey through Morocco by choosing One of the services we provide . Whether you're looking for popular destinations, local insights, or detailed city guides, we have it all. Explore the charm of the countryside, find the best places to stay, or dive into the rich flavors of Moroccan cuisine. Select from the options on the side. and discover everything Morocco has to offers</p>
                {isLoding && <div className="loader3"></div>}
            </div>
        </>
    )
}
export default Home;