import React from 'react';
import InputMask from 'react-input-mask';

export const MaskPhone = (props) => {
  return (
    <InputMask
      {...props}
      mask="(99) 99999-9999"
      maskChar={null}
      style={{ border: 'none' }}
    />
  );
};

export const MaskPlate = (props) => {
  return (
    <InputMask
      {...props}
      mask="aaa-9*99"
      maskChar={null}
      style={{ border: 'none', textTransform: 'uppercase' }}
    />
  );
};
