import React from "react";
import "./posts.css";
import Category from "../category/Category";
import Author from "../author/Author";
import "./post.css";
const Posts = ({ item }) => {
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
                <h3>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h3>
                <Author />
                <p class="post-description">{item?.contents[0]["text"]}</p>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
