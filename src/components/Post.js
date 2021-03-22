import React from "react";
import css from "./Post.module.css";
import timespan from "utils/timespan.js";
import publicUrl from "utils/publicUrl.js";


function Post(props) {
  function handleLike() {
    props.onLike(props.post.id);
  }
  
  function handleUnlike() {
    props.onUnlike(props.post.id);
  }
  return (
    <article className={css.post}>
      <header className={css.header}>
        <button className={css.user} to={`/profile/${props.user.id}`}>
          <img src={publicUrl(props.user.photo)} alt="User Profile" />
          <span>{props.user.id} </span>
        </button>
      </header>
      <section className={css.content}>
        <div className={css.imgContainer}>
          <img src={publicUrl(props.post.photo)} alt="Post" />
        </div>
      </section>

      <section className={css.actions}>
        <button>
          {props.likes.self ? (
            <img
              onClick={handleUnlike}
              src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Funlike.svg?v=1614382900439"
              alt="Unlike Action"
            />
          ) : (
            <img
              onClick={handleLike}
              src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Flike.svg?v=1614382900207"
              alt="Like Action"
            />
          )}
        </button>
        <button>
          <img
            src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fcomment.svg?v=1614382900046"
            alt="Comment Action"
          />
        </button>
      </section>
      <section className={css.activity}>
        <div className={css.likes}>{props.likes.count} likes</div>
        <div className={css.comments}>
          <div>
            <span>
              {props.post.userId}
            </span>
            <span>{props.post.desc}</span>
          </div>
          {props.comments.map((comment, i) => (
            <div key={i}>
              <span>
                {comment.userId}
              </span>
              <span>{comment.text}</span>
            </div>
          ))}
        </div>
        <time className={css.time}>
          {timespan(props.post.datetime).toUpperCase()} AGO
        </time>
      </section>
    </article>
  );
}

export default Post;
