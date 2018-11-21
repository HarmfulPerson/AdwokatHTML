$(window).on('load', function() {
  $('body').fadeIn(200);
  $(".list-item").delay(300).each(function(i) {
    $(this).delay(100 * i).queue(function() {
      $(this).addClass("show");
    })
  })
});
var dupa = $('body').width();
console.log(dupa);
