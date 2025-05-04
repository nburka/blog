import { Feed } from 'feed';
import { Post } from './posts';

export function getRssXml(appBase: string, posts: Post[]) {
  const updated = posts.length === 0 ? new Date() : new Date(posts[0].date);
  const blogUrl = `${appBase}/blog`;

  const feed = new Feed({
    title: 'Nick Burka’s Blog',
    description:
      'A blog of travel photos, thoughts, and other stuff from Nick Burka.',
    id: blogUrl,
    link: blogUrl,
    language: 'en',
    image: `${appBase}/rss-image.jpg`,
    favicon: `${appBase}/favicon.ico`,
    copyright: 'Nick Burka 2025',
    updated,
    generator: 'Nick Burka’s Blog',
    feedLinks: {
      rss: `${blogUrl}/feed`
    }
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${blogUrl}/${post.urlSlug}`,
      link: `${blogUrl}/${post.urlSlug}`,
      content: post.contentHtml,
      date: new Date(post.date)
    });
  });

  return feed.rss2();
}
