(function ($) {
  'use strict';

  $(document).ready(function () {
    $('#toggle_header').click(function () {
      $('header').toggleClass('red green');
    });
  });

})(jQuery);
