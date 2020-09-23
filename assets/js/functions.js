$(document).ready(function () {
  "use strict";

  // Offers Slider
  var offersSlider = $("#offersSlider").owlCarousel({
    items: 2,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  $("#prevOffer").click(function () {
    offersSlider.trigger("next.owl.carousel");
  });
  $("#nextOffer").click(function () {
    offersSlider.trigger("prev.owl.carousel");
  });

  // Team Slider
  var teamSlider = $("#teamSlider").owlCarousel({
    items: 4,
    margin: 20,
    responsiveClass: true,
    // rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $("#prevMember").click(function () {
    teamSlider.trigger("next.owl.carousel");
  });
  $("#nextMember").click(function () {
    teamSlider.trigger("prev.owl.carousel");
  });

  // Feedback Slider
  var feedbackSlider = $("#feedbackSlider").owlCarousel({
    items: 3,
    margin: 20,
    navigation: true,
    pagination: true,
    nav: true,
    dots: true,
    dotsEach: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
      },
      650: {
        items: 2,
        dots: false,
        nav: false,
      },
      1000: {
        items: 3,
        dots: true,
        nav: false,
      },
    },
  });

  // Datepicker
  $('[data-toggle="datepicker"]').datepicker();

  // Tabs
  $(".tab").on("click", function () {
    var tab = $(this).data("tab");
    $(this).addClass("active").siblings().removeClass("active");
    $(tab).addClass("active").siblings().removeClass("active");
  });
});

// Show Dropdown
$("#menuBar").on("click", function () {
  if ($(this).hasClass("active")) {
    $("#navLinks").slideUp(270);
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
    $("#navLinks").slideDown(270);
  }
});
