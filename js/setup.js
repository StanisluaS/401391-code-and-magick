// Файл setup.js
'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

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

var wizards = getWizard(WIZARD_NAMES, WIZARD_SURNAME, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR);

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = userDialog.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

function printWizard() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
}

printWizard();
userDialog.querySelector('.setup-similar').classList.remove('hidden');
