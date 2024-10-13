document.addEventListener('DOMContentLoaded', function () {
     const newList = document.querySelectorAll(‘.card--nanodegree__title’);
  newList.forEach(function (eve) {
    const button = document.createElement('button');
    button.textContent = 'Add to Favorites';
    button.classList.add('button', 'button--primary');
    eve.appendChild(button);
  }
});
 

function toggleFavorite(event) {
    const tagName = event.target;
    if (tagName.nodeName === 'BUTTON') 
    {
        event.preventDefault();
        if (tagName.textContent.startsWith('Add')) 
        {
            tagName.textContent = 'Remove from favorites';
            const fav = document.createElement('p');
            fav.textContent = '⭐ ⭐ ⭐ ';
            tagName.parentElement.appendChild(fav);
        } else {
            tagName.textContent = 'Add to favorites';
            if (tagName.nextSibling) 
            {
                tagName.nextSibling.remove();
            }
        }
    }
}

const ndsContainer = document.querySelector('.list-nanodegrees');
if (ndsContainer) {
    ndsContainer.addEventListener('click', toggleFavorite);
}
});

