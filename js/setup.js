// Файл setup.js
'use strict';

var userDialog = document.querySelector('.setup');
var setupSimilar = userDialog.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = userDialog.querySelector('.setup-similar-list');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupUserName = userDialog.querySelector('.setup-user-name');
var setupSubmit = userDialog.querySelector('.setup-submit');
var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var setupFireballWrap = userDialog.querySelector('.setup-fireball-wrap');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

printWizard(getWizard(WIZARD_NAMES, WIZARD_SURNAME, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR));

showBlock(setupSimilar);

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', onPopupEnterPress);

// add wizard setup events
function randomWizardCoat(evt) {
  evt.target.style.fill = WIZARD_COAT_COLOR[getRandomNumber(WIZARD_COAT_COLOR.length)];
}
function randomWizardEyes(evt) {
  evt.target.style.fill = WIZARD_EYES_COLOR[getRandomNumber(WIZARD_EYES_COLOR.length)];
}
function randomWizardFireball() {
  setupFireballWrap.style.background = WIZARD_FIREBALL_COLOR[getRandomNumber(WIZARD_FIREBALL_COLOR.length)];
}

// add open/close events
function openPopup() {
  userDialog.classList.remove('hidden');
  setupOpen.removeEventListener('click', openPopup);
  setupOpen.removeEventListener('keydown', onPopupEnterPress);
  userDialog.addEventListener('keydown', onPopupKeyPress);
  setupClose.addEventListener('click', closePopup);
  setupSubmit.addEventListener('click', closePopup);
  wizardCoat.addEventListener('click', randomWizardCoat);
  wizardEyes.addEventListener('click', randomWizardEyes);
  setupFireballWrap.addEventListener('click', randomWizardFireball);
}
function closePopup() {
  userDialog.classList.add('hidden');
  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onPopupEnterPress);
  userDialog.removeEventListener('keydown', onPopupKeyPress);
  setupClose.removeEventListener('click', closePopup);
  setupSubmit.removeEventListener('click', closePopup);
  wizardCoat.removeEventListener('click', randomWizardCoat);
  wizardEyes.removeEventListener('click', randomWizardEyes);
  setupFireballWrap.removeEventListener('click', randomWizardFireball);
}
function onPopupKeyPress(evt) {
  if ((evt.keyCode === ENTER_KEYCODE && evt.target === (setupClose || setupSubmit)) || (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName)) {
    closePopup();
  }
}
function onPopupEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
}

function showBlock(block) {
  block.classList.toggle('hidden');
}

// add array wizard's friends
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

// add wizard's friends names
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
