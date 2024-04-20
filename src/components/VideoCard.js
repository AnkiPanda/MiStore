import React from 'react'
import "../styles/VideoCard.css"

const playbutton = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
const VideoCard = ({name,image,index}) => {
  return (
    <div className='VideoCard' style={{backgroundImage:`url(${image})`}}>
      <a href="/">{playbutton}</a>
      <p>{name}</p>
    </div>
  )
}

export default VideoCard
