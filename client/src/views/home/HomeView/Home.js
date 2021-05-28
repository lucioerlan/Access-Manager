import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ReactComponent as HomeLogo } from 'src/assets/images/menu/undraw_Hiring_re_yk5n.svg';
import { visitorTime } from 'src/utils/dates';
import Menu from 'src/menu';

const useStyles = makeStyles(() => ({
  figure: {
    '@media(max-width: 800px)': {
      width: '80%',
      margin: '-13%'
    },
    '@media(max-width: 400px)': {
      width: '70%',
      margin: '-10%'
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <HomeLogo
        fill={theme.palette.primary.main}
        alt="welcome"
        className={classes.figure}
      />
      <Typography
        style={{ animation: 'fall 2s', marginBottom: '40px' }}
        color="textPrimary"
        variant="h4"
      >
        {visitorTime()}
      </Typography>

      <Menu />
    </Box>
  );
};

export default Home;
