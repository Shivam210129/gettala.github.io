function inti(){
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

inti()










var menu=document.querySelector("#nav-prt2 i")
var full =document.querySelector("#full-scr-nav")

var flag=0;

menu.addEventListener("click" ,function(){
    if(flag==0){
        full.style.top = "0%";
    document.querySelector("#nav h2").style.color="#222"
    document.querySelector("#nav h3").style.color="#222"
    document.querySelector("#nav i").style.color="#222"
        flag=flag+1;
    }
    else{
        full.style.top = "-100%";
    document.querySelector("#nav h2").style.color="#dadada"
    document.querySelector("#nav h3").style.color="#dadada"
    document.querySelector("#nav i").style.color="#dadada"


    }
    
})

var t1=gsap.timeline()


t1.from("#page1 h1",{
    y:100,
    duration:0.5,
    opacity:0

})
.from("#page1 h2",{
    y:100,
    duration:0.6,
    opacity:0,
    delay:"-0.2"

})
.from("#page1 h3",{
    y:100,
    duration:0.6,
    opacity:0,
    delay:"-0.2"

})  

gsap.to("#page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 0%",
        scrub:3

    }
})
gsap.to("#page2 h1",{
    rotateX:0,
    opacity:1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        opacity:0,
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2


    }
})

var slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1 h1")
// console.log(slide1h1);
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})

var slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1 h1")
// console.log(slideh1);
slide2h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(0%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})



document.querySelector("#element1").addEventListener("mousemove",function(){
    document.querySelector("#element1 img").style.opacity=1;
    // document.querySelector("#element1 img").style.left=`$(dets.x-100)px`
   
})
document.querySelector("#element1").addEventListener("mouseleave",function(){
    document.querySelector("#element1 img").style.opacity=0;
    // document.querySelector("#element1 img").style.left=`$(dets.x-100)px`
   
})


document.querySelector("#element2").addEventListener("mousemove",function(){
    document.querySelector("#element2 img").style.opacity=1;
})

document.querySelector("#element2").addEventListener("mouseleave",function(){
    document.querySelector("#element2 img").style.opacity=0;
})