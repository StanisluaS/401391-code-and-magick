'use strict';

(function () {
  var popupElement = document.createElement('div');
  var OFFSET = 10; // px

  window.popup = {
    handleShowHideWizardBag: function (element, wizard) {
      element.addEventListener('mouseenter', function () {
        popupElement.innerHTML = renderWizardArtifacts(wizard);
        popupElement.style.display = 'block';

        element.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseleave', onMouseOut);
      });

      function onMouseMove(evt) {
        popupElement.style.top = evt.pageY + OFFSET + 'px';
        popupElement.style.left = evt.pageX + OFFSET + 'px';
      }

      function onMouseOut() {
        popupElement.style.display = 'none';
        element.removeEventListener('mousemove', onMouseMove);
        element.removeEventListener('mouseleave', onMouseOut);
      }

    }
  };

  popupElement.classList.add('popup');
  popupElement.style.display = 'none';
  document.body.insertBefore(popupElement, document.body.firstChild);

  function renderWizardArtifacts(wizard) {
    return wizard.artifacts.map(function (it) {
      return it.name;
    }).join('<br>');

  }

})();
