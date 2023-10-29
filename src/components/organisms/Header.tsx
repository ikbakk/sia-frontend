import HeaderAvatar from '../molecules/HeaderAvatar';

type HeaderProps = { name: string; semester: number };

const Header = ({ name, semester }: HeaderProps) => {
  return (
    <header className='flex w-full items-center justify-end gap-4 bg-background p-2'>
      <section>
        <h3 className='font-bold text-primary-foreground'>{name}</h3>
        <h4 className='text-sm text-primary-foreground/50'>
          Semester {semester}
        </h4>
      </section>
      <HeaderAvatar fallbackLabel='MF' />
    </header>
  );
};

export default Header;
