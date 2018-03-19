'use strict';

(function () {

  window.colorize = {
    color: function (element, colors, onColorChange, updateWizards) {
      element.addEventListener('click', function () {
        var color = colors[window.util.getRandomNumber(colors.length)];
        onColorChange(element, color);
        if (typeof updateWizards === 'function') {
          updateWizards();
        }
      });
    }
  };
})();
