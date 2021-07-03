import { Backdrop, CircularProgress, CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { closeCard, fetchData, resetCards, setPage } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { MainScreen } from './components';
import { useSort } from './hooks';

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const isDataLoading = useSelector((state) => state.root.isDataLoading);
  const selectFilter = useSelector((state) => state.root.closedCards);
  const selectedData = useSelector((state) => state.root.data);
  const selectedTotalPages = useSelector((state) => state.root.totalPages) || null;
  const selectCurrentPage = useSelector((state) => state.root.currentPage) || null;
  const { sortedData, requestSort } = useSort(data);

  useEffect(() => {
    dispatch(fetchData('catalog.json'));
  }, [dispatch]);

  useEffect(() => {
    if (!!selectFilter && selectFilter.length > 0 && !!selectedData && selectedData.length > 0) {
      const filter = selectedData.filter((entry) => !selectFilter.includes(entry.id));
      setData(filter);
      setIsFiltered(true);
    } else {
      setData(selectedData);
      setIsFiltered(false);
    }
  }, [selectFilter, selectedData]);

  const setPageHandler = (page) => {
    dispatch(setPage(page));
  };
  const closeCardHandler = (cardId) => {
    dispatch(closeCard(cardId));
  };
  const resetCardsHandler = () => {
    dispatch(resetCards());
  };

  return (
    <>
      <CssBaseline />
      {isDataLoading ? (
        <Backdrop open={isDataLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <MainScreen
          data={sortedData || data}
          totalPages={selectedTotalPages}
          currentPage={selectCurrentPage}
          sortHandler={requestSort}
          setPageHandler={setPageHandler}
          closeCardHandler={closeCardHandler}
          resetCardsHandler={resetCardsHandler}
          isFiltered={isFiltered}
        />
      )}
    </>
  );
}

export default App;
