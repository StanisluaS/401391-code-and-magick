'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  window.moveElement = {
    addEventsForDragAndDrop: function () {
      shopElement.addEventListener('dragstart', moveElement);
      artifactsElement.addEventListener('dragstart', moveElement);
      artifactsElement.addEventListener('dragover', onDragoverElement);
      artifactsElement.addEventListener('drop', onDropElement);
      artifactsElement.addEventListener('dragenter', onDragenterElement);
      artifactsElement.addEventListener('dragleave', onDragleaveElement);
      document.addEventListener('dragend', removeOutline);
    },

    removeEventsForDragAndDrop: function () {
      shopElement.removeEventListener('dragstart', moveElement);
      artifactsElement.removeEventListener('dragstart', moveElement);
      artifactsElement.removeEventListener('dragover', onDragoverElement);
      artifactsElement.removeEventListener('drop', onDropElement);
      artifactsElement.removeEventListener('dragenter', onDragenterElement);
      artifactsElement.removeEventListener('dragleave', onDragleaveElement);
      document.removeEventListener('dragend', removeOutline);
    }
  };

  function moveElement(evt) {
    var target = evt.target;
    if (target.tagName === 'IMG') {
      if (target.parentElement.parentElement.classList.contains('setup-artifacts')) {
        draggedItem = target;
      } else {
        draggedItem = target.cloneNode();
      }
      evt.dataTransfer.setData('text/plain', target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  }

  function onDragoverElement(evt) {
    evt.preventDefault();
  }

  function onDropElement(evt) {
    var target = evt.target;
    if (target.classList.contains('setup-artifacts-cell') && target.children.length === 0) {
      target.appendChild(draggedItem);
      draggedItem = null;
    }
    target.style.backgroundColor = '';
    evt.preventDefault();
  }

  function onDragenterElement(evt) {
    var target = evt.target;
    if (target.classList.contains('setup-artifacts-cell') && target.children.length === 0) {
      target.style.backgroundColor = 'yellow';
    }
    evt.preventDefault();
  }

  function onDragleaveElement(evt) {
    var target = evt.target;
    target.style.backgroundColor = '';
    evt.preventDefault();
  }

  function removeOutline() {
    artifactsElement.style.outline = '';
  }

})();
