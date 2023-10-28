import { cookies } from 'next/headers';

export default function cookiesCheck() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return false;
  }

  return token;
}
