// this script lets users know where in the workshop they are by highlighting
// each section in 'workshop contents' as the user scrolls down the page
// adapted from this code: http://codepen.io/zchee/pen/ogzvZZ
(function() {
  'use strict';

  var container = document.querySelectorAll(".container");
  console.log(container)
  var containers = {};
  var i = 0;

  container.forEach(function(element) {
    containers[element.id] = element.offsetTop;
  })

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in containers) {
      if (containers[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();
