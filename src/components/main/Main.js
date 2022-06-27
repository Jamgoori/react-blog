import React from 'react'
import './main.css'
import '../basic/global.css'
import Posts from '../posts/Posts'
import About from '../about/About'
const main = () => {
  return (
    <main>
      <div className='max-width'>
        <Posts/>
      <About/>
      </div>
        </main>
  )
}

export default main