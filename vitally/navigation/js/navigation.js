(function($) {

  // Menu link submenu
  function menuLinkOpen() {

    $('.menu-link.has_children').each(function(){
      $(this).on('click', function(e){
        e.preventDefault();

        $(this).toggleClass('active');
        $(this).next('.menu-link_submenu').stop().slideToggle();
      });
    });

  }

  // Clinic sub menu
  function menuClinicOpen() {

    $('.clinic-item').on('click', function(e){
      e.preventDefault();

      $(this).toggleClass('active');
    });

  }

  // Mobile menu open
  function mobileMenuOpen() {
    $('.open-mobile-menu').on('click', function(e){
      e.preventDefault();

      $('body').addClass('mobile-menu_is-open');
      $('.mobile-menu').addClass('is-open');
    })
  }

  // Mobile menu close
  function mobileMenuClose() {
    $('.close-mobile-menu').on('click', function(e){
      e.preventDefault();

      $('body').removeClass('mobile-menu_is-open');
      $('body').removeClass('mobile-clinic-menu_is-open');
      $('body').removeClass('mobile-select-menu_is-open');

      $('.open-clinic-menu').removeClass('active');

      $('.mobile-menu').removeClass('is-open');
      $('.mobile-clinic-menu').removeClass('is-open');
      $('.mobile-select-menu').removeClass('is-open');
    })
  }

  // Mobile SELECT menu open
  function mobileSelectOpen() {
    $('.clinic-item').on('click', function(e){
      e.preventDefault();

      $('.mobile-menu').removeClass('is-open');
      $('body').addClass('mobile-select-menu_is-open');
      $('.mobile-select-menu').addClass('is-open');
    })
  }

  // Mobile CLINIC menu open
  function mobileClinicOpen() {
    $('.open-clinic-menu').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');

      $('.mobile-menu').removeClass('is-open');
      $('.mobile-select-menu').removeClass('is-open');

      $('body').removeClass('mobile-menu_is-open');
      $('body').removeClass('mobile-select-menu_is-open');
      $('body').toggleClass('mobile-clinic-menu_is-open');
      $('.mobile-clinic-menu').toggleClass('is-open');
    })
  }

  $(window).on('resize', function(){
    if ($(window).outerWidth() < 768) {

      menuLinkOpen();

      mobileMenuOpen();
      mobileMenuClose();
      mobileSelectOpen();
      mobileClinicOpen();

    } else {

      menuLinkOpen();
      menuClinicOpen();

    }
  }).trigger( "resize");

})(jQuery);
