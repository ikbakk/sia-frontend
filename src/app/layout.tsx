import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/templates/ThemeProvider';
import QueryProvider from '@/components/templates/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sistem Informasi Akademik',
  description: 'sistem informasi akademik',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider attribute='class' defaultTheme='light'>
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
