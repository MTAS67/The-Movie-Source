import React from 'react';
import './App.css';
import image from './movie-image.webp';
import Title from './title';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5181bc338fmsh2fe8c62891b6fa8p1f100fjsn0d5c5a73ef67',
		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
	}
};

fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <input type="text" class="textbox" placeholder="Enter Movie Title"/>&nbsp;
        <button>Click for movie</button>&nbsp;
        <img src={image} className="App-logo" alt="movie"/><br></br>
        <span>Year</span>
        <span>Rated</span>
        <span>Genre</span>
        <ul>
          <li>Actors in here</li>
        </ul>
       
      </header>
    </div>
    
  );
}

export default App;
