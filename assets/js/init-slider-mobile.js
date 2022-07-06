$(window).load(function() {
  if($(window).width() < 768){
    $('.flexslider-mobile').flexslider({
      animation: "fade",
      controlNav: false,  
      animationSpeed: 1000,
      slideshowSpeed: 5000,
    });
  }
  
  
});

