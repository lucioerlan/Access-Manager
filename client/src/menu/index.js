import React from 'react';
import { Box, BottomNavigation, makeStyles } from '@material-ui/core';
import AddUser from './AddUser';
import OpenPainel from './OpenPainel';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent'
  }
});

const Menu = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Box>
        <AddUser />
      </Box>
      <Box>
        <OpenPainel />
      </Box>
    </BottomNavigation>
  );
};

export default Menu;
