
// document.getElementById("burger").onclick = function () {alert('onclick');};

$("#burger").click(function() {
  
  // $(".main-container").toggleClass("hide");
  $("#toplinks").fadeToggle().toggleClass( "show");
  // $( "#toplinks" ).toggleClass( "show");
  $(".main-container").fadeToggle();
});

$( window ).resize(function() {
  if ($(window).width() > 850) {
  
      $( "#toplinks" ).removeClass( "show");
      $( ".main-container" ).removeClass( "hide");
    } 
});



