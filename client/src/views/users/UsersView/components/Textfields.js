import React from 'react';
import PropTypes from 'prop-types';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField
} from '@material-ui/core';
import { MaskPhone, MaskPlate } from 'src/utils/textMask';

const Textfields = ({ setState, state, formControl }) => (
  <>
    <TextField
      required
      value={state.name}
      label="Name"
      style={{ margin: 20 }}
      type="text"
      color="primary"
      margin="normal"
      variant="outlined"
      inputProps={{
        maxLength: 25
      }}
      onChange={(e) => setState({ ...state, name: e.target.value })}
    />

    <TextField
      required
      value={state.vehicle}
      label="Vehicle"
      style={{ margin: 20 }}
      type="text"
      color="primary"
      margin="normal"
      variant="outlined"
      InputProps={{
        inputComponent: MaskPlate
      }}
      onChange={(e) => setState({ ...state, vehicle: e.target.value })}
    />

    <TextField
      required
      value={state.phone}
      label="Phone"
      style={{ margin: 20 }}
      type="text"
      color="primary"
      margin="normal"
      variant="outlined"
      InputProps={{
        inputComponent: MaskPhone
      }}
      onChange={(e) => setState({ ...state, phone: e.target.value })}
    />

    <FormControl className={formControl} variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">
        Ticket Window
      </InputLabel>
      <Select
        value={state.ticket_window}
        onChange={(e) => setState({ ...state, ticket_window: e.target.value })}
        color="primary"
        label="Ticket Window"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      >
        <MenuItem value="1">Guichê 1</MenuItem>
        <MenuItem value="2">Guichê 2</MenuItem>
        <MenuItem value="3">Guichê 3</MenuItem>
      </Select>
    </FormControl>
  </>
);

Textfields.propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Textfields;
