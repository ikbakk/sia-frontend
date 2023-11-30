'use client';

import { isAuthenticated } from '@/lib/isAuthenticated';
import { redirect, useRouter } from 'next/navigation';

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = async ({ children }: AuthProviderProps) => {
  const router = useRouter();

  return <>{children}</>;
};

export default AuthProvider;
