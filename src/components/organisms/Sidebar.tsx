import { MdOutlineSpaceDashboard } from 'react-icons/md';
import SidebarItem from '../molecules/SidebarItem';
import { sidebarItems } from '@/lib/constants';

type SidebarProps = {};

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className='flex h-full w-full flex-col gap-8 px-2 py-6 lg:px-4'>
      <div className='flex w-full justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='h-14 w-14'
        >
          <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
        </svg>
      </div>
      <div className='w-full'>
        {sidebarItems.map((item) => {
          return (
            <SidebarItem key={item.id} title={item.title} icon={item.icon} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
