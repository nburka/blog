import { NextRequest } from 'next/server';

export function getAppBase(request: NextRequest): string {
  const appHost =
    process.env.NODE_ENV === 'development'
      ? `http://${request.headers.get('host')}`
      : process.env.APP_HOST;

  return `${appHost}${process.env.APP_BASE_PATH}`;
}
