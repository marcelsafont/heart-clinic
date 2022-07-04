

$(window).load(function() {
  if($(window).width() < 768){
    $('.flexslider-mobile').flexslider({
      animation: "slide",
      controlNav: false,
      animationSpeed: 600,
      slideshowSpeed: 4000,
    });
  }
  
});

$(window).bind('resize', function() { 

  setTimeout(function(){ 
      var slider = $('.flexslider-mobile').data('flexslider');   
      slider.resize();
  }, 1000);
  
  });

