
// document.getElementById("burger").onclick = function () {alert('onclick');};

$("#burger").click(function() {
  $("#toplinks").fadeToggle().addClass( "show" );
  $(".main-container").fadeToggle();
});

$( window ).resize(function() {
  if ($(window).width() > 850) {
    $( ".main-container" ).fadeIn();
      $( "#toplinks" ).removeClass( "show").fadeIn();
    }
  
  if ($(window).width() < 850){
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

