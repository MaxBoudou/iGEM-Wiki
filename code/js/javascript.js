
///////////////////////////inclut fichier html////////////////////
$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = $(this).data('include') + '.html';
      $(this).load(file);
    });
  });
//////////////////////////////////////////////////////////////////


//////////////////retour haut de page/////////////////////////////
jQuery(document).ready(function() {
  var duration = 500;
  jQuery('#retourHaut').click(function(event) {
   event.preventDefault();
   jQuery('html, body').animate({scrollTop: 0}, duration);
   return false;
   })
});
/////////////////////////////////////////////////////////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-100px";
  }
}

