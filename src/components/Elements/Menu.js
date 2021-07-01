import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import {
  mdiSortAlphabeticalAscending,
  mdiSortAlphabeticalDescending,
  mdiSortAscending,
  mdiSortCalendarAscending,
  mdiSortCalendarDescending,
  mdiSortDescending,
  mdiSortNumericAscending,
  mdiSortNumericDescending
} from '@mdi/js';

import Icon from '@mdi/react';
import { Typography } from '@material-ui/core';

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
        <Typography variant='caption' >Sort by:</Typography>
        <IconButton edge='end' onClick={() => onPress('image')}>
          {sortConfig.field === 'image' ? (
            <>
            <Icon
              path={
                sortConfig.direction === 'ascending'
                  ? mdiSortAlphabeticalAscending
                  : mdiSortAlphabeticalDescending
              }
              size={1}
              color='white'
            />
            <Typography variant='caption'>Name</Typography>
            </>
          ) : (
            <Icon path={mdiSortAlphabeticalAscending} size={1} color='grey' />
          )}
        </IconButton>
        <IconButton edge='end' onClick={() => onPress('timestamp')}>
          {sortConfig.field === 'timestamp' ? (
            <>
            <Icon
              path={
                sortConfig.direction === 'ascending'
                  ? mdiSortCalendarAscending
                  : mdiSortCalendarDescending
              }
              size={1}
              color='white'
            />
            <Typography variant='caption'>Date</Typography>
            </>
          ) : (
            <Icon path={mdiSortCalendarAscending} size={1} color='grey' />
          )}
        </IconButton>
        <IconButton edge='end' onClick={() => onPress('filesize')}>
          {sortConfig.field === 'filesize' ? (
            <>
            <Icon
              path={
                sortConfig.direction === 'ascending'
                  ? mdiSortNumericAscending
                  : mdiSortNumericDescending
              }
              size={1}
              color='white'
            />
            <Typography variant='caption'>Size</Typography>
            </>
          ) : (
            <Icon path={mdiSortNumericAscending} size={1} color='grey' />
          )}
        </IconButton>
        <IconButton edge='end' onClick={() => onPress('category')}>
          {sortConfig.field === 'category' ? (
            <>
            <Icon
              path={
                sortConfig.direction === 'ascending'
                  ? mdiSortAscending
                  : mdiSortDescending
              }
              size={1}
              color='white'
            />
            <Typography variant='caption'>Category</Typography>
            </>
          ) : (
            <Icon path={mdiSortAscending} size={1} color='grey' />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
