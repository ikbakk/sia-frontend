import LoginForm from '@/components/organisms/LoginForm';

import cookiesCheck from '@/lib/tokenHelper/cookiesCheck';
import tokenCheck from '@/lib/tokenHelper/tokenCheck';
import { redirect } from 'next/navigation';
import roleCheck from '@/lib/tokenHelper/extractStudentID';
import axios from 'axios';
import { cookies } from 'next/headers';

export default async function LoginPage() {
  // const cookieStore = cookies();
  // const a = cookieStore.toString();
  // console.log(a);
  // const token = cookiesCheck();
  // const url = 'http://localhost:3333/api/students/F1B017066';
  // console.log(cookies().get('token')!.value);

  // const res = await fetch(`http://localhost:3333/api/students/F1B017066`, {
  //   cache: 'no-store',
  //   headers: {

  //   },
  //   // next: {
  //   //   revalidate: 0,
  //   // },
  // });
  // const student = await res.json();
  // console.log(student);

  // try {
  //   const student = await axios.get(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true,
  //   });
  //   console.log(student.data);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center md:flex-row'>
      <div className='relative hidden h-full w-full flex-col bg-muted p-10 text-white dark:border-r md:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>
            Sistem Informasi Akademik
          </h2>
        </div>
        <div className='relative z-20 mt-auto flex justify-center gap-4 md:flex-col'>
          <div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              Jadwal
            </h3>
            <ul>
              <li>Jadwal 1</li>
              <li>Jadwal 2</li>
              <li>Jadwal 3</li>
            </ul>
          </div>
          <div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              Informasi
            </h3>
            <ul>
              <li>Informasi 1</li>
              <li>Informasi 2</li>
              <li>Informasi 3</li>
              <li>Informasi 4</li>
              <li>Informasi 5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
            <p className='text-sm text-muted-foreground'>
              Masukkan NIM dan password untuk masuk
            </p>
          </div>
          <LoginForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            Presensi Dosen dan Staf dapat dilakukan secara online melalui SIA.
            Presensi perkuliahan dilakukan secara online dengan scan QR Code,
            bisa menggunakan kamera Smartphone atau aplikasi Android.
          </p>
        </div>
      </div>
    </div>
  );
}
