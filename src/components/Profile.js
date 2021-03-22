import React from 'react';
import publicUrl from "utils/publicUrl.js";
import css from "./Profile.module.css";

function Profile(props) {
  const { store } = props; // retrieve store
  let user = store.currentUserId
  let userData = store.users.filter(d => d.id === user)[0]
  let posts = store.posts.filter(d => d.userId === user)
  let followers = store.followers.filter(d => d.userId === user)
  let following = store.followers.filter(d => d.followerId === user)
  return (
    <div>
      <header className={css.user}>
        <img src={publicUrl(userData.photo)} alt="Propic"></img>
        <span>{userData.id} </span>
      </header>
      <section className={css.bio}>
        <b>{userData.name}</b>
        <p>{userData.bio}</p>
      </section>
      <section className={css.statsNum}>
        <b>{posts.length}</b>
        <b>{followers.length}</b>
        <b>{following.length}</b>
      </section>
      <section className={css.statsTitles}>
        <p>posts</p>
        <p>followers</p>
        <p>following</p>
      </section>
      <section className={css.posts}>
        {posts.map(post =>
          <img src={publicUrl(post.photo)} alt = "Profile Post"></img>

        )}
      </section>
    </div>
  )
}

export default Profile;