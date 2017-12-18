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
      selectedVideo: null
    }

YTsearch({key: API_key, term: "cats" }, (videos) => {
 this.setState({
   videos:videos,
   selectedVideo:videos[0]
  })
})
  }
 
  // updateVideoList(e){
  //   let videos = this.state.videos
  //   videos[e.target.name] = e.target.value
  //   this.setState({videos})
  // }


  render (){
  return (
    <div>
      <Header />
      <SearchBar />
      <VideoDetail video = {this.state.selectedVideo}/>
      <VideoList 
        onVideoClick = {selectVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}/>
    </div>
  )}
  }

ReactDOM.render(<App />, document.querySelector('.container'))
