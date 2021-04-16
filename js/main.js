var btn = document.querySelector('.btn');

btn.onclick = function(evt) {
  evt.preventDefault();
  document.querySelector('.learn').style.paddingTop = '0';
}
