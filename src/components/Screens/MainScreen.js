import React from 'react';

import { CardsView, TreeView } from './../Views';
import { Menu, Footer } from './../Elements';

export const MainScreen = ({ view, data, totalPages }) => {
  const viewSwitch = () => {
    switch (view) {
      case 'TREE': {
        return (
          <>
            <TreeView data={data} />
          </>
        );
      }
      default:
        return <CardsView data={data} totalPages={totalPages} />;
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
