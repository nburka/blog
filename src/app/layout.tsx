import { Fraunces } from 'next/font/google';
import { Figtree } from 'next/font/google';
import { Metadata } from 'next';
import '@/styles/global.css';

const fraunces = Fraunces({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fraunces'
});

const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-figtree'
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.APP_HOST}${process.env.APP_BASE_PATH}`),
  manifest: '/manifest.webmanifest',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico'
    },
    { rel: 'icon', url: '/icon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' }
  ],
  description:
    'A blog of travel photos, thoughts, and other stuff from Nick Burka.',
  openGraph: {
    images: ['https://www.nickburka.me/og-image.jpg'],
    title: 'Nick Burka’s Blog'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable}  ${figtree.variable}`}>
        {children}
      </body>
    </html>
  );
}
