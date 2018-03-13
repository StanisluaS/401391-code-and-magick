'use strict';

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarListElement = window.userDialog.querySelector('.setup-similar-list');

  var wizards = [];

  window.backend.load(successHandler, window.util.onError);

  function successHandler(data) {
    wizards = data;
    printWizard(wizards);
  }

  window.wizard = {
    updateWizards: function () {
      printWizard(wizards.sort(function (left, right) {
        return window.util.getRank(right) - window.util.getRank(left);
      }));
    }
  };

  // add wizard's friends
  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  // print wizard's friends
  function printWizard(array) {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
    similarListElement.appendChild(fragment);
  }


})();
