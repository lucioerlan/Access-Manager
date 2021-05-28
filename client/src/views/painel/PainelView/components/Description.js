import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Block } from './Content';

export const Description = ({ item }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Block rounded full>
        <Typography variant="h2" color="textPrimary">
          {' '}
          {item.name}
        </Typography>
        Name
      </Block>
    </Grid>
  );
};

export default Description;
