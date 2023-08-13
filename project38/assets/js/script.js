const rangeThumb = document.getElementById('range-thumb');
const rangeNumber = document.getElementById('range-number');
const rangeLine = document.getElementById('range-line')
const rangeInput = document.getElementById('range-input');

const rangeInputSlider = () => {
  rangeNumber.textContent = rangeInput.value;

  const thumbPosition = (rangeInput.value / rangeInput.max);
  const space = rangeInput.offsetWidth - rangeThumb.offsetWidth

  rangeThumb.style.left = (thumbPosition * space) + 'px'

  rangeLine.style.width = rangeInput.value + '%'

  rangeInput.addEventListener('input', rangeInputSlider);
}

rangeInputSlider();