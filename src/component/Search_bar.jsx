import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {term: ''}
  }
render (){
    return (
    <div className = 'searchBar'>
     <input
       name = 'name'
       placeholder = 'What are you in the mood for today?'
       value = {this.state.term}
       onChange ={event => this.setState({term:event.target.value})}/>
    </div>
  )
}
}
export default SearchBar
