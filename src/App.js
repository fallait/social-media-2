import React from 'react';
import logo from './logo.svg';
import './App.css';
import css from './App.module.css';

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
