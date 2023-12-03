import { cookies } from 'next/headers';
import HeaderAvatar from '../molecules/Header/HeaderAvatar';
import ThemeSwitcher from '../molecules/Header/ThemeSwitcher';
import { Button } from '../ui/button';
import { redirect } from 'next/navigation';

type HeaderProps = { name: string; semester: number };

const Header = ({ name, semester }: HeaderProps) => {
  const handleLogout = async () => {
    'use server';

    const cookieStore = cookies();
    cookieStore.delete('token');
    redirect('/');
  };
  return (
    <header className='flex w-full items-center justify-between bg-background px-4 py-2'>
      <ThemeSwitcher />
      <div className='flex items-center gap-4'>
        <section className='text-right'>
          <h3 className='font-bold text-primary'>{name}</h3>
          <h4 className='text-sm text-primary/50'>Semester {semester}</h4>
        </section>
        <HeaderAvatar fallbackLabel='MF' />
        <form>
          <input type='hidden' name='logout' />
          <Button type='submit' formAction={handleLogout}>
            Logout
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
