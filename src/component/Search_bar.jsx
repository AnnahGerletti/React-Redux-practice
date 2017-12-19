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
       placeholder = 'Search Here'
       value = {this.state.term}
       onChange ={event => this.onInputChange(event.target.value)}/>
    </div>
  )
}

onInputChange (term) {
  this.setState({term})
  this.props.onNewSearch(term)
  }
}
export default SearchBar
