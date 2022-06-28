import React from 'react'
import './main.css'
import '../basic/global.css'
import Posts from '../posts/Posts'
import About from '../about/About'
const main = ({posts}) => {
  return (
    <main>
      <div className='max-width'>
    
    {posts.map((item)=> (
      <Posts item={item}/> 
    ))}
        
        <About/>

      </div>
        </main>
  )
}

export default main