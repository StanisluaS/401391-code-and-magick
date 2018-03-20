'use strict';

(function () {

  var SHOW_WIZARDS_NUMBER = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarListElement = window.userDialog.querySelector('.setup-similar-list');

  window.render = {
    // print wizard's friends
    printWizard: function (array) {
      similarListElement.innerHTML = '';
      array.slice(0, SHOW_WIZARDS_NUMBER).forEach(function (wizard) {
        similarListElement.appendChild(renderWizard(wizard));
      });
    }
  };

  // add wizard's friends
  function renderWizard(wizard) {
    var element = similarWizardTemplate.cloneNode(true);
    var wizardElement = element.querySelector('.setup-similar-item');
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    window.popup.handleShowHideWizardBag(wizardElement, wizard);
    return wizardElement;
  }

})();
