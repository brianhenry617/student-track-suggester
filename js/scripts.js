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
