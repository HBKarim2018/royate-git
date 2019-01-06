$(document).ready(function() {
  $(".loadingPage").height($(window).height());
  $("body").niceScroll({
    cursorcolor: "#181818",
    cursorwidth: "5px",
    background: "rgba(20,20,20,0.3)",
    cursorborderradius: 0,
    cursoropacitymin: 0.4,
    cursorborder: 0
  });
  $(".sp-wrap").smoothproducts();

  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $(".loadingPage")
    .delay(5000)
    .fadeOut();

  $(".show_menu").click(function() {
    $("#navbarNav").animate({ opacity: "1" });
    $(".navbar-collapse .navbar-nav").animate({ marginLeft: "0" });
  });
  $(".back_memu").click(function() {
    $(".navbar-collapse .navbar-nav").animate({ marginLeft: "-50%" });
    $("#navbarNav").animate({ opacity: "0" });
  });
  $(".search_icon").click(function() {
    $(".search_element").toggle();
  });
});
