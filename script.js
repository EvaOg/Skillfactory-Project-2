const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let currentDot = 0;
let currentName = 0;
let prevslide;

const back = document.querySelector('.prev')
const next = document.querySelector('.next')


back.addEventListener('click', () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");

  })
  
  next.addEventListener('click', () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide+1) % slides.length;
    slides[currentSlide].classList.add("active");

  })

  const navAdmiral = document.querySelector("#admiral")
  const navThieves = document.querySelector("#thieves")
  const navPatriotic = document.querySelector("#patriotic")


  let navs = [navAdmiral, navThieves, navPatriotic];
  const dots = document.querySelectorAll('.dot');
  for(let i = 0; i < navs.length; i++) {
      let nav = navs[i];
      nav.addEventListener("click", () => {
          for(let slide of slides) {
            slide.classList.remove("active");
          }
          for (let el of navs) {
            el.classList.remove("activeName")
          }
          currentSlide = i;
          slides[i].classList.add("active");
          navs[i].classList.add("activeName"); 
    });

    let dot = dots[i];

    dot.addEventListener("click", () => {
        for(let slide of slides) {
          slide.classList.remove("active");
        }

        for (let dot of dots) {
          dot.classList.remove("activeDot")
        }

        currentSlide = i;
        currentDot = i;
        slides[i].classList.add("active");
        dots[i].classList.add("activeDot");  
  });
  }

  




