(function($) {


  // Expand read more content
  function expandContent() {
    var showChar = 100;
    var ellipsestext = "...";
    var moretext = "Read more ";
    var lesstext = "Read less";

    $('.expand-content').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="toggle-expand font12px underline hover:no-underline focus:text-vitaly-purple">' + moretext + '</a></span>';

            $(this).html(html);
        }
    });

    $(".toggle-expand").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
  } expandContent();

  // Expand dosage info
  function dosageInfo() {
    $(".toggle-info").click(function(){
        $(this).next().slideToggle();
        return false;
    });
  } dosageInfo();

  // Increment Quantity
  function incrementQuantity() {
    var incrementInputs = $('.increment-group')

    incrementInputs.each(function() {
      $this = $(this)

      var buttons = $this.find('.increment-button'),
          input = $this.find('.increment-input'),
          interval = input.data('interval') || 1,
          prefix = input.data('prefix') || '',
          upperLimit = input.data('upper-limit') || Infinity

      buttons.on('touchend click', function(e) {
        e.stopPropagation()
        e.preventDefault()

        var direction = $(this).data('direction'),
            currentVal = input.val().replace(/[^0-9\.\-]+/g, ''),
            newVal = 0

        if (isNaN(currentVal)) {
          input.val(prefix + '0')
        } else {

          if (direction === 'dec') {
            newVal = +currentVal - interval
          } else if (direction === 'inc') {
            newVal = +currentVal + interval
          }

          // Keep things positive
          newVal = (newVal > 0) ? newVal : 0

          // Don't exceed upper limits
          newVal = (newVal < upperLimit) ? newVal : upperLimit

          input.val(prefix + newVal)
        }
      })

    })
  } incrementQuantity();

})(jQuery);
