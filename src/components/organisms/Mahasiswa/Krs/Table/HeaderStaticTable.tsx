'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import StatusBadge from '@/components/molecules/Mahasiswa/Krs/StatusBadge';

import { KrsContext } from '@/contexts/KrsContext';
import { useContext } from 'react';

const HeaderStaticTable = () => {
  const { krsList, setSemester, krsDetail } = useContext(KrsContext);

  return (
    <div className='flex items-center justify-between'>
      <div className='flex w-full items-center gap-4'>
        <h2 className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0'>
          KRS Anda
        </h2>
        <StatusBadge status={krsDetail.data.status} />
      </div>
      <Select onValueChange={(v) => setSemester(parseInt(v))}>
        <SelectTrigger>
          <SelectValue placeholder='Pilih semester (Default semester 1)' />
        </SelectTrigger>
        <SelectContent>
          {krsList.data.map((item) => (
            <SelectItem key={item.id} value={item.semester.toString()}>
              Semester {item.semester}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeaderStaticTable;
