// Файл setup.js
'use strict';

(function () {
  var setupSimilar = window.userDialog.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var setupFireballWrap = window.userDialog.querySelector('.setup-fireball-wrap');
  var form = window.userDialog.querySelector('.setup-wizard-form');


  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


  window.util.showBlock(setupSimilar);
  window.colorize.color(window.wizardCoat, WIZARD_COAT_COLOR, window.util.paintWizardCoat, window.wizard.addWizards);
  window.colorize.color(window.wizardEyes, WIZARD_EYES_COLOR, window.util.paintWizardEyes, window.wizard.addWizards);
  window.colorize.color(setupFireballWrap, WIZARD_FIREBALL_COLOR, window.util.paintWizardFireball);

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
