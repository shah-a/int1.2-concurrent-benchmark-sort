const arrayCountInput = document.querySelector('#array-count');
const arrayCountLabel = document.querySelector('#array-count-label');

const arrayLengthInput = document.querySelector('#array-length');
const arrayLengthLabel = document.querySelector('#array-length-label');

const generateNumbersButton = document.querySelector('#generate-button');

const startButton = document.querySelector('#start-button');

const updateLengthLabel = (e) => {
  arrayLengthLabel.innerHTML = arrayLengthInput.value;
  console.log(arrayLengthInput.value); // value is ready to send to backend API
};

const updateCountLabel = (e) => {
  arrayCountLabel.innerHTML = arrayCountInput.value;
  console.log(arrayCountInput.value); // value is ready to send to backend API
};

const generateInputs = (e) => {
  console.log("I was clicked!");
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

// GENERATE RANDOM NUMBERS
generateNumbersButton.addEventListener('click', generateInputs);

// START SORTING OPERATION
startButton.addEventListener('click', startSorting);
