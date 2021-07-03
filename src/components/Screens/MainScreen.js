import { AppCardsView, AppTreeView } from './../Views';
import { Footer, Menu } from './../Elements';
import React, { useEffect, useState } from 'react';

export const MainScreen = ({
  data,
  totalPages,
  sortHandler,
  currentPage,
  setPageHandler,
  closeCardHandler,
  isFiltered,
  resetCardsHandler,
}) => {
  const [view, setView] = useState('cards');
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const pageSizeLimit = 6;
    const startIndex = (currentPage - 1) * pageSizeLimit;
    const endIndex = startIndex + pageSizeLimit;
    const pages = [...data].slice(startIndex, endIndex);
    setPaginatedData(pages);
  }, [data, currentPage, totalPages]);

  const viewSwitch = (newView) => {
    return newView !== view ? setView(newView) : null;
  };

  return (
    <div>
      <Menu
        sortHandler={sortHandler}
        isFiltered={isFiltered}
        resetCardsHandler={resetCardsHandler}
      />
      {view === 'tree' ? (
        <AppTreeView data={paginatedData} />
      ) : (
        <AppCardsView data={paginatedData} closeCardHandler={closeCardHandler} />
      )}
      <Footer
        viewSwitchHandler={viewSwitch}
        currentView={view}
        totalPages={totalPages}
        currentPage={currentPage}
        setPageHandler={setPageHandler}
      />
    </div>
  );
};
