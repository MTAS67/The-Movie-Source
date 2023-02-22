import React from 'react';
import image from './movie-image.webp';



class Title extends React.Component {
  constructor() {
    super() 
    this.state = {
      loadedMovie: false,
      poster: null,
      title: null,
      year: null,
      rated: null,
      genre: null,
      actors: [],
      
    }
  }
  getNewMovie() {
    
<img src={image} className="App-logo" alt="movie" /> 
    let movie = document.getElementById('title').value;
    
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=ffb6cf87`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loadedMovie: true,
          poster: data.Poster,
          title: data.Title,
          year: data.Year,
          rated: data.Rated,
          genre: data.Genre,
          actors: data.Actors,
        })
        console.log(data);

      })

  }
  
  render() {
    
    

    return (
      <div>

        {/*<img src={image} className="App-logo" alt="movie" />*/}
        <img src={this.state.poster} alt="movie-poster"/>
        <p className="cats" id="movie-title">Title: {this.state.title}</p>
        <p className="cats">Year Released: {this.state.year}</p>
        <p className="cats">Rated: {this.state.rated}</p>
        <p className="cats">Genre: {this.state.genre}</p>
        <ul className="cats">
         
          Actors: {this.state.actors}
     
        </ul>
        <button type="button" onClick={() => this.getNewMovie()} className="button">Click for movie</button><br></br>
      </div>
    )
  }
}





export default Title; 