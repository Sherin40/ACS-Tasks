const familyMembers = document.querySelector("#family-members");

familyMembers.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const index = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
    if (index % 2 === 0) {
      event.target.classList.add("red-color");
      event.target.classList.remove("green-color");
    } else {
      event.target.classList.add("green-color");
      event.target.classList.remove("red-color");
    }
  }
});
