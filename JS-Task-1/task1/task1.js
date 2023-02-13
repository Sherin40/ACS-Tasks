let previousClicked = [];

document.querySelectorAll('.box').forEach(function (box) {
  box.addEventListener('click', function () {
    if (previousClicked.length === 0) {
      alert(this.innerHTML);
      previousClicked.push(this.innerHTML);
    } else {
      alert(previousClicked + ', ' + this.innerHTML);
      previousClicked.push(this.innerHTML);
    }
  });
});
