import Link from 'next/link';
import styles from './LogoLink.module.css';

interface LogoLinkProps {
  href: string;
  children: string;
}

export function LogoLink({ href, children }: LogoLinkProps) {
  return (
    <Link className={styles.link} href={href}>
      {children}
    </Link>
  );
}
