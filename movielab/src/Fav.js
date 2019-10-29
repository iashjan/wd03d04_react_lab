import React, { Component } from 'react'
export default class fav extends Component {
    constructor(props){
        super(props)
        this.state={
            isFave:false
        }
    }
    handleClick =(e) => {
        e.stopPropagation()
  console.log('Handling Fave click!')
  this.props.onFaveToggle()

}
onFaveToggle (){

}
    //     console.log("handling Fave click!");
    //     this.setState({isFave: !this.state.isFave})
    //    e.stopPropagation()
   
    render() {
        const isFave = (this.props.isFave) ?'remove_from_queue' : 'add_to_queue'
     
        return (
            <div className={"film-row-fave "+isFave}onClick={this.handleClick}>
  <p className="material-icons">{isFave}</p>
</div>
        )
    }
}
