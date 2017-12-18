import React from 'react'

import VideoListItem from './Video_list_item'

const VideoList = (props) => {

const videoItems = props.videos.map((video, etag) => {
  return (<VideoListItem 
    onVideoClick = {props.onVideoClick}
    key = {video.etag} 
    video = {video} />
  
  )
})

  return (
    <ul className='col-md-10 list-group'>
       {videoItems}
    </ul>
  )
}

export default VideoList