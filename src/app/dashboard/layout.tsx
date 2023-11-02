import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Sidebar from '@/components/organisms/Sidebar';
import Header from '@/components/organisms/Header';
import { isAuthenticated } from '@/lib/isAuthenticated';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sistem Informasi Akademik',
  description: 'sistem informasi akademik',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const student = await isAuthenticated();

  if (!student) {
    redirect('/unauthorized');
  }
  return (
    <body className={inter.className}>
      <main className='mx-auto flex h-screen max-w-[90rem] gap-1'>
        <aside className='w-[10%] lg:w-[20%]'>
          <Sidebar />
        </aside>
        <section className='w-[90%] lg:w-[80%]'>
          <Header name='M Fikri' semester={9} />
          {children}
        </section>
      </main>
    </body>
  );
}
