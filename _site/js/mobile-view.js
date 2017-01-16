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
      document.getElementsByTagName('button')[0].style.marginTop = "-46px"
      document.getElementsByClassName("intro")[0].style.marginTop = "110px";
      document.getElementsByClassName("site-header")[0].style.marginTop = "-110px";
      console.log('working')
    } else {
      document.getElementsByTagName('button')[0].style.marginTop = "10px"
      document.getElementsByClassName("intro")[0].style.marginTop = "58px";
      document.getElementsByClassName("site-header")[0].style.marginTop = "-58px";
    }
  };
};