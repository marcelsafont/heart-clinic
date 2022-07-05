

$(window).load(function() {
  if($(window).width() < 768){
    $('.flexslider-mobile').flexslider({
      animation: "fade",
      controlNav: false,  
      animationSpeed: 1000,
      slideshowSpeed: 5000,
    });
  }
  if($(window).width() > 768){
    let index = 0;
    const randomPositions = [1,2,3].sort( () => .5 - Math.random() );
    $('.video-box').append('<video id="video-player" src="assets/videos/video'+randomPositions[index]+'.mp4" muted autoplay></video>');
    $('#video-player').on('ended', function(){
      index ++;
      if(index >= randomPositions.length){
        index = 0;
      }
      $('#video-player').attr('src', `assets/videos/video${randomPositions[index]}.mp4`).removeClass('loading');
    })

    $('#video-player').on('timeupdate', function(){
      
      if(this.currentTime > this.duration - 0.4){
        $('#video-player').addClass('loading');
      }
    })
  }
  
});

