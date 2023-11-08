'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import StaticTables from './Table/StaticTables';

import { useQuery } from '@tanstack/react-query';
import { getClientItems } from '@/lib/queryFn/clientSide';
import { SuccessResponse } from '@/types/SuccessResponse';
import { Krs, KrsDetailed } from '@/types/Krs';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type KrsRes = SuccessResponse<KrsDetailed>;

type PrevKrsProps = {
  token: string;
  studentID: string;
  krsCount: Krs[];
  initialData: KrsDetailed;
};

const PrevKrs = ({ token, initialData, studentID, krsCount }: PrevKrsProps) => {
  const [semester, setSemester] = useState('1');
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['semesterKrs'],
    queryFn: async () => {
      const res = await getClientItems<KrsRes>(
        `krs/${studentID}/${semester}`,
        token,
      );
      return res.data.data;
    },
    initialData,
  });

  const sksTotal = data.courses.map((c) => c.credit).reduce((a, b) => a + b, 0);

  useEffect(() => {
    refetch();
  }, [semester]);

  return (
    <Card>
      <CardHeader>
        <h2 className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0'>
          KRS Anda
        </h2>
        <Select onValueChange={(v) => setSemester(v)}>
          <SelectTrigger>
            <SelectValue placeholder='Pilih semester (Default semester 1)' />
          </SelectTrigger>
          <SelectContent>
            {krsCount.map((item) => (
              <SelectItem key={item.id} value={item.semester.toString()}>
                Semester {item.semester}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <StaticTables courseDetail={data.courses} sksTotal={sksTotal} />
      </CardContent>
    </Card>
  );
};

export default PrevKrs;
