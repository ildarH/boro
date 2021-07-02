import { AppCard } from './../Elements';
import { Grid } from '@material-ui/core';
import React from 'react';
import style from './View.module.css';

export const AppCardsView = ({ data }) => {
  return (
    <div className={style.viewScreen}>
      <Grid
        container
        wrap='wrap'
        direction='row'
        justify='space-around'
        alignItems='center'
        spacing={3}>
        {data.map((card, i) => (
          <AppCard key={i} cardData={card} />
        ))}
      </Grid>
    </div>
  );
};
