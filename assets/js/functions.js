

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
    const randomPositions = [1,2,3,4,5,6,7,8].sort( () => .5 - Math.random() );
    $('.video-box').append('<video id="video-player" class="active" src="assets/videos/video'+randomPositions[index]+'.mp4" muted autoplay></video>');
    $('#video-player').on('ended', function(){
      index ++;
      $('#video-player').attr('src', `assets/videos/video${randomPositions[index]}.mp4`)
    })
    //  randomPositions.forEach((item, index) => {
    //   if(index == 0){
    //     $('.video-box').append('<video class="active" src="assets/videos/video'+item+'.mp4" muted autoplay></video>');
    //   }else{
    //     $('.video-box').append('<video src="assets/videos/video'+item+'.mp4" muted autoplay></video>');
    //   }
      
    // })
    
    // $('.video-box video').each((index, item) => {
    //   $(item).on('ended', function(){
    //     $(item).removeClass('active').removeClass('hide').removeAttr('autoplay').stop();
    //     if(index >= $('.video-box video').length - 1){
    //       $('.video-box video').eq(0).addClass('active').get(0).play();
    //     }else{
    //       //$(item).next().attr('autoplaye', 'autoplay').addClass('active').get(0).play();
    //       $(item).next().attr('autoplaye', 'autoplay').addClass('active')
    //     }
        
    //   })
      
    //   //  $(item).bind('timeupdate', updateTime(index));
      
    // })
  }
  
});

