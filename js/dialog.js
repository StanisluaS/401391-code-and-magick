'use strict';

(function () {
  var dialogHandler = document.querySelector('.upload');
  var startCoords;
  var dragged;

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

      dragged = false;

      document.body.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    },

    resetBias: function () {
      window.userDialog.style = '';
    }
  };

  function onMouseUp(upEvt) {
    upEvt.preventDefault();

    if (dragged) {
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }

    document.body.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    if (Math.abs(shift.x) < 5 && Math.abs(shift.y) < 5) {
      return;
    }

    dragged = true;

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    window.userDialog.style.top = (window.userDialog.offsetTop - shift.y) + 'px';
    window.userDialog.style.left = (window.userDialog.offsetLeft - shift.x) + 'px';
  }

  function onClickPreventDefault(evt) {
    evt.preventDefault();
    dialogHandler.removeEventListener('click', onClickPreventDefault);
  }

})();
