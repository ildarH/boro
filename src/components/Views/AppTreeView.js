import { AppTree } from './../Elements';
import { Grid } from '@material-ui/core';
import React from 'react';
import style from './View.module.css';

export const AppTreeView = ({data}) => {
  return (
    <div className={style.viewScreen}>
      <Grid
        container
        wrap='wrap'
        direction='row'
        justify='space-around'
        alignItems='center'
        spacing={3}>
        <AppTree treeData={data}/>
      </Grid>
    </div>
  );
};
