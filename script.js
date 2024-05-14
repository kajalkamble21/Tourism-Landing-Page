const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const img = box.querySelector('img');
  box.addEventListener('click', () => {
    img.classList.toggle('clicked');
  });
});
