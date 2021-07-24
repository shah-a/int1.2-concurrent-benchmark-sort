const arrayCountInput = document.querySelector('#array-count');
const arrayCountLabel = document.querySelector('#array-count-label');

const arrayLengthInput = document.querySelector('#array-length');
const arrayLengthLabel = document.querySelector('#array-length-label');

const generateNumbersButton = document.querySelector('#generate-button');
const clearNumbersButton = document.querySelector('#clear-button');

const startButton = document.querySelector('#start-button');

const updateLengthLabel = (e) => {
  arrayLengthLabel.innerHTML = arrayLengthInput.value;
};

const updateCountLabel = (e) => {
  arrayCountLabel.innerHTML = arrayCountInput.value;
};

const generateNumbers = (e) => {
  /*
   * API call to random.org can go here for good random numbers
   */

  let arrayTextfield;

  for (let i = 0; i < parseInt(arrayCountInput.value); i++) {
    arrayTextfield = document.querySelector(`#array-${i + 1}`);
    arrayTextfield.textContent = '';
    for (let j = 0; j < parseInt(arrayLengthInput.value); j++) {
      arrayTextfield.textContent += `${(Math.floor(Math.random() * 500))}, `;
    }
  }
};

const clearNumbers = (e) => {
  const arrays = document.querySelectorAll('.array-textarea');
  arrays.forEach((array) => {
    array.textContent = '';
  });
};

const startSorting = (e) => {
  const algorithmSelects = document.querySelectorAll('.algorithm-select');

  algorithmSelects.forEach((algorithm, i) => {
    console.log(`Algorithm ${i}: ${algorithm.value}`);
  });

  /*
   * Note to future self:
   * Maybe we can use Object.assign() to make an object with key-value pairs of
   * algorithm-values (algorithms obtained from above ^ and values obtained from
   * the array textareas). Then we can serialize/marshal the data and send it to
   * the backend. Then the backend can deserialize/unmarshal it to perform the sort
   * operation? 😄
   */
};

// UPDATE SLIDER LABELS
arrayLengthInput.addEventListener('change', updateLengthLabel);
arrayCountInput.addEventListener('change', updateCountLabel);
arrayLengthInput.addEventListener('mousemove', updateLengthLabel);
arrayCountInput.addEventListener('mousemove', updateCountLabel);

// GENERATE/CLEAR RANDOM NUMBERS
generateNumbersButton.addEventListener('click', generateNumbers);
clearNumbersButton.addEventListener('click', clearNumbers);

// START SORTING OPERATION
startButton.addEventListener('click', startSorting);
