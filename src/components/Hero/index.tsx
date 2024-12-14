import Image from 'next/image';
import styles from './Hero.module.scss';

interface Props {
  imageSrc?: string;
}

export default function Hero({ imageSrc }: Props) {
  return (
    <div className={styles.hero}>
      hero
      <div className={styles.image}>
        {imageSrc && (
          <Image
            src={imageSrc}
            blurDataURL={imageSrc}
            placeholder="blur"
            priority
            width={500}
            height={500}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
