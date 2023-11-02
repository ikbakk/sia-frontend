import { AxiosError } from 'axios';
import { cookiesCheck, extractStudentID } from './tokenHelper';
import { getItems } from './queryFn/getItems';
import { Student } from '@/types/Students';

export const isAuthenticated = async (): Promise<Student | undefined> => {
  try {
    const token = cookiesCheck();
    const studentID = extractStudentID(token);
    const student = await getItems<Student>(`students/${studentID}`, token);

    return student.data;
  } catch (error: AxiosError | unknown) {
    return undefined;
  }
};
