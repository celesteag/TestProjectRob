function toggleInfo(card) {
  card.classList.toggle('active'); //Property of CSS classes

  setTimeout(() => {
    card.classList.remove('active'); //We automatically remove the class
  }, 2000);
}