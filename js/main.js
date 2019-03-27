$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "mozAnimationEnd",
        WebkitAnimation: "webkitAnimationEnd"
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement("div"));

    this.addClass("animated " + animationName).one(animationEnd, function() {
      //$(this).removeClass('animated ' + animationName);

      if (typeof callback === "function") callback();
    });

    return this;
  }
});

var element_position = $("#about").offset().top;
$("#about .we").hide();
$("#about .ed").hide();
$(window).on("scroll", function() {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = element_position;

  if (y_scroll_pos > scroll_pos_test) {
    //do stuff

    if (!$("#about .we").hasClass("animate")) {
      $("#about .we").show();
      $("#about .ed").show();
      $("#about .we").animateCss("fadeInLeft");
      $("#about .ed").animateCss("fadeInRight");
    }
  }
});
