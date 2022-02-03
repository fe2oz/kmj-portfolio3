
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
      "1. html",
      "2. css",
      "3. scss",
      "4. javascript"
    ],
    datasets: [{
    data: [90, 90, 65, 60],
    backgroundColor: [
      "orange",
      "skyblue",
      "pink",
      "yellow"
    ],
    hoverBackgroundColor: [
      "#f97338",
      "#5381d6",
      "#ff3ab3",
      "#ced37e"
    ]
    }]
  },
    options: { responsive: false }
  }); 

  var options = {
    responsive: false
  };
  new Chart($("#canvas2"), {
    type: 'doughnut',
    tooltipFillColor: "rgba(51, 51, 51, 0.55)",
    data: {
    labels: [
      "photoshop",
      "illustrator",
      "3d blender",
      "javascript"
    ],
    datasets: [{
    data: [90, 90, 75, 60],
    backgroundColor: [
      "orange",
      "skyblue",
      "pink",
      "yellow"
    ],
    hoverBackgroundColor: [
      "#f97338",
      "#5381d6",
      "#ff3ab3",
      "#ced37e"
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