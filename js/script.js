
// document.getElementById("burger").onclick = function () {alert('onclick');};

$("#burger").click(function() {
  $( "#toplinks" ).toggleClass( "show");
  $(".main-container").toggleClass("hide");
});

$( window ).resize(function() {
  if ($(window).width() > 850) {
  
      $( "#toplinks" ).removeClass( "show");
      $( ".main-container" ).removeClass( "hide");
    } 
});



