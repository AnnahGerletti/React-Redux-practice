import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from "./component/Search_bar"
import Header from "./component/Header"

const API_key = "AIzaSyAm9Eq9NO69VKGqSU02R6fSb9YDCKkWv0M"
// create a new component
// produce some html
//Take the compt and generated html and put it on the page.

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  )}

ReactDOM.render(<App />, document.querySelector('.container'))
