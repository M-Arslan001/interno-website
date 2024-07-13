const navtrigbtn=document.querySelector('#nav_trigger_btn');
const menubtn=document.querySelector('#nav_menu');
navtrigbtn.addEventListener('click',()=>{
    menubtn.classList.toggle('nav-is-open');
})
// swiper js
const swiper=new Swiper('.swiper',{
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    // break-points
    slidesPerView:3,
    spaceBetween:20,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        960:{
            slidesPerView:2,
        },
        1280:{
            slidesPerView:3,
        },
    },
    autoplay:{
        delay:5000,
        disableOnInteraction:true,
    },

});

// hero text animation
const sr=ScrollReveal({
    origin:'bottom',
    distance:'60px',
    duration:3000,
    delay:600,
    // reset:true
})
sr.reveal('.hero-text',{origin:'top'});

// steps
sr.reveal('.step__stpep',{distance:'100px', interval:100});
// about
sr.reveal('.about-text',{origin:'left'});
sr.reveal('.about-img',{origin:'right',delay:800});
// testimonials
sr.reveal('.testimonial__bg',{delay:800})
// brnads img
sr.reveal('.brands0img',{delay:600,distance:'100px',interval:100});
// work
sr.reveal('.work-title');
sr.reveal('.work-subtitle',{delay:800});
sr.reveal('.work__grid',{delay:1000});
// stats
sr.reveal('.stats');
sr.reveal('.stats-item',{distance:'100px',interval:100});
// news
sr.reveal('.news-title');
sr.reveal('.news-subtitle',{delay:800});
// news-items
sr.reveal('.news-items',{distance:'100px',delay:800,interval:100});
// contact
sr.reveal('.contact-section');
sr.reveal('.contact-text',{delay:800});
sr.reveal('.contact-butn',{delay:800});
// for footer section
sr.reveal('.footer_items',{distance:'100px',interval:100});
sr.reveal('.footer-items1',{distance:'100px',interval:100});
// for copyright section
sr.reveal('.copy-right')