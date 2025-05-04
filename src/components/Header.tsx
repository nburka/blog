import { ReactElement } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  children: ReactElement;
}

export function Header({ children }: HeaderProps) {
  return <header className={styles.header}>{children}</header>;
}
