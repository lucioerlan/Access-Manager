import React, { useState } from 'react';
import PersonAdd from '@material-ui/icons/PersonAdd';
import { Button, Tooltip } from '@material-ui/core';
import Modal from 'src/views/users/UsersView';

const AddUser = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Tooltip title="Add User">
        <Button
          onClick={() => {
            setOpenDialog(true);
          }}
          color="primary"
          variant="contained"
          startIcon={<PersonAdd />}
        >
          ㅤAdd User
        </Button>
      </Tooltip>
      {openDialog && <Modal open={openDialog} onClose={handleDialogClose} />}
    </>
  );
};

export default AddUser;
