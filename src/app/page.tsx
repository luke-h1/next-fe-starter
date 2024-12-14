'use client';

import Button from '@frontend/components/Button';
import ButtonGroup from '@frontend/components/ButtonGroup';
import Hero from '@frontend/components/Hero';
import dogService, { Animal } from '@frontend/services/dogService';
import { useState } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (name: Animal) => {
    setLoading(true);
    const result = await dogService.listDogImage(name);
    setImage(result);
    setLoading(false);
  };

  return (
    <div>
      <div className={styles.heroWrapper}>
        <Hero imageSrc={image} />
        <ButtonGroup>
          <Button
            onClick={() => onSubmit('akita')}
            disabled={loading}
            type="button"
          >
            Akita
          </Button>
          <Button
            onClick={() => onSubmit('boxer')}
            disabled={loading}
            type="button"
          >
            Boxer
          </Button>
          <Button
            onClick={() => onSubmit('hound')}
            disabled={loading}
            type="button"
          >
            Random
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
