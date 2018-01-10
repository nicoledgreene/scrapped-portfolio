'use strict';

var wrapperNode = document.getElementById('wrapper');
var footerNode = document.querySelector('.footer');

var vh = window.innerHeight;

/* STORE SOME KEY LOCATIONS */

/* ~ le fin ~
 * The point where you cannot scroll down any further.
 */
var fin = wrapperNode.clientHeight - vh + footerNode.clientHeight;

function calculateAnimations() {
  console.log('calc animations');
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
    { range: [fin * 0.4, fin],  selector: '.t', type: 'change', style: 'color', to: '#ffb515' }
  ];
}

// Instantiate choreographer.
var choreographer = new Choreographer({
  animations: calculateAnimations(),
  customFunctions: {
    randomizeColor: function(data) {
      var chars = '0123456789abcdef'.split('');
      var hex = '#';

      while (hex.length < 7) {
        hex += chars[Math.round(Math.random() * (chars.length - 1))]
      }

      data.node.style.color = hex;
    }
  }
});

function animate() {
  console.log('animate');
  var scrollPosition = (wrapperNode.getBoundingClientRect().top - wrapperNode.offsetTop) * -1;
  choreographer.runAnimationsAt(scrollPosition);
}

document.body.addEventListener('scroll', animate);

animate();

window.addEventListener('resize', function() {
  choreographer.updateAnimations(calculateAnimations());
});
