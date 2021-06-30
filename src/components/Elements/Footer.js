import React from 'react';
import { Toolbar, IconButton } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiFileTree, mdiCardTextOutline } from '@mdi/js';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <Toolbar>
        <IconButton edge='end'>
          <Icon path={mdiCardTextOutline} size={1} color='white' />
        </IconButton>
        <IconButton edge='end'>
          <Icon path={mdiFileTree} size={1} color='white' />
        </IconButton>
      </Toolbar>
    </div>
  );
};
