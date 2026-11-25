import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LARP — Access is the flex.',
  description: 'Discover the rentals, digital assets, and experiences that bring your vision to life.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
