window.onload = function() {
  window.scrollTo(0, 0);
}

// document.getElementById("outerlogo").addEventListener("click",()=>{
//     document.getElementById("outerlogo").to  
// })
// document.getElementById("outerlogo").t  
$(document).ready(function(){
    $('nav').click(function(){
        $('#resp').toggleClass("resp2")
        $('.outerlogo').toggleClass('outerlogo2') 
        // $('.outerlogo').css({'transform':'rotate(90deg)'})

    })
    $(document).mousemove(function (e) {
        $('#cursor').offset({
          top: e.pageY -10,
          left: e.pageX-10 
        })
      })
    $("#contact").mouseenter(()=>{
      $("#cursor").css({
        border: '2px solid black'
      })
    }).mouseleave(()=>{
      $("#cursor").css({
        border: '2px solid red'
      })
    })


})
// const h1 = document.getElementById("h1");

// var imgs = document.getElementById('langs')
// window.addEventListener('scroll', () => {
//     let scroll = window.scrollY;
//     if (scroll > 600) {
//       imgs.style.right = 600 - scroll + "px"
//     }
// gsap starts
let tl = gsap.timeline()
tl.from('nav h4',{
  y:-200,
  duration: 1,
  opacity:0,
})
tl.from("#hero>h1>div",{
  x:300,
  duration:1,
  stagger:0.6,
  opacity:0
})
tl.from("#social img",{
  x:-300,
  duration:1,
  stagger:0.6,
  opacity:0
})
// gsap.to("body",{
//   backgroundColor:"white",
//   scrollTrigger:{
//     trigger:"#about",
//     scrub:0.0001,
//     start:"top 50%",
//     end:"top -20%"
//   }
// })
// gsap.to("body",{
//   backgroundColor:"black",
//   color:"white",
//   scrollTrigger:{
//     trigger:"#third",
//     scrub:0.0001,
//     start:"top 50%",
//     end:"top 40%"
//   }
// })

tl.from(".innerabout h2, .innerabout p",{
  x:-200,
  opacity:0,
  stagger:0.6,
  duration:0.2,
  scrollTrigger:{
    trigger:"#about",
    scroller:'body',
    scrub:1,
    start:"top 50%",
    end:"top 0%"
  }
})
tl.from(".innerabout iframe",{
  scale:0,
  opacity:0,
  duration:0.2,
  scrollTrigger:{
    trigger:"#about",
    scroller:'body',
    scrub:1,
    start:"top 50%",
    end:"top 0%"
  }
})
tl.from(".innerserve h2, .innerserve p",{
  x:-200,
  opacity:0,
  stagger:1,
  duration:0.2,
  scrollTrigger:{
    trigger:"#third",
    scroller:'body',
    markers:true,
    scrub:1,
    start:"top 50%",
    end:"top 0%"
  }
})
tl.from("#sports img",{
  scale:0,
  opacity:0,
  duration:0.2,
  scrollTrigger:{
    trigger:"#about",
    scroller:'body',
    scrub:1,
    start:"top 50%",
    end:"top 0%"
  }
})

gsap.from("#hero h5",{
  y:-10,
  duration:1,
  repeat:-1,
  yoyo:true
})
