var input = document.getElementById("input");
var submit = document.getElementById("submit");
var text = document.getElementById("text");
submit.addEventListener("click", function () {
  var inputValue = input.value;
  alert(inputValue);
  text.innerHTML = inputValue;
});