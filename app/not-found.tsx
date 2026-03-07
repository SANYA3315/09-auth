import { Metadata } from 'next';

import NotFound from '@/components/NotFound/NotFound';

export const metadata: Metadata = {
  title: 'Not found',
  description: 'Page is not found',
  openGraph: {
    title: 'Not found',
    description: 'Page is not found',
    url: 'https://08-zustand-steel-nine.vercel.app/',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'logo',
      },
    ],
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}