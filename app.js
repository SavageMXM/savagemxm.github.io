let tl = gsap.timeline({
  onload: {
    trigger: ".front-page",
    start: "top",
    end: "100%",
    scrub: "true",
    pin: true,
  },
  
});

tl.fromTo(
  ".front-page",
  {
    clipPath: "circle(0%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 2,
  }
);

tl.fromTo(
  ".title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl.fromTo(
  ".sub-title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl.window.scroll({
  top: 1000, 
  left: 0, 
  behavior: 'smooth' 
 });


 