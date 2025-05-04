import { Avatar } from './Avatar';
import Link from 'next/link';
import { Date } from './Date';
import Image from 'next/legacy/image';
import styles from './PostCard.module.css';

interface PostCardProps {
  urlSlug: string;
  title: string;
  date: string;
  author: string;
  snippet: string;
  featureImagePath?: string;
}

export function PostCard(props: PostCardProps) {
  return (
    <div className={styles.postCard}>
      <Link
        href="/blog/[id]"
        as={`/blog/${props.urlSlug}`}
        className={styles.title}
      >
        {props.featureImagePath && (
          <span className={styles.featureImageContainer}>
            <Image
              src={props.featureImagePath}
              width="1200"
              height="800"
              layout="responsive"
              alt=""
            />
          </span>
        )}
        {props.title}
      </Link>
      <div className={styles.meta}>
        <Avatar name={props.author} size="small" />
        <span>
          {props.author}{' '}
          <span className={styles.metaDivider}>&nbsp;|&nbsp;</span>{' '}
          <Date value={props.date} />
        </span>
      </div>
      <p className={styles.snippet}>{props.snippet}</p>
    </div>
  );
}
