@@include("alert.js")

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


// Timer
const deadLine = "2021-09-30";

function getTimeRamaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000*60*60*24));
    const hours = Math.floor((t / (1000*60*60)) % 24);
    const minutes = Math.floor((t / (1000*60)) % 60);
    const seconds = Math.floor((t / (1000)) % 60);

    return {
        "total": t,
        days,
        hours,
        minutes,
        seconds,
    };
    
}

function addZero(num) {
    if (num >= 0 && num < 10){
        return `0${num}`;
    } else {
        return num;
    }
    
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
        const t = getTimeRamaining(endtime);
        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);
    }
 
}

setClock(".timer", deadLine);


// Scroll

const topBtn = document.querySelectorAll(".to_top");
const page = document.querySelector(".page");


let t; 
function scrolltop() { 
    let top = Math.max(document.body.scrollTop, page.scrollTop); 
    if (top > 0) { 
        page.scrollTo(0, Math.floor(top/1.4)); 
        t = setTimeout(scrolltop, 30); 
    } else { 
        clearTimeout(t); 
    } 
    return false; 
}


topBtn.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        scrolltop();
    });
});


let scrollToIdTimerId;
function scrollToId(id) {
    scrollToIdFunc();
    function scrollToIdFunc() {
        if (document.documentElement.scrollHeight <= 1040) {
            const point = document.querySelector(id).getBoundingClientRect().top;
            if (point > 800) { 
                page.scrollTop = Math.floor((page.scrollTop + 10) * 1.25);
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 20); 
    
            } else if(point > 0 && point < 800){
                page.scrollTop = Math.floor(page.scrollTop + 20);
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 10); 
    
            } else { 
                clearTimeout(scrollToIdTimerId); 
            } 
            return false; 
        } else {
            const point = document.querySelector(id).getBoundingClientRect().top - (document.documentElement.scrollHeight - 1040);
            if (point > 800) { 
                page.scrollTop = Math.floor((page.scrollTop + 10) * 1.25);
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 20);
            } else if(point > 0 && point < 800){
                page.scrollTop = Math.floor(page.scrollTop + 20);
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 10); 
            } else { 
                clearTimeout(scrollToIdTimerId); 
            } 
            return false; 
        }
    }  
}

const navElements = document.querySelectorAll("[data-nav]");
navElements.forEach(elem => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        const idToScrollTo = "#" + e.target.getAttribute("data-nav");
        scrollToId(idToScrollTo);
    });
});

// navElements.forEach(elem => {
//     elem.addEventListener("touch", (e) => {
//         e.preventDefault();
//         const idToScrollTo = "#" + e.target.getAttribute("data-nav");
//         scrollToId(idToScrollTo);
//     });
// });


// Slider and Open / Close Photo
function photos() {
    let slideIndex = 1;
    const photoContainer = document.querySelector(".wrapper");
    const slides = document.querySelectorAll(".content_row_item");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    const photoPopup = document.createElement("div");
    photoPopup.classList.add("popup_photo");

    const bigPhoto = document.createElement("img");
    const bigPhotoWrapper = document.createElement("div");
    bigPhotoWrapper.classList.add("bigPhotoWrapper");

    const closeX = document.createElement("div");
    closeX.classList.add("closeX");

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
        event.preventDefault();
        //Open photo
        if (event.target && event.target.classList.contains("content_row_item")){
            next.style.display = "block";
            prev.style.display = "block";
            photoPopup.style.display = "flex";
            photoPopup.style.overflow = "hidden";
            pathBPh = event.target.getAttribute("data-photo");
            bigPhoto.setAttribute("src", pathBPh);

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
        }
    });

    //Close photo
    closeX.addEventListener("click", () =>{
        photoPopup.style.display = "none";
        photoPopup.style.overflow = "";
    });
    //___________________________

    //Slider
    next.addEventListener("click", (event)=>{
        console.log(slideIndex);
        if (slideIndex+1 < slides.length){
            bigPhoto.setAttribute("src", slides[slideIndex+1].getAttribute("data-photo"));
            slideIndex++;
            console.log(slideIndex);
        } else {
            slideIndex = 0;
            bigPhoto.setAttribute("src", slides[slideIndex].getAttribute("data-photo"));
        }
    });

    prev.addEventListener("click", (event)=>{
        if (slideIndex > 0){
            bigPhoto.setAttribute("src", slides[slideIndex-1].getAttribute("data-photo"));
            slideIndex--;
        } else {
            slideIndex = slides.length - 1;
            bigPhoto.setAttribute("src", slides[slideIndex].getAttribute("data-photo"));
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

function addBloomToContent() {
    if (Math.floor(content.getBoundingClientRect().top - document.documentElement.clientHeight <= -100)) {
        contentItems.forEach( i => {
            i.classList.add("bloomContent");
        });

        page.removeEventListener("scroll", addBloomToContent);
    }     
    return false;
}

page.addEventListener("scroll", addBloomToContent);
