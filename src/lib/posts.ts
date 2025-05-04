import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remark2rehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import html from 'rehype-stringify';
import strip from 'remark-strip-html';
import ellipsize from 'ellipsize';
import { transformRelativeUrls } from './transformRelativeUrls';
import {
  PostFrontMatter,
  postFrontMatterSchema
} from '@/schema/postFrontMatterSchema';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');
const SNIPPET_LENGTH = 280;

export interface Post extends PostFrontMatter {
  contentHtml: string;
}

export interface PostPreview extends PostFrontMatter {
  contentSnippet: string;
}

export interface PostMarkdown {
  content: string;
  frontMatter: PostFrontMatter;
}

export async function getAllPostsAsMarkdown(): Promise<PostMarkdown[]> {
  const fileNames = await fs.readdir(POSTS_DIRECTORY);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const { frontMatter, contentMarkdown } = await parsePostFile(fullPath);
      return {
        content: contentMarkdown,
        frontMatter
      };
    })
  );

  return posts.filter((post) => !post.frontMatter.hideOnFrontPage);
}

export async function getSortedPosts(appBase: string): Promise<Post[]> {
  const markdownPosts = await getAllPostsAsMarkdown();
  const posts = await Promise.all(
    markdownPosts.map(async (post) => {
      const contentHtml = (
        await getContentHtml(appBase, post.content)
      ).toString();
      return {
        contentHtml,
        ...post.frontMatter
      };
    })
  );

  posts.sort(sortByDate);

  return posts;
}

export async function getSortedPostPreviews(
  appBase: string
): Promise<PostPreview[]> {
  const markdownPosts = await getAllPostsAsMarkdown();
  const previewPosts = await Promise.all(
    markdownPosts.map(async (post) => {
      const contentSnippet = await getContentSnippet(appBase, post.content);
      return {
        contentSnippet,
        ...post.frontMatter
      };
    })
  );

  previewPosts.sort(sortByDate);

  return previewPosts;
}

export function sortByDate(
  a: Pick<PostFrontMatter, 'date'>,
  b: Pick<PostFrontMatter, 'date'>
): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export async function getPostByUrlSlug(
  appBase: string,
  urlSlug: string
): Promise<Post> {
  // This is not particularly efficient but is only used for static routes
  // so will not be expensive in production.
  const posts = await getAllPostsAsMarkdown();
  const post = posts.find((value) => value.frontMatter.urlSlug === urlSlug);

  if (post === undefined) {
    throw new Error(`Post ${urlSlug} not found.`);
  }

  const contentHtml = await getContentHtml(appBase, post.content);

  return {
    contentHtml: contentHtml.toString(),
    ...post.frontMatter
  };
}

async function getContentHtml(appBase: string, contentMarkdown: string) {
  return remark()
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(transformRelativeUrls, appBase)
    .use([html])
    .process(contentMarkdown);
}

async function getContentSnippet(appBase: string, contentMarkdown: string) {
  const contentHtml = await getContentHtml(appBase, contentMarkdown);
  const rawContent = await remark().use(strip).process(contentHtml);
  return ellipsize(rawContent.toString(), SNIPPET_LENGTH);
}

async function parsePostFile(fullPath: string) {
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  try {
    const frontMatter = postFrontMatterSchema.parse(data);
    return {
      contentMarkdown: content,
      frontMatter
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : '';
    throw new Error(
      `The front matter for the post "${fullPath}" does not conform to the PostFrontMatter type. ${message}`
    );
  }
}
