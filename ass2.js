const characterList = document.getElementById('characterList');
const characterDetails = document.getElementById('characterDetails');

const characterImages= {
'Luke SkyWalker': 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796',
 'C-3PO': 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-2dprr0_16d98939.jpeg?region=0%2C0%2C1280%2C842',
 'R2-D2' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqyxA2e55vAHY3oLKgosagQYilvca5q-h_Q&s',
 'Darth Vader':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_bLTorlyO3nrFhjeViNi7JJvK65dsSUhAg&s',
 'Leia Organa':'https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=493%2C153%2C787%2C787',
 'Owen Lars':'https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=8%2C0%2C774%2C774',
 'Beru Whitesun lars':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8JScl5dWduJAIiSJtxiFBxzr4891dxVHpg&s',
 'R5-D4': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYnOs2f2fgY6z3N98TcdzQ3jsSFMiKRtj2A&s',
 'Biggs Darklighter': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlusFvt3fJIXKx9hk3ZjPA5FqjIrP_9Gb_g&s',
 'Obi-Wan Kenobi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwrXpqoL6KW_5eHGcXmY8EY3sDoEz74W_8Q&s',
}

fetch('https://swapi.dev/api/people/')
.then(response => {
    
	if (response.ok) {
	return response.json();
	} else {
	throw new Error('Error occured');
	}
})
.then(data => {
	const characters = data.results;
	characters.forEach(character =>{
	   
		   const listing = document.createElement('li');
		   listing.textContent = character.name;
		   listing.addEventListener('click',() =>{
	          display(character)
		   })
	       characterList.appendChild(listing);
	   });
})
.catch(error => {
	console.log(error); 
});

function display(character){

	characterDetails.innerHTML = '';
	const gender = document.createElement('p');
    gender.textContent = `Gender: ${character.gender}`;

	const height = document.createElement('p');
   height.innerHTML = `Height: ${character.height}`;

   characterDetails.appendChild(gender);
   characterDetails.appendChild(height);

   const image = document.createElement('img');
   image.src = characterImages[character.name]|| 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796';
   image.alt = `Image: ${character.name}`
   characterDetails.appendChild(image);
}
