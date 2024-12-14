import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <p>Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
