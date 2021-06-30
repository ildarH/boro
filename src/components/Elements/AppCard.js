import React from 'react';

import PropTypes from 'prop-types';

import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '20rem',
    width: '20rem',
  },
  media: {
    height: '20rem',
  },
  header: {
    fontSize: '10px',
  },
}));

export const AppCard = ({ cardData }) => {
  const { id, header, subheader, image, filesize, date, category } = cardData;

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
          subheader={subheader}
        />
        <CardMedia image={image} className={classes.media} />
        <CardContent>
          <Typography variant='body2'>{date}</Typography>
          <Typography variant='body2'>{id}</Typography>
          <Typography variant='body2'>{filesize}</Typography>
          <Typography variant='body2'>{category}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

AppCard.prototype = {
  id: PropTypes.number,
  header: PropTypes.string,
  subheader: PropTypes.string,
  image: PropTypes.string,
  filesize: PropTypes.number,
  date: PropTypes.string,
  category: PropTypes.string,
};
