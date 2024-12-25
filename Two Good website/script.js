var sidebar = document.querySelector(".sidebar");
var sidebaropener = document.querySelector("#sidebar");
var sidebartoggle = "close";
var cart = document.querySelector(".cart");
var cartOpener = document.querySelector("#cart");
var cartToggle = "close";
function page1animation() {
  gsap.from("nav img", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    ease: "power2.easeInOut",
    stagger: 1,
    scrub: 1,
    delay: 1,
  });
  gsap.from(" nav ul", {
    y: -100,
    opacity: 1,
    delay: 1.5,
    scrub: 1,
    duration: 0.4,
    ease: "power2.easeInOut",
    delay: 1,
  });
  gsap.from(".page1 h1", {
    y: 30,
    opacity: 0,
    delay: 1.8,
    scrub: 1,
    duration: 0.3,
    stagger: 0.5,
    ease: "power2.ease",
  });

  gsap.from(".page1 .img-container", {
    y: 40,
    opacity: 0,
    delay: 2,
    duration: 0.5,
    stagger: 0.5,
    scrub: 1,
    ease: "power4.easein",
    scale: 0.9,
  });
}
document.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    left: dets.x,
    top: dets.y,
  });
});

function cursorEffect() {
  document.querySelector("#elem1 img").addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#elem1 img").addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
  document.querySelector("#elem2 img").addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#elem2 img").addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
  document.querySelector("#elem3").addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#elem3").addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
  document.querySelector("#elem4").addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  document.querySelector("#elem4").addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
}

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function navbaranimation() {
  gsap.to("#links", {
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
    transform: "translateY(-100%)",
    opacity: 0,
  });
}

function sidebarWorking() {
  sidebaropener.addEventListener("click", () => {
    if (sidebartoggle == "close") {
      sidebartoggle = "open";
      sidebar.style.opacity = 1;
      sidebar.style.display = "block";
      document.querySelectorAll("#links a").forEach((elem) => {
        elem.style.color = "white";
      });
    } else {
      sidebartoggle = "close";
      sidebar.style.opacity = 0;
      sidebar.style.display = "none";
      document.querySelectorAll("#links a").forEach((elem) => {
        elem.style.color = "black";
      });
    }
  });
}

function cartWorking() {
  cartOpener.addEventListener("click", () => {
    if (cartToggle == "close") {
      cartToggle = "open";
      cart.style.opacity = 1;
      cart.style.display = "block";
      document.querySelectorAll("#links a").forEach((element) => {
        element.style.color = "white";
      });
    } else {
      cartToggle = "close";
      cart.style.opacity = 0;
      cart.style.display = "none";
      document.querySelectorAll("#links a").forEach((element) => {
        element.style.color = "black";
      });
    }
  });
}



page1animation();
cursorEffect();
locomotive();
navbaranimation();
sidebarWorking();
cartWorking();
