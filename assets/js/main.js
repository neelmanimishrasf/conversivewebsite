
(function ($) {
	"use strict";

     // Lenis Scroll Js
	const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add(time => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);


$(document).ready(function ($) {

		var lastScrollTop = 0;
        $(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".aw-header-area.header-absolute").addClass("header-2 header-sticky sticky");
				$(".aw-header-area.header-absolute").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".aw-header-area.header-absolute").addClass("sticky-out");
					$(".aw-header-area.header-absolute").removeClass("header-2 header-sticky sticky");
				}
			} else {
				$(".aw-header-area.header-absolute").removeClass("sticky");
			}

			lastScrollTop = scroll;

		});

        
		$("#headerMenu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "1199",
			meanExpand: [
				"<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
			],
		});

    // $("#headerMenu").meanmenu({
		// 	meanMenuContainer: ".mobile-menu",
		// 	meanScreenWidth: "1199",
		// 	meanExpand: [
		// 	'<span class="btn-icon mobmnubtn"><img src="assets/img/btn-arrow.svg" alt=""></span>'
		// 	],
		// });

    // <span class="btn-icon">
                              
    //                        </span>

		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".mobile-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".mobile-menu ul li a")
			.not(".mean-expand")
			.on("click", function () {
				$(".menu-bar").removeClass("menu-bar-toggeled");
				$(".mobile-menu").removeClass("opened");
				$("body").removeClass("overflow-hidden");
			});
	
	});


    $(document).ready(function ($) {
       
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();
 
	});

	

	gsap.registerPlugin(ScrollTrigger);


	gsap.to(".ai-powered .img_zoom img", {
		scale: 1, 
		scrollTrigger: {
		  trigger: ".ai-powered", 
		  start: "top center",    
		  end: "bottom center",    
		  scrub: true           
		}
	  });

	  gsap.to(".img_zoom img", {
		scale: 1, 
		scrollTrigger: {
		  trigger: ".home-hero-content-box", 
		  start: "top center",    
		  end: "bottom center",    
		  scrub: true           
		}
	  });






	  
  let image_list = [".mousemove-img img"]
  imageMoving(".home-hero-section", image_list)

  function imageMoving(wrapper, image_list) {
    let container = document.querySelector(wrapper)
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {

          var x = e.clientX
          var y = e.clientY
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let center = viewportWidth / 2
          let centerHeight = innerHeight / 2

          if (x > center) {
            gsap.to(image_list, {
              x: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              x: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
          if (y > centerHeight) {
            gsap.to(image_list, {
              y: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              y: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }



document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('nav ul li a[href^="#"]');
  const sections = document.querySelectorAll("section[id]");

  /* -------------------------
     Smooth Scroll + Active on Click
  -------------------------- */
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (!targetSection) return;

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

      // Remove old active
      links.forEach(l => l.classList.remove("active"));

      // Add active to clicked
      this.classList.add("active");
    });
  });


  /* -------------------------
     Active on Scroll
  -------------------------- */
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});
})(jQuery);

// HubSpot Meetings scheduler
const modal = document.querySelector(".meeting-modal");
const openBtns = document.querySelectorAll(".open-meeting");

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openBtns.forEach(btn => {
  btn.addEventListener("click", openModal);
});

modal.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

/* ===== Contact menu ===== */
const contactBtn = document.querySelector('.contact-menu .btn-demo');
const contactMenu = document.querySelector('.contact-menu');

contactBtn.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    contactMenu.classList.toggle('open');
});

document.addEventListener('click', function(e){
    if(!contactMenu.contains(e.target)){
        contactMenu.classList.remove('open');
    }
});