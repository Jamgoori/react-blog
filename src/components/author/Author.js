import React from 'react'
import './author.css'
const Author = () => {
  return (
    <dl class="author-wrap">
    <dt class="a11y-hidden">Author</dt>
    <dd class="author">
      <img src="./images/profile.jpg" alt="" /> Chilli
    </dd>
    <dt class="a11y-hidden">Created</dt>
    <dd class="created">2022.05.25</dd>
  </dl>
  )
}

export default Author