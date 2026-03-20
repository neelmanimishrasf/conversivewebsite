
(function ($) {
	"use strict";

  $('.trusted-carousel').owlCarousel({
      loop: true,
      margin: 60,
      autoplay: true,
    
      autoplaySpeed: 5000,
      smartSpeed: 5000,
      slideTransition: 'linear',
      autoplayHoverPause: false,  // IMPORTANT
      dots: false,
      nav: false,
      mouseDrag: false,           // IMPORTANT
      touchDrag: false,           // IMPORTANT
      pullDrag: false,            // IMPORTANT
      responsive:{
          0:{ items:2 },
          768:{ items:3 },
          1024:{ items:6 }
      }
  });



  $('.convert-carousel').owlCarousel({
      loop:true,
      margin: 30,
      items: 1,
      stagePadding: 120,
      center: true,        
      autoplay: true,
    autoplayTimeout:10000,
	autoplaySpeed: 4500,
    autoplayHoverPause:true,
      dots: false,
      nav: false,
      responsive:{
        0:{
          stagePadding: 20,
          margin: 20,
          items: 1.1,
           center: false
        },
        768:{
          stagePadding: 100
        },
        1200:{
          stagePadding: 220,
        },
		1700:{
          stagePadding: 220,
        }
      }
  });




  function conversiveCarousel() {
  var screenWidth = $(window).width();

  if (screenWidth <= 767) {

    if (!$('.conversive-carousel').hasClass('owl-loaded')) {
      $('.conversive-carousel').owlCarousel({
        loop: true,
        margin: 20,
        items: 1.2,
        stagePadding: 20,
        center: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 4500,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive:{
        0:{
         items: 1.2,
         center: false,
        }
        
         }
      });
    }

  } else {

    if ($('.conversive-carousel').hasClass('owl-loaded')) {
      $('.conversive-carousel').trigger('destroy.owl.carousel').removeClass('owl-loaded');
      $('.conversive-carousel .owl-stage-outer').children().unwrap();
    }

  }
}

$(document).ready(function () {
  conversiveCarousel();
});

$(window).resize(function () {
  conversiveCarousel();
});






  function practiceingcarousel() {
  var screenWidth = $(window).width();

  if (screenWidth <= 1199) {

    if (!$('.practiceing-carousel').hasClass('owl-loaded')) {
      $('.practiceing-carousel').owlCarousel({
        loop: true,
        margin: 40,
        items: 2.2,
        stagePadding: 20,
        center: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 4500,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive:{
        0:{
          stagePadding: 20,
          margin: 20,
          items: 2,
        },
        768:{
          stagePadding: 20,
          items: 2.2
        }
        
         }
      });
    }

  } else {

    if ($('.practiceing-carousel').hasClass('owl-loaded')) {
      $('.practiceing-carousel').trigger('destroy.owl.carousel').removeClass('owl-loaded');
      $('.practiceing-carousel .owl-stage-outer').children().unwrap();
    }

  }
}

$(document).ready(function () {
  practiceingcarousel();
});

$(window).resize(function () {
  practiceingcarousel();
});





  $('.resources-carousel').owlCarousel({
      loop:false,
      margin: 30,
      items: 3.2,
      stagePadding: 120,
      //center: true,        
      autoplay: true,
    autoplayTimeout:10000,
	autoplaySpeed: 4500,
    autoplayHoverPause:true,
      dots: false,
      nav: false,
      responsive:{
        0:{
          stagePadding: 20,
          items: 1.1,
        },
        768:{
          stagePadding: 30,
          items: 2.2
        },
        1200:{
          stagePadding: 40,
        },
		1700:{
          stagePadding: 40,
        }
      }
  });




  $('.testimonial-carousel').owlCarousel({
      loop:true,
      margin: 30,
      items: 1,
      stagePadding: 120,
      //center: true,        
      autoplay: true,
    autoplayTimeout:10000,
	autoplaySpeed: 4500,
    autoplayHoverPause:true,
      dots: false,
      nav: false,
      responsive:{
        0:{
          stagePadding: 20
        },
        768:{
          stagePadding: 30
        },
        1200:{
          stagePadding: 40,
        },
		1700:{
          stagePadding: 40,
        }
      }
  });



  /*=== tab === */
  document.addEventListener("DOMContentLoaded", function () {

  const nav = document.querySelector(".tabs-nav");
  const section = document.querySelector(".vertical-tabs-section");
  const buttons = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".patient-tabcontent");

  const headerOffset = 0;

  
  if (window.innerWidth <= 992) {
    if (buttons.length > 0 && sections.length > 0) {
      buttons[0].classList.add("active");
      sections[0].classList.add("active");
    }
  }

  function handleScroll() {

    if (window.innerWidth <= 992) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const navHeight = nav.offsetHeight;

    const scrollY = window.scrollY;
    const stickyStart = sectionTop - headerOffset;
    const stickyEnd = sectionTop + sectionHeight - navHeight - headerOffset;

    if (scrollY >= stickyStart && scrollY <= stickyEnd) {
      nav.style.position = "fixed";
      nav.style.top = headerOffset + "px";
      nav.style.bottom = "auto";
    } 
    else if (scrollY > stickyEnd) {
      nav.style.position = "absolute";
      nav.style.top = "auto";
      nav.style.bottom = "0";
    } 
    else {
      nav.style.position = "relative";
      nav.style.top = "0";
    }

    // AUTO ACTIVE (DESKTOP)
    sections.forEach(sectionItem => {
      const rect = sectionItem.getBoundingClientRect();

      if (rect.top <= 200 && rect.bottom >= 200) {
        buttons.forEach(btn => btn.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        const activeBtn = document.querySelector(
          `.tab-btn[data-target="${sectionItem.id}"]`
        );

        if (activeBtn) activeBtn.classList.add("active");
        sectionItem.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  // CLICK FUNCTION
  buttons.forEach(btn => {
    btn.addEventListener("click", function () {

      const targetId = this.dataset.target;

      buttons.forEach(b => b.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(targetId).classList.add("active");

      if (window.innerWidth > 992) {
        document.getElementById(targetId)
          .scrollIntoView({ behavior: "smooth" });
      }

    });
  });

});

/* ==== video ===== */

const video = document.getElementById("demoVideo");
const btn = document.getElementById("videoBtn");
const box = document.querySelector(".video-box");

btn.addEventListener("click", function(){

    if(video.paused){
        video.play();
        btn.innerHTML = "❚❚";
        box.classList.add("playing");
    }else{
        video.pause();
        btn.innerHTML = "▶";
        box.classList.remove("playing");
    }

});


const videomob = document.getElementById("demoVideomob");
const btnmob = document.getElementById("videoBtnmov");
const boxmov = document.querySelector(".video-box");

btnmob.addEventListener("click", function(){

    if(videomob.paused){
        videomob.play();
        btnmob.innerHTML = "❚❚";
        boxmov.classList.add("playing");
    }else{
        videomob.pause();
        btnmob.innerHTML = "▶";
       boxmov.classList.remove("playing");
    }

});

})(jQuery);