'use strict';

(function () {
  window.WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  window.WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  window.arrayWizard = getWizard(window.WIZARD_NAMES, window.WIZARD_SURNAME, window.WIZARD_COAT_COLOR, window.WIZARD_EYES_COLOR);

  // add array wizard's friends
  function getWizard(name, surname, coat, eyes) {
    var Wizard = [];
    for (var i = 0; i < 4; i++) {
      Wizard[i] = {
        name: getRandomName(name, surname),
        coatColor: coat[window.util.getRandomNumber(coat.length)],
        eyesColor: eyes[window.util.getRandomNumber(eyes.length)]
      };
    }
    return Wizard;
  }


  // add wizard's friends names
  function getRandomName(names, surnames) {
    var name = null;
    if (Math.random() > 0.5) {
      name = names[window.util.getRandomNumber(names.length)] + ' ' + surnames[window.util.getRandomNumber(surnames.length)];
    } else {
      name = surnames[window.util.getRandomNumber(surnames.length)] + ' ' + names[window.util.getRandomNumber(names.length)];
    }
    return name;
  }

})();
