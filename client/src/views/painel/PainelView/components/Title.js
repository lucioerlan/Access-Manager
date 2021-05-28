import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const Title = () => {
  return (
    <Grid>
      <Typography variant="h1" color="textPrimary">
        WELCOME
      </Typography>
      WAIT TO BE!
      <Typography color="textPrimary" component="b">
        CALLED!
      </Typography>
    </Grid>
  );
};

export default Title;
