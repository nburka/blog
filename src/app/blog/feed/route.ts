import { NextRequest, NextResponse } from 'next/server';
import { getSortedPosts } from '@/lib/posts';
import { getRssXml } from '@/lib/rss';
import { getAppBase } from '@/lib/getAppBase';

export async function GET(request: NextRequest) {
  const appBase = getAppBase(request);
  const blogPosts = await getSortedPosts(appBase);
  const rss = getRssXml(appBase, blogPosts);
  return new NextResponse(rss);
}
