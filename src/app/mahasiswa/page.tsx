import ActiveCourses from '@/components/organisms/Mahasiswa/Dashboard/ActiveCourses';
import CoursesCount from '@/components/organisms/Mahasiswa/Dashboard/CoursesCount';
import DashboardHeader from '@/components/organisms/Mahasiswa/Dashboard/DashboardHeader';

import { isAuthenticated } from '@/lib/isAuthenticated';
import { getItems } from '@/lib/queryFn/getItems';
import { EnrolledCourse } from '@/types/Courses';
import { SuccessResponse } from '@/types/SuccessResponse';

type MahasiswaPageProps = {};
type EnrolledCourses = SuccessResponse<EnrolledCourse[]>;

const MahasiswaPage = async ({}: MahasiswaPageProps) => {
  const student = await isAuthenticated();
  const coursesRoute = (type: string) => {
    return `students/${student!.studentID}/courses/${type}`;
  };
  const { data: enrolledCourses } = await getItems<EnrolledCourses>(
    coursesRoute('active'),
  );

  const { data: completedCourses } = await getItems<EnrolledCourses>(
    coursesRoute('completed'),
  );

  return (
    <div className='flex h-full flex-col gap-4 p-4'>
      <DashboardHeader
        firstName={student?.firstName}
        lastName={student?.lastName}
        studentID={student?.studentID}
        faculty={student?.faculty}
        major={student?.major}
      />
      <CoursesCount
        completedCourse={completedCourses.data ?? []}
        enrolledCourse={enrolledCourses.data ?? []}
      />
      <ActiveCourses enrolledCourses={enrolledCourses.data} />
    </div>
  );
};

export default MahasiswaPage;
