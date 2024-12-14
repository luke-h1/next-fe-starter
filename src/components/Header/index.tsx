import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/file.svg" width={40} height={40} alt="" />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/user">username</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
