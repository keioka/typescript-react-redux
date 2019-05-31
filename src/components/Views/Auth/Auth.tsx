import * as React from 'react';
import * as styles from './Auth.scss';
import Input from '@components/Input';
function Auth() {
  return (
    <div className={styles.root}>
      <h1>Track your progress</h1>
      <Input />
    </div>
  );
}

export default Auth;
