import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Back from 'src/components/ButtonBack';
import Clock from 'src/components/Clock';
import api from 'src/services/api';
import io from 'socket.io-client';
import {
  Title, Description, Subtitle, Footer
} from './components';
import { BoxPainel } from './styled';

const Painel = () => {
  const [item, setItem] = useState([]);
  const [cut, setCut] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const socket = io(process.env.REACT_APP_SOCKET_URL, {
          transports: ['websocket'],
          upgrade: false
        });
        const { data: { message } } = await api.get('/get-all-ticket');

        const speech = new SpeechSynthesisUtterance(
          `VISITANTE, ${message[0].name},
           DA PLACA, ${message[0].vehicle},
          `
        );
        speech.lang = 'pt-br';
        window.speechSynthesis.speak(speech);

        setItem(message);

        setCut({
          vehicle: message[0].vehicle,
          name: message[0].name
        });

        socket.once('notification', () => {
          fetchData();
        });
      } catch (error) {
        if (error) throw new Error('error render!');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Back />
      <BoxPainel>
        <Title />

        <Grid container direction="row" spacing={1}>
          <Description item={cut} />
          <Subtitle item={cut} />
        </Grid>

        <Footer item={item} />
        <Clock />
      </BoxPainel>
    </>
  );
};

export default Painel;
