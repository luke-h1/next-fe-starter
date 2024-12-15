/* eslint-disable react/button-has-type */
import { JSX } from 'react';
import styles from './Button.module.scss';

type ButtonProps = JSX.IntrinsicElements['button'];

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
