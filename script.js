<script src="js/script.js"></script>
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
// ==========================
// Анимация появления
// ==========================

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
// ==========================
// Кнопка вверх
// ==========================

const topButton = document.getElementById("topButton");


if(topButton){

window.addEventListener("scroll",()=>{


if(window.scrollY > 500){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}


});


topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


}


// ==========================
// Галерея
// ==========================

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.onclick=()=>{

window.open(img.src);

}

});
// ==========================
// Проверка формы
// ==========================

const form = document.getElementById("trialForm");

// form.addEventListener("submit",(e)=>{

// alert("Спасибо! Ваша заявка успешно отправлена.");

// });
// ==========================
// Слайдер руководителя
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    let current = 0;

    slides[current].classList.add("active");

    setInterval(() => {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");

    }, 3000);

});