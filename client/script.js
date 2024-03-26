const hoverLinks = document.querySelectorAll('.hover-link');
const hiddenContents = document.querySelectorAll('.hidden');

hoverLinks.forEach((link, index) => {
    link.addEventListener('mouseover', () => {
        hiddenContents[index].style.display = 'block';
    });

    link.addEventListener('mouseout', () => {
        hiddenContents[index].style.display = 'none';
    });
});