import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BsPerson, BsDiagram3 } from 'react-icons/bs';
import { GrScorecard } from 'react-icons/gr';
import { FiBookOpen } from 'react-icons/fi';

type SidebarItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdOutlineSpaceDashboard size={24} />,
  },
  {
    id: 2,
    title: 'Mahasiswa',
    icon: <BsPerson size={24} />,
  },
  {
    id: 3,
    title: 'Nilai',
    icon: <GrScorecard size={24} />,
  },
  {
    id: 4,
    title: 'KRS',
    icon: <BsDiagram3 size={24} />,
  },
  {
    id: 5,
    title: 'Mata Kuliah',
    icon: <FiBookOpen size={24} />,
  },
];
