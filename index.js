const accordion = document.getElementsByClassName('blockr__question');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle('active')
  });
}
