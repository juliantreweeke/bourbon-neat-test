
// document.getElementById("burger").onclick = function () {alert('onclick');};

$("#burger").click(function() {
  $("#toplinks").fadeToggle().addClass( "show" );
  $(".main-container").fadeToggle();
});



$( window ).resize(function() {
  if ($(window).width() > 850) {
      $( "#toplinks" ).removeClass( "show").fadeIn();
      $( ".main-container" ).fadeIn();
    }
  
  // if ($(window).width() === 850){
  //   $("#toplinks").fadeOut(-10);
  //   }
  

    
    // if ($(window).width() === 850) {
    //     $( "#toplinks" ).fadeOut(-10);
    //   } 
});

$(".circle").click(function() {
    $(this).toggleClass("selected");
});
