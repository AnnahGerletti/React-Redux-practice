import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTsearch from 'youtube-api-search'

import SearchBar from "./component/Search_bar"
import Header from "./component/Header"

const API_key = "AIzaSyAm9Eq9NO69VKGqSU02R6fSb9YDCKkWv0M"

YTsearch({key: API_key, term: "cats" }, function(data){
  console.log(data)
})


class App extends Component {
  render (){
  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  )}
  }

ReactDOM.render(<App />, document.querySelector('.container'))
