import { Payload } from '@/types/JwtPayload';
import { jwtDecode } from 'jwt-decode';

export default function tokenCheck(token: string) {
  const { exp } = jwtDecode<Payload>(token);
  const expireDate = exp * 1000;
  const date = new Date();

  if (date.getTime() > expireDate) {
    return false;
  }

  return true;
}
