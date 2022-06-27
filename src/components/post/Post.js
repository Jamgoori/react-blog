import React from 'react'
import './post.css'

const Post = ({item}) => {
  return (
    <p class="post-description">
      {item?.contents[0]["text"]}
  </p>
  
  )
}

export default Post