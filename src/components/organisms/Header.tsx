import HeaderAvatar from '../molecules/Header/HeaderAvatar';
import ThemeSwitcher from '../molecules/Header/ThemeSwitcher';

type HeaderProps = { name: string; semester: number };

const Header = ({ name, semester }: HeaderProps) => {
  return (
    <header className='flex w-full items-center justify-between bg-background px-4 py-2'>
      <ThemeSwitcher />
      <div className='flex items-center gap-4'>
        <section className='text-right'>
          <h3 className='font-bold text-primary'>{name}</h3>
          <h4 className='text-sm text-primary/50'>Semester {semester}</h4>
        </section>
        <HeaderAvatar fallbackLabel='MF' />
      </div>
    </header>
  );
};

export default Header;
