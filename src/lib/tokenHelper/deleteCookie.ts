'use server';

import { cookies } from 'next/headers';

export default async function deleteCookie(data: any) {
  cookies().delete('token');
}
