$(document).ready(function() {
  $('#action_button').on('click', function(event) {


    $('.requests').slideUp('fast');
    $('#decline_button').html('<i>no new messages<i> ').removeClass('button is-small is-fullwidth  is-danger').addClass('column is-full');

  })

})


$(document).ready(function() {
  $('.donna').on('click', function(event) {


      $('.cardtwo').show('slow').removeClass('hidden');


$('.requestswhole').hide();


  })

})

$(document).ready(function() {
  $('.back').on('click', function(event) {


      $('.requestswhole').show('slow').removeClass('hidden');


$('.cardtwo').remove();


  })

})



$(document).ready(function() {
  $('decline_button2').on('click', function(event) {

$('.cardtwo').hide();
    $('.requestswhole').show();




  })
  })



$(document).ready(function() {
  $('.mitski').on('click', function(event) {


      $('.cardthree').show('slow').removeClass('hidden');


$('.requestswhole').remove();


  })

})


$(document).ready(function() {
  $('#accept_button').on('click', function(event) {

$('#decline_button2').hide('fast');
$('#accept_button').hide('fast').after('<div class="field"><div class="control"><input class="input is-warning is-medium" type="text" placeholder="Message...">')



  })

})

$(document).ready(function() {
  $('.mitski').on('click', function(event) {


      $('.cardthree').show('slow').removeClass('hidden');


$('.requestswhole').remove();


  })

})


 
