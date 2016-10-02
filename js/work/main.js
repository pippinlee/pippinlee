"use strict";

$('.desktop').css('background-color', '#fdea8c')
$('.phone').css('background-color', '#F3F3F3')
$('.tablet').css('background-color', '#F3F3F3')

// get view where button clicked
$('button').click( function() {

  var item = Math.ceil( ($('button').index(this) +1) / 3 );
  var view = checkDiv( $('button').index(this) );
  var selectedImage = work[ Object.keys(work)[item - 1] ].images[ view - 1 ];
  var currentImgId = '#' + $('.bg-image')[item - 1].id;
  var currentBgId = '#' + $('button')[ view - 1 ].id;
  var bgProp = 'url("' + selectedImage + '")';
  $( '#desktop-' + Object.keys(work)[item - 1] ).css('background-color', '#F3F3F3')
  $( '#phone-' + Object.keys(work)[item - 1] ).css('background-color', '#F3F3F3')
  $( '#tablet-' + Object.keys(work)[item - 1] ).css('background-color', '#F3F3F3')


  // get id of button clicked
  $( '#' + this.id ).css('background-color', '#fdea8c')
  console.log( '#' + this.id )




  $( currentImgId ).css('background-image', bgProp)
})

function checkDiv(view) {
  if (view % 3 === 0 || view === 0) {
    return 1
  } else if (view % 3 === 1) {
    return 2
  } else {
    return 3
  }
}
