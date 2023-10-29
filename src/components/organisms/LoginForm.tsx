'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type LoginFormProps = {};

const LoginForm = ({}: LoginFormProps) => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    nim: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        'http://localhost:3333/api/auth/students/signin',
        {
          studentID: loginData.nim,
          password: loginData.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      if (res.status === 200) {
        setIsLoading(false);
        router.push('/');
      }

      if (res.status !== 200) {
        setIsLoading(false);
        alert('Login gagal');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <Input
        id='nim'
        placeholder='Nomor induk mahasiswa'
        value={loginData.nim}
        onChange={e => setLoginData({ ...loginData, nim: e.target.value })}
        type='text'
      />
      <Input
        id='password'
        placeholder='Password'
        value={loginData.password}
        onChange={e => setLoginData({ ...loginData, password: e.target.value })}
        type='password'
      />

      <Button disabled={isLoading} onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
};

export default LoginForm;
