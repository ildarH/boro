import { AppCardsView, AppTreeView } from './../Views';
import { Footer, Menu } from './../Elements';
import React, { useState } from 'react';

export const MainScreen = ({ data, totalPages, sortHandler }) => {
  const [view, setView] = useState('cards');

  const viewSwitch = (newView) => {
    return newView !== view ? setView(newView) : null;
  };

  return (
    <div>
      <Menu sortHandler={sortHandler} />
      {view === 'tree' ? (
        <AppTreeView data={data} />
      ) : (
        <AppCardsView data={data} totalPages={totalPages} />
      )}
      <Footer viewSwitchHandler={viewSwitch} currentView={view} totalPages={totalPages} />
    </div>
  );
};
