document.addEventListener('DOMContentLoaded', function(){
  
    new Slider(document.querySelector('.video-box'));
  
  
})

window.addEventListener("load", function(event) { 
  var stylecookie = document.createElement('link');
  stylecookie.rel = 'stylesheet';
  stylecookie.href = '/assets/css/cookies.css';
  document.getElementsByTagName('head')[0].appendChild(stylecookie)
});