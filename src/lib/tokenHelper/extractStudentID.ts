import { jwtDecode } from 'jwt-decode';
import { Payload } from '@/types/JwtPayload';

export default function extractStudentID(token: string) {
  try {
    const { studentID } = jwtDecode<Payload>(token);

    return studentID;
  } catch (error) {
    return undefined;
  }
}
