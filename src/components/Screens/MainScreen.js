import { AppCardsView, AppTreeView } from './../Views';
import { Footer, Menu } from './../Elements';

import React from 'react';

export const MainScreen = ({ view, data, totalPages, sortHandler }) => {
  const viewSwitch = () => {
    switch (view) {
      case 'TREE': {
        return (
          <>
            <AppTreeView data={data} />
          </>
        );
      }
      default:
        return <AppCardsView data={data} totalPages={totalPages} />;
    }
  };
  return (
    <div>
      <Menu sortHandler={sortHandler} />
      {viewSwitch()}
      <Footer />
    </div>
  );
};
