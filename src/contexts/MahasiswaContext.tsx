'use client';

import { createContext, useEffect, useState } from 'react';
import { MahasiswaContextType } from '@/types/contexts/MahasiswaContext';

type MahasiswaProviderProps = {
  children: React.ReactNode;
  studentID: string;
  semester: number;
};

export const MahasiswaContext = createContext({} as MahasiswaContextType);

export const MahasiswaProvider = ({
  children,
  semester,
  studentID,
}: MahasiswaProviderProps) => {
  const value = {
    studentID,
    semester,
  };

  return (
    <MahasiswaContext.Provider value={value}>
      {children}
    </MahasiswaContext.Provider>
  );
};
