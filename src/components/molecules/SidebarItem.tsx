'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const SidebarItem = ({ title, icon, href }: SidebarItemProps) => {
  const pathName = usePathname();
  const selected = pathName === href;
  return (
    <Link
      href={href}
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 rounded-lg p-2 duration-150 hover:cursor-pointer hover:bg-primary hover:text-primary-foreground active:scale-95 lg:flex-row lg:justify-start',
        selected && 'bg-primary text-primary-foreground',
      )}
    >
      <div>{icon}</div>
      <p className='text-center text-xs lg:text-lg'>{title}</p>
    </Link>
  );
};

export default SidebarItem;
