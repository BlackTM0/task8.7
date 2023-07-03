let minValue = parseInt(prompt('Минимальное число для игры', '0')) || 0;
minValue = minValue < -999 ? -999 : minValue;

let maxValue = parseInt(prompt('Максимальное число для игры', '100')) || 100;
maxValue = maxValue > 999 ? 999 : maxValue;

alert(`Загадайте любое целое число от ${numberToText(minValue)} до ${numberToText(maxValue)}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

const randomTexts = [
  'Это же...',
  'и Это...',
  'Я угадал. Это...'
];

const randomSuccess = [
  'Бинго...',
  'Я экстрасенс...',
  'Страшно, кожаный?...'
];

orderNumberField.innerText = `Вопрос ${orderNumber}`;

const randomText = randomTexts[Math.round(Math.random() * 2)];

answerField.innerText = `${randomText} ${numberToText(answerNumber)}`;

document.getElementById('btnOver').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase = phraseRandom === 1 ?
        `Вы загадали неправильное число!\n🤔` :
        `Я сдаюсь..\n😯`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = `Вопрос ${orderNumber}`;

      const randomText = randomTexts[Math.round(Math.random() * 2)];

      answerField.innerText = `${randomText} ${numberToText(answerNumber)}`;
    }
  }
});

document.getElementById('btnLess').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase = phraseRandom === 1 ?
        `Вы загадали неправильное число!\n🤔` :
        `Я сдаюсь..\n😯`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = `Вопрос ${orderNumber}`;

      const randomText = randomTexts[Math.round(Math.random() * 2)];

      answerField.innerText = `${randomText} ${numberToText(answerNumber)}`;
    }
  }
});

document.getElementById('btnRetry').addEventListener('click', function () {
  minValue = parseInt(prompt('Укажите минимальное число для игры', '0'));
  maxValue = parseInt(prompt('Укажите максимальное число для игры', '100'));
  orderNumber = 1;
  answerNumber = Math.floor((minValue + maxValue) / 2);
  gameRun = true;
  orderNumberField.innerText = `Вопрос ${orderNumber}`;

  const randomText = randomTexts[Math.round(Math.random() * 2)];

  answerField.innerText = `${randomText} ${numberToText(answerNumber)}`;
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
      const randomSuccessPhrase = randomSuccess[Math.round(Math.random() * 2)];
      answerField.innerText = `${randomSuccessPhrase}`;
      gameRun = false;
    }
});

function numberToText(number) {
  const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
  const tens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
  const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
  const thousands = ['', 'тысяча', 'тысячи', 'тысяч'];

  if (number === 0) {
    return 'ноль';
  }

  let text = '';
  if (number < 0) {
    text += 'минус ';
    number = Math.abs(number);
  }

  if (number >= 1000) {
    const thousandsIndex = Math.floor(number / 1000);
    text += `${hundreds[Math.floor(thousandsIndex / 100)]} `;
    text += `${tens[Math.floor((thousandsIndex % 100) / 10)]} `;
    text += `${ones[Math.floor(thousandsIndex % 10)]} `;
    text += `${thousands[getThousandsIndex(thousandsIndex)]} `;
    number %= 1000;
  }

  if (number > 0) {
    text += `${hundreds[Math.floor(number / 100)]} `;
    text += `${tens[Math.floor((number % 100) / 10)]} `;
    text += `${ones[Math.floor(number % 10)]}`;
    number %= 1;
  }

  return text.trim();
}

function getThousandsIndex(thousandsIndex) {
  if (thousandsIndex % 100 > 4 && thousandsIndex % 100 < 21) {
    return 3;
  }

  switch (thousandsIndex % 10) {
    case 1:
      return 1;
    case 2:
    case 3:
    case 4:
      return 2;
    default:
      return 3;
  }
}

var buttons = document.querySelectorAll('[data-collapse-target]');
  
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var target = document.querySelector(this.getAttribute('data-collapse-target'));
    
    if (target.classList.contains('show')) {
      target.classList.remove('show');
      this.setAttribute('aria-expanded', 'false');
    } else {
      target.classList.add('show');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

