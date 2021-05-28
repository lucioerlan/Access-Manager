import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '@material-ui/icons/Dashboard';
import { Button, Tooltip } from '@material-ui/core';

const OpenPainel = () => {
  const navigate = useNavigate();
  return (
    <Tooltip title="Open Painel">
      <Button
        onClick={() => navigate('/app/painel')}
        color="primary"
        variant="contained"
        startIcon={<Dashboard />}
        style={{ marginLeft: '40px' }}
      >
        ㅤOpen Painel
      </Button>
    </Tooltip>
  );
};

export default OpenPainel;
