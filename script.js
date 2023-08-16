
const navAdmiral = document.querySelector("#admiral")
const navThieves = document.querySelector("#thieves")
const navPatriotic = document.querySelector("#patriotic")

const navs = [navAdmiral, navThieves, navPatriotic];
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
          // [dotLEft, dotMiddle, dotRight]

const back = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentSlideId = 0;
let currentDot = 0;
let currentName = 0;
let prevslide;


back.addEventListener('click', () => {
    slides[currentSlideId].classList.remove("active");
    dots[currentSlideId].classList.remove("active");
    navs[currentSlideId].classList.remove("active");

    currentSlideId = (currentSlideId - 1 + slides.length) % slides.length;

    slides[currentSlideId].classList.add("active");
    dots[currentSlideId].classList.add("active");
    navs[currentSlideId].classList.add("active");
})


  
next.addEventListener('click', () => {
    slides[currentSlideId].classList.remove("active");
    dots[currentSlideId].classList.remove("active");
    navs[currentSlideId].classList.remove("active");

    currentSlideId = (currentSlideId + 1) % slides.length;

    slides[currentSlideId].classList.add("active");
    dots[currentSlideId].classList.add("active");
    navs[currentSlideId].classList.add("active");
});

// Add navs & dots clicks event listeneres
for (let i = 0; i < navs.length; i++) {
    let nav = navs[i];
    let dot = dots[i];

    nav.addEventListener("click", (ev) => {
        // let currentNav = ev.target;
        // let currentId = currentNav.getAttribute("data-id");

        // remove active class from navs, slides, dots
        for (let j=0; j < slides.length; j++) {
            slides[j].classList.remove("active");
            navs[j].classList.remove("active")
            dots[j].classList.remove("active")
        }

        currentSlideId = i;

        slides[currentSlideId].classList.add("active");
        navs[currentSlideId].classList.add("active")
        dots[currentSlideId].classList.add("active")
    });


    dot.addEventListener("click", () => {
        for (let j=0; j < slides.length; j++) {
            slides[j].classList.remove("active");
            navs[j].classList.remove("active")
            dots[j].classList.remove("active")
        }

        currentSlideId = i;

        slides[currentSlideId].classList.add("active");
        navs[currentSlideId].classList.add("active")
        dots[currentSlideId].classList.add("active")
    });
}

  


function startup() {
    currentSlideId = 0
    slides[currentSlideId].classList.add("active");
    dots[currentSlideId].classList.add("active");
    navs[currentSlideId].classList.add("active");
}


startup();