import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Users from './Users';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%'
  }
}));

const UsersView = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Users">
      <Container maxWidth={false}>
        <Users open={open} onClose={onClose} />
      </Container>
    </Page>
  );
};

export default UsersView;
