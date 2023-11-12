// 'use client';

import { Button } from '@/components/ui/button';
import { deleteCookie } from '@/lib/tokenHelper';
import Link from 'next/link';

type NotAuthenticatedProps = {};

const NotAuthenticated = ({}: NotAuthenticatedProps) => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h3>You are not authenticated</h3>
      <Link href='/'>
        <Button formAction={deleteCookie}>Go Back</Button>
      </Link>
    </div>
  );
};

export default NotAuthenticated;
