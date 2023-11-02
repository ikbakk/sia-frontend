import { Button } from '@/components/ui/button';
import Link from 'next/link';

type NotAuthenticatedProps = {};

const NotAuthenticated = ({}: NotAuthenticatedProps) => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h3>You are not authenticated</h3>
      <Link href='/'>
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default NotAuthenticated;
