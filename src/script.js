const arrayCountInput = document.querySelector('#array-count');
const arrayCountLabel = document.querySelector('#array-count-label');

const arrayLengthInput = document.querySelector('#array-length');
const arrayLengthLabel = document.querySelector('#array-length-label');

const updateLengthLabel = (e) => {
  arrayLengthLabel.innerHTML = arrayLengthInput.value;
  console.log(arrayLengthInput.value); // value is ready to send to backend API
};

const updateCountLabel = (e) => {
  arrayCountLabel.innerHTML = arrayCountInput.value;
  console.log(arrayCountInput.value); // value is ready to send to backend API
}

arrayLengthInput.addEventListener('change', updateLengthLabel);
arrayCountInput.addEventListener('change', updateCountLabel);
arrayLengthInput.addEventListener('mousemove', updateLengthLabel);
arrayCountInput.addEventListener('mousemove', updateCountLabel);
