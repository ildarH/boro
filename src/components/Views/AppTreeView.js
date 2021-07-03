import React, { useState } from 'react';

import { AppTree } from './../Elements';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import viewStyle from './ViewStyle.module.css';

export const AppTreeView = ({ data }) => {
  const [image, setImage] = useState('');
  const [alt, setAlt] = useState('');

  const onImageClick = (event, imageSrc, header) => {
    event.preventDefault();
    setImage(imageSrc);
    setAlt(header);
  };

  return (
    <div className={viewStyle.treeView}>
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
            <Card className={viewStyle.root}>
              {alt && <CardHeader title={alt} titleTypographyProps={{ variant: 'subtitle1' }} />}
              <CardMedia className={viewStyle.media} image={image} title={alt} />
            </Card>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
