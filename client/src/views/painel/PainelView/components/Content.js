import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { BlockContent } from '../styled';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.default
  }
}));

export const Block = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <BlockContent>{children}</BlockContent>
    </Box>
  );
};
