$(document).ready(function(){
  $("#typeOfDev").change(function() {
      var dev = parseInt($("select#typeOfDev").val());
      if (dev === 1) {
        $('#option1').hide();
        $('#firstOption').show();
        $('#secondOption').hide();
      }
    else if (dev === 2) {
      $('#option1').hide();
      $('#firstOption').hide();
      $('#secondOption').show();
    }
   });
  });
