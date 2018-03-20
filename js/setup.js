// Файл setup.js
'use strict';

(function () {
  var setupSimilar = window.userDialog.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var form = window.userDialog.querySelector('.setup-wizard-form');

  window.util.showBlock(setupSimilar);

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onPopupEnterPress(evt, closePopup);
  });

  // add open/close events
  function openPopup() {
    window.userDialog.classList.remove('hidden');
    window.userInput.addEventListener('mousedown', window.dialog.dragging);
    window.userInput.addEventListener('change', window.avatar.addAvatar);
    window.moveElement.addEventsForDragAndDrop();
    setupOpen.removeEventListener('click', openPopup);
    setupOpen.removeEventListener('keydown', function (evt) {
      window.util.onPopupEnterPress(evt, closePopup);
    });
    window.userDialog.addEventListener('keydown', function (evt) {
      window.util.onPopupKeyPress(evt, openPopup);
    });
    window.setupClose.addEventListener('click', closePopup);
    form.addEventListener('submit', sendForm);
  }

  function closePopup() {
    window.dialog.resetBias();
    window.userDialog.classList.add('hidden');
    window.userInput.removeEventListener('mousedown', window.dialog.dragging);
    window.userInput.removeEventListener('change', window.avatar.addAvatar);
    window.moveElement.removeEventsForDragAndDrop();
    setupOpen.addEventListener('click', openPopup);
    setupOpen.addEventListener('keydown', function (evt) {
      window.util.onPopupEnterPress(evt, closePopup);
    });
    window.userDialog.removeEventListener('keydown', function (evt) {
      window.util.onPopupKeyPress(evt, openPopup);
    });
    window.setupClose.removeEventListener('click', closePopup);
    form.removeEventListener('submit', sendForm);
  }

  // отправка формы
  function sendForm(evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), closePopup, window.util.onError);
  }

})();
