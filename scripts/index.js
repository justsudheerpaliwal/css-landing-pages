window.addEventListener('scroll', function(e) {
  let { body } = document;
  let backToTopElem = document.getElementsByClassName("back-to-top")[0];
  if (body.scrollTop > 30) {
    if (!backToTopElem.classList.contains('back-to-top--visible')) {
      backToTopElem.classList.add('back-to-top--visible');
    }
  } else  {
    if (backToTopElem.classList.contains('back-to-top--visible')) {
      backToTopElem.classList.remove('back-to-top--visible');
    }
  }
});