import React from "react";
// import logo from './logo.svg';
import "./App.css";
import css from "./App.module.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Explore from "./Explore.js";
import NewPost from "./NewPost.js";
import Activity from "./Activity.js";
import Profile from "./Profile.js";
import Navbar from "./Navbar.js";
import initialStore from 'utils/initialStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      store: initialStore // initialize the store as part of the state
    };
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }
  setPage(page) {
    console.log(this.setState);
    this.setState({ page });
  }
  renderMain(page) {
    switch (page) {
      case "home":
        return <Home
          store={this.state.store}
          onLike={this.addLike}
          onUnlike={this.removeLike}
        />;
      case "explore":
        return <Explore />;
      case "activity":
        return <Activity />;
      case "newpost":
        return <NewPost />;
      case "profile":
        return <Profile
          store={this.state.store}
        />;
      default:
        return <Home store={this.state.store}
          onLike={this.addLike}
          onUnlike={this.removeLike} />;
    }
  }

  addLike(postId) {
    const like = {
      userId: this.state.store.currentUserId,
      postId, // make sure you understand this shorthand syntax
      datetime: new Date().toISOString()
    };

    this.setState(state => ({
      store: {
        ...state.store,// spread props. make sure you understand this
        likes: state.store.likes.concat(like)
      }
    }));
  }

  removeLike(postId) {
    this.setState(state => ({
      store: {
        ...state.store,// spread props. make sure you understand this
        likes: this.state.store.likes.filter(like => !(like.userId === this.state.store.currentUserId && like.postId === postId))

      }
    }));
  }

  render() {
    return (
      <div className={css.container}>
        <Header />
        <main className={css.content}>
          {this.renderMain(this.state.page)}
        </main>
        <Navbar onNavChange={this.setPage.bind(this)} />
      </div>
    );
  }
}

export default App;
