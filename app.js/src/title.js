import React from 'react';
import image from './movie-image.webp'; 

class Title extends React.Component{
    constructor(){
        super()
    this.state= {
        title:null,
        year:null,
        rated:null,
        genre:null,
        actors:[],
    }
    }
    getNewMovie(){
        let url = 'https://www.omdbapi.com/?i=tt3896198&apikey=ffb6cf87'
        let movie = document.getElementById('title').value; 
        document.getElementById('movie-title').innerHTML = movie;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                title:data.title,
                year:data.year,
                rated:data.rated,
                genre:data.genre,
                actors:data.actors,   
        })

        })
    }
    render(){ 
      return ( 
        <div>
        <img src={image} className="App-logo" alt="movie"/>
        <p className="cats" id="movie-title">Title: {this.state.title}</p>
        <p className="cats">Year Released: {this.state.year}</p>
        <p className="cats">Rating: {this.state.rated}</p>
        <p className="cats">Genre: {this.state.genre}</p>
        <ul className="cats">
          <li>{this.state.actors}</li>
        </ul>
        <button type="button"  onClick={()=> this.getNewMovie()} className="button">Click for movie</button><br></br>
    </div>
      )
    }
}
    




  export default Title; 