var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


$(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $("#animate").animate({
    left: width
  }, 15000, function() {
  });
});

$(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $("#animate1").animate({
    left: width
  }, 10000, function() {
  });
});

$(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $("#animate2").animate({
    left: width
  }, 20000, function() {
  });
});

$(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $("#animate3").animate({
    left: width
  },20000, function() {
  });
});

$(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $("#animate4").animate({
    left: width
  }, 12000, function() {
  });
});