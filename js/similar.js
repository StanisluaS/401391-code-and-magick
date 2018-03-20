'use strict';

(function () {

  var wizards = [];

  window.backend.load(successHandler, window.util.onError);

  function successHandler(data) {
    wizards = data.map(function (it) {
      return new window.Wizard(it);
    });
    window.render.printWizard(wizards);
  }

  window.myWizard.onChange = function () {
    window.debounce.setTimeout(updateWizards);
  };

  function updateWizards() {
    window.render.printWizard(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      return rankDiff === 0 ? window.util.namesComparator(left.name, right.name) : rankDiff;
    }));
  }

  function getRank(element) {
    var rank = 0;
    if (element.coatColor === window.myWizard.coatColor) {
      rank += 2;
    }
    if (element.eyesColor === (typeof window.myWizard.eyesColor === 'undefined' ? 'black' : window.myWizard.eyesColor)) {
      rank += 1;
    }
    return rank;
  }

})();
