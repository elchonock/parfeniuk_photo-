"use strict";
// @@include("alert.js")


function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});


function ibg(){

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
ibg();


// // Timer //disabled now

// const deadLine = "2021-09-30";

// function getTimeRamaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date());
//     const days = Math.floor(t / (1000*60*60*24));
//     const hours = Math.floor((t / (1000*60*60)) % 24);
//     const minutes = Math.floor((t / (1000*60)) % 60);
//     const seconds = Math.floor((t / (1000)) % 60);

//     return {
//         "total": t,
//         days,
//         hours,
//         minutes,
//         seconds,
//     };
    
// }

// function addZero(num) {
//     if (num >= 0 && num < 10){
//         return `0${num}`;
//     } else {
//         return num;
//     }
    
// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector);
//     const days = timer.querySelector("#days");
//     const hours = timer.querySelector("#hours");
//     const minutes = timer.querySelector("#minutes");
//     const seconds = timer.querySelector("#seconds");
//     const timeInterval = setInterval(updateClock, 1000);
//     updateClock();

//     function updateClock() {
//         const t = getTimeRamaining(endtime);
//         days.innerHTML = addZero(t.days);
//         hours.innerHTML = addZero(t.hours);
//         minutes.innerHTML = addZero(t.minutes);
//         seconds.innerHTML = addZero(t.seconds);
//     }
 
// }

// setClock(".timer", deadLine);
// document.querySelector(".timer").style.display = "none";

//__________________________________________________________________________
//______________________________________________________________________
// Scroll

const topBtn = document.querySelectorAll(".to_top");
const page = document.querySelector(".page");


//Scroll to top
let t; 
function scrolltop() { 
    let top = Math.max(document.body.scrollTop, page.scrollTop); 
    if (top > 0) { 
        // page.scrollTo(0, Math.floor(top/1.4)); 
        page.scrollTo({
            top: Math.floor(top/1.4),
            behavior: "smooth"
        });

        t = setTimeout(scrolltop, 30); 
    } else { 
        clearTimeout(t); 
    } 
    return false; 
}

// Scroll top click
topBtn.forEach(item => {
    item.addEventListener("click", (e) => {
        if (!document.body.classList.contains("_touch")){
        e.preventDefault();
        scrolltop();
        }
    });
});


//------------------------------------------------------------------------------------
//Scroll to Elements--------------------------------------------------------------------
let scrollToIdTimerId;

//Old Working Scroll Func--------------------------------------------------------------------
//--------------------------------------------------------------------------------------
// For chrome

function scrollToId(id) {
    scrollToIdFunc();
    function scrollToIdFunc() {
        if (document.documentElement.scrollHeight <= 1040) {
            const point = document.querySelector(id).getBoundingClientRect().top;            
            if (point > 800) { 
                // page.scrollTop = Math.floor((page.scrollTop + 10) * 1.25);
                page.scrollTo({
                    top: Math.floor((page.scrollTop + 10) * 1.25),
                    behavior: "smooth",

                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 20); 
    
            } else if(point > 1 && point < 800){
                // page.scrollTop = Math.floor(page.scrollTop + 75);
                page.scrollTo({
                    top: Math.floor(page.scrollTop + 10),
                    behavior: "smooth",
                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 5); 
    
            } else { 
                clearTimeout(scrollToIdTimerId); 
            } 
            return false; 
        } else {
            const point = document.querySelector(id).getBoundingClientRect().top - (document.documentElement.scrollHeight - 1040);
            if (point > 800) { 
                // page.scrollTop = Math.floor((page.scrollTop + 10) * 1.25);
                page.scrollTo({
                    top: Math.floor((page.scrollTop + 10) * 1.25),
                    behavior: "smooth",

                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 20);
            } else if(point > 0 && point < 800){
                // page.scrollTop = Math.floor(page.scrollTop + 20);
                page.scrollTo({
                    top: Math.floor(page.scrollTop + 20),
                    behavior: "smooth",

                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 10); 
            } else { 
                clearTimeout(scrollToIdTimerId); 
            } 
            return false; 
        }
    }  
}

//-------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------




//Scroll click
const navElements = document.querySelectorAll("[data-nav]");

//old-----------------------------------------------
// navElements.forEach(elem => {
//     elem.addEventListener("click", (e) => {
//         e.preventDefault();
//         const idToScrollTo = e.target.getAttribute("data-nav");
//         scrollToId(idToScrollTo);
//     });
// });
//----------------------------------------------------------


navElements.forEach(elem => {
    elem.addEventListener("click", (e) => {
        if (!document.body.classList.contains("_touch")){
            e.preventDefault();
            const elemScrollTo = document.querySelector(e.target.getAttribute("data-nav"));
            const idToScrollTo = e.target.getAttribute("data-nav");
            // const point = elemScrollTo.getBoundingClientRect().top + page.scrollTop - document.querySelector("header").offsetHeight;
            const point = elemScrollTo.getBoundingClientRect().top + page.scrollTop;
            if (navigator.userAgent.match(/Chrome/i)){
                scrollToId(idToScrollTo);
    
            } else {
                page.scrollTo({
                    top: point,
                    behavior: "smooth",
                });
            }
        }


    });
});





// Slider and Open / Close Photo
function photos() {
    let slideIndex = 1;
    const photoContainer = document.querySelector(".wrapper");
    const slides = document.querySelectorAll(".content_row_item");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    next.style = "-webkit-tap-highlight-color: transparent;";
    prev.style = "-webkit-tap-highlight-color: transparent;";
    slides.forEach(i=>i.style = "-webkit-tap-highlight-color: transparent;");

    const photoPopup = document.createElement("div");
    photoPopup.classList.add("popup_photo");
    photoPopup.style = "-webkit-tap-highlight-color: transparent;";

    const bigPhoto = document.createElement("img");
    const bigPhotoWrapper = document.createElement("div");
    bigPhotoWrapper.classList.add("bigPhotoWrapper");
    bigPhotoWrapper.style = "-webkit-tap-highlight-color: transparent;";
    bigPhoto.style = "-webkit-tap-highlight-color: transparent;";

    const closeX = document.createElement("div");
    closeX.classList.add("closeX");
    closeX.style = "-webkit-tap-highlight-color: transparent;";

    photoContainer.appendChild(photoPopup);
    photoPopup.appendChild(bigPhotoWrapper);
    photoPopup.appendChild(prev);
    photoPopup.appendChild(next);
    bigPhotoWrapper.appendChild(bigPhoto);
    bigPhotoWrapper.appendChild(closeX);

    // path to img that was clicked first
    let pathBPh;

// open-close photo____________________
    photoContainer.addEventListener("click", (event) => {
        // event.preventDefault();
        //Open photo
        if (event.target && event.target.classList.contains("content_row_item")){
            event.preventDefault();
            next.style.display = "block";
            prev.style.display = "block";
            photoPopup.style.display = "flex";
            photoPopup.style.overflow = "hidden";
            pathBPh = event.target.getAttribute("data-photo");
            bigPhoto.setAttribute("src", pathBPh);
            bigPhoto.classList.add("fadeOne");

            slides.forEach((item, index) => {
            if (pathBPh == item.getAttribute("data-photo")){
                slideIndex = index;
            }
            }); 

        }
        //Close photo
        if (event.target && event.target.matches("div.popup_photo")){
            photoPopup.style.display = "none";
            photoPopup.style.overflow = "";
            bigPhoto.classList.remove("fadeTwo");
        }
    });

    //Close photo
    closeX.addEventListener("click", () =>{
        photoPopup.style.display = "none";
        photoPopup.style.overflow = "";
        bigPhoto.classList.remove("fadeTwo");
    });
    //___________________________

    //Slider
    next.addEventListener("click", (event)=>{
        if (slideIndex+1 < slides.length){
            bigPhoto.setAttribute("src", slides[slideIndex+1].getAttribute("data-photo"));
            slideIndex++;
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");

        } else {
            slideIndex = 0;
            bigPhoto.setAttribute("src", slides[slideIndex].getAttribute("data-photo"));
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");
        }
    });

    prev.addEventListener("click", (event)=>{
        if (slideIndex > 0){
            bigPhoto.setAttribute("src", slides[slideIndex-1].getAttribute("data-photo"));
            slideIndex--;
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");
        } else {
            slideIndex = slides.length - 1;
            bigPhoto.setAttribute("src", slides[slideIndex].getAttribute("data-photo"));
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");
        }
    });

}

photos();



// Bloom animation BgText
const bgPhotoText = document.querySelector(".static_bg_photo_row_H4_text");

function addBloomToBgPhoto() {
    if (Math.floor(bgPhotoText.getBoundingClientRect().top - document.documentElement.clientHeight <= -200)) {
        bgPhotoText.classList.add("bloom");
        bgPhotoText.style.opacity = "1";
        page.removeEventListener("scroll", addBloomToBgPhoto);
    }     
    return false;
}

page.addEventListener("scroll", addBloomToBgPhoto);

//Animation Portfolio
const contentItems = document.querySelectorAll(".content_row_item");
const content = document.querySelector(".content_row");

function addFadeToContent() {
    if (Math.floor(content.getBoundingClientRect().top - document.documentElement.clientHeight <= -100)) {
        // contentItems.forEach( i => {
        //     i.classList.add("fadeThree");  
        // });
        contentItems.forEach(function(i, index){
            setTimeout(function(){
                i.classList.add("fadeOne");
                                
            }, index*75);
            
        });
   
        page.removeEventListener("scroll", addFadeToContent);
    }     
    return false;
}

page.addEventListener("scroll", addFadeToContent);


//Preloader______________________________________________________
//_______________________________________________________________
window.addEventListener("load", (e)=>{
    const preloader = document.querySelector(".preloader");
    setTimeout(function () {
        // preloader.style.display = "none";   
        preloader.classList.add("preloader_done");     
    }, 500);
});



//Burger__________________________________________________________
//________________________________________________________________

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu_body");
burger.addEventListener("click", showBurgerMenu);
menuBody.addEventListener("click", showBurgerMenu);


function showBurgerMenu() {
    menuBody.classList.toggle("_active");
}



//IsMobile
const isMobile = {
    Android: () => navigator.userAgent.match(/Android/i),
    BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
    iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
    Opera: () => navigator.userAgent.match(/Opera Mini/i),
    Windows: () => navigator.userAgent.match(/IEMobile/i),
    any: () => {
        return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add("_touch");
} else {
    document.body.classList.add("_pc");
}


//Hide Header
const social = document.querySelector(".social_media_panel");
const header = document.querySelector("#top");
const headerMB = document.querySelector(".menu_body");
// page.addEventListener("scroll", e=>{
//     const social = document.querySelector(".social_media_panel");
//     const header = document.querySelector("#top");
//     const headerMB = document.querySelector(".menu_body");


//     if (page.scrollTop > 80){
//         if (document.documentElement.clientWidth < 767){
//             social.classList.add("hidden_head");
//         }
//         header.classList.add("hidden_head");
//         headerMB.classList.add("hidden_head");
//     } else {
//         headerMB.classList.remove("hidden_head");
//         header.classList.remove("hidden_head");
//         social.classList.remove("hidden_head");
//     }

// });


//Show Header if scroll up

let lastScroll = 0;
const defaultOffset = 80;
const scrollPos = ()=> page.scrollTop;
const containHide = () => header.classList.contains('hidden_head');

page.addEventListener('scroll', () => {
    if(scrollPos() > lastScroll && !containHide() && scrollPos() > defaultOffset) {
        //scroll down
        if (document.documentElement.clientWidth < 767){
            social.classList.add("hidden_head");
        }

        header.classList.add('hidden_head');
        headerMB.classList.add("hidden_head");
    }
    else if(scrollPos() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hidden_head');
        social.classList.remove("hidden_head");
        headerMB.classList.remove("hidden_head");
    }

    lastScroll = scrollPos();
}) 

