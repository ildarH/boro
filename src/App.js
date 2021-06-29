
import logo from './logo.svg';

import React from 'react'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import { fetchData } from './redux/actions'

function App() {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchData('catalog.json'))
  // }, [])
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
