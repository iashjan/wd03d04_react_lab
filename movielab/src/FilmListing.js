import React, { Component } from 'react'
import TMDB from './TMDB.js'
import FilmRow from './FilmRow'


export default class FilmListing extends Component {
    constructor(props){
        super(props)
        this.state={filter:"all"}
    }
    handleFilterClick = (filter) => {
        console.log("Setting filter to "+filter)
        this.setState({filter:filter})
    }
    
    render() {
                
            
        var allFilms = TMDB.films.map(item=> <FilmRow  release_date={item.release_date} title={item.title} poster={"https://image.tmdb.org/t/p/w500/"+item.poster_path}  /> )

        
        return (
            <div className="film-list">
            <h1 className="section-title">FILMS</h1>
             <div className="film-list-filters">
             <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
                       <span className="section-count">{TMDB.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">0</span>
                </div>
                </div>
            
             {allFilms}
             </div>
                 ) 
            
             }
    
    }

