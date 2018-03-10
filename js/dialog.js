'use strict';

(function () {
  var startCoords;

  window.dialog = {
    dragging: function (evt) {
      evt.preventDefault();
      if (evt.which !== 1) {
        return;
      }

      startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      document.body.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    },

    resetBias: function () {
      window.userDialog.style = '';
    }
  };

  function onMouseUp(upEvt) {
    upEvt.preventDefault();

    document.body.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(moveEvt) {
    // var target = moveEvt.target;
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    if (Math.abs(shift.x) < 5 && Math.abs(shift.y) < 5) {
      // debugger;
      // if (target.nextElementSibling.tagName === 'INPUT') {
      //   var x = 0;
      // }
      // target.style.zIndex = 0;
      return;
    }

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    window.userDialog.style.top = (window.userDialog.offsetTop - shift.y) + 'px';
    window.userDialog.style.left = (window.userDialog.offsetLeft - shift.x) + 'px';
  }

})();
