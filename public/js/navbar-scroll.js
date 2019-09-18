$(function () {
    $(window).scroll(function () {
        var $nav = $("#navbar-frs");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });