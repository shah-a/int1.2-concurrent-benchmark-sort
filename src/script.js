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
   *
   * Example (base: https://api.random.org/json-rpc/4/invoke)
   *
   * {
   *     "jsonrpc": "2.0",
   *     "method": "generateIntegerSequences",
   *     "params": {
   *         "apiKey": "process.env.RANDOM_API",
   *         "n": "5",
   *         "length": "5",
   *         "min": "0",
   *         "max": "500"
   *     },
   *     "id": 0
   * }
   * 
   */

  let arrayTextfield;
  const arrayCount = parseInt(arrayCountInput.value);

  for (let i = 1; i <= arrayCount; i++) {
    arrayTextfield = document.querySelector(`#array-${i}`);
    arrayTextfield.value = '';

    const arrayLength = parseInt(arrayLengthInput.value);
    let arrayNumbers = '';
    for (let j = 0; j < arrayLength - 1; j++) {
      arrayNumbers += `${(Math.floor(Math.random() * 500))}, `;
    }
    arrayNumbers += Math.floor(Math.random() * 500);
    arrayTextfield.value = arrayNumbers;
  }
};

const clearNumbers = (e) => {
  const arrays = document.querySelectorAll('.array-textarea');
  arrays.forEach((array) => {
    array.value = '';
  });
};

const startSorting = (e) => {
  const algorithmSelects = document.querySelectorAll('.algorithm-select');

  algorithmSelects.forEach((algorithm, i) => {
    console.log(`${i + 1}: ${algorithm.value}`);
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
