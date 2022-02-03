
$(document).ready(function(){ //////메뉴 
    var timeline = new TimelineMax();

        timeline.to("#overlay-min", 0.8, {
            top: "0%",
            ease: "expo.inOut",
            opacity: "1"
        });
        timeline.staggerFrom("#overlay-min li", 0.4, {
            x: -100, 
            opacity: 0,
        }, 0.1);

        timeline.reverse();

        $(document).on("click", "#open-menu", function () {
            timeline.play();
        });
        $(document).on("click", "a", function () {
            timeline.reverse();
        });


    var options = {
    responsive: false
  };
  new Chart($("#canvas1"), {
    type: 'doughnut',
    tooltipFillColor: "rgba(51, 51, 51, 0.55)",
    data: {
    labels: [
      "html",
      "css",
      "scss",
      "javascript",
      "photoshop",
      "illustrator",
      "3d blender"
    ],
    datasets: [{
    data: [90, 90, 65, 60, 40, 30, 45],
    backgroundColor: [
      "orange",
      "skyblue",
      "pink",
      "yellow",
      "#3838b2",
      "#eb9345",
      "#b07ce1"
    ],
    hoverBackgroundColor: [
      "#f97338",
      "#5381d6",
      "#ff3ab3",
      "#ced37e",
      "#3f3fc6",
      "#ffc160",
      "#bd76ff"
    ]
    }]
  },
    options: { responsive: false }
  }); 

  gsap.timeline({
    scrollTrigger: {
      trigger: ".grid-container",
      start: "top top",
      end: () => innerHeight * 4,
      scrub: true,
      pin: ".grid",
      anticipatePin: 1
    }
  })
  .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
  .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
  .from(".gridLayer", {
    scale: 3.3333,
    ease: "none",
  });
  
  
  // Images to make it look better, not related to the effect
  const size = Math.max(innerWidth, innerHeight);
  gsap.set('.gridBlock', {backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})`});
  
  const bigImg = new Image;    
  bigImg.addEventListener("load", function () {
    gsap.to(".centerPiece .gridBlock", {autoAlpha: 1, duration: 0.5});
  });
  
  bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;  
});

$(function(){
    $("#profile").mouseover(function(){
        $(".section-one-about-2-profile").css("display", "flex");
        $(".section-one-about-2-history").css("display", "none");
        $(".section-one-about-2-license").css("display", "none");
    });

    $("#history").mouseover(function(){
        $(".section-one-about-2-history").css("display", "flex");
        $(".section-one-about-2-profile").css("display", "none");
        $(".section-one-about-2-license").css("display", "none");
    });

    $("#license").mouseover(function(){
        $(".section-one-about-2-license").css("display", "flex");
        $(".section-one-about-2-profile").css("display", "none");
        $(".section-one-about-2-history").css("display", "none");
    });
});