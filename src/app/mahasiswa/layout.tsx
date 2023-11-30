import type { Metadata } from 'next';

import Sidebar from '@/components/organisms/Sidebar';
import Header from '@/components/organisms/Header';
import { isAuthenticated } from '@/lib/isAuthenticated';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dashboard >> Sistem Informasi Akademik',
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
  const name = `${student.firstName} ${student.lastName}`;

  return (
    <main className='mx-auto flex h-screen max-w-[90rem] gap-1'>
      <aside className='w-[10%] lg:w-[20%]'>
        <Sidebar />
      </aside>
      <section className='w-[90%] lg:w-[80%]'>
        <Header name={name} semester={student.semester} />
        {children}
      </section>
    </main>
  );
}
