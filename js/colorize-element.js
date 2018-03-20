'use strict';

(function () {

  window.colorize = {
    color: function (element, onColorChange, color) {
      element.addEventListener('click', function () {
        onColorChange(element, color);
      });
    }
  };
})();
