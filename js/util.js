'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  window.userDialog = document.querySelector('.setup');
  window.setupClose = window.userDialog.querySelector('.setup-close');
  var setupUserName = window.userDialog.querySelector('.setup-user-name');
  var errorMessage = document.querySelector('.error-message');
  var colorCoat;
  var colorEyes;

  window.util = {
    getRandomNumber: function (number) {
      return Math.floor(Math.random() * (number - 1));
    },
    onPopupKeyPress: function (evt, functionCloseWindow) {
      if ((evt.keyCode === ENTER_KEYCODE && evt.target === window.setupClose) || (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName)) {
        functionCloseWindow();
      }
    },

    onPopupEnterPress: function (evt, functionOpenWindow) {
      if (evt.keyCode === ENTER_KEYCODE) {
        functionOpenWindow();
      }
    },

    showBlock: function (block) {
      block.classList.toggle('hidden');
    },

    onError: function (error) {
      errorMessage.classList.remove('hidden');
      errorMessage.textContent = error;
      setTimeout(function () {
        errorMessage.classList.add('hidden');
      }, 5000);
    },

    // add wizard setup events
    paintWizardCoat: function (element, color) {
      element.style.fill = color;
      colorCoat = color;
      window.wizard.updateWizards();
    },

    paintWizardEyes: function (element, color) {
      element.style.fill = color;
      colorEyes = color;
      window.wizard.updateWizards();
    },

    paintWizardFireball: function (element, color) {
      element.style.background = color;
    },

    getRank: function (element) {
      var rank = 0;

      if (element.colorCoat === colorCoat) {
        rank += 2;
      }
      if (element.colorEyes === colorEyes) {
        rank += 1;
      }
      return rank;
    }

  };
})();
