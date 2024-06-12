const getRandomNumber = function(min, max, decimals) {
  if (min < 0 || max < 0) {
    throw new Error('Диапазон должен быть положительным');
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  let randomNumber = Math.random() * (max - min) + min;
  randomNumber = parseFloat(randomNumber.toFixed(decimals));
  return randomNumber;
};

getRandomNumber(1, 100, 3);
