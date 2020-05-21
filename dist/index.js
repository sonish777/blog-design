$(document).on("mouseover", ".dropdown__toggle", function () {
  $(this).next().addClass("show");
});

$(document).on("mouseover", ".dropdown__links", function () {
  $(this).addClass("show");
});

$(document).on("mouseleave", ".dropdown__toggle", function () {
  $(this).next().removeClass("show");
});

$(document).on("mouseleave", ".dropdown__links", function () {
  $(this).removeClass("show");
});

$(document).on("mouseover", ".gallery-card", function () {
  // console.log($(this).children()[0]);
  $(this).find("div:first-child").addClass("blur-background");
  $(this).children().next().css("display", "block");
});

$(document).on("mouseleave", ".gallery-card", function () {
  $(this).children().removeClass("blur-background");
  $(this).children().next().css("display", "none");
});

$(document).on("click", ".gallery-card", function () {
  $(".backdrop").fadeIn(500);
  const imgPath = $(this)
    .find("div:first-child")
    .css("background-image")
    .split(`"`)[1];
  $(".modal")
    .html(
      `<img src="${imgPath}" class="fit" /><i class="fas fa-window-close close"></i>`
    )
    .slideDown(800);
});

$(document).on("click", ".backdrop", function () {
  $(".backdrop").fadeOut(100);
  $(".arrow").addClass("invert-arrow");
  $(".side-nav").removeClass("side-nav__toggle");
  $(".modal").slideUp();
});

$(document).on("click", ".close", function () {
  $(".backdrop").fadeOut(100);
  $(".modal").slideUp();
});

$(document).on("click", ".hamburger-icon", function () {
  $(".side-nav").addClass("side-nav__toggle");
  $(".arrow").removeClass("invert-arrow");
  $(".backdrop").fadeIn(100);
});

$(document).on("mouseover", ".recent-post", function () {
  // console.log($(this).find("p"));
  $(this).find("p").addClass("show-title");
  $(this).find("div").addClass("blur-img");
});

$(document).on("mouseleave", ".recent-post", function () {
  // console.log($(this).find("p"));
  $(this).find("p").removeClass("show-title");
  $(this).find("div").removeClass("blur-img");
});

$(document).on("click", ".cta-button", function () {
  $(".cta-container").removeClass("hide-cta").addClass("show-cta");
  $(".backdrop").fadeIn(500);
});

$(document).on("click", ".cta__close", function () {
  $(".cta-container").removeClass("show-cta").addClass("hide-cta");
  $(".backdrop").fadeOut(500);
});
