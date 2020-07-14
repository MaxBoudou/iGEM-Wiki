jQuery(document).ready(function() {
  var duration = 500;
  jQuery('#retourHaut').click(function(event) {
   event.preventDefault();
   jQuery('html, body').animate({scrollTop: 0}, duration);
   return false;
   })
});
