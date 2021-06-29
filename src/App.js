import React, { useEffect } from 'react';

// import './App.css';
import { CssBaseline } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { MainScreen } from './components';

import { fetchData } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('catalog.json'))
  }, [dispatch])

  return (
    // <div className='App'>
    <>
      <CssBaseline />
      <MainScreen />
    </>
    // </div>
  );
}

export default App;
