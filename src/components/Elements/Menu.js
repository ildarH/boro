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
  mdiSortNumericDescending,
} from '@mdi/js';

import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Icon from '@mdi/react';
import { Typography } from '@material-ui/core';
import style from './Elements.module.css';

export const Menu = ({ sortHandler, resetCardsHandler, isFiltered }) => {
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
    sortHandler(newSortConfig);
  };

  const sortName = () => {
    switch (sortConfig.field) {
      case 'image':
        return 'Name';
      case 'timestamp':
        return 'Date';
      case 'filesize':
        return 'Size';
      case 'category':
        return 'Category';
      default:
        return '';
    }
  };

  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense' className={style.toolbar}>
        <div>
          <Typography variant='caption' color='inherit'>
            Sort by: {sortName()}
          </Typography>

          <IconButton
            edge='end'
            onClick={() => onPress('image')}
            color='inherit'
            title='Sort by name'>
            {sortConfig.field === 'image' ? (
              <Icon
                path={
                  sortConfig.direction === 'ascending'
                    ? mdiSortAlphabeticalAscending
                    : mdiSortAlphabeticalDescending
                }
                size={1}
                color='#22244D'
                style={{ strokeWidth: '1px' }}
              />
            ) : (
              <Icon
                path={mdiSortAlphabeticalAscending}
                size={1}
                color='#3A3D82'
                style={{ strokeWidth: '1px' }}
              />
            )}
          </IconButton>
          <IconButton
            edge='end'
            onClick={() => onPress('timestamp')}
            color='inherit'
            title='Sort by date'>
            {sortConfig.field === 'timestamp' ? (
              <Icon
                path={
                  sortConfig.direction === 'ascending'
                    ? mdiSortCalendarAscending
                    : mdiSortCalendarDescending
                }
                size={1}
                color='#22244D'
                style={{ strokeWidth: '1px' }}
              />
            ) : (
              <Icon
                path={mdiSortCalendarAscending}
                size={1}
                color='#3A3D82'
                style={{ strokeWidth: '1px' }}
              />
            )}
          </IconButton>
          <IconButton
            edge='end'
            onClick={() => onPress('filesize')}
            color='inherit'
            title='Sort by size'>
            {sortConfig.field === 'filesize' ? (
              <Icon
                path={
                  sortConfig.direction === 'ascending'
                    ? mdiSortNumericAscending
                    : mdiSortNumericDescending
                }
                size={1}
                color='#22244D'
                style={{ strokeWidth: '1px' }}
              />
            ) : (
              <Icon
                path={mdiSortNumericAscending}
                size={1}
                color='#3A3D82'
                style={{ strokeWidth: '1px' }}
              />
            )}
          </IconButton>
          <IconButton
            edge='end'
            onClick={() => onPress('category')}
            color='inherit'
            title='Sort by category'>
            {sortConfig.field === 'category' ? (
              <Icon
                path={sortConfig.direction === 'ascending' ? mdiSortAscending : mdiSortDescending}
                size={1}
                color='#22244D'
                style={{ strokeWidth: '1px' }}
              />
            ) : (
              <Icon
                path={mdiSortAscending}
                size={1}
                color='#3A3D82'
                style={{ strokeWidth: '1px' }}
              />
            )}
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => resetCardsHandler()}
            disabled={!isFiltered}
            title='Reset closed cards'>
            <CancelPresentationIcon color={isFiltered ? 'action' : 'primary'} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
