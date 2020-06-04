const accordion = (wrapperSelector, btnSelector, contentSelector, activeClassBtn) => {
  const wrapper = document.querySelector(wrapperSelector),
    btns = document.querySelectorAll(btnSelector);
    // content = document.querySelectorAll(contentSelector);

  function toggleAccordionContent(l) {
    btns[l].classList.toggle(activeClassBtn);
  }

  wrapper.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target && (target.classList.contains(btnSelector.replace(/\./, '')) || target.parentNode.classList.contains(btnSelector.replace(/\./, '')))) {
      btns.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          toggleAccordionContent(i);
        }
      });
    }
  });
};

export default accordion;
