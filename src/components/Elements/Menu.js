import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import {
  mdiSortAlphabeticalAscending,
  mdiSortAlphabeticalDescending,
  mdiSortCalendarAscending,
  mdiSortCalendarDescending,
  mdiSortNumericAscending,
  mdiSortNumericDescending,
} from '@mdi/js';

import Icon from '@mdi/react';

export const Menu = ({ sortHandler }) => {
  const [sortConfig, setSortConfig] = useState({ field: 'image', direction: 'ascending' });

  const onPress = (newSortConfig) => {
    const direction =
      sortConfig.field !== newSortConfig
        ? 'ascending'
        : sortConfig.direction === 'ascending'
        ? 'descending'
        : 'ascending';
    const config = { field: newSortConfig, direction };
    setSortConfig(config);
    sortHandler(newSortConfig)
  };

  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense'>
        <IconButton edge='end' onClick={() => onPress('image')}>
          {sortConfig.field === 'image' ? (
            <Icon
              path={
                sortConfig.direction === 'ascending'
                  ? mdiSortAlphabeticalAscending
                  : mdiSortAlphabeticalDescending
              }
              size={1}
              color='white'
            />
          ) : (
            <Icon path={mdiSortAlphabeticalAscending} size={1} color='grey' />
          )}
        </IconButton>
        <IconButton edge='end' onClick={() => onPress('timestamp')}>
          {sortConfig.field === 'timestamp' ? (
            <Icon
              path={
                sortConfig.direction === 'ascending'
                  ? mdiSortCalendarAscending
                  : mdiSortCalendarDescending
              }
              size={1}
              color='white'
            />
          ) : (
            <Icon path={mdiSortCalendarAscending} size={1} color='grey' />
          )}
        </IconButton>
        <IconButton edge='end' onClick={() => onPress('filesize')}>
          {sortConfig.field === 'filesize' ? (
            <Icon
              path={
                sortConfig.direction === 'ascending'
                  ? mdiSortNumericAscending
                  : mdiSortNumericDescending
              }
              size={1}
              color='white'
            />
          ) : (
            <Icon path={mdiSortNumericAscending} size={1} color='grey' />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
