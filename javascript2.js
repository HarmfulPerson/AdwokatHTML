function initMap() {
  // The location of Uluru
  var uluru = {
    lat: -25.344,
    lng: 131.036
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
$(document).ready(function() {

  $('body').fadeIn(200);

  $('.adresDown').on('click', function() {
    $("#map").toggle("slow");
    $('.adresDown').toggleClass("rtoate180");
  })
  $('.emailDown').on('click', function() {
    $(".textForm").toggle('slow');
    $('.emailDown').toggleClass("rtoate180");

  });

  var docHeight = $(window).height();
  var footerHeight = $('.footer1').height();
  var footerTop = $('.footer1').position().top + footerHeight;
  if (footerTop < docHeight) {
    $('.footer1').css('margin-top', 0 + (docHeight - footerTop) + 'px');
  }
  var screenWidth = $('html').width();
  console.log(screenWidth);
  if (screenWidth < 400) {
    $('.mapDiv').css({
      "width": screenWidth,
      "padding": 0,
      "margin": 0
    });
    $('#map').css({
      "width": screenWidth,
      "padding": 0,
      "margin": 0
    });
  }
})
