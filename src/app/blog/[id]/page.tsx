import { Metadata } from 'next';
import { getPostByUrlSlug, getAllPostsAsMarkdown } from '@/lib/posts';
import { Date } from '@/components/Date';
import { Avatar } from '@/components/Avatar';
import styles from './page.module.css';
import { Header } from '@/components/Header';
import { FeedLink } from '@/components/FeedLink';
import { LogoLink } from '@/components/LogoLink';
import { Footer } from '@/components/Footer';

interface PostPageParams {
  id: string;
}

interface PostPageProps {
  params: Promise<PostPageParams>;
}

export async function generateStaticParams(): Promise<PostPageParams[]> {
  const posts = await getAllPostsAsMarkdown();

  const params = posts.map((post) => ({
    id: post.frontMatter.urlSlug
  }));

  return params;
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PostPageProps
): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const post = await getPostByUrlSlug('', id);

  const images = post.socialImagePath ? [post.socialImagePath] : [];

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      images
    }
  };
}

export default async function PostPage(props: PostPageProps) {
  const params = await props.params;
  const { id } = params;
  const post = await getPostByUrlSlug('', id);

  return (
    <div className="full-page">
      <article>
        <Header>
          <div className={styles.header}>
            <nav>
              <LogoLink href="/">Nick Burka’s Blog</LogoLink>
              <FeedLink />
            </nav>
            <div className={styles.text}>
              <h1>{post.title}</h1>
              <div className={styles.meta}>
                <Avatar name={post.author} />
                <span>
                  {post.author}
                  <br />
                  <Date value={post.date} />
                </span>
              </div>
            </div>
          </div>
        </Header>
        <main
          className={styles.postBody}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
      <Footer />
    </div>
  );
}
