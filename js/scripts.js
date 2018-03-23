$(document).ready(function(){
  // alert("hi");

  $("#fields").change(function() {
    var month = parseInt($("select#fields").val());
    if (month === 0) {
      $('#january').hide();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    }
    if (month === 1) {
      $('#january').show();
      $('#february').hide();
      $('#march').hide();
      $('#april').hide();
      $('#may').hide();
      $('#june').hide();
      $('#july').hide();
      $('#august').hide();
      $('#september').hide();
      $('#october').hide();
      $('#november').hide();
      $('#december').hide();
    });


// ready
//
// prompt Hello name
//
// prefFb
// bussinessOnly===dataBase
//
//
// new page
// -    === -
// - === -
// - === -
// - === -
// - === -
