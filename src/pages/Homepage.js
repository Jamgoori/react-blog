import Banner from '../components/banner/Banner'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import '../components/basic/global.css'
import '../components/wrapbox.css'
import '../components/view.css'
import '../components/button.css'
import { useEffect, useState } from 'react';
function Homepage() {
    const [posts,setPosts]=useState([]);
    const getPosts =async()=>{
        let url= `http://localhost:5000/posts`
        let response = await fetch(url);
        let data = await response.json();
        setPosts(data);
        console.log(data)
    }
    useEffect(()=>{getPosts();},[]);

  return (
    <div>
    <Header />
    <Banner />
    {posts.map((item)=> (
<Main item={item}/>
    ))}
    <Footer />
    </div>
  );
}

export default Homepage;
