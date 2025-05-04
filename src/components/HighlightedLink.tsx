import Link from 'next/link';
import styles from './HighlightedLink.module.css';
import cn from 'classnames';

interface HighlightedLinkProps {
  href: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
  bold?: boolean;
}

export function HighlightedLink({
  href,
  className,
  id,
  children,
  bold = false
}: HighlightedLinkProps) {
  return (
    <Link
      href={href}
      id={id}
      className={cn(className, styles.highlight, { [styles.bold]: bold })}
    >
      {children}
    </Link>
  );
}
