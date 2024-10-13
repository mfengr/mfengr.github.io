// The parent elements to add the 'Add to Favorites' button
const degreeTitles = document.querySelectorAll(".card--nanodegree__title");

console.log(degreeTitles.length);

for(let i=0;i<degreeTitles.length;i++){
     const button = document.createElement('button');
     button.classList = 'button button--primary';
     button.textContent = 'Add to Favorites';
     const text = 'button_'+(i+1);
     button.id = text;
     degreeTitles[i].appendChild(button);
}



function toggleFavorite(event) {
 const target = event.target;
  if (target.nodeName === 'BUTTON') {
    event.preventDefault();
    
    if (target.textContent.startsWith('Add')) {
         event.target.textContent = 'Remove from favorites';
         const fav = document.createElement('p');
         fav.textContent = '⭐ ⭐ ⭐ ';

         target.parentElement.appendChild(fav);
    } else {
         event.target.textContent = 'Add to favorites';
         target.nextSibling.remove();
     }
  }
}

const ndsContainer = document.querySelector('.list-nanodegrees');
ndsContainer.addEventListener('click', toggleFavorite);
