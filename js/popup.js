$(document).ready(function() {
  $('.image-link').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      gallery:{
          enabled:true,
          zoom: {
              enabled: true, // By default it's false, so don't forget to enable it
              duration: 300, // duration of the effect, in milliseconds
              easing: 'ease-in-out', // CSS transition easing function
              opener: function(openerElement) {
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
          }
      }
  });
});

$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});
