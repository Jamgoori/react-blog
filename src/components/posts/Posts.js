import React from "react";
import "./posts.css";
import Category from "../category/Category";
import Author from "../author/Author";
import Post from "../post/Post";
const Posts = ({ item }) => {
  console.log(item?.thumbnail);
  return (
    <div class="max-width">
      <h2 class="a11y-hidden">Post</h2>
      <ul class="posts">
        <li>
          <a href="post-view" class="post">
            <article>
              <img src={item?.thumbnail} alt="" />

              <div class="contents-wrap">
                <Category />
                <Author />
                <Post />
              </div>
            </article>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
