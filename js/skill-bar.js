document.addEventListener("DOMContentLoaded", function() {
    (function($) {
      "use strict";
      $(function() {
        function animated_contents() {
          $(".zt-skill-bar > div ").each(function(i) {
            var $this = $(this),
              skills = $this.data('width');
    
            $this.css({
              'width': skills + '%'
            });
    
          });
        }
    
        if (jQuery().appear) {
          $('.zt-skill-bar').appear().on('appear', function() {
            animated_contents();
          });
        } else {
          animated_contents();
        }
      });
    }(jQuery));
  });