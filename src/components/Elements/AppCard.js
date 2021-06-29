import React from 'react';

import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { BASE_URL } from '../../config';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '20rem',
    width: '20rem',
  },
  media: {
    height: '20rem',
    // paddingTop: '56.25%'
  },
  header: {
    fontSize: '10px',
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   height: 345,
  //   width: 200
  // }
}));

export const AppCard = ({ cardData }) => {
  const { image, filesize, timestamp, category } = cardData;

  const date = new Date(timestamp);
  const reg = /^(\D+)/;
  const header = image
    .split('/')[1]
    .split('-')
    .map((word) => {
      return reg.test(word) ? word.replace(/^\w/, (c) => c.toUpperCase()) : '';
    })
    .join(' ')
    .trim();
  console.log('cardData header: ', header);
  const classes = useStyles();

  return (
    <Grid item s className={classes.root}>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <CloseIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: 'h6' }}
          title={header}
          subheader={category.replace(/^\w/, (c) => c.toUpperCase())}
        />
        <CardMedia image={`${BASE_URL}${image}`} className={classes.media} />
        <CardContent>
          <Typography variant='body2'>{date.toUTCString()}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
