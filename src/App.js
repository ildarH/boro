import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import { MainScreen } from './components';
import { fetchData } from './redux/actions';
import { useSort } from './hooks';

// import './App.css';

function App() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.root.data) || null;
  const selectedTotalPages = useSelector((state) => state.root.totalPages) || null;
  const { sortedData, requestSort, sortConfig } = useSort(selectedData);

  useEffect(() => {
    dispatch(fetchData('catalog.json'));
  }, [dispatch]);
  useEffect(() => {

  })

  return (
    <>
      <CssBaseline />
      <MainScreen data={sortedData || selectedData} totalPages={selectedTotalPages} sortHandler={requestSort} />
    </>
  );
}

export default App;
