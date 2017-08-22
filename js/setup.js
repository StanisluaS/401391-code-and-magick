// Файл setup.js
'use strict';

var userDialog = document.querySelector('.setup');
var setupSimilar = userDialog.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = userDialog.querySelector('.setup-similar-list');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

showBlock(userDialog);
printWizard(getWizard(WIZARD_NAMES, WIZARD_SURNAME, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR));
showBlock(setupSimilar);

function showBlock(block) {
  block.classList.remove('hidden');
}

function getWizard(name, surname, coat, eyes) {
  var Wizard = [];
  for (var i = 0; i < 4; i++) {
    Wizard[i] = {
      name: getRandomName(name, surname),
      coatColor: coat[getRandomNumber(coat.length)],
      eyesColor: eyes[getRandomNumber(eyes.length)]
    };
  }
  return Wizard;
}

function getRandomName(names, surnames) {
  var name = null;
  if (Math.random() > 0.5) {
    name = names[getRandomNumber(names.length)] + ' ' + surnames[getRandomNumber(surnames.length)];
  } else {
    name = surnames[getRandomNumber(surnames.length)] + ' ' + names[getRandomNumber(names.length)];
  }
  return name;
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * (number - 1));
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

function printWizard(wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
}
