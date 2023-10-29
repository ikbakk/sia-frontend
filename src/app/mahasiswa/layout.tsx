import Header from '@/components/organisms/Header';
import Sidebar from '@/components/organisms/Sidebar';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahasiswa - Sistem Informasi Akademik',
  description: 'Dashboard mahasiswa',
};

type LayoutMahasiswaProps = {
  children: React.ReactNode;
};

const LayoutMahasiswa = ({ children }: LayoutMahasiswaProps) => {
  return (
    <body className={cn(inter.className, 'bg-background')}>
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
};

export default LayoutMahasiswa;
