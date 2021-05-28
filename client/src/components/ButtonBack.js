import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const Back = () => {
  const navigate = useNavigate();
  return (
    <Tooltip title="Voltar">
      <IconButton onClick={() => navigate('/app/home')}>
        <ArrowBackOutlinedIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default Back;
