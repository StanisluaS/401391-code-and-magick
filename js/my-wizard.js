'use strict';

(function () {
  var setupFireballWrap = window.userDialog.querySelector('.setup-fireball-wrap');
  var wizardName = document.querySelector('.setup-user-name');

  var wizard = new window.Wizard({name: wizardName.value});

  window.myWizard = wizard;

  window.colorize.color(window.wizardCoat, paintWizardCoat, wizard.changeCoatColor);
  window.colorize.color(window.wizardEyes, paintWizardEyes, wizard.changeEyesColor);
  window.colorize.color(setupFireballWrap, paintWizardFireball, wizard.changeFireballColor);

  // add wizard setup events
  function paintWizardCoat(element, color) {
    element.style.fill = color.call(wizard);
  }

  function paintWizardEyes(element, color) {
    element.style.fill = color.call(wizard);
  }

  function paintWizardFireball(element, color) {
    element.style.background = color.call(wizard);
  }

})();
