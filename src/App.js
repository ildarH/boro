import React, { useEffect } from 'react';
import { fetchData, setPage } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import { MainScreen } from './components';
import { useSort } from './hooks';

// import './App.css';

function App() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.root.data) || null;
  const selectedTotalPages = useSelector((state) => state.root.totalPages) || null;
  const selectCurrentPage = useSelector((state) => state.root.currentPage) || null;
  const { sortedData, requestSort } = useSort(selectedData);

  useEffect(() => {
    dispatch(fetchData('catalog.json'));
  }, [dispatch]);

  const setPageHandler = (page) => {
    dispatch(setPage(page))
  }

  return (
    <>
      <CssBaseline />
      <MainScreen
        data={sortedData || selectedData}
        totalPages={selectedTotalPages}
        currentPage={selectCurrentPage}
        sortHandler={requestSort}
        setPageHandler={setPageHandler}
      />
    </>
  );
}

export default App;
