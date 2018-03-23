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
