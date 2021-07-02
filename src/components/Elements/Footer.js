import { AccountTree, ViewModule } from '@material-ui/icons';
import { IconButton, Toolbar } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import style from './Footer.module.css';

export const Footer = ({ viewSwitchHandler, currentView, totalPages }) => {
  return (
    <div className={style.footer}>
      <Toolbar className={style.toolbar}>
        <div>
          <IconButton
            edge='end'
            onClick={() => viewSwitchHandler('cards')}
            disabled={currentView === 'cards' ? true : false}>
            <ViewModule color={currentView === 'cards' ? 'inherit' : 'action'} />
          </IconButton>
          <IconButton
            edge='end'
            onClick={() => viewSwitchHandler('tree')}
            disabled={currentView === 'tree' ? true : false}>
            <AccountTree color={currentView === 'tree' ? 'inherit' : 'action'} />
          </IconButton>
        </div>
        <div>
          <Pagination count={totalPages} />
        </div>
      </Toolbar>
    </div>
  );
};
