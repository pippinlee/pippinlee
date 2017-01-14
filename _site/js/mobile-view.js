'use strict';
var width = window.screen.width;
var nav = document.getElementsByClassName("site-nav")[0];
var button = document.getElementsByTagName('button');

//console.log(document.getElementsByClassName("site-nav")[0]);

window.onload = function() {
  nav = document.getElementsByClassName("site-nav")[0];
  button = document.getElementsByTagName('button')[0];
  if( width < 640 ) {
    nav.classList.add('mobile');

  } else {
    button.style.display = "none";
  }
  button.onclick = function openNav() {
    nav.classList.toggle('openMenu');
    var navHeight = parseInt(  $('.intro').css('margin-top').split('px')[0] );
    if (navHeight === 58) {
      $('.intro').css('margin-top', '110px')
      $('.site-header').css('margin-top', '-110px')
      console.log('working')
    } else {
      $('.intro').css('margin-top', '58px')
      $('.site-header').css('margin-top', '-58px')
    }
    
  };
};