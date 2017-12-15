import React from 'react'

const VideoListItem = ({video}) => {
  // const video = props.video - identical to peramiter({video})
  const imgURL = video.snippet.thumbnails.default.url
  const title = video.snippet.title

  return (
  <li className = 'list-group-item'>
   <div className = 'vidoe-list media'>
      <div className = 'media-left'>
        <img className = 'media-object' src = {imgURL}/>
      </div>

      <div className = 'media-body'>
        <div className = 'media-heading'>{title}</div>
      </div>
   </div>
</li>
  )
};

export default VideoListItem