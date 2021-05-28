import React from 'react';
import { Grid } from '@material-ui/core';
import Label from 'src/components/Label';
import { formatTime } from 'src/utils/dates';
import { PaperRows } from '../styled';

export const Footer = ({ item }) => {
  return (
    <Grid item xs={12}>
      {item.slice(0, 4).map(({ _id, name, createdAt }) => (
        <PaperRows key={_id}>
          {name}
          <Label color="rgb(67, 160, 71)" variant="outlined">
            {formatTime(createdAt)}
          </Label>
        </PaperRows>
      ))}
    </Grid>
  );
};

export default Footer;
