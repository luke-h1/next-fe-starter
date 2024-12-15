import { PropsWithChildren } from 'react';
import styles from './ButtonGroup.module.scss';

export default function ButtonGroup({ children }: PropsWithChildren) {
  return <div className={styles.group}>{children}</div>;
}
