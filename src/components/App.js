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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
  }
  setPage(page) {
    console.log(this.setState);
    this.setState({ page });
  }
  renderMain(page) {
    switch (page) {
      case "home":
        return <Home />;
      case "explore":
        return <Explore />;
      case "activity":
        return <Activity />;
      case "newpost":
        return <NewPost />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  }
  render() {
    return (
      <div className={css.container}>
        <Header />
        <main className={css.content}>
          {this.renderMain(this.state.page)}
        </main>
        <Navbar onNavChange={this.setPage.bind(this)}/>
      </div>
    );
  }
}

export default App;
