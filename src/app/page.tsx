import { Metadata } from 'next';
import { getSortedPostPreviews } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import styles from './page.module.css';
import { FeedLink } from '@/components/FeedLink';

export const metadata: Metadata = {
  title: 'Nick Burka’s Blog',
  metadataBase: new URL(
    `${process.env.APP_HOST}${process.env.APP_BASE_PATH}/blog`
  ),
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/feed', title: 'RSS feed' }]
    }
  },
  description:
    'A blog of travel photos, thoughts, and other stuff from Nick Burka.',
  openGraph: {
    images: ['https://nickburka.me/og-image.jpg'],
    title: 'Nick Burka’s Blog'
  }
};

export default async function Home() {
  const postPreviews = await getSortedPostPreviews('');

  return (
    <>
      <Header>
        <div className={styles.header}>
          <div className={styles.container}>
            <h1>Nick Burka’s Blog</h1>
            <p>
              A blog of travel photos, thoughts, and other stuff from Nick
              Burka.
            </p>
          </div>
          <nav className={styles.feedLink}>
            <FeedLink />
          </nav>
        </div>
      </Header>
      <ul className={styles.posts}>
        {postPreviews.map(
          (
            { urlSlug, date, title, author, contentSnippet, featureImagePath },
            index
          ) => (
            <li key={urlSlug}>
              <PostCard
                urlSlug={urlSlug}
                date={date}
                title={title}
                author={author}
                snippet={contentSnippet}
                featureImagePath={index === 0 ? featureImagePath : undefined}
              />
            </li>
          )
        )}
      </ul>
      <Footer />
    </>
  );
}
