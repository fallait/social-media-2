import publicUrl from "utils/publicUrl.js";
import css from "./Profile.module.css";
import { Link, useParams } from "react-router-dom";
import PostThumbnail from "./PostThumbnail.js";
import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';



function Profile(props) { // retrieve store
  let { userId } = useParams();
  let{
    users, posts:AllPosts, followers:AllFollowers, currentUserId, addFollower, removeFollower
  } = useContext(StoreContext);
  if (!userId){
    userId = currentUserId;
  }
  function handleFollow(){
    addFollower(userId);
  }
  function handleUnfollow(){
    removeFollower(userId);
  }
  let userData = users.filter(d => d.id === userId)[0]
  let posts = AllPosts.filter(d=> d.userId === userId)
  let followers = AllFollowers.filter(d => d.userId === userId)
  let following = followers.filter(d => d.followerId === userId)
  let follbool = false;
  let followers2 = followers.map(d=>d.followerId);
  if (followers2.filter(d=>d===currentUserId).length>0){
    console.log(followers2.filter(d=>d===currentUserId))
    follbool = true;
    //console.log(store.currentUserId);
  }
  return (
    <div>
      <header className={css.user}>
        <img src={publicUrl(userData.photo)} alt="Propic"></img>
        <span>{userData.id} </span>
        {follbool && 
        <div>
          <button className={css.unfollowBtn} onClick={handleUnfollow}>Unfollow</button>
          </div>}
          {!follbool && userId !== currentUserId &&
        <div>
          <button className={css.followBtn} onClick={handleFollow}>Follow</button>
          </div>}
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
      {posts.map(post => (
          <Link key={post.id} to={`/${post.id}`}>
            <PostThumbnail post={post} />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Profile;