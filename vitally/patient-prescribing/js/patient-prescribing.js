(function($) {

  function showPullout() {
    var panel = $('#note-pullout');
    panel.addClass('visible');
  }

  function hidePullout() {
    var panel = $('#note-pullout');
    panel.removeClass('visible');
  }

  $('.pullout-action').on('click', function(e){
    e.preventDefault();
    showPullout();
  });

  $('.pullout-close').on('click', function(e){
    e.preventDefault();
    hidePullout();
  });

})(jQuery);
