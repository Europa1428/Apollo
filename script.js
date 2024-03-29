$(function(){
var boxes = $('.box'),
    $window = $(window);
  $window.scroll(function(){
  var scrollTop = $window.scrollTop();
  boxes.each(function(){
    var $this = $(this),
        scrollspeed = parseInt($this.data('scroll-speed')),
        val = - scrollTop / scrollspeed;
      $this.css('transform', 'translateY(' + val + 'px)');
  });
});
})
