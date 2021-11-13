var navBar = document.querySelector("#navbar");

var menuIcon = document.querySelector("#menu_icon");

var naME = document.querySelector("#name");

menuIcon.onclick = () => {
  navBar.classList.toggle("active");
  naME.innerHTML = "Ajit's | Portfolio";
  naME.style.fontSize = "1.5rem";
  naME.style.color = "Orange";
}

// Preloder 
var preloder = document.querySelector("#preloder");

window.addEventListener("load", function(){

  preloder.style.display = "none";
  
  });


// useing type.js plugings
var typed = new Typed(".auto_input1", {
  strings: ["I'm Ajit Sharma..."],
  typeSpeed: 150,
  backSpeed: 100,
  loop: false
})

var typed = new Typed(".auto_input2", {
  strings: [" I'm Front-End Developer", ],
  typeSpeed: 150,
  backSpeed: 100,
  loop: false
})
// End type.js plugings



// Swiper section start

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  spaceBetween: 40,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,

    },
  },

});

// Swiper section end