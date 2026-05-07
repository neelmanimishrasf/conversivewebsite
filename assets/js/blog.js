// Smooth scroll
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.toc a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

const toc = document.querySelector('.toc');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.blogsingle-content');
const header = document.querySelector('.aw-header');

if (toc && sidebar && container) {

  let lastState = "";

  function updateSticky() {
    const headerHeight = header ? header.offsetHeight : 80;

    const scrollY = window.scrollY;
    const containerTop = container.offsetTop;
    const containerBottom = containerTop + container.offsetHeight;

    const tocHeight = toc.offsetHeight;
    const sidebarWidth = sidebar.offsetWidth;

    const start = containerTop - headerHeight - 20;
    const end = containerBottom - tocHeight - headerHeight - 20;

    let newState = "";

    if (scrollY >= start && scrollY <= end) {
      newState = "fixed";
    } else if (scrollY > end) {
      newState = "bottom";
    } else {
      newState = "top";
    }


    if (newState === lastState) return;
    lastState = newState;

    if (newState === "fixed") {
      toc.style.position = "fixed";
      toc.style.top = (headerHeight + 20) + "px";
      toc.style.width = sidebarWidth + "px";
      toc.style.bottom = "auto";
    }

    else if (newState === "bottom") {
      toc.style.position = "absolute";
      toc.style.top = "auto";
      toc.style.bottom = "0";
      toc.style.width = "100%";
    }

    else {
      toc.style.position = "relative";
      toc.style.top = "0";
      toc.style.bottom = "auto";
      toc.style.width = "100%";
    }
  }

  window.addEventListener("scroll", updateSticky);
  window.addEventListener("resize", updateSticky);

  window.addEventListener("load", updateSticky);
}

const toggleBtn = document.querySelector('.toc-toggle');
const sidebarEl = document.querySelector('.sidebar');

// create overlay dynamically
const overlay = document.createElement('div');
overlay.classList.add('sidebar-overlay');
document.body.appendChild(overlay);

// OPEN
toggleBtn.addEventListener('click', () => {
  sidebarEl.classList.add('active');
  overlay.classList.add('active');
});

// CLOSE on overlay click
overlay.addEventListener('click', () => {
  sidebarEl.classList.remove('active');
  overlay.classList.remove('active');
});

// CLOSE when clicking menu link
document.querySelectorAll('.toc a').forEach(link => {
  link.addEventListener('click', () => {
    sidebarEl.classList.remove('active');
    overlay.classList.remove('active');
  });
});