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

navElements.forEach(elem => {
    elem.addEventListener("touch", (e) => {
        e.preventDefault();
        const idToScrollTo = "#" + e.target.getAttribute("data-nav");
        scrollToId(idToScrollTo);
    });
});



// Slider
// 1 Open Photo
function photos() {
    const photoPopup = document.createElement("div");
    const photoContainer = document.querySelector(".wrapper");
    const bigPhoto = document.createElement("img");

    photoPopup.classList.add("popup_photo");
    photoContainer.appendChild(photoPopup);
    
    photoPopup.style.justifyContent = "center";
    photoPopup.style.alignItems = "center";
    photoPopup.style.display = "none";


    photoPopup.appendChild(bigPhoto);



    photoContainer.addEventListener("click", (event) => {
        event.preventDefault();

        if (event.target && event.target.classList.contains("content_row_item")){
            photoPopup.style.display = "flex";
            photoPopup.style.overflow = "hidden";
            const path = event.target.getAttribute("data-photo");
            bigPhoto.setAttribute("src", path);
        }
        if (event.target && event.target.matches("div.popup_photo")){
            photoPopup.style.display = "none";
            photoPopup.style.overflow = "";
        }

    });

}

photos();




// const headerBatton = document.querySelectorAll(".menu_list li div");

// headerBatton.forEach(el => {
//     el.addEventListener("mouseout", (event)=> {
//         el.style.cssText = "transition: border-color .5s ease;";
//     });});



// const rootElement = document.documentElement;
// console.log(rootElement);
// const button_up = document.querySelector(".scroll_to_top_button_1");


// function scrollToTop(){
//     rootElement.scrollTo({
//         top:"200",
//         behavier:"smooth"
//     });
// }


// button_up.addEventListener("click", e=> {
//     rootElement.scrollTop({top:0, behavier:"smooth"});
// });


// window.scroll({
//     top: 0, 
//     left: 0, 
//     behavior: 'smooth' 
//    });

