import ActiveCourses from '@/components/organisms/Mahasiswa/Dashboard/ActiveCourses';
import CoursesCount from '@/components/organisms/Mahasiswa/Dashboard/CoursesCount';
import DashboardHeader from '@/components/organisms/Mahasiswa/Dashboard/DashboardHeader';
import { isAuthenticated } from '@/lib/isAuthenticated';

import { getItems } from '@/lib/queryFn/getItems';
import { cookiesCheck, extractStudentID } from '@/lib/tokenHelper';
import { UnauthorizedResponse } from '@/types/ErrorResponse';
import { AxiosError } from 'axios';
import { redirect } from 'next/navigation';

type MahasiswaPageProps = {};

const MahasiswaPage = async ({}: MahasiswaPageProps) => {
  // const { studentID } = jwtDecode<Payload>(token as string);
  // if (!token || !isValid) {
  //   redirect('/');
  // }
  // const res = await fetch(`${baseUrl}/api/students/${studentID}`, {
  //   method: 'GET',
  //   cache: 'no-store',
  //   credentials: 'same-origin',
  //   next: {
  //     revalidate: 0,
  //   },
  // });
  // const student = await res.json();

  // const student = await axios.get(`${baseUrl}/api/students/${studentID}`, {
  //   withCredentials: true,
  // });

  // console.log(student);

  return (
    <div className='flex h-full flex-col gap-4 p-4'>
      <DashboardHeader />
      <CoursesCount />
      <ActiveCourses />
    </div>
  );
};

export default MahasiswaPage;
