import "./css/Language_Comminucation.css"
import { useState } from "react"
import { v4 } from "uuid";

function LanguComminucation() {
    const moroccanPhrases = {
        "Greetings and Politeness": {
            img: "imgs/3191351-removebg-preview.png",
            category: "Greetings and Politeness",
            phrases: [
                { english: "Hello", moroccan: "Salam", arabic: "سلام" },
                { english: "Good morning", moroccan: "Sbah lkhir", arabic: "صباح الخير" },
                { english: "Good evening", moroccan: "Mesa lkhir", arabic: "مساء الخير" },
                { english: "Good night", moroccan: "Layela sa ida", arabic: "ليلة سعيدة" },
                { english: "Please", moroccan: "Afak", arabic: "عفاك" },
                { english: "Thank you", moroccan: "Shukran", arabic: "شكرا" },
                { english: "You're welcome", moroccan: "Bla jmil", arabic: "بلا جميل" },
                { english: "Excuse me / Sorry", moroccan: "Smah liya", arabic: "سمح ليا" },
                { english: "Nice to meet you", moroccan: "Mtshrfin", arabic: "متشرفين" },
                { english: "How are you?", moroccan: "Kif dayr?", arabic: "كيف داير؟" },
                { english: "I’m fine, thank you", moroccan: "Ana bikhir, shukrin", arabic: "أنا بخير، شكرا" },
                { english: "See you later", moroccan: "Neshofek baad", arabic: "نشوفك بعد" },
                { english: "What’s up?", moroccan: "Ash khbar?", arabic: "آش خبر؟" },
                , { english: "Goodbye", moroccan: "Bslama", arabic: "بسلامة" },
                { english: "Yes", moroccan: "Iyeh", arabic: "إيه" },
                { english: "No", moroccan: "La", arabic: "لا" },
                { english: "Welcome", moroccan: "Marhba", arabic: "مرحبا" },
                { english: "Good luck", moroccan: "Hada ma yekhdem mzyan", arabic: "هذا ما يخدم مزيان" },
                { english: "Take care", moroccan: "Twahed felras", arabic: "توحّد فالرأس" },
                { english: "Enjoy your meal", moroccan: "Bessha", arabic: "بالشهاء" },
                { english: "Have a safe trip", moroccan: "Safra sa ida", arabic: "سفرة سعيدة" },
                { english: "Bless you (after sneezing)", moroccan: "Rahmat Allah", arabic: "رحمة الله" },
                { english: "Congratulations", moroccan: "Mabrouk", arabic: "مبروك" }
            ]
        },
        "Asking for Directions": {
            img: "imgs/8361304-removebg-preview.png",
            category: "Asking for Directions",
            phrases: [
                { english: "Where is the bathroom?", moroccan: "Fen kayn lhammam?", arabic: "فين كاين الحمام؟" },
                { english: "Where is the market?", moroccan: "Fen kayn soque?", arabic: "فين كاين سوق؟" },
                { english: "Can you help me?", moroccan: "Wesh te9dar t3awnni?", arabic: "واش تقدر تعاوني؟" },
                { english: "Is it near?", moroccan: "Wesh qrib?", arabic: "واش قريب؟" },
                { english: "Turn left", moroccan: "Dour lissar", arabic: "دور لليسار" },
                { english: "Turn right", moroccan: "Dour limin", arabic: "دور لليمين" },
                { english: "Go straight", moroccan: "Imshi nishan", arabic: "امشي نيشان" },
                { english: "How far is it?", moroccan: "Shhal b3id?", arabic: "شحال بعيد؟" },
                { english: "What street is this?", moroccan: "Ashno had shari3?", arabic: "آش هذا الشارع؟" },
                { english: "Where can I find a taxi?", moroccan: "Fin nqdr nqraw taxi?", arabic: "فين نقدر نقراو طاكسي؟" },
                { english: "Can I walk there?", moroccan: "Wesh nqdr nmshi hna?", arabic: "واش نقدر نمشي هنا؟" },
                { english: "Is it safe to walk here?", moroccan: "Wesh aman ndir hna?", arabic: "واش آمان ندير هنا؟" },
                { english: "How do I get to the bus station?", moroccan: "Kifash nmchi lmahatta d lbus?", arabic: "كيفاش نمشي لمحطة الباص؟" },
                { english: "Where is the nearest hotel?", moroccan: "Fen kayn aqrab otel?", arabic: "فين كاين أقرب أوتيل؟" },
                { english: "Can you show me on the map?", moroccan: "Wesh t9dar twarini 3la lkharta?", arabic: "واش تقدر توريني على الخريطة؟" },
                { english: "Is there a bus stop nearby?", moroccan: "Kayn w9f d lbus qrib?", arabic: "كاين وقوف للباص قريب؟" },
                { english: "I am looking for this address", moroccan: "Ana kanqelleb 3la had l3onwan", arabic: "أنا كنقلب على هاد العنوان" },
                { english: "Which way to the beach?", moroccan: "Shno t tariq lbahar?", arabic: "شنو الطريق للبحر؟" },
                { english: "Can I take a shortcut?", moroccan: "Wesh nqdr akhdm ttarik qasr?", arabic: "واش نقدر نأخذ الطريق قاصر؟" },
                { english: "Are we going in the right direction?", moroccan: "Wesh kanmchi fi t tariq s7i7?", arabic: "واش كنمشي فطريق صحيح؟" },
                { english: "How long will it take?", moroccan: "Shhal ghatkhud?", arabic: "شحال غادي تاخد؟" },
                { english: "What landmarks are nearby?", moroccan: "Ashno l3alam kaynin qrib?", arabic: "آش هذو المعالم كاينين قريب؟" }

            ]
        },
        "Shopping and Bargaining": {
            img: "imgs/4910241-removebg-preview.png",
            category: "Shopping and Bargaining",
            phrases: [
                { english: "How much is this?", moroccan: "Bshhal hadi?", arabic: "بشحال هادي؟" },
                { english: "It's too expensive", moroccan: "Ghaliya bzaf", arabic: "غالية بزاف" },
                { english: "Can you lower the price?", moroccan: "Wesh tnaqs shwiya?", arabic: "واش تناقص شوية؟" },
                { english: "I’d like to buy this", moroccan: "Bghit ndir hadi", arabic: "بغيت ندير هادي" },
                { english: "Do you have a discount?", moroccan: "Wesh 3ndk taqlil?", arabic: "واش عندك تخفيض؟" },
                { english: "Can I pay with a card?", moroccan: "Wesh nqdr ndaf3 b lkart?", arabic: "واش نقدر ندفغ بالكارط؟" },
                { english: "I’m just looking", moroccan: "Ghir kanshuf", arabic: "غير كنشوف" },
                { english: "Can I try it on?", moroccan: "Wesh nqdr njarreb?", arabic: "واش نقدر نجرب؟" },
                { english: "Do you have this in a different size?", moroccan: "Wesh 3ndk fi qima akhra?", arabic: "واش عندك في قيمة اخرى؟" },
                { english: "I’ll think about it", moroccan: "Ghadi nfker fiha", arabic: "غادي نفكر فيها" },
                { english: "What is the best price?", moroccan: "Ashno ahsan thaman?", arabic: "آشنو أحسن ثمن؟" },
                { english: "I want to return this", moroccan: "Bghit n3awd hadi", arabic: "بغيت نعود هادي" },
                { english: "Is this the final price?", moroccan: "Wesh hadi hiya lthaman akhira?", arabic: "واش هادي هي الثمن الأخيرة؟" },
                { english: "Can you give me a better price?", moroccan: "Wesh t9dar t3tini thaman a7san?", arabic: "واش تقدر تعطني ثمن أحسن؟" },
                { english: "I need a receipt", moroccan: "Ana bghit fatura", arabic: "أنا بغيت فاتورة" },
                { english: "Where can I find this?", moroccan: "Fen nqdr lqah hada?", arabic: "فين نقدر نلقاه هذا؟" },
                { english: "I’m just browsing", moroccan: "Ghir kanqelleb", arabic: "غير كنقلب" },
                { english: "Can I get this gift-wrapped?", moroccan: "Wesh nqdr ndir had lahdya mwraqa?", arabic: "واش نقدر ندير هاد الهدية مغطاة؟" },
                { english: "Do you accept returns?", moroccan: "Wesh katqbl l3awd?", arabic: "واش كاتقبل العود؟" },
                { english: "Can you show me something similar?", moroccan: "Wesh t9dar twarini chi 7aja n9is?", arabic: "واش تقدر توريني شي حاجة ناقص؟" },
                { english: "What are the payment options?", moroccan: "Ashno hiya lkhiyarat d lkhadma?", arabic: "آش هي الخيارات للدفع؟" },
                { english: "Can I get a bag for this?", moroccan: "Wesh nqdr ndir bag d had?", arabic: "واش نقدر ندير باك د هاد؟" }

            ]
        },
        "Ordering Food and Drinks": {
            img: "imgs/8640-removebg-preview.png",
            category: "Ordering Food and Drinks",
            phrases: [
                { english: "I would like...", moroccan: "Bghit...", arabic: "بغيت..." },
                { english: "Do you have vegetarian options?", moroccan: "Wesh 3ndk ikhtiyarat nabatiya?", arabic: "واش عندك إختيارات نباتية؟" },
                { english: "Can I see the menu?", moroccan: "Wesh nqdr nshuf lmenu?", arabic: "واش نقدر نشوف المينيو؟" },
                { english: "What do you recommend?", moroccan: "Ashno t9dam?", arabic: "آش ندير؟" },
                { english: "I’m allergic to...", moroccan: "Ana 3andi alergi li...", arabic: "أنا عندي ألييرجي ل..." },
                { english: "I want it spicy", moroccan: "Bghit had chi har", arabic: "بغيت هاد الشي حار" },
                { english: "Is this dish popular?", moroccan: "Wesh had l'akla mashhura?", arabic: "واش هاد الأكلة مشهورة؟" },
                { english: "Bring me the bill, please", moroccan: "Jib liya l’addition, afak", arabic: "جيب ليّا الاداتيسيون، عفاك" },
                { english: "Can I have a glass of water?", moroccan: "Nqdr ndir kas lma?", arabic: "نقدر ندير كاس الماء؟" },
                { english: "I’m full", moroccan: "Ana chb3an", arabic: "أنا شبعان" },
                { english: "Can you make it less spicy?", moroccan: "Wesh tqdr tkhafaf chwiya?", arabic: "واش تقدر تخافف شوية؟" },
                { english: "What’s in this dish?", moroccan: "Ashno fi had l'akla?", arabic: "آشنو في هاد الأكلة؟" },
                { english: "Can I order this to go?", moroccan: "Wesh nqdr ndir had l'menu to go?", arabic: "واش نقدر ندير هاد المينيو تو غو؟" },
                { english: "I would like a coffee, please", moroccan: "Bghit qahwa, afak", arabic: "بغيت قهوة، عفاك" },
                { english: "Do you have any specials today?", moroccan: "Wesh 3ndk ay khasais lyom?", arabic: "واش عندك أي خاصيات اليوم؟" },
                { english: "Can I get this without...?", moroccan: "Wesh nqdr ndir had bla...?", arabic: "واش نقدر ندير هاد بلا...؟" },
                { english: "Is there a vegetarian option for this dish?", moroccan: "Wesh kayn ikhtiyar nabati lhad l'akla?", arabic: "واش كاين إختيار نباتي لهاد الأكلة؟" },
                { english: "What desserts do you have?", moroccan: "Ashno l7alawiyat li 3ndk?", arabic: "آش الحلويات لي عندك؟" },
                { english: "I would like a bottle of water", moroccan: "Bghit qafza d lma", arabic: "بغيت قافزة د الماء" },
                { english: "Can I have this with no ice?", moroccan: "Wesh nqdr ndir had bla thalj?", arabic: "واش نقدر ندير هاد بلا ثلج؟" },
                { english: "Do you serve breakfast all day?", moroccan: "Wesh katqdm ftor fkul lyoum?", arabic: "واش كاتقدم فطور في كل اليوم؟" },
                { english: "Can I see the dessert menu?", moroccan: "Wesh nqdr nshuf menu d l7alawiyat?", arabic: "واش نقدر نشوف مينيو د الحلويات؟" }

            ]
        },
        "Emergency and Help": {
            img: "imgs/traumatology_set_4-removebg-preview.png",
            category: "Emergency and Help",
            phrases: [
                { english: "I need help", moroccan: "Khasni l3awn", arabic: "خاصني العون" },
                { english: "Where is the nearest hospital?", moroccan: "Fin kayn aqrab sbitar?", arabic: "فين كاين أقرب سبيطار؟" },
                { english: "I lost my passport", moroccan: "Tlft lpasport dyali", arabic: "تلفت الباسبور ديالي" },
                { english: "Call the police!", moroccan: "3iyt 3la lbulis!", arabic: "عيّط على البوليس!" },
                { english: "I need a doctor", moroccan: "Khasni tbib", arabic: "خاصني طبيب" },
                { english: "Can you call a taxi?", moroccan: "Wesh tqdr t3iyt ltaxi?", arabic: "واش تقدر تعيّط للطاكسي؟" },
                { english: "I feel unwell", moroccan: "Ana ma3ndich l7al", arabic: "أنا ماعنديش الحال" },
                { english: "Where can I find a pharmacy?", moroccan: "Fin kayn farmacia?", arabic: "فين كاين فارمسي؟" },
                { english: "Is there a hospital nearby?", moroccan: "Wesh kayn sbitar qrib?", arabic: "واش كاين سبيطار قريب؟" },
                { english: "I need to go to the hospital", moroccan: "Khasni nmshi l'sbitar", arabic: "خاصني نمشي للسبيطار" },
                { english: "I’ve been robbed!", moroccan: "Sarqoni!", arabic: "سرقوني!" },
                { english: "Help me, please!", moroccan: "3awnni, afak!", arabic: "عاوني، عفاك!" },
                { english: "I need an ambulance", moroccan: "Khasni ambulance", arabic: "خاصني أمبولانس" },
                { english: "Where is the police station?", moroccan: "Fin kayn makhfar lbulis?", arabic: "فين كاين مخفر البوليس؟" },
                { english: "I am lost", moroccan: "Ana tlift", arabic: "أنا تلفت" },
                { english: "Can you help me find my way?", moroccan: "Wesh tqdr t3awnni lqah tariqi?", arabic: "واش تقدر تعاوني نلقا طريقي؟" },
                { english: "I need to report a crime", moroccan: "Khasni n3liq 3la jrim", arabic: "خاصني نعلّق على جريمة" },
                { english: "Please help me!", moroccan: "Afak 3awnni!", arabic: "عفاك عاونني!" },
                { english: "I have an emergency", moroccan: "3andi 7ala 3ajila", arabic: "عندي حالة عاجلة" },
                { english: "Where can I find a doctor?", moroccan: "Fin nqdr n9a doctor?", arabic: "فين نقدر نلقى طبيب؟" },
                { english: "I need a lawyer", moroccan: "Khasni mhamii", arabic: "خاصني محامي" },
                { english: "Can you help me call someone?", moroccan: "Wesh tqdr t3awnni n3iyt 3la chi wahed?", arabic: "واش تقدر تعاوني نعيط على شي واحد؟" }

            ]
        },
        "Social and Cultural Etiquette": {
            img: "imgs/10280491-removebg-preview.png",
            category: "Social and Cultural Etiquette",
            phrases: [
                { english: "What time is it?", moroccan: "Shhal f lsa3a?", arabic: "شحال ف الساعة؟" },
                { english: "Can you speak slowly?", moroccan: "Wesh tqdr t3awd?", arabic: "واش تقدر تعاود؟" },
                { english: "Do you speak English?", moroccan: "Wesh katb9a l'anglais?", arabic: "واش كاتبقى الإنجليزي؟" },
                { english: "I love Moroccan culture", moroccan: "Kanbghii thaqafa lmaghribiya", arabic: "كنبغي الثقافة المغربية" },
                { english: "What is your name?", moroccan: "Shno smiytk?", arabic: "شنو سميتك؟" },
                { english: "My name is...", moroccan: "Smiti...", arabic: "سميتي..." },
                { english: "Where are you from?", moroccan: "Mnain nta?", arabic: "منين نتا؟" },
                { english: "I’m from...", moroccan: "Ana mn...", arabic: "أنا من..." },
                { english: "What do you do?", moroccan: "Ash katdir?", arabic: "آش كتدير؟" },
                { english: "I’m a tourist", moroccan: "Ana s-sayih", arabic: "أنا السائح" },
                { english: "I love Moroccan food", moroccan: "Kanbghii lmakla lmaghribiya", arabic: "كنبغي الماكلة المغربية" },
                { english: "Can we take a picture?", moroccan: "Wesh nqdr nakhdu s-soura?", arabic: "واش نقدر ناخذو الصورة؟" },
                { english: "This is beautiful", moroccan: "Hadshi zwine", arabic: "هادشي زوين" },
                { english: "Nice to meet you", moroccan: "Mtshrfin", arabic: "متشرفين" },
                { english: "How was your day?", moroccan: "Kif kan nharek?", arabic: "كيف كان نهارك؟" },
                { english: "Can you recommend a place to visit?", moroccan: "Wesh tqdr t9dmli chi blasa nzurha?", arabic: "واش تقدر تقدمني شي بلاصة نزورها؟" },
                { english: "I appreciate your hospitality", moroccan: "Kanbghii l'karama dyalk", arabic: "كنبغي الكرامة ديالك" },
                { english: "What’s your favorite dish?", moroccan: "Ashno akltek l'mfaddala?", arabic: "آش أكلك المفضلة؟" },
                { english: "Do you have any recommendations for activities?", moroccan: "Wesh 3ndk chi iqtirahate li l'ankhat?", arabic: "واش عندك شي اقتراحات للأنشطة؟" },
                { english: "I’m learning Arabic", moroccan: "Ana kan3lem l'arabia", arabic: "أنا كنعلم العربية" },
                { english: "What is a popular Moroccan tradition?", moroccan: "Ashno traditi popular f lmaghrib?", arabic: "آشنو تقليد شعبي في المغرب؟" },
                { english: "Can you tell me about your city?", moroccan: "Wesh tqdr t9oli 3la mdintk?", arabic: "واش تقدر تقولي على مدينتك؟" },
                { english: "Let’s celebrate together!", moroccan: "Ncelebruw m3a ba3d!", arabic: "نحتفلوا مع بعض!" }

            ]
        },
        "Transportation": {
            img: "imgs/2008.i518.016.F.m005.c7.delivery_color_set-removebg-preview.png",
            category: "Transportation",
            phrases: [
                { english: "Where is the bus station?", moroccan: "Fin kayn mahattat lbus?", arabic: "فين كاين محطة الباص؟" },
                { english: "I need a ticket", moroccan: "Khasni tazwira", arabic: "خاصني تذكرة" },
                { english: "How long is the journey?", moroccan: "Shhal moudat lrihla?", arabic: "شحال مدة الرحلة؟" },
                { english: "What time does the train leave?", moroccan: "Shhal f waqt lqit?", arabic: "شحال ف وقت القيت؟" },
                { english: "Where can I rent a car?", moroccan: "Fin nqdr nsta2jar sayara?", arabic: "فين نقدر نستأجر سيارة؟" },
                { english: "Is there a shuttle service?", moroccan: "Wesh kayn khidmat shuttle?", arabic: "واش كاين خدمة شاتل؟" },
                { english: "Can you recommend a good taxi?", moroccan: "Wesh tqdr t9dim taxi mzian?", arabic: "واش تقدر تقدم طاكسي مزيان؟" },
                { english: "How much is the fare?", moroccan: "Bshhal thaman?", arabic: "بشحال الثمن؟" },
                { english: "Where is the nearest train station?", moroccan: "Fin kayn aqrab mahattat lqit?", arabic: "فين كاين أقرب محطة القيت؟" },
                { english: "I would like a one-way ticket", moroccan: "Bghit tazwira l'wahed", arabic: "بغيت تذكرة الواحد" },
                { english: "I would like a round-trip ticket", moroccan: "Bghit tazwira ida", arabic: "بغيت تذكرة ida" },
                { english: "Can I get a taxi here?", moroccan: "Wesh nqdr ndir taxi hna?", arabic: "واش نقدر ندير طاكسي هنا؟" },
                { english: "Where is the nearest metro station?", moroccan: "Fin kayn aqrab mahattat l'metro?", arabic: "فين كاين أقرب محطة الميترو؟" },
                { english: "How do I get to the airport?", moroccan: "Kifash nmshi l'matar?", arabic: "كيفاش نمشي للمطار؟" },
                { english: "Can I book a ticket online?", moroccan: "Wesh nqdr n7jiz tazwira 3la l'internet?", arabic: "واش نقدر نحجز تذكرة على الإنترنت؟" },
                { english: "What is the schedule for the buses?", moroccan: "Ashno l'moudou3 dial lbus?", arabic: "آشنو المودوع ديل الباص؟" },
                { english: "Is this seat taken?", moroccan: "Had lmakana m8doda?", arabic: "هاد المكان معطى؟" },
                { english: "Where do I catch the bus?", moroccan: "Fin nqdr ndir lbus?", arabic: "فين نقدر ندير الباص؟" },
                { english: "How far is the airport?", moroccan: "Shhal b3id l'matar?", arabic: "شحال بعيد المطار؟" },
                { english: "Can I have a receipt, please?", moroccan: "Jib liya chka, afak?", arabic: "جيب ليّا الشك، عفاك؟" },
                { english: "What’s the best way to get around the city?", moroccan: "Ashno ahsan tariqa l'tnqel f l'madina?", arabic: "آشنو أحسن طريقة للتنقل في المدينة؟" },
                { english: "Are there any direct flights?", moroccan: "Wesh kayn chi tayarat d'iraq?", arabic: "واش كاين شي طائرات ديركت؟" }

            ]
        },
        "Accommodations": {
            img: "imgs/20945899-removebg-preview.png",
            category: "Accommodations",
            phrases: [
                { english: "I have a reservation", moroccan: "3ndi l7jz", arabic: "عندي الحجز" },
                { english: "Do you have a room available?", moroccan: "Wesh 3ndk bitaq khaliya?", arabic: "واش عندك بيت خالية؟" },
                { english: "How much is a night?", moroccan: "Bshhal leila?", arabic: "بشحال ليلة؟" },
                { english: "Can I see the room?", moroccan: "Wesh nqdr nshuf lbitaq?", arabic: "واش نقدر نشوف البيطاق؟" },
                { english: "What amenities do you offer?", moroccan: "Ashno khdmat li 3ndk?", arabic: "آش خدمات لي عندك؟" },
                { english: "Is breakfast included?", moroccan: "Wesh lftour mdam?", arabic: "واش الفطور مدام؟" },
                { english: "I need extra towels", moroccan: "Khasni mafrukh khor", arabic: "خاصني مافرخ خرى" },
                { english: "What time is check-out?", moroccan: "Shhal f waqt lkhuruj?", arabic: "شحال ف وقت الخروج؟" },
                { english: "Can I extend my stay?", moroccan: "Wesh nqdr nzid fi l7jz?", arabic: "واش نقدر نزيد في الحجز؟" },
                { english: "Do you have Wi-Fi?", moroccan: "Wesh 3ndk Wi-Fi?", arabic: "واش عندك واي فاي؟" },
                { english: "Can you recommend a good hotel?", moroccan: "Wesh tqdr t9dim hotel mzian?", arabic: "واش تقدر تقدم هوتيل مزيان؟" },
                { english: "Is there a safe in the room?", moroccan: "Wesh kayn safe fi lbitaq?", arabic: "واش كاين سيف في البيطاق؟" },
                { english: "I need a room for two", moroccan: "Khasni bitaq l'jog", arabic: "خاصني بيت لجوج" },
                { english: "What is the cancellation policy?", moroccan: "Ashno l'siyaq dial l'ikhal?", arabic: "آش السيّاق ديل الإلغاء؟" },
                { english: "Is there a parking facility?", moroccan: "Wesh kayn maqad l'parking?", arabic: "واش كاين مقعد للباركينغ؟" },
                { english: "Can I pay with a credit card?", moroccan: "Wesh nqdr ndaf3 b lkart?", arabic: "واش نقدر ندفغ بالكارط؟" },
                { english: "What is your check-in time?", moroccan: "Shhal f waqt l'dakhul?", arabic: "شحال ف وقت الدخول؟" },
                { english: "Do you have family rooms?", moroccan: "Wesh 3ndk bitaq 3a'ila?", arabic: "واش عندك بيت عائلة؟" },
                { english: "Is there a gym in the hotel?", moroccan: "Wesh kayn gym fi l'hotel?", arabic: "واش كاين جيم في الهوتيل؟" },
                { english: "Can I have a late check-out?", moroccan: "Wesh nqdr ndir lkhuruj l'akhir?", arabic: "واش نقدر ندير الخروج الأخير؟" },
                { english: "Where is the nearest restaurant?", moroccan: "Fin kayn aqrab restaurant?", arabic: "فين كاين أقرب رستوران؟" },
                { english: "Do you provide airport shuttle service?", moroccan: "Wesh tqdm khidmat shuttle l'matar?", arabic: "واش تقدم خدمة شاتل للمطار؟" }

            ]
        },
        "Health and Safety": {
            img: "imgs/7317129-removebg-preview.png",
            category: "Health and Safety",
            phrases: [
                { english: "I need to see a doctor", moroccan: "Khasni nshuf tbib", arabic: "خاصني نشوف طبيب" },
                { english: "Where is the nearest pharmacy?", moroccan: "Fin kayn aqrab farmacia?", arabic: "فين كاين أقرب فارمسي؟" },
                { english: "I need a prescription", moroccan: "Khasni warqat l'prescription", arabic: "خاصني ورقة الوصفة" },
                { english: "Do you have any medicine for...?", moroccan: "Wesh 3ndk chi dawa li...?", arabic: "واش عندك شي دواء ل...؟" },
                { english: "I have a headache", moroccan: "Ana 3andi rasi", arabic: "أنا عندي راسي" },
                { english: "I feel sick", moroccan: "Ana ma3ndich l7al", arabic: "أنا ماعنديش الحال" },
                { english: "Where is the nearest hospital?", moroccan: "Fin kayn aqrab sbitar?", arabic: "فين كاين أقرب سبيطار؟" },
                { english: "Is there a medical center nearby?", moroccan: "Wesh kayn markaz tibb qrib?", arabic: "واش كاين مركز طبي قريب؟" },
                { english: "I need first aid", moroccan: "Khasni l3awn l'awli", arabic: "خاصني العون الأولي" },
                { english: "Can you call an ambulance?", moroccan: "Wesh tqdr t3iyt l'ambulance?", arabic: "واش تقدر تعيط للأمبولانس؟" },
                { english: "I have an allergy", moroccan: "Ana 3andi alergi", arabic: "أنا عندي ألييرجي" },
                { english: "I need to go to the pharmacy", moroccan: "Khasni nmshi l'farmacia", arabic: "خاصني نمشي للفارماسي" },
                { english: "I have a fever", moroccan: "Ana 3andi lham", arabic: "أنا عندي الحام" },
                { english: "I need an appointment", moroccan: "Khasni wa9t", arabic: "خاصني وقت" },
                { english: "What is the emergency number?", moroccan: "Shno huwa raqm l'khatar?", arabic: "شنو هو رقم الخطر؟" },
                { english: "Do you have band-aids?", moroccan: "Wesh 3ndk plaster?", arabic: "واش عندك بلاستر؟" },
                { english: "I need to take my medication", moroccan: "Khasni nakhod l'dawa", arabic: "خاصني ناخد الدواء" },
                { english: "Can you help me?", moroccan: "Wesh tqdr t3awnni?", arabic: "واش تقدر تعاوني؟" },
                { english: "Where can I find a doctor?", moroccan: "Fin nqdr nljd tbib?", arabic: "فين نقدر نلجأ طبيب؟" },
                { english: "I need a health insurance card", moroccan: "Khasni carte d'assurances", arabic: "خاصني كارت د الضمانات" },
                { english: "Is there a hospital open 24 hours?", moroccan: "Wesh kayn sbitar f'tahd f 24 sa3a?", arabic: "واش كاين سبيطار مفتوح 24 ساعة؟" },
                { english: "I need to report an incident", moroccan: "Khasni ndir ta9dim 3la l7aditha", arabic: "خاصني ندير تقديم على الحادثة" }

            ]
        },
        "Cultural Experiences": {
            img: "imgs/5002938-removebg-preview.png",
            category: "Cultural Experiences",
            phrases: [
                { english: "Can I join a tour?", moroccan: "Wesh nqdr n3awd fi tour?", arabic: "واش نقدر نعاود في تور؟" },
                { english: "What cultural activities do you offer?", moroccan: "Ashno l'achghal thaqafiya li 3ndk?", arabic: "آش الأعمال الثقافية لي عندك؟" },
                { english: "Are there any local festivals?", moroccan: "Wesh kayn chi mawaqi3 mahaliya?", arabic: "واش كاين شي مواقيع محلية؟" },
                { english: "I want to learn about Moroccan traditions", moroccan: "Bghit nt3alam 3la taqafot lmaghribiya", arabic: "بغيت نتعلم على تقافات المغربية" },
                { english: "Can you show me around?", moroccan: "Wesh tqdr twarini?", arabic: "واش تقدر توريني؟" },
                { english: "What are the must-see places?", moroccan: "Ashno l'amakin li khasni nshuf?", arabic: "آش الأماكن لي خاصني نشوف؟" },
                { english: "Can I participate in a cooking class?", moroccan: "Wesh nqdr n3awd fi darasat tabkh?", arabic: "واش نقدر نعاود في دراسة طبخ؟" },
                { english: "Where can I experience local music?", moroccan: "Fin nqdr nsme3 l'musiqa mahaliya?", arabic: "فين نقدر نسمع الموسيقى المحلية؟" },
                { english: "I want to try traditional Moroccan dishes", moroccan: "Bghit njarreb lmakla lmaghribiya", arabic: "بغيت نجرب الماكلة المغربية" },
                { english: "Are there any craft workshops?", moroccan: "Wesh kayn chi workshop tssna3?", arabic: "واش كاين شي ورشة تصنع؟" },
                { english: "Can I take part in a local celebration?", moroccan: "Wesh nqdr n3awd fi ihtifal mahali?", arabic: "واش نقدر نعاود في احتفال محلي؟" },
                { english: "What is the significance of this place?", moroccan: "Ashno ahmiyat had l'makan?", arabic: "آش أهمية هاد المكان؟" },
                { english: "Can I learn traditional dance?", moroccan: "Wesh nqdr nt3alam r'raqs l'3adi?", arabic: "واش نقدر نتعلم الرقص العادي؟" },
                { english: "Are there guided tours available?", moroccan: "Wesh kayn tours ma3rufa?", arabic: "واش كاين تورز معروفة؟" },
                { english: "What is the history of this site?", moroccan: "Ashno tari5 had l'makan?", arabic: "آش تاريخ هاد المكان؟" },
                { english: "Can I meet local artisans?", moroccan: "Wesh nqdr n9a l'mhriyin?", arabic: "واش نقدر نقا المهاريين؟" },
                { english: "What are the local customs?", moroccan: "Ashno l'3adat lmahaliya?", arabic: "آش العادات المحلية؟" },
                { english: "Are there any art galleries nearby?", moroccan: "Wesh kayn chi galeri l'art qrib?", arabic: "واش كاين شي غاليري للفن قريب؟" },
                { english: "Can I attend a music festival?", moroccan: "Wesh nqdr nhdur festival l'musiqa?", arabic: "واش نقدر نحضر فيستيفال الموسيقى؟" },
                { english: "What are the best places for shopping?", moroccan: "Ashno l'amakin li hna fi l'souq?", arabic: "آش الأماكن لي هنا في السوق؟" },
                { english: "Can I try on traditional clothing?", moroccan: "Wesh nqdr njarreb l'malabes l'3adiya?", arabic: "واش نقدر نجرب الملابس العادية؟" },
                { english: "Where can I find local art?", moroccan: "Fin nqdr lqa l'art mahali?", arabic: "فين نقدر نلقى الفن المحلي؟" }
            
            ]
        },
        "Nature and Outdoor Activities": {
            img: "imgs/4164593-removebg-preview.png",
            category: "Nature and Outdoor Activities",
            phrases: [
                { english: "Where can I hike?", moroccan: "Fin nqdr nmchi fi l'jbel?", arabic: "فين نقدر نمشي في الجبل؟" },
                { english: "Are there any guided tours?", moroccan: "Wesh kayn tours m3 l'mrshid?", arabic: "واش كاين تور مع المرشد؟" },
                { english: "I want to go to the beach", moroccan: "Bghit nmshi l'b7ar", arabic: "بغيت نمشي للبحر" },
                { english: "Can I rent a bicycle?", moroccan: "Wesh nqdr nsta2jar biceps?", arabic: "واش نقدر نستأجر دراجة؟" },
                { english: "What are the best spots for photography?", moroccan: "Ashno ahsan l'makanat l'sura?", arabic: "آش أحسن الأماكن للصورة؟" },
                { english: "Are there any nature reserves?", moroccan: "Wesh kayn chi mahfaza ttabiiya?", arabic: "واش كاين شي محفظة طبيعية؟" },
                { english: "Can I go camping here?", moroccan: "Wesh nqdr n'mshi l'camping hna?", arabic: "واش نقدر نمشي للتخييم هنا؟" },
                { english: "Where can I go for a swim?", moroccan: "Fin nqdr n7ut?", arabic: "فين نقدر نحبس؟" },
                { english: "What wildlife can I see?", moroccan: "Ashno l'hayawanat li nqdr nshuf?", arabic: "آش الحيوانات لي نقدر نشوف؟" },
                { english: "Are there any guided nature walks?", moroccan: "Wesh kayn tours l'ttabii?", arabic: "واش كاين تور للطبيعة؟" },
                { english: "Can I go horseback riding?", moroccan: "Wesh nqdr nmshi l'rmka?", arabic: "واش نقدر نمشي للركوب؟" },
                { english: "Where can I see the sunset?", moroccan: "Fin nqdr nshuf lghorub?", arabic: "فين نقدر نشوف الغروب؟" },
                { english: "Is there a park nearby?", moroccan: "Wesh kayn chi parka qrib?", arabic: "واش كاين شي بارك قريب؟" },
                { english: "Can I fish here?", moroccan: "Wesh nqdr nsaib hna?", arabic: "واش نقدر نصيب هنا؟" },
                { english: "What hiking trails do you recommend?", moroccan: "Ashno l'masarat li tqdm?", arabic: "آش المسارات لي تقدّم؟" },
                { english: "Are there any waterfalls around?", moroccan: "Wesh kayn chi chafaf fi l'janib?", arabic: "واش كاين شي شفاف في الجنب؟" },
                { english: "Can I take a boat ride?", moroccan: "Wesh nqdr ndir jthak l'qahwa?", arabic: "واش نقدر ندير جثة القهوة؟" },
                { english: "What is the best time to visit?", moroccan: "Ashno ahsan waqt lziyar?", arabic: "آش أحسن وقت للزيارة؟" },
                { english: "Are there any rock climbing spots?", moroccan: "Wesh kayn chi amakin l'9e3?", arabic: "واش كاين شي أماكن القيع؟" },
                { english: "Can I have a picnic here?", moroccan: "Wesh nqdr ndir picnic hna?", arabic: "واش نقدر ندير بيكنيك هنا؟" },
                { english: "What are the local flora?", moroccan: "Ashno l'nabaat li hna?", arabic: "آش النباتات لي هنا؟" },
                { english: "Are there any guided stargazing tours?", moroccan: "Wesh kayn tours l'nujum?", arabic: "واش كاين تورز للنجوم؟" }
            
            ]
        }

    };
    const [category, setCategory] = useState(moroccanPhrases['Greetings and Politeness']);

    function handelChoosCategory(c) {
        setCategory(moroccanPhrases[c]);
    }

    function SpeechContent(c, l) {
        let utterance = new SpeechSynthesisUtterance(c);
        utterance.lang = l;
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.lang === l) || voices[0]; // Choose a fallback if unavailable

        window.speechSynthesis.speak(utterance);


    }
    return (
        <>
            <div className="cnt-Language_Comminucation">
                <span className="titleS1">
                    <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(787)" d="m0 0h388l4 9 3 3v2h2l9 12 3 6v9l-5 14-7 11-8 10-9 2-38 1-263 1-30 1-24 2-15 3-16 6-14 7-18 13-12 12-11 16-8 14-7 19-3 11-3 25-1 35v599l1 22 3 23 5 18 8 18 10 15 12 13 11 10 10 7 17 9 16 6 13 3 15 2 15 1 699 1 9 2 12 7 11 9 16 13 14 12 10 8 10 9 11 9 10 9 11 9 15 13 10 9 11 9 14 12 12 10 11 9 9 8 10 8 14 12 11 10 11 9 11 10 2 1-1-18 1-131 1-26 4-11 7-9 8-6 12-4 34-6 15-4 13-5 14-7 12-8 13-10 1-2h2l2-4 8-9 10-15 8-21 5-19 2-21v-647l-1-21-3-17-5-15-9-19-8-12-12-14-11-9-14-9-16-8-24-7-29-3-37-1-286-1-12-2-8-7-11-15-5-10-1-8 8-16 14-18v-3h384v2l28 10 18 8 21 11 19 13 15 13 16 16 12 16 16 26 7 15 8 20 7 21 2-2v732h-3l-12 36-11 23-7 11-13 19-9 11-19 19-13 10-21 13-16 8-15 6-21 7-11 4-1 153-1 71-4 13-4 6-7 7-9 6-8 3-10 1-11-3-12-7-22-18-14-12-13-11-11-9-14-12-11-9-11-10-11-9-11-10-11-9-15-13-14-12-11-9-14-12-11-9-28-24-26-22-15-13-10-9-15-11-10-4h-23l-42 1-21 1-1 4-1 56-1 407-1 43-2 30-3 18-5 16-8 20-10 19-7 11-10 14-8 10-19 19-19 14-24 14-19 8-23 7-20 4-32 3-42 1-628 1-16 1-7 1-2 4-7 8-13 10-10 9-11 9-10 9-8 7-17 14-10 9-8 7-17 14-8 7-11 9-11 10-10 8-14 12-10 9-10 8-7 7-11 9-9 8-10 8-13 11-10 8-10 9-10 8-13 11-8 7-4 5h-34l-2-5-11-12-5-5-4-9-1-4-1-224-7-3-21-6-27-12-16-9-14-10-11-9-13-12-12-13-13-17-10-17-10-19-10-25-3-10h-2l-1-2v-735l5-10 11-28 10-21 8-14 8-12 12-16 12-13 10-9 18-13 23-13 23-10 21-6 21-3 25-2 27-1h327l61-1v-442l1-68 2-25 3-18 5-17 8-21 8-16 9-16 10-14 9-11 10-11 16-14 14-10 15-9 17-9 26-10 12-4zm-564 799-33 2-17 3-20 8-15 9-14 11-12 12-12 18-7 12-6 16-4 16-2 17-1 18-1 225v288l1 126 3 27 5 18 8 18 8 13 12 14 7 7 11 9 7 5 21 10 20 6 43 8 9 4 6 4 6 8 3 7 1 6 1 34 1 141 9-5 11-10 11-9 15-14 11-9 14-12 30-26 11-10 10-8 12-11 8-7 26-22 10-8 14-12 11-9 13-11 9-7 10-8 11-7 12-2 704-1 20-2 17-4 19-8 12-7 11-8 9-7v-2h2l7-8 11-14 8-14 5-13 5-19 2-18 1-433v-83l-517-1-29-2-20-3 2 5 8 18 13 35 18 48 16 43 26 69 16 42 14 38 12 31 23 62 5 19v13l-4 10-9 10-11 7-10 3-16-1-10-4-9-10-8-14-5-12-15-41-8-21-4-7-2-1h-213l-6 1-3 10-7 20-13 33-9 21-6 11-9 10-7 4-5 1h-10l-13-3-11-6-5-5h-2l-6-12-1-3v-12l5-19 9-25 8-21 7-20 16-42 9-24 18-47 15-39 11-28 6-17 11-29 18-48 16-42 14-37 6-15 9-17 2-8-3-8-14-20-13-24-8-20-5-19-3-19-2-26-2-51-1-12-1-1zm487 320m-1 2-7 20-11 30-7 19-11 30-13 34-6 16-15 39-7 17v1h157l-1-7-11-30-10-26-7-18-6-17-21-57-8-21-11-28-2-2z" />
                        <path transform="translate(1324,208)" d="m0 0h21l13 4 9 6 4 5 2 5 2 18v103h215l22 1 9 2 8 6 7 8 5 11 2 7v9l-4 13-6 10-3 4h-2l-2 4-6 3-8 1-37 1-100 1-2 4-2 29-4 36-5 26-8 30-10 29-11 26-9 19-12 22-10 17-6 8-4 7 1 4 5 6 22 18 20 15 18 11 15 9 21 11 26 10 30 9 49 11 11 5 10 7 7 10 3 10v9l-3 10-6 10-12 14-7 3h-13l-27-3-30-6-29-8-27-10-25-11-16-8-17-9-19-12-12-8-19-14-14-12-12-10-4-3h-7l-4 2-5 7-11 9-16 12-16 11-10 7-18 11-28 15-28 12-19 7-35 10-26 6-24 4-9 1h-14l-8-5-7-7-9-14-4-13v-7l4-11 6-9h2v-2l11-7 14-4 31-7 25-7 31-11 20-9 21-11 20-12 12-8 17-12 13-10 8-7 4-4-2-8-11-17-12-21-12-23-10-22-11-29-7-22-6-25-5-29-4-41-1-22-65 1h-53l-22-1-10-3-10-10-8-13-4-10 1-12 6-12 11-13 6-4 8-2 31-1 201-1 3-1 1-31 1-50 1-29 3-10 6-8 8-7zm40 220-79 1-6 1v11l4 37 6 31 8 29 10 28 9 20 9 17 6 12 5 4 7-9 14-28 11-29 7-21 8-30 5-26 2-13 1-15v-18l-3-2z" />
                        <path transform="translate(1317)" d="m0 0h39l1 4 7 9 6 7 4 8 1 4v17l-5 10-9 10-9 7-9 3h-9l-12-3-11-6-8-8-6-10-2-7v-9l3-10 8-11 9-10z" />
                        <path transform="translate(2045,904)" d="m0 0h2l1 7v10l-3-1-1-6-1-4z" />
                        <path transform="translate(189,2045)" d="m0 0 3 3h-5v-2z" />
                        <path transform="translate(2046,149)" d="m0 0h2l-1 4z" />
                        <path transform="translate(1887)" d="m0 0h6v1h-6z" />
                        <path transform="translate(1895)" d="m0 0h5v1h-5z" />
                        <path transform="translate(1887,2)" d="m0 0" />
                        <path transform="translate(1884)" d="m0 0 2 1z" />
                        <path transform="translate(2045,901)" d="m0 0" />
                    </svg>
                    <h2> Language & Communication</h2>
                </span>

                <div className="cntInroService">
                    <p>
                        Our "Language & Communication" service is designed to help tourists engage easily with Moroccan locals. With essential phrases and cultural insights, it ensures a smooth, authentic, and enriching travel experience in Morocco.</p>
                    <img src="imgs/370426-PBG5NS-931.jpg" alt="" />
                </div>
                <div className="cnt-listCategirys">
                    {
                        Object.keys(moroccanPhrases).map((k) => (
                            <span key={k} onClick={() => handelChoosCategory(k)}>{k}</span>
                        ))
                    }
                </div>
                <div className="cntMain_tranlates">
                    {
                        <img className="cntImgCategory" src={category.img} />
                    }
                    <h1 className="catrgoryName">{category.category}</h1>
                    <div className="cntTypePhrase">
                        <p>English</p>
                        <p>Moroccan</p>
                        <p>Arabic</p>
                    </div>
                    {
                        category.phrases.map((p, index) => (
                            <>
                                <div className="cnt_phrase" key={`${index}${v4()}`} id={`${index}${v4()}`}>
                                    <span>
                                        <p onClick={() => SpeechContent(p.english, "en-US")}>
                                            {p.english}
                                        </p>
                                    </span>
                                    <span>
                                        <p onClick={() => SpeechContent(p.moroccan, "ar-SA")}>
                                            {p.moroccan}
                                        </p>
                                    </span>
                                    <span>
                                        <p className="arabicLanguage" onClick={() => SpeechContent(p.moroccan, "ar-SA")}>
                                            {p.arabic}
                                        </p>
                                    </span>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>

    );
}

export default LanguComminucation;