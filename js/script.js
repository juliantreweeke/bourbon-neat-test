
// document.getElementById("burger").onclick = function () {alert('onclick');};

$("#burger").click(function() {
  $( "#toplinks" ).toggleClass( "show");
  // $(".toplinks").slideToggle("display");
});
