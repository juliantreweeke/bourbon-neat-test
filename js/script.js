
// document.getElementById("burger").onclick = function () {alert('onclick');};





$("#burger").click(function() {
  
  // $(".main-container").toggleClass("hide");
  $("#toplinks").fadeToggle();
  // $( "#toplinks" ).toggleClass( "show");
  $(".main-container").fadeToggle();
});


$( window ).resize(function() {
  if ($(window).width() > 850) {
      $( "#toplinks" ).removeClass( "show").fadeIn();
      $( ".main-container" ).removeClass( "hide").fadeIn();
    } 
  
  if ($(window).width() < 850) {
      $( "#toplinks" ).addClass( "show" ).hide();
    } 
  // if ($window.width() === 850 ){
  //   $( "#toplinks" ).hide();
  // }
});




