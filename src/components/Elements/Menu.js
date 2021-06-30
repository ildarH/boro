import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Icon from '@mdi/react'
import { AddOutlined } from '@material-ui/icons'
import { mdiSortAlphabeticalAscending, mdiSortAlphabeticalDescending, mdiSortCalendarAscending, mdiSortCalendarDescending, mdiSortNumericAscending, mdiSortNumericDescending   } from '@mdi/js'

export const Menu = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense'>
        <IconButton edge='end'>
          <Icon path={mdiSortAlphabeticalAscending} 
            size={1}
            color="white"
          />
        </IconButton>
        <IconButton edge='end'>
          <Icon path={mdiSortAlphabeticalDescending} 
            size={1}
            color="white"
          />
        </IconButton>
        <IconButton edge='end'>
          <Icon path={mdiSortCalendarAscending} 
            size={1}
            color="white"
          />
        </IconButton>
        <IconButton edge='end'>
          <Icon path={mdiSortCalendarDescending} 
            size={1}
            color="white"
          />
        </IconButton>
        <IconButton edge='end'>
          <Icon path={mdiSortNumericAscending} 
            size={1}
            color="white"
          />
        </IconButton>
        <IconButton edge='end'>
          <Icon path={mdiSortNumericDescending} 
            size={1}
            color="white"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
