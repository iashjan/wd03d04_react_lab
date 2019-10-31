import React, { Component } from 'react'
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';
import axios from 'axios'

class App extends Component {
   

    constructor(){
        super()
        this.handleFaveToggle = this.handleFaveToggle.bind(this)
        this.state = {
          films: TMDB.films,
          faves:[],
          current:{}
        }
      }


    handleFaveToggle(films){
        const faves = faves.state.slice();
        const filmIndex = faves.indexOf(0) ;        
       
    }
    handleFaveToggle =(film) => {
const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

axios({
  method: 'GET',
  url: url
}).then(response => {
  console.log(response) // take a look at what you get back!
})
    }
    render() {
        return (
            <div className="App" >
            <div className="film-library">
              <FilmListing films={TMDB.films} />
              <FilmDetails films={TMDB.films} />

            </div>
          </div>
        );
    }
}
export default App;