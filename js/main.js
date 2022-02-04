
$(document).ready(function(){ //////메뉴 
    var timeline = new TimelineMax();

        timeline.to("#overlay-min", 0.8, {
            top: "0%",
            ease: "expo.InOut",
            opacity: "1"
        });
        timeline.staggerFrom("#overlay-min li", 0.4, {
            x: -100, 
            opacity: 0,
        }, 0.1);

        timeline.reverse();

        $(document).on("click", "#open-menu", function () {
            timeline.play();
            $(".section").css({visibility: "hidden"},).animate({visibility: "hidden"}, 2000)
            $("#slider").css({visibility: "hidden"}).animate({opacity:0}, 2000)
        });
        $(document).on("click", "a", function () {
            timeline.reverse();
            $(".section").css({opacity:0, visibility: "visible"}).animate({opacity:1}, 2000)
            $("#slider").css({opacity:0, visibility: "visible"}).animate({opacity:1}, 2000)
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
    data: [90, 90, 65, 50, 40, 30, 45],
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
   
});

$(function(){
    $("#profile").mouseover(function(){
        $(".section-one-about-2-profile").css("display", "flex");
        $(".section-one-about-2-history").css("display", "none");
        $(".section-one-about-2-license").css("display", "none");
        $("#deco1").stop().animate({"top": "55%"});
        $("#deco2").stop().animate({"top": "25%"});
        $("#deco3").stop().animate({"top": "10%"});
    });

    $("#history").mouseover(function(){
        $(".section-one-about-2-history").css("display", "flex");
        $(".section-one-about-2-profile").css("display", "none");
        $(".section-one-about-2-license").css("display", "none");
        $("#deco1").stop().animate({"top": "30%"});
        $("#deco2").stop().animate({"top": "45%"});
        $("#deco3").stop().animate({"top": "40%"});
    });

    $("#license").mouseover(function(){
        $(".section-one-about-2-license").css("display", "flex");
        $(".section-one-about-2-profile").css("display", "none");
        $(".section-one-about-2-history").css("display", "none");
        $("#deco1").stop().animate({"top": "40%"});
        $("#deco2").stop().animate({"top": "30%"});
        $("#deco3").stop().animate({"top": "25%"});
    });
});