var inputBox = document.getElementById('input');
inputBox.onkeyup = function () {
  document.getElementById('text-display').innerHTML = inputBox.value;
}