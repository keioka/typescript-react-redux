import * as React from 'react';
import * as classes from './Input.scss';

interface Props {
  name?: string;
  placeholder: string;
  onChange?: () => void;
}

function Input({ name, placeholder = '', onChange }: Props) {
  return (
    <div className={classes.root}>
      <label>{placeholder}</label>
      <input onChange={onChange} className={classes.inputBox} type="text" />
    </div>
  );
}

export default Input;
