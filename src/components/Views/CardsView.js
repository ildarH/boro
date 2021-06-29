import React from 'react';

import style from './View.module.css';

import { AppCard } from './../Elements';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

export const CardsView = ({ data, totalPages }) => {
  console.log('totalPages ', totalPages);
  return (
    <div className={style.viewScreen}>
      <Pagination count={totalPages} />
      <Grid
        container
        wrap='wrap'
        direction='row'
        justify='space-around'
        alignItems='center'
        spacing={3}>
        {data.slice(0, 6).map((card, i) => (
          <AppCard key={i} cardData={card} />
        ))}
      </Grid>
    </div>
  );
};
