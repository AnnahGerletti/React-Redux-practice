import _ from 'lodash'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTsearch from 'youtube-api-search'

import SearchBar from "./component/Search_bar"
import Header from "./component/Header"
import VideoList from "./component/Video_List"
import VideoDetail from "./component/Video_detail"

const API_key = "AIzaSyAm9Eq9NO69VKGqSU02R6fSb9YDCKkWv0M"



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos:[],
      selectedVideo: null,
    }
    this.videoSearch('cats')
}
 
videoSearch (term) {
  YTsearch({key: API_key, term: term }, (videos) => {
  this.setState({
    videos:videos,
    selectedVideo:videos[0]
      })
    })
 }
  render (){
    
    const slowVideoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

  return (
    <div>
      <Header />
      <SearchBar onNewSearch = {slowVideoSearch}/>
      <VideoDetail video = {this.state.selectedVideo}/>
      <VideoList 
        onVideoClick = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}/>
    </div>
  )}
  }

ReactDOM.render(<App />, document.querySelector('.container'))
