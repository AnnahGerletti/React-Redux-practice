import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {term: ''}
  }
render (){
    return (
    <div className = 'searchBar'>
     <input onChange ={this.onInputChange}/>
     <input type = "submit" />
    </div>
  )}

  onInputChange(event){
    console.log(event.target.value)
  }
}

export default SearchBar
