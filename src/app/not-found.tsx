import { Metadata } from 'next';
import { ErrorPage } from '@/components/ErrorPage';

export const metadata: Metadata = {
  robots: {
    index: false
  }
};

export default function NotFound() {
  return (
    <ErrorPage title="Page not found">
      <p>Page Not Found</p>
    </ErrorPage>
  );
}
