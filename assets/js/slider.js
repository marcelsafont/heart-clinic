class Slider {

  // Global Variables

constructor(container) {
  this.sliderWrap = container;
  this.sliderControl = this.sliderWrap.dataset.sliderControl || false
  this.autoplay = this.sliderWrap.dataset.sliderAutoplay || false;
  this.timming = this.sliderWrap.dataset.sliderTimming || 500;
  this.autoplayState = this.autoplay;
  this.slideList;
  this.slideSize;
  this.currentSlide;
  this.controls = '.controls ul';
  this.slideElem = '.slide';
  this.activeClass = 'active';
  this.animating = false;
  this.bullets = [];
  this.bulletLi;
  this.init();
}


init = () => {
  this.slideList = this.sliderWrap.querySelectorAll(this.slideElem);
  this.slideSize = this.slideList.length - 1;
  this.currentSlide = Math.floor(Math.random() * (this.slideSize));
  this.slideList = this.sliderWrap.querySelectorAll(this.slideElem);
  this.slideList[this.currentSlide].classList.add(this.activeClass);
  
  const self = this;
  this.slideList.forEach(function(el, index){
    el.querySelector('video').innerHTML = '<source  src="assets/videos/video'+(index + 1) +'.mp4" type="video/mp4" />';
    // el.querySelector('video').addEventListener('ended', () => {
    //   self.changeSlider(self.currentSlide);
    //   console.log('video finito');
    // })
  })
  this.slideList[this.currentSlide].querySelector('video') && this.slideList[0].querySelector('video').play();
}



changeSlider = (slide) => {
    //stop current slider
    this.slideList[slide].classList.remove(this.activeClass);
    
    //start new slider
    if(slide >= this.slideSize){
      //if last slide start again
      this.currentSlide = 0;
    }else{
      //if not last, increase
      this.currentSlide = slide + 1;
    }
    this.slideList[this.currentSlide].classList.add(this.activeClass); 
    this.slideList[this.currentSlide].querySelector('video') && this.slideList[this.currentSlide].querySelector('video').play();
   
}

}






