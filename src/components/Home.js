import React from "react";
import Post from "./Post.js";
function Home() {
  const post = {
    user: {
      id: "judy",
      photo: "https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fuser1.png?v=1614382902520"
    },
    post: {
      id: "post-1",
      userId: "judy",
      photo: "https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fpost1.png?v=1614382902557",
      desc: "#zootopia #excited",
      datetime: "2020-02-09T22:45:28Z"
    },
    likes: {
      self: true,
      count: 1
    },
    comments: [
      {
        userId: "nick",
        text: "Welcome to Zootopia!"
      },
      {
        userId: "judy",
        text: "Thanks!😁Looking forward to meeting you!"
      }
    ]
  };
  return <h2>Home</h2>

}

export default Home;
