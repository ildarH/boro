import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import { AppTree } from './../Elements';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import style from './View.module.css';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '70%',
    width: '70%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export const AppTreeView = ({ data }) => {
  const [image, setImage] = useState('');
  const [alt, setAlt] = useState('');

  const classes = useStyles();

  const onImageClick = (event, imageSrc, header) => {
    event.preventDefault()
    setImage(imageSrc);
    setAlt(header);
  };

  return (
    <div className={style.viewScreen}>
      <Grid
        container
        wrap='nowrap'
        direction='row'
        justify='space-around'
        alignItems='flex-start'
        spacing={3}>
        <AppTree treeData={data} onImageClickHandler={onImageClick} />
        <Grid container alignContent='center' justify='center'>
          {image && (
            <Card className={classes.root}>
              {alt && <CardHeader title={alt} titleTypographyProps={{variant: 'subtitle1'}} />}
              <CardMedia className={classes.media} image={image} title={alt} />
            </Card>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
