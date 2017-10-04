
// document.getElementById("burger").onclick = function () {alert('onclick');};

$("#burger").click(function() {
  $( "#toplinks" ).toggleClass( "show");
});

$( window ).resize(function() {
  if ($(window).width() > 850) {
  
      $( "#toplinks" ).removeClass( "show");
    } 
});



