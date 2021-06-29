import React from 'react';

import { CardsView, TreeView } from './../Views';
import { Menu, Footer } from './../Elements';

export const MainScreen = ({ view }) => {
  const viewSwitch = () => {
    switch (view) {
      case 'TREE': {
        return (
          <>
            <TreeView />
          </>
        );
      }
      default:
        return <CardsView />;
    }
  };
  return (
    <div>
      <Menu />
      {viewSwitch()}
      <Footer />
    </div>
  );
};
