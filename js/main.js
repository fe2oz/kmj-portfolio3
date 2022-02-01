
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
});

$(document).ready(function(){
    gsap.to(".section-one-h1", {
        scrollTrigger: {
            trigger: "section-one-h1",
            scrub: true,
            y: -100
        },
        y: 100
    }) 
})