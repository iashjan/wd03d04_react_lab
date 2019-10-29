import React, { Component } from 'react'
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {
  
    state = {
        films :  TMDB.films,
        faves : [],
        current: [],
    }
    
    handleFaveToggle(films){
        const faves = faves.setstate.slice();
        const filmIndex = Array.prototype.indexOf(0) ;
       
    }

    render() {
        return (
            <div className="App" >
            <div className="film-library">
              <FilmListing films={TMDB.films} />
              <FilmDetails films={TMDB.films} />
              {this.handleFaveToggle = this.handleFaveToggle.bind(this)}
            </div>
          </div>
        );
    }
}
export default App;