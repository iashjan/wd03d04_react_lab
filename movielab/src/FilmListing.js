import React from 'react'
import TMDB from './TMDB.js'
import FilmRow from './FilmRow'

const FilmListing = () => {
    return (
        <div>
        

         {<div>{TMDB.films.map(item=> <FilmRow  release_date={item.release_date} title={item.title} poster={"https://image.tmdb.org/t/p/w500/"+item.poster_path}  /> )}</div> }
        </div>
    )
}

export default FilmListing
