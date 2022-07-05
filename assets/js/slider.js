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
  console.log('....initializing slider on .' + this.sliderWrap.classList);

  this.slideList = this.sliderWrap.querySelectorAll(this.slideElem);
  this.slideList[0].classList.add(this.activeClass);
  this.slideList[0].querySelector('video') && this.slideList[0].querySelector('video').play();

  this.slideSize = this.slideList.length - 1;
  this.currentSlide = 0;

  if (this.sliderWrap.dataset.sliderControl == 'true') {
    this.createBullets(this.sliderWrap);
  }

  if (this.autoplay == 'true') {
    setInterval(()=>{
      this.autoplayFunct();
    }, this.timming);
  }

}

autoplayFunct = () => {
  if (this.autoplayState) {
    this.triggerSlider('next');
  }
}

triggerSlider = (direction) => {
  switch(direction) {
    case 'prev':
      this.currentSlide == 0 ? this.changeSlider(this.slideSize) :  this.changeSlider(this.currentSlide - 1);
      break;

    case 'next':
      this.currentSlide ==  this.slideSize ? this.changeSlider(0) : this.changeSlider(this.currentSlide + 1);
      break;
  }
}


changeSlider = (slide) => {
  if (!this.animating) {
    this.disableInteraction();
    this.clearCurrentSlide();
    this.slideList[slide].classList.add(this.activeClass);
    this.slideList[slide].querySelector('video') && this.slideList[slide].querySelector('video').play();
    this.currentSlide = slide;

    // Change the active bullet
    this.bullets.forEach((li)=> li.classList.remove('active'))
    this.bullets[slide].classList.add('active')
  }
}

clearCurrentSlide = () => {
  this.slideList.forEach((elem) => {
    elem.classList.remove(this.activeClass);
    elem.querySelector('video')&& elem.querySelector('video').pause();
  });
}

createBullets = (container) => {

  this.slideList.forEach((elem, index) => {
    const subtitle = elem.dataset.subtitle;
    const title = elem.dataset.title;
    const color = elem.dataset.color;
    const description = elem.dataset.description;

    this.bulletLi = document.createElement('li');
    this.bulletLi.classList.add(color);
    this.bulletLi.innerHTML = `<div class="content">
      <div class="wrapper_title">
        <div class="subtitle">${subtitle}</div>
        <div class="title semilogo">
          <span>RE!</span><span class="empty_text">${title}</span>
        </div>
      </div>
      <div class="description">${description}</div>	
    </div>`;
    index == 0 && this.bulletLi.classList.add('active');

    this.bulletLi.addEventListener('click', (e) => {
      this.autoplayState = false;
      this.changeSlider(index);
      this.bullets.forEach((e)=> e.classList.remove('active'))
      this.bullets[index].classList.add('active');
    })

    this.bullets.push(this.bulletLi);
    //this.sliderWrap.parentNode.querySelector(this.controls).appendChild(this.bulletLi);
  });

}

disableInteraction = () => {
  this.animating = true;
  setTimeout(()=>{
    this.animating = false
  }, 500);
}

}

