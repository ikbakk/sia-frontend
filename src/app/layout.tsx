import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { redirect } from 'next/navigation';
import cookiesCheck from './lib/cookiesCheck';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sistem Informasi Akademik',
  description: 'sistem informasi akademik'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const token = cookiesCheck();

  // if (token) {
  //   redirect()
  // }

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
