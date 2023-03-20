const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    sections.forEach((section, sectionIndex) => {
      section.style.display = index === sectionIndex ? 'block' : 'none';
    });
  });
});
