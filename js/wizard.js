'use strict';

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarListElement = window.userDialog.querySelector('.setup-similar-list');

  printWizard(window.arrayWizard);

  // add wizard's friends
  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  // print wizard's friends
  function printWizard(wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  }


})();
