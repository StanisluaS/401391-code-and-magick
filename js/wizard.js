'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function Wizard(data) {
    this.name = data.name;
    this.coatColor = data.colorCoat;
    this.eyesColor = data.colorEyes;
    this.artifacts = data.artifacts;
  }

  Wizard.prototype = {
    setName: function (name) {
      if (!name) {
        throw new Error('Имя не задано');
      }
      if (name.length > 30) {
        throw new Error('Недопустимое значение имени мага: ' + name);
      }
      this.name = name;
      return name;
    },

    changeCoatColor: function () {
      var newColor = COAT_COLOR[window.util.getRandomNumber(COAT_COLOR.length)];
      this.coatColor = newColor;
      this.onChange(this);
      return newColor;
    },

    changeEyesColor: function () {
      var newColor = EYES_COLOR[window.util.getRandomNumber(EYES_COLOR.length)];
      this.eyesColor = newColor;
      this.onChange(this);
      return newColor;
    },

    changeFireballColor: function () {
      var newColor = FIREBALL_COLOR[window.util.getRandomNumber(FIREBALL_COLOR.length)];
      this.eyesColor = newColor;
      this.onChange(this);
      return newColor;
    },

    onChange: function (wizard) {
      return wizard;
    }
  };

  window.Wizard = Wizard;
})();
