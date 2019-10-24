import React from 'react'

const FilmRow = (props) => {
    return (
        <div className="film-row">
  <img src={props.poster} alt="" />

  <div className="film-summary">
    <h1>{props.title}</h1>
    <p>{props.release_date}</p>
  </div>
    </div>
    )
}

export default FilmRow
