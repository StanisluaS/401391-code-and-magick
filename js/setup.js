// Файл setup.js
'use strict';

(function () {
  var setupSimilar = window.userDialog.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var wizardCoat = window.window.userDialog.querySelector('.wizard-coat');
  var wizardEyes = window.userDialog.querySelector('.wizard-eyes');
  var setupFireballWrap = window.userDialog.querySelector('.setup-fireball-wrap');
  var userPic = window.userDialog.querySelector('.setup-user-pic');
  var form = window.userDialog.querySelector('.setup-wizard-form');


  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  window.util.showBlock(setupSimilar);
  window.colorize.color(wizardCoat, window.WIZARD_COAT_COLOR, paintWizardCoat);
  window.colorize.color(wizardEyes, window.WIZARD_EYES_COLOR, paintWizardEyes);
  window.colorize.color(setupFireballWrap, WIZARD_FIREBALL_COLOR, paintWizardFireball);

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onPopupEnterPress(evt, closePopup);
  });

  // add open/close events
  function openPopup() {
    window.userDialog.classList.remove('hidden');
    userPic.addEventListener('mousedown', window.dialog.dragging);
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
    userPic.removeEventListener('mousedown', window.dialog.dragging);
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

  // add wizard setup events
  function paintWizardCoat(element, color) {
    element.style.fill = color;
  }
  function paintWizardEyes(element, color) {
    element.style.fill = color;
  }
  function paintWizardFireball(element, color) {
    element.style.background = color;
  }

  // отправка формы
  function sendForm(evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), closePopup, window.util.onError);
  }

})();
