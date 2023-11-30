import ActiveCourses from '@/components/organisms/Mahasiswa/Dashboard/ActiveCourses';
import CoursesCount from '@/components/organisms/Mahasiswa/Dashboard/CoursesCount';
import DashboardHeader from '@/components/organisms/Mahasiswa/Dashboard/DashboardHeader';

import { isAuthenticated } from '@/lib/isAuthenticated';
import { getItems } from '@/lib/queryFn/getItems';
import { EnrolledCourse } from '@/types/Courses';
import { SuccessResponse } from '@/types/SuccessResponse';

type MahasiswaPageProps = {};
type EnrolledCoursesRes = SuccessResponse<EnrolledCourse[]>;
type CompletedCoursesRes = SuccessResponse<EnrolledCourse[]>;

const MahasiswaPage = async ({}: MahasiswaPageProps) => {
  const student = await isAuthenticated();
  const coursesRoute = (type: string) => {
    return `students/${student!.studentID}/courses/${type}`;
  };
  const enrolledCourses: EnrolledCoursesRes = await getItems(
    coursesRoute('active'),
  ).then((res) => res.json());

  const completedCourses: CompletedCoursesRes = await getItems(
    coursesRoute('completed'),
  ).then((res) => res.json());

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
