import styles from './ButtonGroup.module.scss';
import { PropsWithChildren } from 'react';

export default function ButtonGroup({ children }: PropsWithChildren) {
  return <div className={styles.group}>{children}</div>;
}
