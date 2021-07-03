import { AppCard } from './../Elements';
import { Grid } from '@material-ui/core';
import React from 'react';
import viewStyle from './ViewStyle.module.css';

export const AppCardsView = ({ data, closeCardHandler }) => {

  return (
    <div className={viewStyle.cardView}>
      <Grid
        container
        wrap='wrap'
        direction='row'
        justify='space-around'
        alignItems='center'
        spacing={3}>
        {data.map((card, i) => (
          <AppCard key={i} cardData={card} closeCardHandler={closeCardHandler} />
        ))}
      </Grid>
    </div>
  );
};
