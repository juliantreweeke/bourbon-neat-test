
// document.getElementById("burger").onclick = function () {alert('onclick');};

$("#burger").click(function() {
  $(".nav a,.nav li").slideToggle("display");
});
