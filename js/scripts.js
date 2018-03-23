var name02 = (prompt("What is your name?"));
var ref02 = (prompt("How did you hear about my Github?"));

$(document).ready(function(){
  $("#typeOfDev").change(function() {
    var dev = parseInt($("select#typeOfDev").val());
    if (dev === 1) {
      $('#option1').hide();
      $('#frontEnd').show();
      $('#backEnd').hide();
    }
    else if (dev === 2) {
      $('#option1').hide();
      $('#frontEnd').hide();
      $('#backEnd').show();
    }
  });
});

$(document).ready(function(){
  $("#styleDU").change(function() {
    var dev = parseInt($("select#styleDU").val());
    if (dev === 1) {
      $('#option1').hide();
      $('#interfaces').show();
      $('#colorful').hide();
    }
    else if (dev === 2) {
      $('#option1').hide();
      $('#interfaces').hide();
      $('#colorful').show();
    }
  });
});

$(document).ready(function(){
  $("#software").change(function() {
    var inOut = parseInt($("select#software").val());
    if (inOut === 1) {
      $('#option1').hide();
      $('#externalSoftware').show();
      $('#internalSoftware').hide();
    }
    else if (inOut === 2) {
      $('#option1').hide();
      $('#externalSoftware').hide();
      $('#internalSoftware').show();
    }
  });
});

$(document).ready(function(){
  $("#ideaB").change(function() {
    var inOut = parseInt($("select#software").val());
    if (inOut === 1) {
      $('#option1').hide();
      $('#colorful').show();
      $('#interfaces').hide();
    }
    else if (inOut === 2) {
      $('#option1').hide();
      $('#colorful').hide();
      $('#interfaces').show();
    }
  });
});
