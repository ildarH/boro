import React, { useEffect } from 'react';

// import './App.css';
import { CssBaseline } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { MainScreen } from './components';

import { fetchData } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const selectData = useSelector(state => state.root.data)
  const selectTotalPages = useSelector(state => state.root.totalPages)

  useEffect(() => {
    dispatch(fetchData('catalog.json'))
  }, [dispatch])

  return (
    // <div className='App'>
    <>
      <CssBaseline />
      <MainScreen data={selectData} totalPages={selectTotalPages} />
    </>
    // </div>
  );
}

export default App;
