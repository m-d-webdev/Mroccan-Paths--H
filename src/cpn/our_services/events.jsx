import { useState, useRef, useEffect } from "react";
import './css/events.css'

import { v4 } from "uuid";

function events() {

    const moroccanEventsAndFestivals = [
        {
            name: "Marrakech International Film Festival",
            img:"https://i.pinimg.com/736x/6e/ad/89/6ead89a40519276a0abafc40639a6f2a.jpg",
            date: "December",
            location: "Marrakech",
            description: "A prestigious film festival that showcases international and Moroccan cinema, attracting filmmakers and enthusiasts from around the world.",
            significance: "Recognized for promoting Moroccan culture and the film industry.",
            activities: [
                "Screenings of films from various genres",
                "Workshops and discussions with filmmakers",
                "Awards ceremony celebrating cinematic achievements"
            ],
            culturalContext: "Offers a platform for emerging filmmakers and strengthens Morocco's position in the global film community."
        },
        {
            name: "Fez Festival of World Sacred Music",
            img:"https://i.pinimg.com/564x/f5/a8/c8/f5a8c83a8baef1e0d6611cc7e93c73bf.jpg",
            date: "June",
            location: "Fez",
            description: "A cultural event that celebrates music and spirituality, featuring artists from various traditions and backgrounds performing in the historic city of Fez.",
            significance: "Promotes dialogue between cultures through music.",
            activities: [
                "Concerts featuring diverse musical traditions",
                "Workshops on sacred music and spirituality",
                "Art exhibits and discussions on cultural heritage"
            ],
            culturalContext: "Held in a UNESCO World Heritage site, it emphasizes the importance of cultural diversity."
        },
        {
            name: "Essaouira Gnaoua and World Music Festival",
            img:"https://i.pinimg.com/564x/02/6c/84/026c84a8d78b477e7fd5fd7b7c723596.jpg",
            date: "June",
            location: "Essaouira",
            description: "A vibrant festival that combines Gnaoua music with global genres, bringing together musicians and visitors in the coastal city of Essaouira.",
            significance: "Celebrates the Gnaoua musical heritage and promotes cultural exchange.",
            activities: [
                "Live performances by Gnaoua and international artists",
                "Music workshops and jam sessions",
                "Cultural discussions on the origins and influences of Gnaoua music"
            ],
            culturalContext: "Highlights the city's historic role as a melting pot of cultures and music."
        },
        {
            name: "Moussafir Festival",
            img:"https://i.pinimg.com/564x/26/f2/ee/26f2eeb3b4f2341e49e48e7f8fd8c84b.jpg",
            date: "August",
            location: "Various cities",
            description: "A celebration of traditional Moroccan cuisine and culture held in various cities, featuring cooking workshops, tastings, and cultural performances.",
            significance: "Promotes Moroccan culinary heritage and local ingredients.",
            activities: [
                "Cooking demonstrations by renowned chefs",
                "Tasting sessions of traditional Moroccan dishes",
                "Cultural performances showcasing Moroccan arts"
            ],
            culturalContext: "Encourages community involvement and appreciation of local cuisine."
        },
        {
            name: "Amazigh New Year (Yennayer)",
            img:"https://i.pinimg.com/736x/c8/f6/9e/c8f69eb37c557f4e2d1885a06dc9421c.jpg",
            date: "January 13",
            location: "Across Morocco",
            description: "Celebrated by the Berber community, this festival marks the start of the Amazigh calendar year with music, dance, and traditional foods.",
            significance: "Recognizes and honors Amazigh culture and heritage.",
            activities: [
                "Traditional music and dance performances",
                "Feasts featuring traditional Amazigh dishes",
                "Cultural exhibits showcasing Amazigh art and history"
            ],
            culturalContext: "Emphasizes the importance of preserving Amazigh traditions in modern Morocco."
        },
        {
            name: "Festival of Roses",
            img:"https://i.pinimg.com/564x/44/3e/98/443e9848e85bec00f0bc9a871f7484d9.jpg",
            date: "May",
            location: "Dades Valley",
            description: "Held in the Dades Valley, this festival celebrates the rose harvest with parades, crafts, and local cuisine, showcasing the region's natural beauty.",
            significance: "Promotes local economy and tourism through rose production.",
            activities: [
                "Parades featuring traditional costumes",
                "Crafts and local products for sale",
                "Workshops on rose cultivation and distillation"
            ],
            culturalContext: "Highlights the significance of roses in Moroccan culture and their use in cosmetics and cuisine."
        },
        {
            name: "Timitar Festival",
            img:"https://www.lopinion.ma/photo/art/default/75051794-52481015.jpg?v=1693946123",
            date: "July",
            location: "Agadir",
            description: "An annual festival in Agadir celebrating Amazigh culture and music, featuring performances by local and international artists.",
            significance: "Promotes Amazigh cultural identity and awareness.",
            activities: [
                "Live concerts with Amazigh musicians",
                "Art exhibits showcasing Amazigh heritage",
                "Workshops on traditional crafts"
            ],
            culturalContext: "Encourages pride in Amazigh culture and fosters intercultural dialogue."
        },
        {
            name: "Gnaoua World Music Festival",
            img:"https://i.pinimg.com/736x/02/6c/84/026c84a8d78b477e7fd5fd7b7c723596.jpg",
            date: "June",
            location: "Essaouira",
            description: "Held in Essaouira, this festival focuses on Gnaoua music and its African roots, bringing together musicians from around the globe.",
            significance: "Promotes the global appreciation of Gnaoua music.",
            activities: [
                "Performances by Gnaoua masters and international artists",
                "Workshops on Gnaoua music and instruments",
                "Cultural discussions on the history and influence of Gnaoua"
            ],
            culturalContext: "Celebrates the fusion of African and Moroccan musical traditions."
        },
        {
            name: "Sahara International Film Festival",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkroNnzuPYqecFHtYd6cy5-L3LwbfESpqEw&s",
            date: "October",
            location: "Dakhla",
            description: "A film festival in the Sahara that promotes cultural exchange and showcases films from and about Africa.",
            significance: "Focuses on African cinema and storytelling.",
            activities: [
                "Film screenings from various African countries",
                "Panel discussions with filmmakers and critics",
                "Workshops on film production and storytelling"
            ],
            culturalContext: "Aims to highlight the unique narratives and experiences of African cultures."
        },
        {
            name: "National Festival of Popular Arts",
            img:"https://marrakechr.wpenginepowered.com/wp-content/uploads/2013/07/998878_10151744916916321_575613063_n.jpg",
            date: "July",
            location: "Marrakech",
            description: "A vibrant festival celebrating Moroccan folk music and dance, featuring performances from various regions.",
            significance: "Preserves and promotes traditional Moroccan arts.",
            activities: [
                "Live performances of folk music and dance",
                "Artisan crafts exhibitions",
                "Workshops on traditional Moroccan instruments"
            ],
            culturalContext: "Encourages the appreciation of Morocco's diverse cultural heritage."
        },
        {
            name: "Marrakech Red City Festival",
            img:"https://www.shutterstock.com/image-photo/marrakech-red-city-morocco-260nw-1547355062.jpg",
            date: "March",
            location: "Marrakech",
            description: "A cultural event that celebrates music, art, and gastronomy in the iconic Red City.",
            significance: "Brings together local and international artists and chefs.",
            activities: [
                "Concerts featuring various genres",
                "Food tastings from renowned chefs",
                "Art installations and exhibitions"
            ],
            culturalContext: "Showcases Marrakech as a cultural hub, blending tradition with modernity."
        },
        {
            name: "Festival of Amazigh Culture",
            img:"https://www.quid.ma/uploads/articles/large/5e15ac4d4c16e.jpg",
            date: "May",
            location: "Various cities",
            description: "A nationwide festival celebrating Amazigh culture, language, and traditions through various artistic expressions.",
            significance: "Promotes the Amazigh identity and heritage.",
            activities: [
                "Music and dance performances",
                "Cultural workshops on Amazigh crafts and traditions",
                "Exhibits showcasing Amazigh art and history"
            ],
            culturalContext: "Highlights the importance of recognizing and preserving Amazigh contributions to Moroccan society."
        },
        {
            name: "Morocco International Jazz Festival",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJzczn2H69gtTlH1-T4Pcslcd6A9P_7KxbQ&s",
            date: "October",
            location: "Casablanca",
            description: "An annual festival featuring local and international jazz musicians, celebrating the genre's diverse influences.",
            significance: "Promotes jazz as a universal language and cultural exchange.",
            activities: [
                "Jazz concerts with renowned artists",
                "Workshops and masterclasses in jazz music",
                "Jam sessions open to the public"
            ],
            culturalContext: "Encourages the fusion of Moroccan music with jazz influences, reflecting a modern cultural scene."
        },
        {
            name: "Festival of the Almond Blossom",
            img:"https://www.scent-of-sicily.com/wp-content/uploads/2018/03/almond-blossom-agrigento.jpg",
            date: "February",
            location: "Tinghir",
            description: "Celebrated in the Dades Valley, this festival marks the blooming of almond trees with cultural and artistic events.",
            significance: "Promotes local agriculture and tourism.",
            activities: [
                "Cultural performances celebrating local traditions",
                "Workshops on almond cultivation and uses",
                "Culinary tastings featuring almond-based dishes"
            ],
            culturalContext: "Highlights the natural beauty of the region and its agricultural significance."
        },
        {
            name: "Tanger International Jazz Festival",
            img:"https://f2.hespress.com/wp-content/uploads/2022/07/Tanjazz-2022.jpg",
            date: "August",
            location: "Tangier",
            description: "A jazz festival that attracts international artists, showcasing a blend of jazz styles and influences.",
            significance: "Strengthens Tangier's position as a cultural and artistic city.",
            activities: [
                "Live jazz performances from global artists",
                "Local food stalls offering Moroccan cuisine",
                "Art exhibitions featuring local artists"
            ],
            culturalContext: "Reflects the city's rich cultural history and its role as a meeting point for diverse cultures."
        },
        {
            name: "Festival of the Sahara",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQcSRtVt330GTsAA4CjT_U43qoMFspxfURw&s",
            date: "November",
            location: "Merzouga",
            description: "A unique festival celebrating Saharan culture, music, and traditions, attracting locals and tourists alike.",
            significance: "Promotes awareness of Saharan heritage and tourism.",
            activities: [
                "Camel races and traditional sports",
                "Saharan music and dance performances",
                "Craft markets showcasing local artisans"
            ],
            culturalContext: "Highlights the unique lifestyle and culture of the Saharan regions of Morocco."
        },
        {
            name: "Sufi Music Festival",
            img:"https://cdn.tourradar.com/s3/tour/1500x800/108831_5b5f25ec.jpg",
            date: "September",
            location: "Marrakech",
            description: "A spiritual festival dedicated to Sufi music and poetry, featuring performances by Sufi musicians and poets.",
            significance: "Celebrates spiritual traditions and promotes peace through music.",
            activities: [
                "Performances by renowned Sufi musicians",
                "Poetry readings and spiritual discussions",
                "Workshops on Sufi musical traditions"
            ],
            culturalContext: "Encourages understanding and appreciation of Sufism within Moroccan culture."
        },
        {
            name: "Festival of Cinema in the Sahara",
            img:"https://www.humanrightsfilmnetwork.org/sites/default/files/styles/slick_media/public/2010_Fisahara_PaisajeyCine-19.jpg?itok=bW-Xg68Q",
            date: "January",
            location: "Dakhla",
            description: "A film festival focusing on cinema from the Sahara region, showcasing local talent and stories.",
            significance: "Promotes film as a medium for cultural expression.",
            activities: [
                "Screenings of films from Saharan filmmakers",
                "Panel discussions with filmmakers and critics",
                "Workshops on filmmaking techniques"
            ],
            culturalContext: "Highlights the importance of storytelling in preserving Saharan culture."
        },
        {
            name: "National Olive Festival",
            img:"https://i.ytimg.com/vi/kGslThYmnVA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgVihFMA8=&rs=AOn4CLAnAZB8yQQKp7llbChyhn5FPvJvJA",
            date: "November",
            location: "Meknes",
            description: "Celebrates Morocco's olive harvest with a focus on olive oil production and culinary uses.",
            significance: "Promotes local agriculture and cuisine.",
            activities: [
                "Tastings of various olive oils and products",
                "Workshops on olive cultivation and oil production",
                "Culinary demonstrations featuring olives"
            ],
            culturalContext: "Emphasizes the role of olives in Moroccan cuisine and the economy."
        }
    ];



    return (
        <>
            <div className="cnt-event-page">
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(449)" d="m0 0h223v3l18 12 13 10 9 9 7 10 5 12 3 13 1 15 1 137h588l1-143 2-14 5-15 6-11 10-11 8-7 28-18v-2h223v4l20 11 11 7 11 10 5 5 9 11 6 13 2 9 1 12 1 139h160l25 2 24 4 18 6 16 7 16 9 13 9 13 11 5 4v2h2l7 8 9 11 9 14 9 16 8 19 7 23 2 13 1 14 1 550v826l-1 68-2 31-4 23-8 26-8 18-10 19-8 12-10 14-11 12-9 9-17 13-14 9-19 10-20 8-18 6-1 1h-1660l1-2-18-6-16-7-23-11-16-11-14-12-12-12-9-11-11-15-11-18-11-23-7-23-5-25-2-25-1-38v-1406l1-23 4-21 9-25 8-17 9-15 12-16 14-15 11-10 10-7 16-10 17-9 17-6 16-4 22-3 13-1h164l1-100 1-46 3-16 5-9 11-13 6-7 13-10 13-8 16-9zm1 1m220 0m925 0m2 1m-1078 96-31 1-1 2 1 269h125l15-1v-269l-1-1-55-1zm919 0-25 1v263l1 7 19 1h116l15-1 2-1-1-269zm-1210 222-22 1-15 3-16 8-9 6-9 8-9 12-8 16-4 20-1 60v197l1 41 611 1h149l1e3 -2 12-1 1-34v-268l-4-14-6-14-8-11-11-11-14-9-13-5-9-2-10-1-26-1h-142l-2 6 1 7v11l-3 41-3 15-8 16-10 14-4 4v2h-2l-4 4v2l-4 2-10 7-14 7-13 4-18 3-29 2-37 1h-87l-25-2-17-4-17-9-11-9-8-8-11-15-6-13-5-23-1-14-1-50-31-1h-559v19l-1 38-2 18-6 17-6 12-9 12-10 11-11 8-8 4-15 4-21 3-49 2h-90l-30-2-18-4-17-7-11-7-11-9-9-9-10-15-8-16-3-11-1-7-1-59-1-1-66-1zm-91 468-1 1-1 833v188l1 33 3 26 5 19 7 14 12 17 11 11 15 9 13 5 12 3 15 1h1564l35-1 15-2 15-6 12-7 4-3v-2l4-2 4-4v-2h2l9-13 8-15 5-17 3-19 1-12 1-989v-65l-113-1z" />
                        <path transform="translate(992,916)" d="m0 0h10l13 3 10 5 10 9 9 13 8 14 41 82 13 28 22 44 11 23 12 25 5 5 10 3 146 21 44 7 44 8 15 5 9 5 8 7 6 9 4 13 1 4v12l-3 10-7 11-9 10-7 8-11 12-4 4h-2v2h-2v2h-2l-2 4-8 7-17 17-8 7-18 18h-2l-1 3-8 7-7 7-8 7-11 11h-2v2h-2v2l-8 7-9 9-8 7-9 9-16 14-2 4 1 10 15 89 16 85 9 46 2 18v14l-3 10-6 10-9 10-9 6-10 5-10 2-9-1-15-5-23-10-41-21-31-17-29-15-18-10-23-12-36-18-19-10h-9l-19 11-45 23-23 12-37 19-22 12-16 8-27 14-16 8-24 10-7 2h-11l-13-5-10-7-10-10-6-9-3-9v-20l8-45 6-30 7-41 9-48 8-46 7-30-4-8-26-26-8-7-21-21-8-7-21-21-8-7-9-9-8-7-17-17-3-2v-2l-4-2-22-22-4-3v-2h-2l-7-8-11-12-8-13-4-13v-9l4-14 4-8 10-11 14-7 16-4 61-10 74-11 51-8 44-6 10-3 5-4 6-13 8-16 7-16 24-48 16-33 14-30 8-16 13-25 5-10 8-14 10-13 11-8 9-4zm4 166-5 8-8 18-15 31-11 23-22 44-10 19-12 21-7 8v2l-10 3-36 6-72 11-48 6-26 3-2 1 2 4 6 7 8 7 6 6h2l1 3 8 7 14 14 8 7 10 10 8 7 12 12 8 7 26 26 9 11 9 14 2 7v13l-10 65-6 35-9 48-6 25v4l11-3 16-8 40-21 18-10 23-13 23-12 22-12 14-6 3-1h11l12 3 17 7 26 13 23 13 25 13 19 10 49 27 3 1-1-11-11-63-13-78-4-25v-12l3-11 7-11 6-6v-2h2l7-8 11-11 6-5v-2l4-2 39-39 8-7 15-15 2-1v-2l4-2 15-14 9-8 1-4-6-2-58-7-67-9-45-7-10-3-8-6-10-13-10-18-10-20-10-19-16-32-11-23-8-17-10-19-6-9z" />
                        <path transform="translate(183,2044)" d="m0 0v3h-3z" />
                        <path transform="translate(185,2045)" d="m0 0h2v2l-3-1z" />
                        <path transform="translate(1604)" d="m0 0 3 1-3 1z" />
                        <path transform="translate(1853,2047)" d="m0 0 3 1z" />
                        <path transform="translate(175,2047)" d="m0 0 2 1z" />
                        <path transform="translate(1374)" d="m0 0 2 1z" />
                        <path transform="translate(680)" d="m0 0 2 1z" />
                        <path transform="translate(676)" d="m0 0 2 1z" />
                        <path transform="translate(187,2047)" d="m0 0" />
                        <path transform="translate(1376,1)" d="m0 0" />
                        <path transform="translate(1608)" d="m0 0" />
                        <path transform="translate(1601)" d="m0 0" />
                        <path transform="translate(673)" d="m0 0" />
                    </svg>
                    <h2> Events & Festivals</h2>
                </span>

                <div className="cntInroService">
                    <p>Explore Morocco's vibrant culture through its unique events and festivals. From traditional celebrations to modern gatherings, this section highlights the best of Moroccan arts, music, and customs, offering a glimpse into the country's festive spirit.</p>
                    <img src="imgs/Events-cuate.png" alt="" />
                </div>
                <div className="cntListEvents">
                    {
                        moroccanEventsAndFestivals.map(event => (
                            <div className="evet-card">
                                <h1>{event.name}</h1>
                                <img src={event.img} alt="" />
                                <span className="time_locat">
                                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>{event.location}</p>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>{event.date}</p>
                                </span>
                                <p className="descEvent">{event.description}</p>
                                <p className="descEvent"><strong>Significance :</strong>{event.significance}</p>
                                <span className="descActivites"><strong>Activities :</strong>
                                    {event.activities.map((activity, index) => (<h2 key={index}>- {activity},</h2>))}
                                </span>
                                <p className="descEvent"><strong>Cultural Context :</strong>{event.culturalContext}</p>
                                <button className="btnSaveAsWantToGo"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>Save as you want to go</button>
                            </div>
                        ))
                    }
                </div>
                <button className="btnLoadMore">Show More</button>
            </div>
        </>
    )
}

export default events;