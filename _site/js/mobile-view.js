'use strict';
var width = window.screen.width;
var nav = document.getElementsByClassName("site-nav")[0];
var button = document.getElementsByTagName('button');

//console.log(document.getElementsByClassName("site-nav")[0]);

window.onload = function() {
  nav = document.getElementsByClassName("site-nav")[0];
  button = document.getElementsByTagName('button')[0];
  if( width < 640 ) {
    //nav.setAttribute('class', 'mobile');
    nav.classList.add('mobile');
  } else {
    button.style.display = "none";
  }
  nav.onclick = function openNav() {
    //nav.setAttribute('class', 'openMenu');
    nav.classList.toggle('openMenu');
  }
};
console.log(width);