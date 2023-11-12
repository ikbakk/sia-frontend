'use client';

import {
  KrsListType,
  CoursesType,
  KrsContextType,
  KrsDetailedType,
  KrsProviderType,
  NewKrsRes,
  NewKrsBody,
} from '@/types/contexts/KrsContext';
import { createContext, useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getClientItems, postClient } from '@/lib/queryFn/clientSide';

type AddNewKrsType = {
  onYear: 'GANJIL' | 'GENAP';
  courses: string[];
  semester: number;
};

export const KrsContext = createContext({} as KrsContextType);

export const KrsProvider = ({
  children,
  token,
  studentID,
  initialKrsList,
  initialKrsDetails,
  initialCourses,
}: KrsProviderType) => {
  const queryClient = useQueryClient();
  const [semester, setSemester] = useState(1);

  const krsList = useQuery({
    queryKey: ['krsList'],
    queryFn: async () => {
      const { data } = await getClientItems<KrsListType>(
        `krs/${studentID}`,
        token,
      );
      return data.data;
    },
    initialData: initialKrsList,
  });

  const krsDetail = useQuery({
    queryKey: ['krsDetail'],
    queryFn: async () => {
      const { data } = await getClientItems<KrsDetailedType>(
        `krs/${studentID}/${semester}`,
        token,
      );
      return data.data;
    },
    initialData: initialKrsDetails,
  });

  const courses = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const { data } = await getClientItems<CoursesType>('courses', token);
      return data.data;
    },
    initialData: initialCourses,
  });

  const addNewKrs = useMutation({
    mutationFn: ({ onYear, courses, semester }: AddNewKrsType) => {
      const route = 'krs/create';
      const body = {
        semester,
        studentID,
        onYear,
        courses,
      };

      return postClient<NewKrsRes, NewKrsBody>({ route, body, token });
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['krsList'] });
    },
  });

  useEffect(() => {
    krsDetail.refetch();
  }, [semester]);

  const value = {
    token,
    studentID,
    krsList,
    krsDetail,
    semester,
    setSemester,
    courses,
    addNewKrs,
  };

  return <KrsContext.Provider value={value}>{children}</KrsContext.Provider>;
};
