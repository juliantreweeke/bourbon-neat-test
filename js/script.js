// On burger click,open nav draw and fade out any other text.
$("#burger").click(function() {
  $("#toplinks").addClass("show");
  // $("#toplinks").toggleClass("hidden");
  if( $("#toplinks").css('display').toLowerCase() == 'none') {

  $("#toplinks").css("display", "block");
  // $(".show").css("display", "block");

  } else {
  $("#toplinks").css("display", "none");
  }

  // $("#toplinks").css("display", "block");

  // $("#toplinks").fadeToggle().addClass("show").toggleClass("hidden");
  // $( "#toplinks" ).fadeToggle().slideDown( "slow", function() {
  //   $(this).addClass("show");
  // });

  // $(".main-container").fadeToggle();

  // $("nav").addClass("nav-background");


});

// If window is more then 850 then put page out of mobile mode and back to default
$(window).resize(function() {
  if ($(window).width() > 850) {
    $(".main-container").fadeIn();
    $("#toplinks").removeClass("show").fadeIn();
  }

  // If window is less then 850 and toplinks does not have the show class, then hide it.
  if ($(window).width() < 850) {
    if (!$("#toplinks").hasClass("show")) {

      $("#toplinks").css("display", "none");
      // $("#toplinks").toggleClass("hidden");
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
