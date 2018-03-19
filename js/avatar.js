'use strict';

(function () {
  var FILE_TYPES = ['.gif', '.jpg', '.jpeg', '.png'];

  window.userInput = window.userDialog.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  window.avatar = {
    addAvatar: function () {
      var file = window.userInput.files[0];
      if (typeof file !== 'undefined') {
        var fileName = file.name.toLowerCase();

        var matches = FILE_TYPES.some(function (it) {
          return fileName.endsWith(it);
        });

        if (matches) {
          var reader = new FileReader();

          reader.addEventListener('load', function () {
            preview.src = reader.result;
          });

          reader.readAsDataURL(file);
        }
      }
    }
  };

})();
