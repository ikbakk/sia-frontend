import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BsPerson, BsDiagram3, BsClipboard } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';

type SidebarItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
  href: string;
};

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdOutlineSpaceDashboard size={24} />,
    href: '/mahasiswa',
  },
  {
    id: 2,
    title: 'Profile',
    icon: <BsPerson size={24} />,
    href: '/mahasiswa/profile',
  },
  {
    id: 3,
    title: 'Nilai',
    icon: <BsClipboard size={24} />,
    href: '/mahasiswa/nilai',
  },
  {
    id: 4,
    title: 'KRS',
    icon: <BsDiagram3 size={24} />,
    href: '/mahasiswa/krs',
  },
  // {
  //   id: 5,
  //   title: 'Mata Kuliah',
  //   icon: <FiBookOpen size={24} />,
  //   href: '/mahasiswa/matakuliah',
  // },
];

export const courseCounts = [
  {
    id: 1,
    title: 'Diambil',
    count: 0,
  },
  {
    id: 2,
    title: 'Sudah Lulus',
    count: 0,
  },
  {
    id: 3,
    title: 'Jumlah SKS',
    count: 0,
  },
];

export const courseTableRows = [
  {
    id: 1,
    code: 'INV001',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'wajib',
    status: 'aktif',
  },
  {
    id: 2,
    code: 'INV002',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
  {
    id: 3,
    code: 'INV003',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
  {
    id: 4,
    code: 'INV004',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
  {
    id: 5,
    code: 'INV005',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
  {
    id: 6,
    code: 'INV006',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
  {
    id: 7,
    code: 'INV007',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
  {
    id: 8,
    code: 'INV008',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
  {
    id: 9,
    code: 'INV009',
    name: 'bahan listrik',
    sks: 2,
    semester: 1,
    sifat: 'pilihan',
    status: 'aktif',
  },
];

export const profileItems = [
  {
    id: 'nim',
    label: 'NIM',
    placeholder: 'Masukkan email',
    value: 'F1B017066',
    disabled: true,
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Masukkan email',
    value: '',
    disabled: false,
  },
  {
    id: 'ktp',
    label: 'NIK',
    placeholder: 'Masukkan NIK',
    value: '',
    disabled: false,
  },
  {
    id: 'phone',
    label: 'No. HP',
    placeholder: 'Masukkan No. Hp',
    value: '',
    disabled: false,
  },
  {
    id: 'address',
    label: 'Alamat',
    placeholder: 'Masukkan Alamat',
    value: '',
    disabled: false,
  },
];
