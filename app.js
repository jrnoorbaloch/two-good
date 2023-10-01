
function locoMotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoMotive()

function navAnimation(){
  gsap.to(".icon",{
    transform: "translateY(-100%)",
    scrollTrigger:{
      trigger: `#page1`,
      scroller: `#main`,
      start: `top 0`,
      end: `top -5%`,
      scrub: 1,
    }
})
gsap.to(".links",{
  transform: "translateY(-100%)",
  opacity: 0,
  scrollTrigger:{
    trigger: `#page1`,
    scroller: `#main`,
    start: `top 0`,
    end: `top -5%`,
    scrub: 1,
  }
})
}
navAnimation()

function videoConAnimation() {
  let videoCon = document.querySelector("#video-container");
  let playBtn = document.querySelector(".play");

  videoCon.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 0.8,
      duration: 0.2,
    });
  });

  videoCon.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
    });
  });

  videoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x - 100,
      top: dets.y - 100,
    });
  });
}
videoConAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 300,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.8,
    duration: 0.8,
    delay: 0.8,
    opacity: 0,
  });
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
          left: dets.x - 70,
          top: dets.y - 70,
        });
      });

    let cildData = document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
          gsap.to(".cursor", {
            transform: "scale(1)",
          })
        })
        elem.addEventListener("mouseleave", function () {
          gsap.to(".cursor", {
            transform: "scale(0)",
          })
        })
      })
}
cursorAnimation()

function productAnimation(){
  gsap.from("#child1",{
    x: -700,
    duration: 1,
    scrollTrigger:{
      trigger:`#child1`,
      scroller: `#main`,
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2,
      stagger: 2
    }
  })
  gsap.from("#child2",{
    x: 700,
    duration: 1,
    scrollTrigger:{
      trigger:`#child2`,
      scroller: `#main`,
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2,
      stagger: 2
    }
  })
  gsap.from("#child3",{
    x: -700,
    duration: 1,
    scrollTrigger:{
      trigger:`#child3`,
      scroller: `#main`,
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2,
      stagger: 2
    }
  })
  gsap.from("#child4",{
    x: 700,
    duration: 1,
    scrollTrigger:{
      trigger:`#child4`,
      scroller: `#main`,
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2,
      stagger: 2
    }
  })
  gsap.from("#child5",{
    x: -700,
    duration: 1,
    scrollTrigger:{
      trigger:`#child5`,
      scroller: `#main`,
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2,
      stagger: 2
    }
  })
  gsap.from("#child6",{
    x: 700,
    duration: 1,
    scrollTrigger:{
      trigger:`#child6`,
      scroller: `#main`,
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2,
      stagger: 2
    }
  })

}
productAnimation()

function textScrollanimations(){
  gsap.to('#head1',{
    x: 520,
    // duration: 1,
    scrollTrigger:{
      trigger: `#head1`,
      scroller: `#main`,
    
      start: `top 40%`,
      end: `bottom 40%`,
      scrub: 2
    }
  })

  gsap.from('.text-left',{
    x: -600,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: `.text-left`,
      scroller: `#main`,
    
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2
    }
  })
  gsap.from('.text-right',{
    x: 600,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
      trigger: `.text-left`,
      scroller: `#main`,
    
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2
    }
  })
  gsap.from('.left-content',{
    y: 400,
    duration: 1,
    scrollTrigger:{
      trigger: `.left-content`,
      scroller: `#main`,
      // markers: true,
      start: `top 50%`,
      end: `bottom 60%`,
      scrub: 2
    }
  })

  gsap.from('.icon1',{
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      trigger: `.icon1`,
      scroller: `#main`,
      // markers: true,
      start: `top 90%`,
      end: `bottom 80%`,
      scrub: 2
    }
  })
  

}
textScrollanimations()


