// change navbar style on scroll
window.addEventListener('scroll' , () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll',window.scrollY > 100)
})


// show hide paraghraph on click
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click' , ()=> {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq_icon i')
    if (icon.className === "fa-solid fa-plus")
    {
      icon.className = "fa-solid fa-minus"
    }
    else 
    {
      icon.className = "fa-solid fa-plus"
    }
  })
})


// show/hide nav menu  
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-tap');
const closeBtn = document.querySelector('#close-menu-tap');

menuBtn.addEventListener('click' , ()=> {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display ="inline-block"
})

closeBtn.addEventListener('click' , () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display ="none"
})


// Swiper 
const swiper2 = document.querySelector('.mySwiper')
if(swiper2) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
      600 : {
        slidesPerView : 2
      }
    }
  });
}

// =========== button to top =======
const btnTop = document.getElementById("btnTop");

btnTop.addEventListener("click", () => {
  scrollTo({
      top: 0,
      behavior: "smooth",
  });
});

window.addEventListener('scroll' , () => {
  if (window.scrollY > 350) {
    btnTop.style.display = "inline-block"
  }
  else {
    btnTop.style.display = "none"
  }
})



