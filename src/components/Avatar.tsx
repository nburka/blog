import Image from 'next/image';
import styles from './Avatar.module.css';

interface AvatarProps {
  name: string;
  size?: 'default' | 'small';
}

interface AuthorImages {
  [fullName: string]: string;
}

const authorImages: AuthorImages = {
  'Nick Burka': '/images/authors/nick.jpg'
};

export function Avatar({ size = 'default', name }: AvatarProps) {
  const containerClassName =
    size === 'small' ? styles.containerSmall : styles.container;

  if (authorImages[name]) {
    return (
      <span className={containerClassName}>
        <Image
          src={authorImages[name]}
          alt=""
          className={styles.avatar}
          fill={true}
        />
      </span>
    );
  }

  return <div className={containerClassName}> </div>;
}
