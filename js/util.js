'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  window.userDialog = document.querySelector('.setup');
  window.setupClose = window.userDialog.querySelector('.setup-close');
  window.setupSubmit = window.userDialog.querySelector('.setup-submit');
  var setupUserName = window.userDialog.querySelector('.setup-user-name');

  window.util = {
    getRandomNumber: function (number) {
      return Math.floor(Math.random() * (number - 1));
    },
    onPopupKeyPress: function (evt, functionCloseWindow) {
      if ((evt.keyCode === ENTER_KEYCODE && evt.target === (window.setupClose || window.setupSubmit)) || (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName)) {
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
    }
  };
})();