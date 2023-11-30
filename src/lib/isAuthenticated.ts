import { cookiesCheck, extractStudentID } from './tokenHelper';
import { getItems } from './queryFn/getItems';
import { Student } from '@/types/Students';

export const isAuthenticated = async () => {
  const token = cookiesCheck();
  const studentID = extractStudentID(token);
  const student = await getItems(`students/${studentID}`);

  if (student.status === 401) {
    return undefined;
  }

  const res = student.json() as unknown;

  return res as Student;
};
