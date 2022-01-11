const stars = document.querySelectorAll('.star');

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener('mouseenter', () => {
    for (let j = 0; j <= i; j++) {
      stars[j].classList.add(`star-${j+1}`);
      stars[j].addEventListener('mouseleave', (evt) => {
        if (evt.relatedTarget.getBoundingClientRect().x < evt.target.getBoundingClientRect().x) {
          stars[j].classList.remove(`star-${j+1}`);
        };
      });
    };
  });
};
