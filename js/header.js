/* global $ */
'use strict';

const wrapperNode = document.getElementById('wrapper');
const scrollDownNode = document.querySelector('.scroll-down');
const linkNodes = document.querySelector('.links');

const vh = window.innerHeight;

const fin = wrapperNode.clientHeight - vh + linkNodes.clientHeight;

function calculateAnimations() {
  return [
    { range: [-1, fin * 0.5],   selectors: ['.g', '.n'], type: 'scale', style: 'transform:rotateZ', from: 0, to: 180, unit: 'deg' },
    { range: [fin * 0.5, fin],  selectors: ['.g', '.n'], type: 'scale', style: 'transform:rotateZ', from: 180, to: 360, unit: 'deg' },
    { range: [fin * 0.4, fin],  selectors: ['.g', '.n'], type: 'change', style: 'color', to: '#ff8b1c' },

    { range: [-1, fin * 0.5],   selector: '.i', type: 'scale', style: 'transform:rotateX', from: 0, to: 90, unit: 'deg' },
    { range: [fin * 0.5, fin],  selector: '.i', type: 'scale', style: 'transform:rotateX', from: 90, to: 0, unit: 'deg' },
    { range: [fin * 0.3, fin],  selector: '.i', type: 'change', style: 'color', to: '#8382f9' },

    { range: [fin * 0.1, fin],  selector: '.o', type: 'randomizeColor' },

    { range: [-1, fin * 0.5],   selector: '.e', type: 'scale', style: 'transform:scaleX', from: 1, to: 0.5 },
    { range: [-1, fin * 0.5],   selector: '.e', type: 'scale', style: 'transform:scaleY', from: 1, to: 0.5 },
    { range: [fin * 0.5, fin],  selector: '.e', type: 'scale', style: 'transform:scaleX', from: 0.5, to: 1 },
    { range: [fin * 0.5, fin],  selector: '.e', type: 'scale', style: 'transform:scaleY', from: 0.5, to: 1 },
    { range: [fin * 0.3, fin],  selector: '.e', type: 'change', style: 'color', to: '#1fd1ec' },
  
    { range: [-1, fin * 0.5],   selector: '.t', type: 'scale', style: 'transform:translateY', from: 0, to: 25, unit: 'px' },
    { range: [fin * 0.5, fin],  selector: '.t', type: 'scale', style: 'transform:translateY', from: 25, to: 0, unit: 'px' },
    { range: [fin * 0.4, fin],  selector: '.t', type: 'change', style: 'color', to: '#ffb515' },
  ]


}

let choreographer = new Choreographer({
  animations: calculateAnimations(),
  customFunctions: {
    randomizeColor: function(data) {
      let chars = '0123456789abcdef'.split('');
      let hex = '#';

      while (hex.length < 7) {
        hex += chars[Math.round(Math.random() * (chars.length - 1))]
      }

      data.node.style.color = hex;
    }
  }
});

function animate() {
  let scrollPosition = (wrapperNode.getBoundingClientRect().top - wrapperNode.offsetTop) * -1
  choreographer.runAnimationsAt(scrollPosition);
}

document.body.addEventListener('scroll', animate);

animate();

window.addEventListener('resize', function() {
  choreographer.updateAnimations(calculateAnimations());
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