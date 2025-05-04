import { ReactElement } from 'react';

import styles from './ErrorPage.module.css';

interface ErrorPageProps {
  title: string;
  children?: ReactElement;
}

export function ErrorPage({ title, children }: ErrorPageProps) {
  return (
    <main className={`${styles.page} full-page`}>
      <div className={styles.container}>
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}
