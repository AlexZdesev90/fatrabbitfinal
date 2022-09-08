// accordion
$(document).ready(function () {
    $('.accordion-item__trigger').click(function () {
        $(this).next('.accordion-item__content').slideToggle();
    })
});

// back to top
function backToTop() {
  let button = $(".back-to-top");

  $(window).on("scroll", () => {
    if ($(this).scrollTop() >= 400) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", (e) => {
    e.preventDefault();
    $("html").animate({ scrollTop: 500 }, 1000);
  });
}

backToTop();
