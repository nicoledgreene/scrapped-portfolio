/* global $ */
'use strict';

const Choreographer = require('choreographer-js');

let choreographer = new Choreographer({
  animations: [
    {
      range: [-1, 1000],
      selector: '#main-header',
      type: 'scale',
      style: 'opacity',
      from: 0,
      to: 1
    }
  ]
});
  
window.addEventListener('scroll', () => {
  choreographer.runAnimationsAt(window.pageYOffset);
});

// function createString(input){
//   $(input).each(function(){
//     let myStr = $(this).html();
//     myStr = myStr.split('');
    
//     let contents = '';
//     for (let i = 0, len = myStr.length; i < len; i++) {
//       contents += '<span class="single-char char-' + i + '">' + myStr[i] + '</span>';
//     }
//     $(input).html(contents);
//   });
// }

// $('document').ready(function() {
//   let myHeader = $('#main-header');
//   createString(myHeader);
//   $('.char-3').addClass('accent');
//   $('.char-11').addClass('accent');
// });