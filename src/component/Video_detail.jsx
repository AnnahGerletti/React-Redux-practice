import React from "react"

const VideoDetail = ({video}) => {
    if (!video) {
      return (<div> Loading ... </div>)
    }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}` 

  return(
    <div className = "video-detail col-md-8">
      <div className = "embed-esponsive embed-responsive-16 by 9">
        <iframe className = "embed-responsive-item" src={url}></iframe>
      </div>
      <div className = "details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail

// video that is passed into the VideoDetail compt usually would get passed as props, but ES6 allows us to specify what we want to pass, this is the API Object ({video}) - has to be warped in {}