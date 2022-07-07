class Slider {

  // Global Variables

constructor(container) {
  this.sliderWrap = container;
  this.sliderControl = this.sliderWrap.dataset.sliderControl || false
  this.autoplay = this.sliderWrap.dataset.sliderAutoplay || false;
  this.slideList;
  this.slideSize;
  this.currentSlide;
  this.slideElem = '.slide';
  this.activeClass = 'active';
  this.animating = false;
  this.init();
}


init = () => {
  
  this.slideList = this.sliderWrap.querySelectorAll(this.slideElem);
  this.slideSize = this.slideList.length - 1;
  // random array
  this.randomArray = [2,3,4,5,6,7,8].sort( () => .5 - Math.random() );
  this.currentSlide = 0;
  this.slideList[this.currentSlide].classList.add(this.activeClass);
  
  const self = this;
  this.slideList.forEach(function(el, index){
    el.querySelector('video').innerHTML = '<source  src="assets/videos/video'+ (index == 0 ? 1 : self.randomArray[0]) +'.mp4" type="video/mp4" />';
    el.querySelector('video').addEventListener('ended', () => {
      self.changeSlider(self.currentSlide);
    })
    
    el.querySelector('video').pause();
    if(index != 0){
      self.randomArray.shift();
    }
    
  })
  this.slideList[this.currentSlide].querySelector('video') && this.slideList[this.currentSlide].querySelector('video').play();
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






