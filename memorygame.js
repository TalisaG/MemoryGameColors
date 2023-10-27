let clickedCard = null;
let preventClick = false;
let combosFound = 0;

function onCardClicked(e) {
  if (preventClick) return;

  const target = e.currentTarget;
  if (target === clickedCard || target.className.includes('done')) return;

  target.className = target.className.replace('color-hidden', '').trim();

  if (!clickedCard) {
    // First card clicked
    clickedCard = target;
  } else {
    // Second card clicked
    preventClick = true;

    if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
      // Match
      clickedCard.className += ' done';
      target.className += ' done';
      clickedCard = null;
      preventClick = false;

      combosFound++;
      if (combosFound === 8) {
        setTimeout(() => {
          alert('You win!');
        }, 500);
      }
    } else {
      // Not a match
      setTimeout(() => {
        clickedCard.className = clickedCard.className.replace('color-hidden', '').trim() + ' color-hidden';
        target.className = target.className.replace('color-hidden', '').trim() + ' color-hidden';
        clickedCard = null;
        preventClick = false;
      }, 500);
    }
  }
}