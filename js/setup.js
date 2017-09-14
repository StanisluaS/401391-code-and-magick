// Файл setup.js
'use strict';

(function () {
  var setupSimilar = window.userDialog.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var wizardCoat = window.window.userDialog.querySelector('.wizard-coat');
  var wizardEyes = window.userDialog.querySelector('.wizard-eyes');
  var setupFireballWrap = window.userDialog.querySelector('.setup-fireball-wrap');


  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  window.util.showBlock(setupSimilar);

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onPopupEnterPress(evt, closePopup);
  });

  // add wizard setup events
  function randomWizardCoat(evt) {
    evt.target.style.fill = window.WIZARD_COAT_COLOR[window.util.getRandomNumber(window.WIZARD_COAT_COLOR.length)];
  }
  function randomWizardEyes(evt) {
    evt.target.style.fill = window.WIZARD_EYES_COLOR[window.util.getRandomNumber(window.WIZARD_EYES_COLOR.length)];
  }
  function randomWizardFireball() {
    setupFireballWrap.style.background = WIZARD_FIREBALL_COLOR[window.util.getRandomNumber(WIZARD_FIREBALL_COLOR.length)];
  }

  // add open/close events
  function openPopup() {
    window.userDialog.classList.remove('hidden');
    setupOpen.removeEventListener('click', openPopup);
    setupOpen.removeEventListener('keydown', function (evt) {
      window.util.onPopupEnterPress(evt, closePopup);
    });
    window.userDialog.addEventListener('keydown', function (evt) {
      window.util.onPopupKeyPress(evt, openPopup);
    });
    window.setupClose.addEventListener('click', closePopup);
    window.setupSubmit.addEventListener('click', closePopup);
    wizardCoat.addEventListener('click', randomWizardCoat);
    wizardEyes.addEventListener('click', randomWizardEyes);
    setupFireballWrap.addEventListener('click', randomWizardFireball);
  }
  function closePopup() {
    window.userDialog.classList.add('hidden');
    setupOpen.addEventListener('click', openPopup);
    setupOpen.addEventListener('keydown', function (evt) {
      window.util.onPopupEnterPress(evt, closePopup);
    });
    window.userDialog.removeEventListener('keydown', function (evt) {
      window.util.onPopupKeyPress(evt, openPopup);
    });
    window.setupClose.removeEventListener('click', closePopup);
    window.setupSubmit.removeEventListener('click', closePopup);
    wizardCoat.removeEventListener('click', randomWizardCoat);
    wizardEyes.removeEventListener('click', randomWizardEyes);
    setupFireballWrap.removeEventListener('click', randomWizardFireball);
  }
})();
