import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Painel from './Painel';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%'
  }
}));

const PainelView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Painel">
      <Container maxWidth={false}>
        <Painel />
      </Container>
    </Page>
  );
};

export default PainelView;
