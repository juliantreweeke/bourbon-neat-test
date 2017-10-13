// On burger click, slide open nav draw.

$("#burger").click(function() {

  $("#toplinks").addClass("show").css("display", "block");

  if (!$(".show").hasClass("active")) {
    $(".show").css("display", "block").animate({"margin-right": '0%'}).addClass("active");
    $(this).find($(".fa")).removeClass('fa-bars').addClass('fa-close');
  } else {
    $(".show").animate({"margin-right": '+=100%'}).removeClass("active");
    $(this).find($(".fa")).removeClass('fa-close').addClass('fa-bars');
  }

});

// If window is more then 850 then put page out of mobile mode and back to default
$(window).resize(function() {
  if ($(window).width() > 850) {
    $(".main-container").fadeIn();
    $(".show").removeClass("active");
    $("#toplinks").removeClass("show").fadeIn();
    $("#burger").find($(".fa")).removeClass('fa-times-thin').addClass('fa-bars');
  }

  // If window is less then 850 and toplinks does not have the show class, then hide it.
  if ($(window).width() < 850) {

    if (!$("#toplinks").hasClass("show")) {

      $("#toplinks").css("display", "none");
    }
  }

});

// Toggle css between the center dot links

$(".circle").click(function() {
  if ($(this).hasClass("selected")) {
    return;
  }
  $('.circle').not(this).removeClass('selected');
  $(this).toggleClass("selected");
});
