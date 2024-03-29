'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/actions/auth';

type LoginFormProps = {};

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const LoginForm = ({}: LoginFormProps) => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    nim: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const res = await axios.post(`/api/auth/login`, {
        studentID: loginData.nim,
        password: loginData.password,
      });

      if (res.status === 200) {
        router.push('/');
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert('Id atau Password salah');
    }
  };

  return (
    <form
      onSubmit={(e) => handleClick(e)}
      // action={async (formData: FormData) => await signIn(formData)}
      className='flex flex-col gap-4'
    >
      <Input
        id='nim'
        placeholder='Nomor induk mahasiswa'
        value={loginData.nim}
        onChange={(e) => setLoginData({ ...loginData, nim: e.target.value })}
        type='text'
        required
      />
      <Input
        id='password'
        placeholder='Password'
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        type='password'
        required
      />

      <Button type='submit' disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
