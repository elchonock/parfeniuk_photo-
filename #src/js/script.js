"use strict";

// import smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();
///////////////////////////////////////////////////////////////////////////
// Smooth scroll polyfill
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();



/////////////////////////////////////////////////////////////////////////
// document.querySelector('#form_low #formAgreement').checked = !document.querySelector('#form_low #formAgreement').checked;


document.addEventListener("DOMContentLoaded", function() {

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


    // function ibg(){

    //     let ibg = document.querySelectorAll(".ibg");
    //     for (var i = 0; i < ibg.length; i++) {
    //     if(ibg[i].querySelector('img')){
    //     ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    //     }
    //     }
    //     }
        
    // ibg();




    //__________________________________________________________________________
    //______________________________________________________________________
    // Scroll
///////////////////////////////////////////////////////////////////////////////////////////////////
    //Scroll to top
    //#region
    const topBtn = document.querySelectorAll(".to_top");
    const page = document.querySelector(".page");


    // let t; 
    // function scrolltop() { 
    //     let top = Math.max(document.body.scrollTop, page.scrollTop); 
    //     if (top > 0) { 
    //         // page.scrollTo(0, Math.floor(top/1.4)); 
    //         page.scrollTo({
    //             top: Math.floor(top/1.4),
    //             behavior: "smooth"
    //         });

    //         t = setTimeout(scrolltop, 30); 
    //     } else { 
    //         clearTimeout(t); 
    //     } 
    //     return false; 
    // }

    // Scroll to top click when click on btn
    topBtn.forEach(item => {
        item.addEventListener("click", (e) => {
            // if (!document.body.classList.contains("_touch")){
            // e.preventDefault();
            // scrolltop();
            // }
            e.preventDefault();
            // scrolltop();
            page.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
    //#endregion

////////////////////////////////////////////////////////////////////////////////////////////////
    //------------------------------------------------------------------------------------
    //Scroll to Elements--------------------------------------------------------------------
    const navElements = document.querySelectorAll("[data-nav]");
    const headerMain = document.querySelector("header");

    navElements.forEach(elem => {
        elem.addEventListener("click", (e) => {

            e.preventDefault();
            const elemScrollTo = document.querySelector(e.target.getAttribute("data-nav"));
            let point;
            // const point = elemScrollTo.getBoundingClientRect().top + page.scrollTop - document.querySelector("header").offsetHeight;            

            // point = elemScrollTo.getBoundingClientRect().top + page.scrollTop - headerMain.offsetHeight;
            point = elemScrollTo.getBoundingClientRect().top + document.querySelector('.page').scrollTop - headerMain.offsetHeight;

            if (point > page.scrollTop) {
                point += headerMain.offsetHeight;
            }

            page.scrollTo({
                top: point,
                behavior: "smooth",
            });

        }, false);
    });




    //_____________________________________________________________________
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

        if (document.body.classList.contains('_touch')) {
            prev.classList.add('_mobile');
            next.classList.add('_mobile');
            closeX.classList.add('_mobile');
        }

        // path to img that was clicked first
        let pathBPh;

    // open-close photo____________________
        photoContainer.addEventListener("click", (event) => {
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

        function showNextSlide(params) {
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

            bigPhotoWrapper.style.left = "0";
            bigPhotoWrapper.style.top = "0";
            bigPhotoWrapper.style.transition = "all ease 0.3s 0s"; 

        }

        function showPrevSlide(params) {
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

            bigPhotoWrapper.style.left = "0";
            bigPhotoWrapper.style.top = "0";
            bigPhotoWrapper.style.transition = "all ease 0.3s 0s"; 

        }

        //Slider
        next.addEventListener("click", (event)=>{
            showNextSlide();
        });

        prev.addEventListener("click", (event)=>{
            showPrevSlide();
        });

        //change slide by click arrow keys
        window.addEventListener("keydown", (event)=>{

            //next slide
            if (event.key == "ArrowRight" && photoPopup.style.display == "flex") {
                showNextSlide();
            // prev slide
            } else if (event.key == "ArrowLeft" && photoPopup.style.display == "flex") {
                showPrevSlide();
            }

        });

         //change slide by swipe
         let touchStart;
         let touchEnd;
         let touchCoordX;
         let touchCoordY;
         bigPhoto.addEventListener('touchstart', e => {
            e.preventDefault();
            e.stopPropagation();
            touchStart = e.changedTouches[0];

            touchCoordX = touchStart.pageX - touchStart.target.offsetLeft;
            touchCoordY = touchStart.pageY - touchStart.target.offsetTop;

        }, false);
         //move slide
        bigPhoto.addEventListener('touchmove', e => {
            if (e.targetTouches.length == 1) {
                let touch = e.targetTouches[0];
                bigPhotoWrapper.style.left = touch.pageX - touchCoordX + 'px';
                if (Math.abs(touch.pageY - touchCoordY) > 50) {
                    bigPhotoWrapper.style.top = touch.pageY - touchCoordY + 'px';
                }                
            }

        }, false);

        bigPhoto.addEventListener('touchend', e => {
            e.preventDefault();
            e.stopPropagation();
            touchEnd = e.changedTouches[0];

            let xDelta = touchStart.pageX - touchEnd.pageX;
            let yDelta = touchStart.pageY - touchEnd.pageY;
            
   // ---------Show Next Slide
            if (xDelta > 50) {
                bigPhotoWrapper.style.transition = "all ease 0.3s 0s"; 
                bigPhotoWrapper.style.left = "-100%";
                bigPhotoWrapper.style.opacity = 0;
                setTimeout(()=>{
                    bigPhotoWrapper.style.transition = "none"; 
                    bigPhotoWrapper.style.left = "100%";                    
                },200);
                setTimeout(()=>{
                    bigPhotoWrapper.style.opacity = 1;                    
                },350);

                setTimeout(showNextSlide, 400);               

    // ---------Show Prev Slide   
            } else if (xDelta < -50) {       
                bigPhotoWrapper.style.transition = "all ease 0.3s 0s";     
                bigPhotoWrapper.style.left = "100%";
                bigPhotoWrapper.style.opacity = 0;
                setTimeout(()=>{
                    bigPhotoWrapper.style.transition = "none"; 
                    bigPhotoWrapper.style.left = "-100%";                    
                },200);
                setTimeout(()=>{
                    bigPhotoWrapper.style.opacity = 1;                    
                },350);

                setTimeout(showPrevSlide, 400); 
            } else {
                bigPhotoWrapper.style.transition = "none"; 
                bigPhotoWrapper.style.left = "0";
            }

    // ---------Close Photo
            if (yDelta > 150 || yDelta < -150) {
                photoPopup.style.display = "none";
                photoPopup.style.overflow = "";
                bigPhoto.classList.remove("fadeTwo");
                // bigPhotoWrapper.style.left = "0";
            } 
            // bigPhotoWrapper.style.left = "0";
            // // // bigPhotoWrapper.style.left = "100%";
            bigPhotoWrapper.style.top = "0";

        }, false);


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
                    i.classList.add("fadeThree");
                                    
                }, index*75);
                
            });
    
            page.removeEventListener("scroll", addFadeToContent);
        }     
        return false;
    }

    page.addEventListener("scroll", addFadeToContent);


    //Preloader______________________________________________________
    //_______________________________________________________________
    // window.addEventListener("load", (e)=>{
    //     const preloader = document.querySelector(".preloader");
    //     setTimeout(function () {
    //         // preloader.style.display = "none";   
    //         preloader.classList.add("preloader_done");     
    //     }, 500);
    // });



    //Burger__________________________________________________________
    //________________________________________________________________

    const burger = document.querySelector(".burger");
    const menuBody = document.querySelector(".menu_body");
    burger.addEventListener("click", showBurgerMenu);
    menuBody.addEventListener("click", showBurgerMenu);


    function showBurgerMenu() {
        menuBody.classList.toggle("_active");
        burger.classList.toggle("_active");
    }






//----------------Show and Hide Header if scroll up_____________________________________________________________________________

    const social = document.querySelector(".social_media_panel");
    const header = document.querySelector("#top");
    const headerMB = document.querySelector(".menu_body");
    const headerRow = document.querySelector('.header_row');

    //getting scrollbar visble 
    if ( !document.body.classList.contains("_touch")) {
        headerRow.style.marginRight = `${headerRow.offsetWidth - page.clientWidth}px`;
    }    

    let lastScroll = 0;
    const defaultOffset = 80;
    const scrollPos = ()=> page.scrollTop;
    const containHide = () => header.classList.contains('hidden_head');

    page.addEventListener('scroll', () => {
        if(!containHide() && (scrollPos() > lastScroll)  && (scrollPos() > defaultOffset)) {
            //scroll down
            if (document.documentElement.clientWidth < 767){
                social.classList.add("hidden_head");
            }

            header.classList.add('hidden_head');
            headerMB.classList.add("hidden_head");

            // headerMain.classList.remove("_active");
        }
        else if(containHide() && (scrollPos() < lastScroll)){
            //scroll up
            header.classList.remove('hidden_head');
            social.classList.remove("hidden_head");
            headerMB.classList.remove("hidden_head");

            // headerMain.classList.remove("_active");
        }

        lastScroll = scrollPos();
    }) ;




    //____________________________________________________________________
    //Form________________________________________________________________

//----------------Show popup form--------------------------------------------------
    const popupForms = document.querySelectorAll("._popupForm");
    const popupsButton = document.querySelectorAll("[data-popup]");

    popupsButton.forEach(btn=>{
        btn.addEventListener("click", showPopupForm);

    });

    function showPopupForm(e) {
        if (e.target.getAttribute("data-popup") == "_popupForm") {
            e.preventDefault();
            popupForms.forEach(form=>{
                form.classList.add("_active");
            });
        }   
    }
 //------Close popup form-------------------------------------------------------
    const preloaded = document.querySelectorAll('.file__preview');

    popupForms.forEach(form =>{
        form.addEventListener("click", e=>{

            if (e.target && e.target.classList.contains("popup__window") && form.classList.contains("_active")){
                form.classList.remove("_active");
                preloaded.forEach(p=>p.innerHTML = "");
            } else if (e.target && e.target.classList.contains("closeForm") && form.classList.contains("_active")) {
                form.classList.remove("_active");
                // delete preview of uploaded img when closing the form
                preloaded.forEach(p=>p.innerHTML = "");
            }        
        });   
    });  

//------------------------------------------------------------------------------------
    // close popups with escape btn
    window.addEventListener('keydown', e=>{
        let photoPopup = document.querySelector('.popup_photo');
        let bigPhoto = document.querySelector('.bigPhotoWrapper img');

        if (e.key == 'Escape') {
            //close Form
            popupForms.forEach(f=>f.classList.remove("_active"));
            preloaded.forEach(p=>p.innerHTML = "");
            //close slider img
            photoPopup.style.display = "none";
            photoPopup.style.overflow = "";
            bigPhoto.classList.remove("fadeTwo");
        }


          
    });
//---------------------------------------------------------------------------------------



    //Save Form data on google sheets

    const forms = document.querySelectorAll("form");

    const successMessage = document.querySelector(".status__success");
    const failureMessage = document.querySelector(".status__failure");
    const statusPopMessage = document.querySelector(".popup__status");

    const fileInputs = document.querySelectorAll('[name="reference"]');





    //close thanks window----------------------------------------------
    statusPopMessage.addEventListener("click", (e)=>{
        if (e.target.classList.contains("popup__status")){
            statusPopMessage.classList.remove("_active");
        }

    });
    //------------------------------------------------------------------

    const message = {
        loading:"../img/spinner.svg",
        success: "Thank you. We'll get in touch with you soon!",
        failure: "Something went wrong..."
    };

    forms.forEach(i=>{
        postData(i);
    });

    //--------------------------------------------------------------------
    //-----add preview---------------------------------------------------------------
    fileInputs.forEach(f=>{
        f.addEventListener('change', (e)=>{
        previewFile(f);
        });
    });


    //--------------------------------------------------------------------
    //--------------------------------------------------------------------

    const urlForm = "https://script.google.com/macros/s/AKfycbyKUbVsTFdGXejgm71mlV-AoSwCvJivHFvk8EDQPqfNJ_up8lHg-lsmTnwq423oEFyq/exec";
    const urlImg = "https://script.google.com/macros/s/AKfycbw7q1hq38GVtseUZPH2J8B3c4UAnuJK-DQRGx4QIfYTzdjEiwqBhf_ItrV_fRGX3FHw/exec";

    function postData(form) {
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                `;


            //Form validation---------------------------------------------------------------------
            let error = validateForm(form);
            //------------------------------------------------------------------------------------
    
            const formData = new FormData(form);

            // const object = {};
            // formData.forEach((value, key) =>{
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);


            const file = formData.get("reference");
            const fr = new FileReader();
            fr.readAsArrayBuffer(file);

            if (error === 0){
                form.append(statusMessage);
                fetchImg();
                fetchFormData();
            }

            const previewF = form.querySelector('.file__preview');
            

            function fetchImg() {
                fr.onload = f => {            
                    const qs = new URLSearchParams({filename: file.name, mimeType: file.type});

                    fetch(`${urlImg}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)]), mode:"no-cors"})
                    .then(()=>{previewF.innerHTML = '';})
                    .catch(err => console.log(err));
                };
                
            }

            function fetchFormData() {
                fetch(urlForm, {
                    method:'POST', 
                    body: formData, 
                    mode:"no-cors"
                })
                .then(()=>{
                    statusPopMessage.classList.remove("_active");
                    statusPopMessage.classList.add("_active");
                    successMessage.classList.add("_active");
                    previewF.innerHTML = '';
                    form.reset();
                })
                .catch(()=>{
                    statusPopMessage.classList.remove("_active");
                    statusPopMessage.classList.add("_active");
                    failureMessage.classList.add("_active");
                })
                .finally(()=>{
                    form.reset();
                    previewF.innerHTML = '';
                    setTimeout(()=>{
                        statusPopMessage.classList.remove("_active");
                        
                    }, 3000);
                    statusMessage.remove();
                    popupForms.forEach(form=>{
                        form.classList.remove("_active");
                        });
                });  
            }

        });    
    }

    //------------------------------------------------------------------------------------
    //Form validation---------------------------------------------------------------------
    function validateForm(form) {
        let error = 0;
        const formReqInputs = form.querySelectorAll("._req");
        formReqInputs.forEach((input, index)=>{
            removeErrorClass(input);
            if (input.getAttribute("name") === "email") {
                if (testEmail(input)) {
                    addErrorClass(input);
                    error++;
                } 
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                addErrorClass(input);
                error++;
                    
            } else {
                if (input.value === "") {
                    addErrorClass(input);
                    error++;
                }
            }
        });
        return error;
        
    }

    function addErrorClass(input) {
        input.classList.add("_error");
        input.parentElement.classList.add("_error"); 
    }

    function removeErrorClass(input) {
        input.classList.remove("_error");
        input.parentElement.classList.remove("_error");
    }

    function testEmail(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value); 
    }

    //File Validation-------------------------------------------------------------------
    function previewFile(fileInput) {
        let file = fileInput.files[0];
        //check type-------------------------------
        if (!['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)){
            fileInput.value = "";
            return;
        }
        //check size--------------------------------
        if (file.size > 10*1024*1024){
            alert("Файл должен быть меньше 10МБ.");
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = function(e){
            const fileParent = fileInput.parentElement.parentElement;
        //---add preview---------------------
            let filePreview = fileParent.querySelector('.file__preview');
            filePreview.innerHTML = `<img src="${e.target.result}" alt="preview">`;
        };
        fileReader.onerror = function(e){
            alert('Что-то пошло не так...');
        };
        fileReader.readAsDataURL(file);
    }


// var hasSmoothScroll = 'scrollBehavior' in document.documentElement.style;




});