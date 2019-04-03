

/* first decline_button */

$(document).ready(function() {
  $('#action_button').on('click', function(event) {


    $('.requests').slideUp('fast');
    $('#decline_button').html('<i>no new messages<i> ').removeClass('button is-medium is-fullwidth  is-danger').addClass('bpm');

  })

})


$(document).ready(function() {
  $('.donna').on('click', function(event) {


      $('.cardtwo').show('slow').removeClass('hidden');


$('.cardone').remove();


  })

})


$(document).ready(function() {
  $('#accept_button').on('click', function(event) {

$('#decline_button2').hide('fast');
$('#accept_button').html('<div class="field"><div class="control"><input class="input is-warning is-medium" type="text" placeholder="Message...">').removeClass('button is-medium');



  })

})
