import React from 'react';
import logo from './logo.svg';
import './App.css';
import css from './App.module.css';
import Header from './Header.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

function App() {
  return (
<div className={css.container}>
	<Header/>
  <main>
	  <Home/>
  </main>
  <Navbar/>
</div>
  );
}

export default App;
