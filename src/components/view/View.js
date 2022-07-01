import React from "react";
import Author from "../author/Author";
import Category from "../category/Category";
import Post from "../post/Post";
import "./view.css";
import { useEffect, useState } from "react";
import Button from "../button/Button";

const View = () => {
  const [post, setPost] = useState([]);
  const getPost = async () => {
    let url = `http://localhost:5000/posts`;
    let response = await fetch(url);
    let data = await response.json();
    setPost(data);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="view">
      <div class="max-width">
        <section className="wrap-box">
          <div className="inner">
            <Author />
            <Category />
            <div class="title-wrap">
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <button class="btn-like">Like</button>
            </div>
            <hr />
            <Post />
            <Button />
          </div>
        </section>
      </div>
    </div>
  );
};

export default View;
