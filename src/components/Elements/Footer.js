import { IconButton, Toolbar } from '@material-ui/core';
import { mdiCardTextOutline, mdiFileTree } from '@mdi/js';

import Icon from '@mdi/react';
import React from 'react';
import style from './Footer.module.css';

export const Footer = ({viewSwitchHandler, currentView}) => {
  return (
    <div className={style.footer}>
      <Toolbar>
        <IconButton edge='end' onClick={() => viewSwitchHandler('cards')} disabled={currentView === 'cards' ? true : false}>
          <Icon path={mdiCardTextOutline} size={1} color={currentView === 'cards' ? 'grey' : 'white' } />
        </IconButton>
        <IconButton edge='end' onClick={() => viewSwitchHandler('tree')} disabled={currentView === 'tree' ? true : false}>
          <Icon path={mdiFileTree} size={1} color={currentView === 'tree' ? 'grey' : 'white'}/>
        </IconButton>
      </Toolbar>
    </div>
  );
};
