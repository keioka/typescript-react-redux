import * as React from 'react';
import * as classes from './Text.scss';

interface Props {
  type: string;
}

function Text({ type }: Props) {
  return <label>{placeholder}</label>;
}

export default Text;
