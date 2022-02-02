
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