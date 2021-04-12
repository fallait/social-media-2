import Post from "./Post.js";
import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import { useParams } from "react-router-dom";

function Home(props) {
  let { postId } = useParams(); // retrieve store

  let {
    posts, users, comments, likes, currentUserId,
    addComment, addLike, removeLike
  } = useContext(StoreContext);

  function findComments(post) {
    return comments.filter(comment => comment.postId === post.id);
  }

  function findLikes(post) {
    let postLikes = likes.filter(like => like.postId === post.id);
    return {
      self: postLikes.some(like => like.userId === currentUserId),
      count: postLikes.length
    }
  }

  function findUser(post) {
    return users.find(user => user.id === post.userId);
  }

  return (
    <div>
      {posts.filter(post => postId ? post.id === postId : true)
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        .map(post =>
          <Post
            key={post.id}
            user={findUser(post)}
            post={post}
            comments={findComments(post)}
            likes={findLikes(post)}
            onLike={addLike}
            onUnlike={removeLike}
            onComment={addComment}
          />)}
    </div>
  );
}

export default Home;
