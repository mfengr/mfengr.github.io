// The parent elements to add the 'Add to Favorites' button
const degreeTitles = document.querySelectorAll(".card--nanodegree__title");

console.log(degreeTitles.length);

for(i=0;i<degreeTitles.length;i++){
     const button = document.createElement('button');
     button.classList = 'button button--primary';
     button.textContent = 'Add to Favorites';
     degreeTitles[i].appendChild(button);
}


