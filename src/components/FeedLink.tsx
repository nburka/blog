import Link from 'next/link';
import styles from './FeedLink.module.css';
import cn from 'classnames';

export function FeedLink({ className }: { className?: string }) {
  return (
    <Link className={cn(styles.feedLink, className)} href="/blog/feed">
      <svg
        className={styles.logo}
        aria-hidden={true}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 32"
      >
        <path
          fill="#3A4858"
          d="M9 26.625c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3c-1.65685 0-3 1.3431-3 3s1.34315 3 3 3Z"
        />
        <path
          fill="#3A4858"
          d="M20.5 26.625h-4.25c0-2.7185-1.0799-5.3256-3.0022-7.2478C11.3256 17.4549 8.71847 16.375 6 16.375v-4.25c1.90417 0 3.78969.3751 5.5489 1.1037 1.7592.7287 3.3577 1.7968 4.7041 3.1433 1.3465 1.3464 2.4146 2.9449 3.1433 4.7041.7286 1.7592 1.1037 3.6447 1.1037 5.5489Z"
        />
        <path
          fill="#3A4858"
          d="M23.5 26.625c0-4.6413-1.8437-9.0925-5.1256-12.3744C15.0925 10.9687 10.6413 9.125 6 9.125V4.75c5.8016 0 11.3656 2.30468 15.468 6.407 4.1023 4.1024 6.407 9.6664 6.407 15.468H23.5Z"
        />
      </svg>
      RSS Feed
    </Link>
  );
}
