import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import prettyBytes from 'pretty-bytes';

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

export const AppCard = ({ cardData, closeCardHandler }) => {
  const { id, header, subheader, image, filesize, date } = cardData;

  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => closeCardHandler(id)}>
              <CloseIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: 'h6' }}
          title={header}
          subheader={subheader}
        />
        <CardMedia image={image} className={classes.media} style={{ alignItems: 'self-end' }} />

        <CardContent>
          <Typography variant='body2' style={{ alignSelf: 'flex-end' }}>
            {date}
          </Typography>

          <Typography variant='body2'>{prettyBytes(filesize)}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

AppCard.prototype = {
  cardData: PropTypes.object,
  closeCardHandler: PropTypes.func
};
