'use client';

type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
};

const SidebarItem = ({ title, icon }: SidebarItemProps) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-2 rounded-lg p-2 hover:cursor-pointer hover:bg-primary/30 lg:flex-row lg:justify-start '>
      <div>{icon}</div>
      <p className='text-center text-xs lg:text-lg'>{title}</p>
    </div>
  );
};

export default SidebarItem;
