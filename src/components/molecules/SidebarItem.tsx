'use client';

import Link from 'next/link';

type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const SidebarItem = ({ title, icon, href }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className='flex w-full flex-col items-center justify-center gap-2 rounded-lg p-2 duration-150 hover:cursor-pointer hover:bg-primary hover:text-primary-foreground lg:flex-row lg:justify-start '
    >
      <div>{icon}</div>
      <p className='text-center text-xs lg:text-lg'>{title}</p>
    </Link>
  );
};

export default SidebarItem;
