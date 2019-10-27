import React, { Component } from 'react'
import Fav from './Fav'



export default class FilmRow extends Component {
  
    
     handleFilterClick = (film) => {
      console.log("Fetching details for"  +film)
     }

  render() {
   var  year = new Date (this.props.release_date) 
   
   return (
      <div className="film-row" onClick={() => this.handleFilterClick('film')}>
   <img src={this.props.poster} alt="" />

  <div className="film-summary">
    <h1>{this.props.title}</h1>
    <p>{year.getFullYear()}</p>
  </div>
  <Fav />
    </div>
     )
 }

    
}

