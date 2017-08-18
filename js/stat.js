'use strict';

window.renderStatistics = function (ctx, names, times) {
  printRect(ctx, 110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  printRect(ctx, 100, 10, 420, 270, 'white');
  printText(ctx, 'Ура вы победили!', 120, 40, '16px PT Mono', '#000');
  printText(ctx, 'Список результатов:', 120, 60, '16px PT Mono', '#000');
  printHistogram(ctx, names, times);
  function printRect(canvas, x, y, width, height, color) {
    canvas.fillStyle = color || 'white';
    canvas.fillRect(x, y, width, height);
  }
  function printText(canvas, text, x, y, font, style) {
    canvas.fillStyle = style || 'black';
    canvas.font = font || '16px PT Mono';
    canvas.fillText(text, x, y);
  }
  function printHistogram(canvas, namesArr, timesArr) {
    var max = -1;
    var histogramHeight = 150;
    var i = 0;
    var j = 0;
    var distance = 140;

    for (i; i < timesArr.length; i++) {
      var maxTime = timesArr[i];
      if (maxTime > max) {
        max = maxTime;
      }
    }
    var step = histogramHeight / max;
    for (j; j < timesArr.length; j++) {
      histogramHeight = timesArr[j] * step;
      canvas.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла
      printText(canvas, namesArr[j], distance, 260, '16px PT Mono', '#000');
      printText(canvas, parseInt(timesArr[j], 10), distance, 230 - histogramHeight);
      printRect(canvas, distance, 250, 40, -histogramHeight, getRandomColor(namesArr[j]));
      distance += 90;
    }
  }

  function getRandomColor(name) {
    var result = null;
    var random = Math.round(Math.random() * 10) / 10;
    if (name === 'Вы') {
      result = 'rgba(255, 0, 0, 1)';
    } else {
      while (random < 0.2) {
        random = Math.round(Math.random() * 10) / 10;
      }
      result = 'rgba(0, 0, 255, ' + random + ')';
    }
    return result;
  }
};
