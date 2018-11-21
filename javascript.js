$(document).ready(function() {
  var dupa = $('html').width();
  if (dupa > 650) {
    $(window).on('load', function() {
      $('.loader').css('width', dupa);
      $('.loader').fadeOut('slow');
    });
  } else {
    $('.loader').css('display', 'none');
  }
})
